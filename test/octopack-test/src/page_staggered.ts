import {Color, isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Center,
  ClipOval,
  Colors,
  Column,
  Container,
  Expanded,
  Key,
  Scaffold,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {MasonryGridView} from '@octoflutter/staggered'

const _defaultColor = new Color(0xff34568b)
export class Tile extends StatelessWidget {
  index: number
  extent?: number
  backgroundColor?: Color
  bottomSpace?: number
  constructor(args: {
    key?: Key
    index: number
    extent?: number
    backgroundColor?: Color
    bottomSpace?: number
  }) {
    super({key: args.key})
    this.index = args.index
    this.extent = args.extent
    this.backgroundColor = args.backgroundColor
    this.bottomSpace = args.bottomSpace
  }

  build(context: BuildContext): Widget {
    const child = new Container({
      color: this.backgroundColor ?? _defaultColor,
      height: this.extent,
      child: new Center({
        child: new ClipOval({
          child: new Container({
            alignment: Alignment.center,
            color: Colors.white,
            child: new Text('' + this.index, {
              style: new TextStyle({fontSize: 15, color: Colors.black}),
            }),
            width: 50,
            height: 50,
          }),
        }),
      }),
    })

    if (isNullOrUndefined(this.bottomSpace)) {
      return child
    }

    return new Column({
      children: [
        new Expanded({child: child}),
        new Container({
          height: this.bottomSpace,
          color: Colors.green,
        }),
      ],
    })
  }
}

export class PageStaggered extends StatelessWidget {
  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text('PageStaggered')}),
      backgroundColor: Colors.white,
      body: MasonryGridView.count({
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
