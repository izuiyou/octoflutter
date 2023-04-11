import {
  Canvas,
  Size,
  isNullOrUndefined,
  AppLifecycleState,
  VoidCallback,
  Offset,
  Duration,
} from '@octoflutter/dartsdk'
import {
  StatefulWidget,
  State,
  CustomPainter,
  Ticker,
  WidgetsBindingObserver,
  WidgetsBinding,
  BuildContext,
  Widget,
  MediaQuery,
  CustomPaint,
} from '@octoflutter/flutter'

export abstract class AbsGame {
  abstract onGameUpdate(dt: number): void

  abstract onGameRender(canvas: Canvas): void

  viewport: Size

  onResize(size: Size) {
    if (isNullOrUndefined(size)) {
      return
    }

    if (
      !isNullOrUndefined(this.viewport) &&
      this.viewport.width === size.width &&
      this.viewport.height === size.height
    ) {
      return
    }
    this.viewport = size
    this.onGameResize(this.viewport)
  }

  abstract onGameResize(size: Size): void

  abstract onAttach()

  abstract onDetach()

  abstract onAppLifecycleState(state: AppLifecycleState)

  pauseCallback: VoidCallback
  resumeCallback: VoidCallback
  registerGameLoop(pauseCallback: VoidCallback, resumeCallback: VoidCallback) {
    this.pauseCallback = pauseCallback
    this.resumeCallback = resumeCallback
  }

  pauseGame() {
    if (!isNullOrUndefined(this.pauseCallback)) {
      this.pauseCallback()
    }
  }

  resumeGame() {
    if (!isNullOrUndefined(this.resumeCallback)) {
      this.resumeCallback()
    }
  }

  abstract onTouchDown(point: Offset)
  abstract onTouchMove(point: Offset)
  abstract onTouchEnd()
  abstract onAngleChanged(angle: number)
}

export class GameWidget<T extends AbsGame> extends StatefulWidget {
  game: AbsGame
  constructor(game: AbsGame) {
    super()
    this.game = game
  }

  createState(): State<GameWidget<T>> {
    return new GameWidgetState()
  }
}

class GamePainter extends CustomPainter {
  game: AbsGame
  constructor(game: AbsGame) {
    super()
    this.game = game
  }

  paint(canvas: Canvas, size: Size) {
    this.game.onResize(size)
    this.game.onGameRender(canvas)
  }

  shouldRepaint(oldDelegate: CustomPainter) {
    return true
  }
}

type LoopTickCallback = (dt: number) => void

class GameLoop {
  ticker: Ticker
  previous: Duration
  callback: LoopTickCallback
  constructor(callback: LoopTickCallback) {
    this.callback = callback
    this.ticker = new Ticker(this.tick)
  }

  tick = (now: Duration) => {
    const delta = isNullOrUndefined(this.previous)
      ? 0
      : now.inMicroseconds - this.previous.inMicroseconds
    this.previous = now
    const dt = delta / Duration.microsecondsPerSecond
    this.callback(dt)
  }

  start() {
    this.ticker.start()
  }

  stop() {
    this.ticker.stop()
  }

  dispose() {
    // this.ticker.dispose();
  }

  pause() {
    this.ticker.muted = true
    this.previous = null
  }

  resume() {
    this.ticker.muted = false
  }
}

class GameWidgetState<T extends AbsGame>
  extends State<GameWidget<T>>
  implements WidgetsBindingObserver
{
  gameLoop: GameLoop

  initState() {
    super.initState()
    this.widget.game.onAttach()
    WidgetsBinding.instance.addObserver(this)
    this.gameLoop = new GameLoop(this.gameLoopCallback)
    this.widget.game.registerGameLoop(
      () => {
        this.gameLoop?.pause()
      },
      () => {
        this.gameLoop?.resume()
      }
    )
    this.gameLoop.start()
  }

  gameLoopCallback = (dt: number) => {
    if (!this.mounted) {
      return
    }
    this.widget.game.onGameUpdate(dt)
    this.setState(() => {})
  }

  didChangeMetrics() {}
  didChangeTextScaleFactor() {}
  didChangePlatformBrightness() {}

  didChangeAppLifecycleState(state: AppLifecycleState): void {
    this.widget.game.onAppLifecycleState(state)
  }

  build(context: BuildContext): Widget {
    const viewport = MediaQuery.of(context).size
    return new CustomPaint({
      painter: new GamePainter(this.widget.game),
      size: viewport,
    })
  }

  dispose() {
    WidgetsBinding.instance.removeObserver(this)
    this.widget.game.onDetach()
    this.widget.game = null
    this.gameLoop?.pause()
    this.gameLoop?.dispose()
    this.gameLoop = null
  }
}
