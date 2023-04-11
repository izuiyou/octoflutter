import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  MainAxisAlignment,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {AssetLottie, LottieBuilder} from '@octoflutter/lottie'
import {DelayWidget} from '@octoflutter/octo'

export class PageLottie extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageLottieState()
  }
}

class _PageLottieState extends State<PageLottie> {
  arrow: AssetLottie
  airbnb: AssetLottie

  initState(): void {
    super.initState()
    this.arrow = new AssetLottie('lottie/hamburger_arrow.json')
    this.airbnb = new AssetLottie('lottie/airbnb/data.json')
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageLottie'),
      }),
      body: new Center({
        child: new DelayWidget({
          delay: 300,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              new Container({
                width: 100,
                height: 100,
                child: new LottieBuilder({
                  lottie: this.arrow,
                }),
              }),
              new Container({
                width: 100,
                height: 100,
                child: new LottieBuilder({
                  lottie: this.airbnb,
                }),
              }),
            ],
          }),
        }),
      }),
    })
  }

  dispose(): void {
    super.dispose()
    this.arrow?.dispose()
    this.airbnb?.dispose()
  }
}
