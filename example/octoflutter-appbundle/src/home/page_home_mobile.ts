import {Size} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Builder,
  ButtonStyle,
  ClipOval,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  Drawer,
  EdgeInsets,
  ElevatedButton,
  FloatingActionButton,
  GestureDetector,
  Icon,
  Icons,
  IconThemeData,
  MainAxisAlignment,
  MaterialStateProperty,
  Navigator,
  RepaintBoundary,
  Scaffold,
  SingleChildScrollView,
  State,
  StatefulWidget,
  SystemNavigator,
  SystemUiOverlayStyle,
  Text,
  TextOverflow,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'
import {
  kButtonBgColor,
  kButtonHoverColor,
  kSize14,
  kSize18,
  kSizeToolBar,
  kTitleTextColor,
  kToolBarColor,
} from '../constants'
import {GuideItem, guide_data} from '../guide/guide_data'
import {findGuideContentWidget} from '../guide/guide_detail_widget'
import {GuideDrawerWidget} from '../guide/guide_drawer_widget'
import {Lang} from '../lang'
import {RouterPlugin} from '../plugins/router_plugin'

export class HomePageMobile extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _HomePageMobileState()
  }
}

class _HomePageMobileState extends State<HomePageMobile> {
  item: GuideItem
  index = 0
  indexInItem = 0

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        toolbarHeight: kSizeToolBar,
        backgroundColor: kToolBarColor,
        title: new Text(Lang.instance.res().home_title, {
          overflow: TextOverflow.fade,
          style: new TextStyle({
            fontSize: kSize18,
            color: kTitleTextColor,
          }),
        }),
        titleSpacing: 0,
        iconTheme: new IconThemeData({
          color: kTitleTextColor,
        }),
        systemOverlayStyle: new SystemUiOverlayStyle({
          statusBarColor: Colors.transparent,
        }),
        actions: [
          new Container({
            margin: EdgeInsets.only({
              top: 10,
              bottom: 10,
              right: 10,
            }),
            child: new ElevatedButton({
              style: new ButtonStyle({
                shadowColor: MaterialStateProperty.all(Colors.transparent),
                minimumSize: MaterialStateProperty.all(Size.zero),
                padding: MaterialStateProperty.all(
                  EdgeInsets.only({left: 10, right: 10})
                ),
                backgroundColor: MaterialStateProperty.all(kButtonBgColor),
                overlayColor: MaterialStateProperty.all(kButtonHoverColor),
              }),
              child: new Container({
                child: new Text('Api', {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: Colors.white,
                  }),
                }),
                alignment: Alignment.center,
              }),
              onPressed: () => {
                Navigator.of(context).pushNamed('/page_api')
              },
            }),
          }),

          new Container({
            margin: EdgeInsets.only({
              top: 10,
              bottom: 10,
              right: 10,
            }),
            child: new ElevatedButton({
              style: new ButtonStyle({
                shadowColor: MaterialStateProperty.all(Colors.transparent),
                minimumSize: MaterialStateProperty.all(Size.zero),
                padding: MaterialStateProperty.all(
                  EdgeInsets.only({left: 10, right: 10})
                ),
                backgroundColor: MaterialStateProperty.all(kButtonBgColor),
                overlayColor: MaterialStateProperty.all(kButtonHoverColor),
              }),
              child: new Container({
                child: new Text(Lang.instance.isZh() ? 'English' : '中文', {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: Colors.white,
                  }),
                }),
                alignment: Alignment.center,
              }),
              onPressed: () => {
                Lang.instance.toggle()
                this.data = guide_data()
                this.setState(() => {})
              },
            }),
          }),

          new Container({
            margin: EdgeInsets.only({
              top: 15,
              bottom: 15,
              right: 10,
            }),
            child: new GestureDetector({
              child: kIsWeb
                ? OctoImage.asset('icon_github.png')
                : new ClipOval({
                    child: OctoImage.asset('icon_github.png'),
                  }),
              onTap: () => {
                RouterPlugin.open('https://github.com/octoflutter/octoflutter')
              },
            }),
          }),
        ],
      }),
      body: new SingleChildScrollView({
        scrollDirection: Axis.vertical,
        child: new RepaintBoundary({
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [...findGuideContentWidget(this.index, this.indexInItem)],
          }),
        }),
      }),
      floatingActionButton: kIsWeb
        ? null
        : new Builder({
            builder: (ctx) => {
              return new FloatingActionButton({
                child: new Icon(Icons.arrow_back),
                onPressed: () => {
                  if (kIsWeb) {
                    Scaffold.of(ctx).openDrawer()
                  } else {
                    SystemNavigator.pop()
                  }
                },
              })
            },
          }),

      drawer: new Drawer({
        backgroundColor: Colors.white,
        child: new GuideDrawerWidget(
          guide_data(),
          (ctx, item, index, indexInItem) => {
            if (index < 5) {
              Navigator.of(ctx).pop()
              this.item = item
              this.index = index
              this.indexInItem = indexInItem
              this.setState(() => {})
            } else {
              if (index === 5) {
                switch (indexInItem) {
                  case 0:
                    Navigator.of(context).pushNamed('/page_animation')
                    break
                  case 1:
                    Navigator.of(context).pushNamed('/page_custom_paint')
                    break
                  case 2:
                    Navigator.of(context).pushNamed('/page_lottie')
                    break
                  case 3:
                    Navigator.of(context).pushNamed('/page_transform_pv')
                    break
                  case 4:
                    Navigator.of(context).pushNamed('/page_nested_refresh')
                    break
                  case 5:
                    Navigator.of(context).pushNamed('/page_plugin_http')
                    break
                  case 6:
                    Navigator.of(context).pushNamed('/page_plugin_video')
                    break
                  case 7:
                    Navigator.of(context).pushNamed('/page_platform_view')
                    break
                }
              }
            }
          }
        ),
      }),
    })
  }
}
