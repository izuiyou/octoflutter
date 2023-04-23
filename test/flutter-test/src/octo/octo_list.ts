import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  Colors,
  Container,
  Scaffold,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage, OctoListView} from '@octoflutter/octo'

export class PageOctoList extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({title: new Text('PageOctoList')}),
      body: OctoListView.builder({
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
        sizeDelegate: (index) => {
          return index % 2 === 0 ? 60 : 90
        },
        itemCount: 1000,
      }),
    })
  }
}
