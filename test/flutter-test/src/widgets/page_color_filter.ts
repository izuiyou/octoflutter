import {BlendMode, ColorFilter} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  Axis,
  BuildContext,
  ClipRect,
  ColorFiltered,
  Colors,
  Container,
  Row,
  Scaffold,
  SingleChildScrollView,
  StatelessWidget,
  Text,
  Widget,
} from '@octoflutter/flutter'
import {OctoImage} from '@octoflutter/octo'

export class PageColorFilter extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({title: new Text('PageColorFilter')}),
      body: new Container({
        child: new SingleChildScrollView({
          child: new Row({
            children: [
              new Container({
                alignment: Alignment.center,
                child: new ClipRect({
                  child: new ColorFiltered({
                    colorFilter: ColorFilter.mode(
                      Colors.grey,
                      BlendMode.saturation
                    ),
                    child: OctoImage.asset('icon.png', {
                      width: 100,
                      height: 100,
                    }),
                  }),
                }),
                height: 100,
              }),
              new Container({
                alignment: Alignment.center,
                child: new ClipRect({
                  child: new ColorFiltered({
                    colorFilter: ColorFilter.mode(
                      Colors.grey,
                      BlendMode.modulate
                    ),
                    child: OctoImage.asset('icon.png', {
                      width: 100,
                      height: 100,
                    }),
                  }),
                }),
                height: 100,
              }),
              new Container({
                alignment: Alignment.center,
                child: new ClipRect({
                  child: new ColorFiltered({
                    colorFilter: ColorFilter.linearToSrgbGamma(),
                    child: OctoImage.asset('icon.png', {
                      width: 100,
                      height: 100,
                    }),
                  }),
                }),
                height: 100,
              }),
              new Container({
                alignment: Alignment.center,
                child: new ClipRect({
                  child: new ColorFiltered({
                    colorFilter: ColorFilter.srgbToLinearGamma(),
                    child: OctoImage.asset('icon.png', {
                      width: 100,
                      height: 100,
                    }),
                  }),
                }),
                height: 100,
              }),
              new Container({
                alignment: Alignment.center,
                child: new ClipRect({
                  child: new ColorFiltered({
                    colorFilter: ColorFilter.matrix(
                      new Float32Array([
                        0.2126, 0.7152, 0.0722, 0, 0, 0.2126, 0.7152, 0.0722, 0,
                        0, 0.2126, 0.7152, 0.0722, 0, 0, 0, 0, 0, 1, 0,
                      ])
                    ),
                    child: OctoImage.asset('icon.png', {
                      width: 100,
                      height: 100,
                    }),
                  }),
                }),
                height: 100,
              }),
            ],
          }),
          scrollDirection: Axis.horizontal,
        }),
        alignment: Alignment.center,
      }),
    })
  }
}
