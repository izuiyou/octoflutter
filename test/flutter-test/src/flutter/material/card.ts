import {
  AppBar,
  BuildContext,
  Card,
  Colors,
  Column,
  RoundedRectangleBorder,
  Row,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'

export class PageCard extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Card'),
      }),
      body: new Column({
        children: [
          new Card({
            shadowColor: Colors.blue,
            child: new Row({
              children: [
                OctoImage.asset('icon.png', {width: 100, height: 100}),
                new Text('Card1'),
              ],
            }),
          }),
          new Card({
            shadowColor: Colors.orange,
            elevation: 10,
            child: new Row({
              children: [
                OctoImage.asset('icon.png', {width: 100, height: 100}),
                new Text('Card2'),
              ],
            }),
          }),
          new Card({
            shadowColor: Colors.red,
            elevation: 1,
            shape: new RoundedRectangleBorder(),
            color: Colors.yellow,
            child: new Row({
              children: [
                OctoImage.asset('icon.png', {width: 100, height: 100}),
                new Text('Card3'),
              ],
            }),
          }),
        ],
      }),
    })
  }
}
