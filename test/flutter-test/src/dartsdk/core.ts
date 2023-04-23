import {DateTime, Uri} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  EdgeInsets,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageCore extends StatelessWidget {
  build(context: BuildContext): Widget {
    const datetime = DateTime.now()
    const uri = Uri.parse('https://octoflutter.izuiyou.com/main?from=xxx')
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Core'),
      }),
      body: new Container({
        alignment: Alignment.center,
        padding: EdgeInsets.all(20),
        child: new Text(
          'DateTime:  DateTime.now() \nyear:' +
            datetime.year +
            ' month:' +
            datetime.month +
            ' day:' +
            datetime.day +
            ' hour:' +
            datetime.hour +
            ' minute:' +
            datetime.minute +
            ' second:' +
            datetime.second +
            '\n\nUri:' +
            uri.toString() +
            '\nscheme:' +
            uri.scheme +
            ' authority:' +
            uri.authority +
            ' path:' +
            uri.path +
            ' query:' +
            uri.query
        ),
      }),
    })
  }
}
