import {Brightness} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Colors,
  Column,
  Container,
  DeviceOrientation,
  RawMaterialButton,
  Scaffold,
  StatelessWidget,
  SystemChrome,
  SystemUiOverlayStyle,
  Text,
  Widget,
} from '@octoflutter/flutter'

export class PageSystemChrome extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({
        title: new Text('SystemChrome'),
      }),
      body: new Container({
        child: new Column({
          children: [
            new RawMaterialButton({
              fillColor: Colors.orange,
              child: new Text('setSystemUIOverlayStyle'),
              onPressed: () => {
                SystemChrome.setSystemUIOverlayStyle(
                  new SystemUiOverlayStyle({
                    statusBarColor: Colors.yellow,
                    statusBarIconBrightness: Brightness.light,
                    statusBarBrightness: Brightness.dark,
                  })
                )
              },
            }),

            new RawMaterialButton({
              fillColor: Colors.orange,
              child: new Text('setPreferredOrientations'),
              onPressed: () => {
                SystemChrome.setPreferredOrientations([
                  DeviceOrientation.landscapeLeft,
                ])
              },
            }),

            new RawMaterialButton({
              fillColor: Colors.orange,
              child: new Text('setEnabledSystemUIOverlays'),
              onPressed: () => {
                SystemChrome.setEnabledSystemUIOverlays([])
              },
            }),
          ],
        }),
        alignment: Alignment.center,
      }),
    })
  }
}
