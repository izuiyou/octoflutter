import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Colors,
  Column,
  Container,
  Row,
  Scaffold,
  SingleChildScrollView,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageSingleChildScrollView extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('SingleChildScrollView'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new SingleChildScrollView({
          scrollDirection: Axis.vertical,
          child: new Column({
            children: [
              new Container({
                width: 100,
                height: 100,
                color: Colors.red,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.blue,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.grey,
              }),

              new Container({
                child: new SingleChildScrollView({
                  scrollDirection: Axis.horizontal,
                  child: new Row({
                    children: [
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('1'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('2'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('3'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('4'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('5'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('6'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('7'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('8'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('9'),
                      }),
                    ],
                  }),
                }),
                height: 100,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.red,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.blue,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.grey,
              }),

              new Container({
                child: new SingleChildScrollView({
                  scrollDirection: Axis.horizontal,
                  child: new Row({
                    children: [
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('1'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('2'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('3'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('4'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('5'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('6'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('7'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('8'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('9'),
                      }),
                    ],
                  }),
                }),
                height: 100,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.red,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.blue,
              }),
              new Container({
                width: 100,
                height: 100,
                color: Colors.grey,
              }),

              new Container({
                child: new SingleChildScrollView({
                  scrollDirection: Axis.horizontal,
                  child: new Row({
                    children: [
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('1'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('2'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('3'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('4'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('5'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('6'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.red,
                        alignment: Alignment.center,
                        child: new Text('7'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.blue,
                        alignment: Alignment.center,
                        child: new Text('8'),
                      }),
                      new Container({
                        width: 100,
                        height: 100,
                        color: Colors.grey,
                        alignment: Alignment.center,
                        child: new Text('9'),
                      }),
                    ],
                  }),
                }),
                height: 100,
              }),
            ],
          }),
        }),
      }),
    })
  }
}
