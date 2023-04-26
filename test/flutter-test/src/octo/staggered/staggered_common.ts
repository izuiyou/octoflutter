import {Color, isNullOrUndefined} from '@octoflutter/dartsdk'
import {
  Alignment,
  AppBar,
  BuildContext,
  Center,
  ClipOval,
  ColoredBox,
  Colors,
  Column,
  Container,
  EdgeInsets,
  Expanded,
  Key,
  Padding,
  Scaffold,
  SizedBox,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'

const _defaultColor = new Color(0xff34568b)

export class AppScaffold extends StatelessWidget {
  title: string
  topPadding: number
  child: Widget
  constructor(args: {
    key?: Key
    title: string
    topPadding?: number
    child: Widget
  }) {
    super({key: args.key})
    this.title = args.title
    this.topPadding = args.topPadding ?? 0
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    return new Scaffold({
      appBar: new AppBar({title: new Text(this.title)}),
      body: new Padding({
        padding: EdgeInsets.only({top: this.topPadding}),
        child: this.child,
      }),
    })
  }
}

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
