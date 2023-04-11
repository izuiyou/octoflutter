import {Duration, VoidCallback} from '@octoflutter/dartsdk'
import {
  BuildContext,
  IndexedWidgetBuilder,
  Widget,
  ScrollPhysics,
  Key,
  octoKey,
  Listenable,
  ValueChanged,
  Curve,
  Curves,
  Axis,
} from '@octoflutter/flutter'

export abstract class PageTransformer {}

export class TransformInfo {
  public readonly index: number
  public readonly position: number
  public readonly width: number
  public readonly height: number
  public readonly activeIndex: number
  public readonly fromIndex: number
  public readonly forward: boolean
  public readonly done: boolean
  public readonly viewportFraction: number
  public readonly scrollDirection: Axis

  constructor(args: {
    index: number
    position: number
    width: number
    height: number
    activeIndex: number
    fromIndex: number
    forward: boolean
    done: boolean
    viewportFraction: number
    scrollDirection: Axis
  }) {
    this.index = args.index
    this.position = args.position
    this.width = args.width
    this.height = args.height
    this.activeIndex = args.activeIndex
    this.fromIndex = args.fromIndex
    this.forward = args.forward
    this.done = args.done
    this.viewportFraction = args.viewportFraction
    this.scrollDirection = args.scrollDirection
  }
}

export abstract class AbsPageTransformer
  extends N.OctoPageTransformer
  implements PageTransformer
{
  private pvd(child, infos) {
    return this.transform(
      child,
      new TransformInfo({
        index: infos[0],
        position: infos[1],
        width: infos[2],
        height: infos[3],
        activeIndex: infos[4],
        fromIndex: infos[5],
        forward: infos[6],
        done: infos[7],
        viewportFraction: infos[8],
        scrollDirection: infos[9],
      })
    )
  }

  abstract transform(child: Widget, info: TransformInfo): Widget
}

export class AccordionTransformer
  extends N.AccordionTransformer
  implements PageTransformer {}

export class ThreeDTransformer
  extends N.ThreeDTransformer
  implements PageTransformer {}

export class ScaleAndFadeTransformer
  extends N.ScaleAndFadeTransformer
  implements PageTransformer
{
  constructor(args?: {scale: number; fade: number}) {
    super(args?.scale ?? 0.8, args?.fade ?? 0.3)
  }
}

export class TransformerPageController
  extends N.OctoTransformerPageController
  implements Listenable
{
  constructor(args: {
    initialPage?: number
    keepPage?: boolean
    viewportFraction?: number
    loop?: boolean
    itemCount: number
    reverse?: boolean
  }) {
    const real = N.transformerPageControllerInstance(
      args.initialPage ?? 0,
      args.keepPage ?? true,
      args.viewportFraction ?? 1.0,
      args.loop ?? false,
      args.itemCount,
      args.reverse ?? false
    )
    super(real)
  }

  get initialScrollOffset(): number {
    return super.wtr()
  }

  get offset(): number {
    return super.wts()
  }

  get keepScrollOffset(): number {
    return super.wtt()
  }

  get page(): number {
    return super.pca()
  }

  public jumpTo(index: number, animation?: boolean): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pva(
        index,
        animation ?? true,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public nextPage(animation?: boolean): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pvb(
        animation ?? true,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  public previousPage(animation?: boolean): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      super.pvc(
        animation ?? true,
        () => {
          resolve()
        },
        (s) => {
          reject(s)
        }
      )
    })
  }

  dispose() {
    super.dispose()
  }

  addListener(listener: VoidCallback) {
    N.octoChangeNotifierAdd(this, listener)
  }

  removeListener(listener: VoidCallback) {
    N.octoChangeNotifierRemove(this, listener)
  }
}

export class TransformerPageView extends N.TransformerPageView {
  constructor(args: {
    key?: Key
    index?: number
    duration?: Duration
    curve?: Curve
    viewportFraction?: number
    loop?: boolean
    scrollDirection?: Axis
    physics?: ScrollPhysics
    pageSnapping?: boolean
    onPageChanged?: ValueChanged<number>
    transformer?: PageTransformer
    itemBuilder: IndexedWidgetBuilder
    pageController?: TransformerPageController
    itemCount: number
  }) {
    const cb = (ctx, idx) => {
      return args.itemBuilder(new BuildContext(ctx), idx)
    }

    super(
      args.transformer,
      args.scrollDirection ?? Axis.horizontal,
      args.physics,
      args.pageSnapping ?? true,
      args.onPageChanged,
      cb,
      args.duration ?? new Duration({milliseconds: 300}),
      args.curve ?? Curves.ease,
      args.pageController,
      args.loop ?? false,
      args.itemCount,
      args.viewportFraction ?? 1.0,
      args.index ?? 0,
      args.key?.[octoKey]
    )
  }
}

// TransformerPageView: function TransformerPageView(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13) {
//     var _ = this;
//     _.transformer = t0;
//     _.scrollDirection = t1;
//     _.physics = t2;
//     _.pageSnapping = t3;
//     _.onPageChanged = t4;
//     _.itemBuilder = t5;
//     _.duration = t6;
//     _.curve = t7;
//     _.pageController = t8;
//     _.loop0 = t9;
//     _.itemCount = t10;
//     _.viewportFraction = t11;
//     _.index = t12;
//     _.key0 = t13;
//   },
