import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Colors,
  Container,
  ListView,
  Scaffold,
  ScrollController,
  Stack,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'
import {IndicatorWidget, kListLength} from './page_octo_list'

export class PageListView extends StatelessWidget {
  ctrl: ScrollController = new ScrollController()

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('ListView'),
      }),
      body: new Stack({
        children: [
          ListView.builder({
            scrollDirection: Axis.vertical,
            controller: this.ctrl,
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
            itemCount: kListLength,
          }),
          new IndicatorWidget(this.ctrl),
        ],
      }),
    })
  }
}
