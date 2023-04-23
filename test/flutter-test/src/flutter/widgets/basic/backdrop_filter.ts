import {BlendMode, ImageFilter} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BackdropFilter,
  BuildContext,
  ClipRect,
  Colors,
  Container,
  Scaffold,
  Stack,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'

export class PageBackdropFilter extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({title: new Text('BackdropFilter')}),
      body: new Container({
        child: new Stack({
          alignment: Alignment.center,
          children: [
            new Container({
              alignment: Alignment.center,
              child: OctoImage.asset('icon.png', {width: 200, height: 200}),
            }),
            new Container({
              alignment: Alignment.center,
              child: new ClipRect({
                child: new BackdropFilter({
                  filter: ImageFilter.blur({sigmaX: 5, sigmaY: 5}),
                  blendMode: BlendMode.srcOver,
                  child: new Container({
                    color: Colors.transparent,
                  }),
                }),
              }),
              height: 100,
            }),
          ],
        }),
        alignment: Alignment.center,
      }),
    })
  }
}
