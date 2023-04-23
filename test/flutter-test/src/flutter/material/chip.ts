import {
  AppBar,
  BuildContext,
  Chip,
  ChoiceChip,
  Colors,
  Column,
  CrossAxisAlignment,
  FloatingActionButton,
  InputChip,
  MainAxisAlignment,
  Scaffold,
  State,
  StatefulWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'

class _PageChipState extends State<PageChip> {
  count = 0

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text('Chip')}),
      body: new Column({
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          new Chip({label: new Text('KKK')}),
          new ChoiceChip({
            label: new Text('XXX'),
            selected: this.count % 2 == 0,
            selectedColor: Colors.orange,
            disabledColor: Colors.cyan,
          }),
          new InputChip({
            label: new Text('YYY'),
            selected: this.count % 2 == 0,
            selectedColor: Colors.orange,
            disabledColor: Colors.cyan,
          }),
        ],
      }),
      floatingActionButton: new FloatingActionButton({
        child: new Text('Click'),
        onPressed: () => {
          this.count++
          this.setState(() => {})
        },
      }),
    })
  }
}

export class PageChip extends StatefulWidget {
  createState(): State<StatefulWidget> {
    return new _PageChipState()
  }
}
