import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
  Wrap,
} from '@octoflutter/flutter'

export class PageWrap extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Wrap'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new Wrap({
          spacing: 20,
          runSpacing: 10,
          children: [
            this.textWidget('ABC😄哈哈1', Colors.red),
            this.textWidget('ABC😄哈哈12', Colors.blue),
            this.textWidget('ABC😄哈哈123', Colors.red),
            this.textWidget('ABC😄哈哈1234', Colors.blue),
            this.textWidget('ABC😄哈哈12345', Colors.red),
            this.textWidget('ABC😄哈哈1', Colors.red),
            this.textWidget('ABC😄哈哈12', Colors.blue),
            this.textWidget('ABC😄哈哈123', Colors.red),
            this.textWidget('ABC😄哈哈1234', Colors.blue),
            this.textWidget('ABC😄哈哈12345', Colors.red),
          ],
        }),
      }),
    })
  }

  textWidget = (text: string, color: Color) => {
    return new Container({
      child: new Text(text),
      color: color,
    })
  }
}
