import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Builder,
  Center,
  Colors,
  Container,
  FloatingActionButton,
  PageController,
  PageView,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageViewTest extends StatelessWidget {
  ctrl: PageController = new PageController({
    initialPage: 0,
    keepPage: true,
    viewportFraction: 1.0,
  })

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text('PageView')}),
      body: new Container({
        alignment: Alignment.center,
        child: new PageView({
          scrollDirection: Axis.horizontal,
          controller: this.ctrl,
          onPageChanged: (index) => {
            window.console.log('onPageChanged:' + index)
          },

          children: [
            new Container({
              color: Colors.blue,
              child: new Builder({
                builder: (ctx) => {
                  window.console.log('builder:')
                  return new Center({
                    child: new Text('1'),
                  })
                },
              }),
            }),
            new Container({
              color: Colors.black26,
              child: new Center({
                child: new Text('2'),
              }),
            }),
            new Container({
              color: Colors.red,
              child: new Center({
                child: new Text('3'),
              }),
            }),
          ],
        }),
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('anToP2'),
        onPressed: () => {
          this.ctrl.animateToPage(2)
        },
      }),
    })
  }
}
