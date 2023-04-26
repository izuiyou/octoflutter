import {
  BuildContext,
  SingleChildScrollView,
  StatelessWidget,
  Widget,
} from '@octoflutter/flutter'
import {AppScaffold, Tile} from './staggered_common'
import {StaggeredGrid, StaggeredGridTile} from '@octoflutter/staggered'

export class PageStaggeredGrid extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageStaggeredGrid',
      child: new SingleChildScrollView({
        child: StaggeredGrid.count({
          crossAxisCount: 4,
          mainAxisSpacing: 4,
          crossAxisSpacing: 4,
          children: [
            StaggeredGridTile.count({
              crossAxisCellCount: 2,
              mainAxisCellCount: 2,
              child: new Tile({index: 0}),
            }),
            StaggeredGridTile.count({
              crossAxisCellCount: 2,
              mainAxisCellCount: 1,
              child: new Tile({index: 1}),
            }),
            StaggeredGridTile.count({
              crossAxisCellCount: 1,
              mainAxisCellCount: 1,
              child: new Tile({index: 2}),
            }),
            StaggeredGridTile.count({
              crossAxisCellCount: 1,
              mainAxisCellCount: 1,
              child: new Tile({index: 3}),
            }),
            StaggeredGridTile.count({
              crossAxisCellCount: 4,
              mainAxisCellCount: 2,
              child: new Tile({index: 4}),
            }),
          ],
        }),
      }),
    })
  }
}
