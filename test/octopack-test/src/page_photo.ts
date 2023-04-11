import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  GestureDetector,
  Image,
  MainAxisAlignment,
  Navigator,
  PageRouteBuilder,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {DelayWidget} from '@octoflutter/octo'
import {PhotoView} from '@octoflutter/photo'

const url =
  'https://img0.baidu.com/it/u=1209717743,1836540112&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'

export class PagePhoto extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PagePhoto'),
      }),
      body: new Center({
        child: new DelayWidget({
          delay: 300,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              new GestureDetector({
                child: new Container({
                  width: 100,
                  height: 100,
                  child: Image.asset('icon.png'),
                }),
                onTap: () => {
                  Navigator.of(context).push(
                    new PageRouteBuilder({
                      pageBuilder: (ctx, a1, a2) => {
                        return new Scaffold({
                          backgroundColor: Colors.white,
                          appBar: new AppBar({title: new Text('LocalImage')}),
                          body: PhotoView.asset({
                            asset: 'icon.png',
                            minScale: 0.5,
                          }),
                        })
                      },
                    })
                  )
                },
              }),
              new GestureDetector({
                child: new Container({
                  width: 100,
                  height: 100,
                  child: Image.network(url),
                }),
                onTap: () => {
                  Navigator.of(context).push(
                    new PageRouteBuilder({
                      pageBuilder: (ctx, a1, a2) => {
                        return new Scaffold({
                          backgroundColor: Colors.white,
                          appBar: new AppBar({title: new Text('NetworkImage')}),
                          body: PhotoView.network({
                            url: url,
                            minScale: 0.5,
                          }),
                        })
                      },
                    })
                  )
                },
              }),
            ],
          }),
        }),
      }),
    })
  }
}
