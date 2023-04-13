import {
  Alignment,
  Axis,
  BuildContext,
  Colors,
  Container,
  FloatingActionButton,
  Icon,
  Icons,
  Scaffold,
  SingleChildScrollView,
  Stack,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {commAppBar} from '../common_widgets'
import {kSubTitleColor} from '../constants'
import {
  LoadingCtrl,
  LoadingWidget,
} from '../custom_paint/mobile_page_custom_paint'
import {Lang} from '../lang'
import {HttpPlugin} from './http_plugin'

export class MobilePageHttpPlugin extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _MobilePageHttpPluginState()
  }
}

class _MobilePageHttpPluginState extends State<MobilePageHttpPlugin> {
  _content = ''
  ctrl: LoadingCtrl = new LoadingCtrl()

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PageHttpPlugin', false),
      body: new Stack({
        alignment: Alignment.center,
        children: [
          new SingleChildScrollView({
            child: new Container({
              child: new Text(
                Lang.instance.res().plugin_4_engine_tip + '\n' + this._content,
                {
                  style: new TextStyle({
                    fontSize: 16,
                    color: kSubTitleColor,
                  }),
                }
              ),
            }),
            scrollDirection: Axis.vertical,
          }),
          new Container({
            child: new LoadingWidget({
              ctrl: this.ctrl,
            }),
            alignment: Alignment.center,
          }),
        ],
      }),

      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: () => {
          if (this.ctrl.loading) {
            return
          }
          this.ctrl.show('Loading...')
          HttpPlugin.get('https://api.github.com/search/issues', {
            q: 'flutter',
            page: 1,
          })
            .then((v) => {
              this._content = v
              if (this.mounted) {
                this.setState(() => {})
              }
              this.ctrl.cancel()
            })
            .catch((e) => {
              this._content = e + ''
              if (this.mounted) {
                this.setState(() => {})
              }
              this.ctrl.cancel()
            })
        },
      }),
    })
  }
}
