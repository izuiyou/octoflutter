import {PlaceholderAlignment} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  GestureDetector,
  Navigator,
  Scaffold,
  StatelessWidget,
  Text,
  TextSpan,
  TextStyle,
  Widget,
  WidgetSpan,
} from '@octoflutter/flutter'

export class PageRichText extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('RichText'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: Text.rich(this.textSpanWidget()),
      }),
    })
  }

  textSpanWidget = (): TextSpan => {
    return new TextSpan({
      text: 'TextSpan',
      style: new TextStyle({
        fontSize: 18,
        color: Colors.red,
      }),
      children: [
        new WidgetSpan({
          alignment: PlaceholderAlignment.middle,
          child: new Container({
            color: Colors.blue,
            child: new Text('WidgetSpan'),
          }),
        }),

        new TextSpan({
          text: 'TextSpan2',
          style: new TextStyle({
            fontSize: 14,
            color: Colors.red,
          }),
        }),

        new WidgetSpan({
          alignment: PlaceholderAlignment.middle,
          child: new Container({
            color: Colors.blue,
            child: new GestureDetector({
              child: new Text('ClickToPop'),
              onTap: () => {
                Navigator.of(this.context).pop()
              },
            }),
          }),
        }),
      ],
    })
  }
}
