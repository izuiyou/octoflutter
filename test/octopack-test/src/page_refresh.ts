import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  FloatingActionButton,
  ListView,
  RoundedRectangleBorder,
  Scaffold,
  ScrollController,
  State,
  StatefulWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {
  ClassicFooter,
  ClassicHeader,
  RefreshController,
  SmartRefresher,
} from '@octoflutter/refresh'

export class PageRefresh extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageRefreshState()
  }
}

export class _PageRefreshState extends State<PageRefresh> {
  ctrl: RefreshController
  length = 10
  scrollController: ScrollController = new ScrollController()

  initState(): void {
    super.initState()
    this.ctrl = new RefreshController()
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageRefresh'),
      }),
      body: new SmartRefresher({
        controller: this.ctrl,
        scrollController: this.scrollController,
        enablePullDown: true,
        enablePullUp: true,
        header: new ClassicHeader(),
        footer: new ClassicFooter(),
        onRefresh: () => {
          //mock request
          window.setTimeout(() => {
            this.length = 10
            this.ctrl.refreshCompleted()
            this.setState(() => {})
          }, 2000)
        },
        onLoading: () => {
          //mock loadmore
          window.setTimeout(() => {
            this.length += 10
            this.ctrl.loadComplete()
            this.setState(() => {})
          }, 2000)
        },
        child: ListView.builder({
          itemBuilder: (ctx, index) => {
            return new Container({
              height: 50,
              alignment: Alignment.center,
              child: new Text('index:' + index, {
                style: new TextStyle({
                  fontSize: 15,
                  color: Colors.black,
                }),
              }),
            })
          },
          itemCount: this.length,
        }),
      }),
      floatingActionButton: new Container({
        width: 150,
        height: 50,
        child: new FloatingActionButton({
          child: new Container({
            alignment: Alignment.center,
            child: new Text('animateTo'),
          }),
          mini: false,
          shape: new RoundedRectangleBorder(),
          onPressed: () => {
            this.scrollController.animateTo(100)
          },
        }),
      }),
    })
  }
}
