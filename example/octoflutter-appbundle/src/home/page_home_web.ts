import {
  Clip,
  FontWeight,
  Offset,
  Radius,
  Size,
  VoidCallback,
} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BorderRadius,
  BoxConstraints,
  BoxDecoration,
  BuildContext,
  Builder,
  ButtonStyle,
  Card,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  ElevatedButton,
  GestureDetector,
  MainAxisAlignment,
  MaterialStateProperty,
  Navigator,
  Positioned,
  RepaintBoundary,
  RoundedRectangleBorder,
  Scaffold,
  SingleChildScrollView,
  Stack,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'
import {Env} from '../env'
import {
  kButtonBgColor,
  kButtonHoverColor,
  kGitHubUrl,
  kHoverBgColor,
  kHoverTextColor,
  kSize14,
  kSize16,
  kSize18,
  kSizeToolBar,
  kTitleTextColor,
  kToolBarColor,
} from '../constants'
import {GuideItem, guide_data} from '../guide/guide_data'
import {findGuideContentWidget} from '../guide/guide_detail_widget'
import {Lang} from '../lang'
import {RouterPlugin} from '../plugins/router_plugin'
import {HomePageMobile} from './page_home_mobile'

class _HomePageWebNormalState extends State<StatefulWidget> {
  data: Array<GuideItem> = guide_data()
  index = 0
  indexInItem = 0
  menuWidget = null

