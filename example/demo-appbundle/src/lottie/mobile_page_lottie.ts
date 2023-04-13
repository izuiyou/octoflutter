import {
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
  Widget,
} from '@octoflutter/flutter'
import {AssetLottie, LottieBuilder} from '@octoflutter/lottie'
import {DelayWidget} from '@octoflutter/octo'
import {commAppBar} from '../common_widgets'

export class MobilePageLottie extends StatefulWidget {
  showMobileStyleInWeb: boolean
  constructor(showMobileStyleInWeb?: boolean) {
    super()
    this.showMobileStyleInWeb = showMobileStyleInWeb ?? false
  }

  createState(): State<StatefulWidget> {
    return new _MobilePageLottieState()
  }
}

class _MobilePageLottieState extends State<MobilePageLottie> {
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
      appBar: commAppBar('PageLottie', this.widget.showMobileStyleInWeb),
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
