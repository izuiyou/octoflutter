import {
  Alignment,
  BuildContext,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  Expanded,
  MainAxisAlignment,
  Row,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {commAppBar} from '../common_widgets'
import {kSize14} from '../constants'
import {Lang} from '../lang'
import {RouterPlugin} from '../plugins/router_plugin'
import {apiData, ApiItemData} from './api_data'
import {ApiContentWidget, LeftApiNavWidget} from './api_widgets'

class _PageApiState extends State<StatefulWidget> {
  item: ApiItemData = apiData.flutter[0]

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: commAppBar('PageApi', false),
      body: new Container({
        child: kIsWeb
          ? new Row({
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                new LeftApiNavWidget(apiData, (item) => {
                  this.item = item
                  this.setState(() => {})
                }),
                new ApiContentWidget(this.item, (content, type) => {
                  const target = this.flutterApiDocUrl(content, type, this.item)
                  if (target.length > 0) {
                    RouterPlugin.open(target)
                  }
                }),

                new Expanded({
                  child: new Container({
                    alignment: Alignment.center,
                    child: new Text(Lang.instance.res().api_tip, {
                      style: new TextStyle({
                        fontSize: kSize14,
                        color: Colors.black54,
                      }),
                    }),
                  }),
                }),
              ],
            })
          : new Column({
              children: [
                new Container({
                  child: new Text(Lang.instance.res().api_tip, {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: Colors.black54,
                    }),
                  }),
                  padding: EdgeInsets.only({
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10,
                  }),
                }),
                new Expanded({
                  child: new Row({
                    mainAxisAlignment: MainAxisAlignment.start,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      new LeftApiNavWidget(apiData, (item) => {
                        this.item = item
                        this.setState(() => {})
                      }),
                      new ApiContentWidget(this.item, (content, type) => {
                        const target = this.flutterApiDocUrl(
                          content,
                          type,
                          this.item
                        )
                        if (target.length > 0) {
                          RouterPlugin.open(target)
                        }
                      }),
                    ],
                  }),
                }),
              ],
            }),
      }),
    })
  }

  flutterApiDocUrl = (content: string, type: string, item: ApiItemData) => {
    if ('flutter' === this.item?.parent) {
      let target =
        'https://api.flutter.dev/flutter/' + this.item.name.toLowerCase() + '/'
      switch (type) {
        case 'classes':
          if ('SchedulerBinding' === content) {
            target = target + content + '-mixin.html'
          } else {
            target = target + content + '-class.html'
          }
          break
        case 'enums':
        case 'functions':
          target = target + content + '.html'
          break
        case 'types':
          target = target + content + '.html'
          break
        case 'constants':
          if ('rootBundle' === content || 'defaultTargetPlatform' === content) {
            target = target + content + '.html'
          } else {
            target = target + content + '-constant.html'
          }
          break
      }

      return target
    } else if ('dartsdk' === this.item?.parent) {
      let target = 'https://api.flutter.dev/flutter/'
      switch (this.item.name) {
        case 'dartsdk:async':
          target += 'dart-async'
          break
        case 'dartsdk:core':
          target += 'dart-core'
          break
        case 'dartsdk:ui':
          target += 'dart-ui'
          break
        case 'dartsdk:math':
          target += 'vector_math'
          break
      }

      switch (type) {
        case 'classes':
          target = target + '/' + content + '-class.html'
          break
        case 'enums':
        case 'types':
        case 'functions':
          target = target + '/' + content + '.html'
          break
        case 'constants':
          target = target + '/' + content + '-constant.html'
          break
      }

      if (content === 'TimerTickCallback') {
        target = ''
      }

      return target
    }
    return ''
  }
}

export class PageApi extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageApiState()
  }
}
