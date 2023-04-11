import {Key, octoKey} from '../foundation/key'
import {EdgeInsetsGeometry} from '../painting/edge_insets'
import {Widget} from '../widgets/framework'

export enum CollapseMode {
  parallax = C.CollapseMode_0,
  pin = C.CollapseMode_1,
  none = C.CollapseMode_2,
}

export enum StretchMode {
  zoomBackground = C.StretchMode_0,
  blurBackground = C.StretchMode_1,
  fadeTitle = C.StretchMode_2,
}

export class FlexibleSpaceBar extends N.FlexibleSpaceBar {
  constructor(args?: {
    key?: Key
    title?: Widget
    background?: Widget
    centerTitle?: Widget
    titlePadding?: EdgeInsetsGeometry
    collapseMode?: CollapseMode
    stretchModes?: Array<StretchMode>
    expandedTitleScale?: number
  }) {
    super(
      args?.title,
      args?.background,
      args?.centerTitle,
      args?.collapseMode ?? CollapseMode.parallax,
      args?.stretchModes ?? [StretchMode.zoomBackground],
      args?.titlePadding,
      args?.expandedTitleScale ?? 1.5,
      args?.key?.[octoKey]
    )
  }
}

// FlexibleSpaceBar: function FlexibleSpaceBar(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.title = t0;
//     _.background = t1;
//     _.centerTitle = t2;
//     _.collapseMode = t3;
//     _.stretchModes = t4;
//     _.titlePadding = t5;
//     _.expandedTitleScale = t6;
//     _.key0 = t7;
//   },
