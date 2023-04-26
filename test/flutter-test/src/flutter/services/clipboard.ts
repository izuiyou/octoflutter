import {
  AppBar,
  BuildContext,
  ClipBoard,
  ClipboardData,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  MainAxisAlignment,
  RawMaterialButton,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageClipBoardState extends State<PageClipBoard> {
  text = ''

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageClipBoard'),
      }),
      body: new Column({
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          new RawMaterialButton({
            fillColor: Colors.orange,
            child: new Text('Click To Get ClipBoardData'),
            onPressed: () => {
              ClipBoard.getData(ClipBoard.kTextPlain).then((v) => {
                this.text = v.text
                this.setState(() => {})
              })
            },
          }),

          new Container({
            child: new Text('获取到的内容：' + this.text),
          }),

          new RawMaterialButton({
            child: new Text('Click To Set ClipBoardData: XXXKKK'),
            fillColor: Colors.orange,
            onPressed: () => {
              ClipBoard.setData(new ClipboardData('XXXKKK')).then((v) => {})
            },
          }),
        ],
      }),
    })
  }
}

export class PageClipBoard extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageClipBoardState()
  }
}
