import {
  Alignment,
  AppBar,
  BottomNavigationBar,
  BottomNavigationBarItem,
  BuildContext,
  Colors,
  Container,
  GestureDetector,
  Icon,
  Icons,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageBottomNavigationBarItemState extends State<PageBottomNavigationBarItem> {
  _selectedIndex = 0

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('PageBottomNavigationBarItem'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new Text('SelectedIndex:' + this._selectedIndex),
      }),
      bottomNavigationBar: new BottomNavigationBar({
        currentIndex: this._selectedIndex,
        showUnselectedLabels: true,
        onTap: (i) => {
          this._selectedIndex = i
          this.setState(() => {})
        },
        items: [
          new BottomNavigationBarItem({
            icon: new Icon(Icons.arrow_downward),
            label: 'TabA',
          }),
          new BottomNavigationBarItem({
            icon: new Icon(Icons.arrow_upward),
            label: 'TabB',
          }),
        ],
      }),
    })
  }
}

export class PageBottomNavigationBarItem extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageBottomNavigationBarItemState()
  }
}
