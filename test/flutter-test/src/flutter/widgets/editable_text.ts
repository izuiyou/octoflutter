import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Container,
  FittedBox,
  FloatingActionButton,
  Icon,
  Icons,
  LimitedBox,
  Scaffold,
  Stack,
  State,
  StatefulWidget,
  Text,
  TextEditingController,
  TextField,
  Widget,
} from '@octoflutter/flutter'

class _PageEditableTextState extends State<PageEditableText> {
  ctrl: TextEditingController = new TextEditingController('default text')

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('EditableText'),
      }),
      body: new Container({
        child: new Stack({
          children: [
            new Container({
              child: new TextField({
                controller: this.ctrl,
                maxLines: 5,
                onChanged: (t) => {
                  console.log(t)
                },
              }),
            }),

            new Container({
              alignment: Alignment.topRight,
              child: new FittedBox({
                child: new Container({
                  width: 100,
                  color: Colors.orange.withOpacity(0.5),
                  alignment: Alignment.topRight,
                  child: new Text(this.ctrl.text),
                }),
              }),
            }),
          ],
        }),
      }),

      floatingActionButton: new FloatingActionButton({
        child: new Icon(Icons.add),
        onPressed: () => {
          window.console.log('text:' + this.ctrl.text)
          this.setState(() => {})
        },
      }),
    })
  }
}

export class PageEditableText extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageEditableTextState()
  }
}
