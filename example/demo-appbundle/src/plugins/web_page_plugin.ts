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
  kCodeHttpPlugin1,
  kCodeHttpPlugin2,
  kCodeHttpPlugin3,
  kSize16,
  kSubTitleColor,
} from '../constants'
import {Lang} from '../lang'
import {
  codeWidget,
  CODE_PLUGIN_ANDROID,
  CODE_PLUGIN_ANDROID_REGISTER,
  CODE_PLUGIN_TS,
} from './codes'

export class WebPageHttpPlugin extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _WebPageHttpPluginState()
  }
}

class _WebPageHttpPluginState extends State<WebPageHttpPlugin> {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PageHttpPlugin', false),
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

              codeWidget(CODE_PLUGIN_TS, kCodeHttpPlugin1),

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
              codeWidget(CODE_PLUGIN_ANDROID, kCodeHttpPlugin2),

              new Container({
                margin: EdgeInsets.all(20),
                child: new Text(Lang.instance.res().plugin_tip_2, {
                  style: new TextStyle({
                    fontSize: kSize16,
                    color: kSubTitleColor,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              }),
              codeWidget(CODE_PLUGIN_ANDROID_REGISTER, kCodeHttpPlugin3),
            ],
          }),
          scrollDirection: Axis.vertical,
        }),
        margin: EdgeInsets.only({left: 30, right: 30, top: 20, bottom: 20}),
      }),
    })
  }
}