  menuTitleHoveredIndex = -1
  menuItemHoveredIndex = -1

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        toolbarHeight: kSizeToolBar,
        backgroundColor: kToolBarColor,
        title: new Text(Lang.instance.res().home_title, {
          style: new TextStyle({
            fontSize: kSize18,
            color: kTitleTextColor,
          }),
        }),
        leading: new Container({
          child: OctoImage.asset('icon.png'),
          alignment: Alignment.center,
          margin: EdgeInsets.only({left: 10}),
        }),
        actions: [
          ...this.actions(),
          new Container({
            margin: EdgeInsets.only({
              top: 10,
              bottom: 10,
              left: 10,
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
              child: OctoImage.asset('icon_github.png'),
              onTap: () => {
                RouterPlugin.open(kGitHubUrl)
              },
            }),
          }),
        ],
      }),
      body: new Stack({
        children: [
          new Container({
            constraints: BoxConstraints.expand(),
          }),
          new Container({
            child: new SingleChildScrollView({
              scrollDirection: Axis.vertical,
              child: new RepaintBoundary({
                child: new Column({
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    ...findGuideContentWidget(this.index, this.indexInItem),
                  ],
                }),
              }),
            }),
            margin: EdgeInsets.only({left: 50, top: 20, right: 50}),
          }),
          this.menuWidget == null ? new Container() : this.menuWidget,
        ],
      }),
    })
  }

  actions = () => {
    const widgets = []
    this.data.forEach((v, i, arr) => {
      widgets.push(
        new Builder({
          builder: (ctx) => {
            return new ElevatedButton({
              style: new ButtonStyle({
                backgroundColor: MaterialStateProperty.all(Colors.transparent),
                shadowColor: MaterialStateProperty.all(Colors.transparent),
                minimumSize: MaterialStateProperty.all(Size.zero),
                padding: MaterialStateProperty.all(EdgeInsets.zero),
              }),
              child: new Container({
                height: 40,
                padding: EdgeInsets.only({left: 10, right: 10}),
                alignment: Alignment.center,
                child: new Text(v.title, {
                  style: new TextStyle({
                    fontSize: kSize16,
                    fontWeight: FontWeight.normal,
                    color:
                      this.menuTitleHoveredIndex === i
                        ? kHoverTextColor
                        : kTitleTextColor,
                  }),
                }),
                decoration: new BoxDecoration({
                  color:
                    this.menuTitleHoveredIndex === i
                      ? kHoverBgColor
                      : Colors.transparent,
                  borderRadius: BorderRadius.all(Radius.circular(45)),
                }),
              }),
              onHover: (hover) => {
                if (hover) {
                  this.menuTitleHoveredIndex = i
                  const offset = ctx
                    .findRenderObject()
                    .localToGlobal(Offset.zero)
                  this.showMenu(i, offset)
                } else {
                  this.menuTitleHoveredIndex = -1
                  this.setState(() => {})
                  setTimeout(() => {
                    if (
                      this.menuItemHoveredIndex === -1 &&
                      this.menuTitleHoveredIndex === -1
                    ) {
                      this.cancelMenu()
                    }
                  }, 50)
                }
              },

              onPressed: () => {
                const offset = ctx.findRenderObject().localToGlobal(Offset.zero)
                this.showMenu(i, offset)
                this.menuTitleHoveredIndex = -1
              },
            })
          },
        })
      )
    })
    return widgets
  }

  showMenu = (index: number, offset: Offset) => {
    this.menuWidget = new Positioned({
      child: new Card({
        child: new Container({
          color: Colors.white,
          alignment: Alignment.topLeft,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ...this.menus(index, () => {
                this.showMenu(index, offset)
              }),
            ],
          }),
        }),
        elevation: 10,
        shape: new RoundedRectangleBorder({
          borderRadius: BorderRadius.all(Radius.circular(8)),
        }),
        clipBehavior: Clip.antiAlias,
      }),
      left: offset.dx,
      top: offset.dy,
    })
    this.setState(() => {})
  }

  menus = (index: number, callback: VoidCallback) => {
    const widgets = []
    this.data[index].contents.forEach((v, i, arr) => {
      widgets.push(
        new ElevatedButton({
          style: new ButtonStyle({
            backgroundColor: MaterialStateProperty.all(Colors.transparent),
            shadowColor: MaterialStateProperty.all(Colors.transparent),
          }),
          child: new Container({
            height: 40,
            margin: EdgeInsets.only({top: 10, bottom: 10}),
            padding: EdgeInsets.only({left: 10, right: 10}),
            alignment: Alignment.center,
            child: new Text(v, {
              style: new TextStyle({
                fontSize: kSize16,
                fontWeight: FontWeight.normal,
                color:
                  this.menuItemHoveredIndex === i
                    ? kHoverTextColor
                    : kTitleTextColor,
              }),
            }),
            decoration: new BoxDecoration({
              color:
                this.menuItemHoveredIndex === i
                  ? kHoverBgColor
                  : Colors.transparent,
              borderRadius: BorderRadius.all(Radius.circular(45)),
            }),
          }),
          onHover: (hover) => {
            if (hover) {
              this.menuItemHoveredIndex = i
              callback()
            } else {
              this.menuItemHoveredIndex = -1
              callback()
              setTimeout(() => {
                if (
                  this.menuItemHoveredIndex === -1 &&
                  this.menuTitleHoveredIndex === -1
                ) {
                  this.cancelMenu()
                }
              }, 50)
            }
          },
          onPressed: () => {
            this.refresh(this.context, index, i)
            this.menuItemHoveredIndex = -1
          },
        })
      )
    })
    return widgets
  }

  cancelMenu = () => {
    this.menuWidget = null
    this.setState(() => {})
  }

  refresh = (context, index, i) => {
    this.cancelMenu()
    if (index < 5) {
      this.index = index
      this.indexInItem = i
    } else if (index === 5) {
      switch (i) {
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

class HomePageWebNormal extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _HomePageWebNormalState()
  }
}

class _HomePageWebState extends State<StatefulWidget> {
  showNormal = true

  initState(): void {
    super.initState()
    this.showNormal = window.innerWidth >= window.innerHeight * 0.75
    Env.showNormalWebSize = this.showNormal
    window.onresize = () => {
      const normal = window.innerWidth >= window.innerHeight * 0.75
      if (this.showNormal !== normal) {
        this.showNormal = normal
        Env.showNormalWebSize = this.showNormal
        this.setState(() => {})
      }
    }
  }

  build(context: BuildContext): Widget {
    return this.showNormal ? new HomePageWebNormal() : new HomePageMobile()
  }
}

export class HomePageWeb extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _HomePageWebState()
  }
}
