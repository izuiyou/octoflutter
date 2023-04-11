import {Duration, isNullOrUndefined} from '@octoflutter/dartsdk'
import {Curve, Curves} from '../animation/curves'
import {Animation} from '../animation/animation'
import {Key} from '../foundation/key'
import {Widget} from './framework'
import {FadeTransition} from './transitions'
import {Stack} from './basic'
import {Alignment} from '../painting/alignment'

export type AnimatedSwitcherTransitionBuilder = (
  child: Widget,
  animation: Animation<number>
) => Widget

export type AnimatedSwitcherLayoutBuilder = (
  currentChild: Widget | null | undefined,
  previousChildren: Array<Widget>
) => Widget

export class AnimatedSwitcher extends N.AnimatedSwitcher {
  constructor(args: {
    key?: Key
    child?: Widget
    duration: Duration
    reverseDuration?: Duration
    switchInCurve?: Curve
    switchOutCurve?: Curve
    transitionBuilder?: AnimatedSwitcherTransitionBuilder
    layoutBuilder?: AnimatedSwitcherLayoutBuilder
  }) {
    const tb = (child, anim) => {
      if (!isNullOrUndefined(args.transitionBuilder)) {
        return args.transitionBuilder(child, new Animation(anim))
      } else {
        return AnimatedSwitcher.defaultTransitionBuilder(
          child,
          new Animation(anim)
        )
      }
    }

    const lb = (currentChild, previousChildren) => {
      if (!isNullOrUndefined(args.layoutBuilder)) {
        return args.layoutBuilder(currentChild, previousChildren)
      } else {
        return AnimatedSwitcher.defaultLayoutBuilder(
          currentChild,
          previousChildren
        )
      }
    }

    super(
      args.child,
      args.duration,
      args.reverseDuration,
      args.switchInCurve ?? Curves.linear,
      args.switchOutCurve ?? Curves.linear,
      tb,
      lb
    )
  }

  static defaultTransitionBuilder = (
    child: Widget,
    animation: Animation<number>
  ) => {
    return new FadeTransition({
      child: child,
      opacity: animation,
    })
  }

  static defaultLayoutBuilder = (
    currentChild: Widget | null | undefined,
    previousChildren: Array<Widget>
  ) => {
    const children = [...previousChildren]
    if (!isNullOrUndefined(currentChild)) {
      children.push(currentChild)
    }
    return new Stack({
      children: children,
      alignment: Alignment.center,
    })
  }
}

// AnimatedSwitcher: function AnimatedSwitcher(t0, t1, t2, t3, t4, t5, t6, t7) {
//     var _ = this;
//     _.child = t0;
//     _.duration = t1;
//     _.reverseDuration = t2;
//     _.switchInCurve = t3;
//     _.switchOutCurve = t4;
//     _.transitionBuilder = t5;
//     _.layoutBuilder = t6;
//     _.key0 = t7;
//   },
