import {Color, Radius} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BorderRadius,
  BuildContext,
  Builder,
  Center,
  ClipRRect,
  Colors,
  Container,
  EdgeInsets,
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
            return new Container({
              margin: EdgeInsets.only({
                top: 10,
                bottom: 10,
                right: 50,
                left: 50,
              }),
              child: new ClipRRect({
                child: new RawMaterialButton({
                  child: new Container({
                    alignment: Alignment.center,
                    child: new Text('Click Me To Show Picker', {
                      style: new TextStyle({
                        fontSize: 14,
                        color: Colors.white,
                      }),
                    }),
                    height: 50,
                  }),
                  fillColor: Colors.blue,
                  splashColor: Color.fromARGB(255, 17, 80, 129),
                  onPressed: () => {
                    DatePicker.showDatePicker(context, {
                      onConfirm: (d) => {
                        const tip =
                          'year:' +
                          d.year +
                          ' month:' +
                          d.month +
                          ' day:' +
                          d.day
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
                }),
                borderRadius: BorderRadius.all(Radius.circular(8)),
              }),
            })
          },
        }),
      }),
    })
  }
}
