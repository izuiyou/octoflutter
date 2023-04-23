import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Container,
  DefaultTabController,
  GridView,
  Scaffold,
  SliverChildBuilderDelegate,
  SliverGridDelegateWithFixedCrossAxisCount,
  SliverGridDelegateWithMaxCrossAxisExtent,
  StatelessWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
} from '@octoflutter/flutter'

export class PageGrid extends StatelessWidget {
  build(context: BuildContext) {
    return new DefaultTabController({
      length: 5,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('GridView'),
          bottom: new TabBar({
            tabs: [
              new Tab({text: 'constructor'}),
              new Tab({text: 'builder'}),
              new Tab({text: 'custom'}),
              new Tab({text: 'count'}),
              new Tab({text: 'extent'}),
            ],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new GridView({
              gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount({
                crossAxisCount: 3,
              }),
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

            GridView.builder({
              itemCount: 20,
              gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount({
                crossAxisCount: 3,
              }),
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

            GridView.custom({
              gridDelegate: new SliverGridDelegateWithMaxCrossAxisExtent({
                maxCrossAxisExtent: 80,
              }),
              childrenDelegate: new SliverChildBuilderDelegate(
                (ctx: BuildContext, index: number) => {
                  const even = index % 2 === 0
                  return new Container({
                    color: Color.fromARGB(
                      255,
                      even ? 255 : 0,
                      0,
                      even ? 0 : 255
                    ),
                    child: new Text('index:' + index),
                    height: 50,
                    alignment: Alignment.center,
                  })
                }
              ),
            }),

            GridView.count({
              crossAxisCount: 3,
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

            GridView.extent({
              maxCrossAxisExtent: 180,
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
          ],
        }),
      }),
    })
  }
}
