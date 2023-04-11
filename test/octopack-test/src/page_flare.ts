import {
  AppBar,
  BuildContext,
  Scaffold,
  StatelessWidget,
  Widget,
  Text,
  Colors,
  Center,
  rootBundle,
  SizedBox,
  Container,
  Alignment,
} from '@octoflutter/flutter'
import {AssetFlare, FlareActor, FlareCacheBuilder} from '@octoflutter/flare'
import {DelayWidget} from '@octoflutter/octo'

export class PageFlare extends StatelessWidget {
  asset: AssetFlare = new AssetFlare({
    bundle: rootBundle,
    name: 'flare/watch_ant.flr',
  })

  build(context: BuildContext): Widget {
    return new Scaffold({
      backgroundColor: Colors.white,
      appBar: new AppBar({
        title: new Text('PageFlare'),
      }),
      body: new Center({
        child: new SizedBox({
          width: 200,
          height: 200,
          child: new DelayWidget({
            delay: 300,
            child: new FlareCacheBuilder([this.asset], {
              builder: (ctx, isWarm) => {
                return !isWarm
                  ? new Container({
                      child: new Text('loading... flare asset'),
                      alignment: Alignment.center,
                    })
                  : FlareActor.asset(this.asset, {
                      animation: 'animation',
                    })
              },
            }),
          }),
        }),
      }),
    })
  }
}
