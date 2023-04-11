import {Duration, Color, Radius} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {OutlinedBorder} from '../painting/borders'
import {Widget} from './framework'
import {ScrollController} from './scroll_controller'

export enum ScrollbarOrientation {
  left = C.ScrollbarOrientation_0,
  right = C.ScrollbarOrientation_1,
  top = C.ScrollbarOrientation_2,
  bottom = C.ScrollbarOrientation_3,
}

export class RawScrollbar extends N.RawScrollbar {
  constructor(args: {
    key?: Key
    child: Widget
    controller?: ScrollController
    isAlwaysShown?: boolean
    shape?: OutlinedBorder
    radius?: Radius
    thickness?: number
    thumbColor?: Color
    minThumbLength?: number
    minOverscrollLength?: number
    fadeDuration?: Duration
    timeToFade?: Duration
    pressDuration?: Duration
    notificationPredicate?: any
    interactive?: boolean
    scrollbarOrientation?: ScrollbarOrientation
    mainAxisMargin?: number
    crossAxisMargin?: number
  }) {
    super(
      args.child,
      args.controller,
      args.isAlwaysShown,
      args.shape,
      args.radius,
      args.thickness,
      args.thumbColor,
      args.minThumbLength ?? 18,
      args.minOverscrollLength,
      args.fadeDuration ?? new Duration({milliseconds: 300}),
      args.timeToFade ?? new Duration({milliseconds: 600}),
      args.pressDuration ?? new Duration(),
      args.notificationPredicate,
      args.interactive,
      args.scrollbarOrientation,
      args.mainAxisMargin ?? 0,
      args.crossAxisMargin ?? 0,
      args.key?.[octoKey]
    )
  }
}

// RawScrollbar: function RawScrollbar(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17) {
//     var _ = this;
//     _.child = t0;
//     _.controller = t1;
//     _.isAlwaysShown = t2;
//     _.shape = t3;
//     _.radius = t4;
//     _.thickness = t5;
//     _.thumbColor = t6;
//     _.minThumbLength = t7;
//     _.minOverscrollLength = t8;
//     _.fadeDuration = t9;
//     _.timeToFade = t10;
//     _.pressDuration = t11;
//     _.notificationPredicate = t12;
//     _.interactive = t13;
//     _.scrollbarOrientation = t14;
//     _.mainAxisMargin = t15;
//     _.crossAxisMargin = t16;
//     _.key0 = t17;
//   },
