import {
  BuildContext,
  GridView,
  SliverChildBuilderDelegate,
  StatelessWidget,
  Widget,
} from '@octoflutter/flutter'
import {
  QuiltedGridRepeatPattern,
  QuiltedGridTile,
  SliverQuiltedGridDelegate,
} from '@octoflutter/staggered'
import {AppScaffold, Tile} from './staggered_common'

export class PageQuilted extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageQuilted',
      child: GridView.custom({
        childrenDelegate: new SliverChildBuilderDelegate((context, index) => {
          return new Tile({
            index: index,
            extent: ((index % 5) + 1) * 100,
          })
        }),
        gridDelegate: new SliverQuiltedGridDelegate({
          crossAxisCount: 4,
          mainAxisSpacing: 4,
          crossAxisSpacing: 4,
          repeatPattern: QuiltedGridRepeatPattern.inverted,
          pattern: [
            new QuiltedGridTile(2, 2),
            new QuiltedGridTile(1, 1),
            new QuiltedGridTile(1, 1),
            new QuiltedGridTile(1, 2),
          ],
        }),
      }),
    })
  }
}
