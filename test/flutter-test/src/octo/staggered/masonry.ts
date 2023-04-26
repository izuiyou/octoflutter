import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {AppScaffold, Tile} from './staggered_common'
import {MasonryGridView} from '@octoflutter/staggered'

export class PageMasonryGrid extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new AppScaffold({
      title: 'PageMasonryGrid',
      child: MasonryGridView.count({
        crossAxisCount: 4,
        mainAxisSpacing: 4,
        crossAxisSpacing: 4,
        itemBuilder: (context, index) => {
          return new Tile({
            index: index,
            extent: ((index % 5) + 1) * 100,
          })
        },
      }),
    })
  }
}
