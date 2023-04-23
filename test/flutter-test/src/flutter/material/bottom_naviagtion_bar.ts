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

class _PageBottomNavigationBarState extends State<PageBottomNavigationBar> {
  _selectedIndex = 0

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('PageBottomNavigationBar'),
      }),
      body: new Container({
        alignment: Alignment.center,
        child: new Text('SelectedIndex:' + this._selectedIndex),
      }),
      bottomNavigationBar: new BottomNavigationBar({
        currentIndex: this._selectedIndex,
        showUnselectedLabels: false,
        elevation: 5,
        backgroundColor: Colors.blue,
        selectedItemColor: Colors.white,
        unselectedItemColor: Colors.grey,
        iconSize: 15,
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

export class PageBottomNavigationBar extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageBottomNavigationBarState()
  }
}
