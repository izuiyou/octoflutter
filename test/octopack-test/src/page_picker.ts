import {
  Alignment,
  AppBar,
  BuildContext,
  Builder,
  Center,
  Colors,
  Container,
  RawMaterialButton,
  Scaffold,
  ScaffoldMessenger,
  SnackBar,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {DatePicker, DatePickerTheme, LocaleType} from '@octoflutter/picker'

export class PagePicker extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PagePicker'),
      }),
      body: new Center({
        child: new Builder({
          builder: (ctx) => {
            return new RawMaterialButton({
              child: new Container({
                width: 200,
                height: 50,
                alignment: Alignment.center,
                child: new Text('Click Me To Show Picker', {
                  style: new TextStyle({
                    fontSize: 15,
                    color: Colors.black,
                  }),
                }),
              }),
              fillColor: Colors.yellow,
              onPressed: () => {
                DatePicker.showDatePicker(context, {
                  onConfirm: (d) => {
                    const tip =
                      'year:' + d.year + ' month:' + d.month + ' day:' + d.day
                    window.console.log(tip)

                    ScaffoldMessenger.of(ctx).showSnackBar(
                      new SnackBar({
                        content: new Text(tip),
                      })
                    )
                  },
                  locale: LocaleType.en,
                  theme: new DatePickerTheme({
                    doneStyle: new TextStyle({
                      fontSize: 16,
                      color: Colors.red,
                    }),
                    cancelStyle: new TextStyle({
                      fontSize: 16,
                      color: Colors.red,
                    }),
                  }),
                })
              },
            })
          },
        }),
      }),
    })
  }
}
