import {Clip, Rect, Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  ClipOval,
  Column,
  Container,
  CustomClipper,
  Image,
  Scaffold,
  SingleChildScrollView,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {DelayWidget, OctoImage} from '@octoflutter/octo'

const url_img =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0116405d84f975a801211d537707c9.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666181952&t=9dee779bdb8d192d9c30dc60c8b199c4'

const url_img1 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fphoto%2F2010-5-13%2Fenterdesk.com-92DE9D2865131C2B07921D912E43CEA1.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668165233&t=3d8ef4d26a3823b64abfd5d0bebdd38f'

const url_img2 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-03-02%2F5a991dc0e89f3.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668165398&t=f2166980249366c01e7586cd06ddd5bf'

const url_img3 =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2019-01-19%2F5c42f0aa58c6d.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668165473&t=1ac36798653136b9586f15d00e4eb2d0'

class _MyRectClipper extends CustomClipper<Rect> {
  getClip(size: Size): Rect {
    window.console.log('w:' + size.width + ' h:' + size.height)
    return Rect.fromLTWH(0, 0, size.width, size.height)
  }

  shouldReclip(oldClipper: any): boolean {
    return true
  }
}

export class PageImage extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Image'),
      }),
      body: new DelayWidget({
        delay: 300,
        child: new Container({
          alignment: Alignment.center,
          child: new SingleChildScrollView({
            scrollDirection: Axis.vertical,
            child: new Column({
              children: [
                new Container({
                  width: 100,
                  height: 100,
                  child: OctoImage.asset('icon.png'),
                }),
                new Container({
                  width: 100,
                  height: 100,
                  child: OctoImage.network(url_img),
                }),
                new Container({
                  width: 100,
                  height: 100,
                  child: Image.asset('icon.png'),
                }),
                new Container({
                  width: 100,
                  height: 100,
                  child: Image.network(url_img),
                }),

                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: OctoImage.asset('icon.png'),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),
                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: OctoImage.network(url_img),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),

                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: Image.network(url_img1),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),
                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: Image.network(url_img2),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),
                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: Image.network(url_img1),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),
                new ClipOval({
                  child: new Container({
                    width: 100,
                    height: 100,
                    child: Image.network(url_img3),
                  }),
                  clipBehavior: Clip.antiAlias,
                  clipper: new _MyRectClipper(),
                }),
              ],
            }),
          }),
        }),
      }),
    })
  }
}
