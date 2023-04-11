import {FontWeight} from '@octoflutter/dartsdk'
import {
  Axis,
  BuildContext,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  MainAxisAlignment,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {commAppBar} from '../common_widgets'
import {
  kCodePlatformView1,
  kCodePlatformView2,
  kCodePlatformView3,
  kSize16,
  kSubTitleColor,
} from '../constants'
import {Lang} from '../lang'
import {
  codeWidget,
  CODE_PLATFORM_VIEW_ANDROID,
  CODE_PLATFORM_VIEW_ANDROID_REGISTER,
  CODE_PLATFORM_VIEW_TS,
} from './codes'

export class WebPagePlatformView extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _WebPagePlatformViewState()
  }
}

class _WebPagePlatformViewState extends State<WebPagePlatformView> {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PagePlatformView', false),
      body: new Container({
        child: new SingleChildScrollView({
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              new Container({
                margin: EdgeInsets.all(20),
                child: new Text('TypeScript:', {
                  style: new TextStyle({
                    fontSize: kSize16,
                    color: kSubTitleColor,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              }),

              codeWidget(CODE_PLATFORM_VIEW_TS, kCodePlatformView1),

              new Container({
                margin: EdgeInsets.all(20),
                child: new Text(Lang.instance.res().plugin_tip_1, {
                  style: new TextStyle({
                    fontSize: kSize16,
                    color: kSubTitleColor,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              }),
              codeWidget(CODE_PLATFORM_VIEW_ANDROID, kCodePlatformView2),

              new Container({
                margin: EdgeInsets.all(20),
                child: new Text(Lang.instance.res().plugin_tip_3, {
                  style: new TextStyle({
                    fontSize: kSize16,
                    color: kSubTitleColor,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              }),
              codeWidget(
                CODE_PLATFORM_VIEW_ANDROID_REGISTER,
                kCodePlatformView3
              ),
            ],
          }),
          scrollDirection: Axis.vertical,
        }),
        margin: EdgeInsets.only({left: 30, right: 30, top: 20, bottom: 20}),
      }),
    })
  }
}
