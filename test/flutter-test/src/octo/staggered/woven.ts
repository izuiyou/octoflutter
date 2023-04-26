import {
  AlignmentDirectional,
  BuildContext,
  GridView,
  SliverChildBuilderDelegate,
  StatelessWidget,
  Widget,
} from '@octoflutter/flutter'
import {SliverWovenGridDelegate, WovenGridTile} from '@octoflutter/staggered'
import {AppScaffold, Tile} from './staggered_common'

export class PageWoven extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageWoven',
      child: GridView.custom({
        childrenDelegate: new SliverChildBuilderDelegate((context, index) => {
          return new Tile({
            index: index,
            extent: ((index % 5) + 1) * 100,
          })
        }),
        gridDelegate: SliverWovenGridDelegate.count({
          crossAxisCount: 2,
          mainAxisSpacing: 8,
          crossAxisSpacing: 8,
          pattern: [
            new WovenGridTile({aspectRatio: 1}),
            new WovenGridTile({
              aspectRatio: 5 / 7,
              crossAxisRatio: 0.9,
              alignment: AlignmentDirectional.centerEnd,
            }),
          ],
        }),
      }),
    })
  }
}
