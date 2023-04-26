import {
  AppBar,
  AssetImage,
  BuildContext,
  Center,
  CircleAvatar,
  Colors,
  Column,
  CrossAxisAlignment,
  MainAxisAlignment,
  NetworkImage,
  Row,
  Scaffold,
  Spacer,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {url_img} from '../widgets/image'

export class PageCircleAvatar extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('CircleAvatar'),
      }),
      body: new Center({
        child: new Column({
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            new CircleAvatar({
              child: new Text('AH'),
              backgroundColor: Colors.brown.shade800,
            }),
            new CircleAvatar({
              backgroundImage: new NetworkImage(url_img),
            }),
            new CircleAvatar({
              backgroundImage: new AssetImage('icon.png'),
            }),
            new CircleAvatar({
              child: new Text('AH'),
              backgroundColor: Colors.brown.shade800,
              foregroundColor: Colors.yellow,
              minRadius: 50,
            }),
          ],
        }),
      }),
    })
  }
}
