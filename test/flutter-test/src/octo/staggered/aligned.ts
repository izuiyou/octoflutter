import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {AlignedGridView} from '@octoflutter/staggered'
import {AppScaffold, Tile} from './staggered_common'

export class PageAligined extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageAligined',
      child: AlignedGridView.count({
        crossAxisCount: 4,
        mainAxisSpacing: 4,
        crossAxisSpacing: 4,
        itemBuilder: (ctx, index) => {
          return new Tile({
            index: index,
            extent: ((index % 7) + 1) * 30,
          })
        },
      }),
    })
  }
}
