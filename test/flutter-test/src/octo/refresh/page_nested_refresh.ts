import {
  Alignment,
  AppBar,
  AutomaticKeepAlive,
  Axis,
  BuildContext,
  Builder,
  ClampingScrollPhysics,
  Colors,
  Container,
  DefaultTabController,
  Key,
  ListView,
  Scaffold,
  SliverPersistentHeader,
  State,
  StatefulWidget,
  TabBarView,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {
  OctoImage,
  OctoNestedScrollView,
  OctoVisibilityDetector,
} from '@octoflutter/octo'
import {
  ClassicFooter,
  ClassicHeader,
  RefreshController,
  SmartRefresher,
} from '@octoflutter/refresh'
import {MyHeaderDelegate} from './persistent_header'

export class PageNestedRefresh extends StatefulWidget {
  createState(): State<PageNestedRefresh> {
    return new PageNestedRefreshState()
  }
}

export class PageNestedRefreshState extends State<PageNestedRefresh> {
  ctrl: RefreshController
  length = 10

  initState(): void {
    super.initState()
    this.ctrl = new RefreshController()
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageNestedRefresh'),
      }),
      body: new DefaultTabController({
        length: 3,
        initialIndex: 2,
        child: new Builder({
          builder: (ctx) => {
            DefaultTabController.of(ctx)?.addListener(() => {
              window.console.log('index:' + DefaultTabController.of(ctx).index)
            })
            return new OctoNestedScrollView({
              headerSliverBuilder: (ctx, inner) => {
                return [
                  new SliverPersistentHeader({
                    delegate: new MyHeaderDelegate(),
                    pinned: true,
                  }),
                ]
              },
              body: new TabBarView({
                children: [
                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(0),
                    }),
                    uniqueKey: new Key('0'),
                    inPageView: true,
                    pageIndex: 0,
                  }),

                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(1),
                    }),
                    uniqueKey: new Key('1'),
                    inPageView: true,
                    pageIndex: 1,
                  }),

                  new OctoVisibilityDetector({
                    child: new AutomaticKeepAlive({
                      child: new ItemPageContent(2),
                    }),
                    uniqueKey: new Key('2'),
                    inPageView: true,
                    pageIndex: 2,
                  }),
                ],
              }),
            })
          },
        }),
      }),
    })
  }
}

export class ItemPageContent extends StatefulWidget {
  index: number
  constructor(index: number) {
    super({key: new Key('' + index)})
    this.index = index
  }

  createState(): State<StatefulWidget> {
    return new ItemPageContentState()
  }
}

export class ItemPageContentState extends State<ItemPageContent> {
  ctrl: RefreshController
  length = 10
  primary = true

  initState(): void {
    super.initState()
    this.ctrl = new RefreshController()
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      body: new SmartRefresher({
        physics: new ClampingScrollPhysics(),
        controller: this.ctrl,
        enablePullDown: true,
        enablePullUp: true,
        header: new ClassicHeader(),
        footer: new ClassicFooter(),
        onRefresh: () => {
          const index = DefaultTabController.of(context).index

          window.console.log(
            'onRefresh:' +
              this.widget.index +
              ' ci:' +
              index +
              ' ctrl:' +
              this.ctrl
          )

          if (index !== this.widget.index) {
            this.ctrl.refreshCompleted()
            return
          }

          //mock request
          window.setTimeout(() => {
            this.length = 10
            this.ctrl.refreshCompleted()
            if (this.mounted) {
              this.setState(() => {})
            }
          }, 500)
        },
        onLoading: () => {
          //mock loadmore
          const index = DefaultTabController.of(context).index

          window.console.log(
            'onLoading:' +
              this.widget.index +
              ' ci:' +
              index +
              ' ctrl:' +
              this.ctrl
          )

          if (index !== this.widget.index) {
            this.ctrl.loadComplete()
            return
          }

          window.setTimeout(() => {
            this.length += 10
            this.ctrl.loadComplete()
            if (this.mounted) {
              this.setState(() => {})
            }
          }, 500)
        },
        child: ListView.builder({
          scrollDirection: Axis.vertical,
          itemBuilder: (ctx, index) => {
            return new Container({
              height: index % 2 === 0 ? 60 : 90,
              color: index % 2 === 0 ? Colors.yellow : Colors.red,
              child:
                index % 2 === 0
                  ? new Text('index:' + index, {
                      style: new TextStyle({
                        color: Colors.black,
                      }),
                    })
                  : OctoImage.asset('icon.png'),
              alignment: Alignment.center,
            })
          },
          itemCount: this.length,
        }),
      }),
    })
  }
}
