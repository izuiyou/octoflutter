import {
  Alignment,
  AppBar,
  AspectRatio,
  BuildContext,
  Center,
  ColoredBox,
  Colors,
  Column,
  Container,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageAspectRatio extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('AspectRatio'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new Column({
          children: [
            new AspectRatio({
              child: new ColoredBox({
                color: Colors.red,
                child: new Center({
                  child: new Text('2.75'),
                }),
              }),
              aspectRatio: 2.75,
            }),
            new AspectRatio({
              child: new ColoredBox({
                color: Colors.blue,
                child: new Center({
                  child: new Text('1.75'),
                }),
              }),
              aspectRatio: 1.75,
            }),
          ],
        }),
      }),
    })
  }
}
