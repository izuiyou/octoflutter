import {TextDirection} from '@octoflutter/dartsdk'
import {
  AppBar,
  BuildContext,
  Container,
  DefaultTabController,
  Directionality,
  Scaffold,
  State,
  StatefulWidget,
  Tab,
  TabBar,
  TabBarView,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageDirectionalityState extends State<PageDirectionality> {
  build(context: BuildContext): Widget {
    return new DefaultTabController({
      length: 2,
      initialIndex: 0,
      child: new Scaffold({
        appBar: new AppBar({
          title: new Text('Directionality'),
          bottom: new TabBar({
            tabs: [new Tab({text: 'rtl'}), new Tab({text: 'ltr'})],
            isScrollable: true,
          }),
        }),
        body: new TabBarView({
          children: [
            new Container({
              child: new Directionality({
                child: new Text('TextDirection.rtl'),
                textDirection: TextDirection.rtl,
              }),
            }),
            new Container({
              child: new Directionality({
                child: new Text('TextDirection.ltr'),
                textDirection: TextDirection.ltr,
              }),
            }),
          ],
        }),
      }),
    })
  }
}

export class PageDirectionality extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageDirectionalityState()
  }
}
