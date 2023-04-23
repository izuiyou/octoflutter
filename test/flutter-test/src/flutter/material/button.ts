import {
  AppBar,
  BuildContext,
  Center,
  Colors,
  EdgeInsets,
  RawMaterialButton,
  Scaffold,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageButton extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('Button'),
      }),
      body: new Center({
        child: new RawMaterialButton({
          padding: EdgeInsets.all(10),
          child: new Text('RawMaterialButton'),
          splashColor: Colors.blueAccent,
          fillColor: Colors.orange,
          highlightColor: Colors.green,
          hoverColor: Colors.cyan,
          focusColor: Colors.red,
          onPressed: () => {
            window.console.log('onPressed')
          },
        }),
      }),
    })
  }
}
