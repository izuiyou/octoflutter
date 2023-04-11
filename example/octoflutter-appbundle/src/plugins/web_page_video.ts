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
  kCodeVideo1,
  kCodeVideo2,
  kCodeVideo3,
  kCodeVideo4,
  kSize16,
  kSubTitleColor,
} from '../constants'
import {Lang} from '../lang'
import {
  codeWidget,
  CODE_APPBUNDLE_PLUGIN_ANDROID,
  CODE_APPBUNDLE_PLUGIN_REGISTER,
  CODE_APPBUNDLE_PLUGIN_TS,
  CODE_TEXTURE,
} from './codes'

export class WebPageVideo extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _WebPageVideoState()
  }
}

class _WebPageVideoState extends State<WebPageVideo> {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PageVideo', false),
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
                  }),
                }),
              }),

              codeWidget(CODE_APPBUNDLE_PLUGIN_TS, kCodeVideo1),

              new Container({
                margin: EdgeInsets.all(20),
                child: new Text('Texture:', {
                  style: new TextStyle({
                    fontSize: kSize16,
                    color: kSubTitleColor,
                    fontWeight: FontWeight.bold,
                  }),
                }),
              }),

              codeWidget(CODE_TEXTURE, kCodeVideo2),

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
              codeWidget(CODE_APPBUNDLE_PLUGIN_ANDROID, kCodeVideo3),

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
              codeWidget(CODE_APPBUNDLE_PLUGIN_REGISTER, kCodeVideo4),
            ],
          }),
          scrollDirection: Axis.vertical,
        }),
        margin: EdgeInsets.only({left: 30, right: 30, top: 20, bottom: 20}),
      }),
    })
  }
}
