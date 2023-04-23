import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  ColoredBox,
  Colors,
  Container,
  DefaultTabController,
  ListView,
  Scaffold,
  SizedBox,
  SliverChildListDelegate,
  StatelessWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageList extends StatelessWidget {
  build(context: BuildContext) {
    return new DefaultTabController({
      length: 4,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('ListView'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'constructor'}),
              new Tab({text: 'builder'}),
              new Tab({text: 'custom'}),
              new Tab({text: 'separated'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new ListView({
              children: Array.from({length: 100}).map((v, index, arr) => {
                const even = index % 2 === 0
                return new Container({
                  height: 50,
                  color: Color.fromARGB(255, even ? 255 : 0, 0, even ? 0 : 255),
                  child: new Text('index:' + index),
                  alignment: Alignment.center,
                })
              }),
            }),

            ListView.builder({
              itemCount: 200,
              itemBuilder: (ctx: BuildContext, index: number) => {
                const even = index % 2 === 0
                return new Container({
                  color: Color.fromARGB(255, even ? 255 : 0, 0, even ? 0 : 255),
                  child: new Text('index:' + index),
                  height: 50,
                  alignment: Alignment.center,
                })
              },
            }),

            ListView.custom({
              childrenDelegate: new SliverChildListDelegate(
                Array.from({length: 30}).map((v, index, arr) => {
                  const even = index % 2 === 0
                  return new Container({
                    height: 50,
                    // color: Color.fromARGB(255, even ? 255 : 0, 0, even ? 0 : 255),
                    color: Colors.white,
                    child: new Text('index:' + index),
                    alignment: Alignment.center,
                  })
                }),
                {
                  addSemanticIndexes: true,
                  semanticIndexCallback: (
                    widget: Widget,
                    localIndex: number
                  ) => {
                    window.console.log('semanticIndexCallback:' + localIndex)
                    return localIndex
                  },
                }
              ),
            }),

            ListView.separated({
              itemBuilder: (ctx: BuildContext, index: number) => {
                const even = index % 2 === 0
                return new Container({
                  color: Color.fromARGB(255, even ? 255 : 0, 0, even ? 0 : 255),
                  child: new Text('index:' + index),
                  height: 50,
                  alignment: Alignment.center,
                })
              },
              separatorBuilder: (ctx: BuildContext, index: number) => {
                return new ColoredBox({
                  color: Color.fromARGB(255, 0, 255, 255),
                  child: new SizedBox({height: 2}),
                })
              },
              itemCount: 40,
            }),
          ],
        }),
      }),
    })
  }
}
