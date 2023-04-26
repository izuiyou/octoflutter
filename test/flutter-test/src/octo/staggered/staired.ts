import {
  BuildContext,
  GridView,
  SliverChildBuilderDelegate,
  StatelessWidget,
  Widget,
} from '@octoflutter/flutter'
import {
  SliverStairedGridDelegate,
  StairedGridTile,
} from '@octoflutter/staggered'
import {AppScaffold, Tile} from './staggered_common'

export class PageStaired extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageStaired',
      child: GridView.custom({
        childrenDelegate: new SliverChildBuilderDelegate((context, index) => {
          return new Tile({
            index: index,
            extent: ((index % 5) + 1) * 100,
          })
        }),
        gridDelegate: new SliverStairedGridDelegate({
          crossAxisSpacing: 48,
          mainAxisSpacing: 24,
          startCrossAxisDirectionReversed: true,
          pattern: [
            new StairedGridTile(0.5, 1),
            new StairedGridTile(0.5, 3 / 4),
            new StairedGridTile(1.0, 10 / 4),
          ],
        }),
      }),
    })
  }
}
