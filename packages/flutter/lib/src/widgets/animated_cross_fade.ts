import {Clip, Duration, isNullOrUndefined} from '@octoflutter/dartsdk'
import {Curve, Curves} from '../animation/curves'
import {Key, octoKey, ValueKey} from '../foundation/key'
import {Alignment} from '../painting/alignment'
import {Positioned, Stack} from './basic'
import {Widget} from './framework'

export enum CrossFadeState {
  showFirst = C.CrossFadeState_0,
  showSecond = C.CrossFadeState_1,
}

export type AnimatedCrossFadeBuilder = (
  topChild: Widget,
  topChildKey: Key,
  bottomChild: Widget,
  bottomChildKey: Key
) => Widget

export class AnimatedCrossFade extends N.AnimatedCrossFade {
  constructor(args: {
    key?: Key
    firstChild: Widget
    secondChild: Widget
    firstCurve?: Curve
    secondCurve?: Curve
    sizeCurve?: Curve
    alignment?: Alignment
    crossFadeState: CrossFadeState
    duration: Duration
    reverseDuration?: Duration
    layoutBuilder?: AnimatedCrossFadeBuilder
  }) {
    const lb = (t, tk, b, bk) => {
      if (isNullOrUndefined(args.layoutBuilder)) {
        return AnimatedCrossFade.defaultLayoutBuilder(
          t,
          new ValueKey(tk),
          b,
          new ValueKey(bk)
        )
      } else {
        return args.layoutBuilder(t, new ValueKey(tk), b, new ValueKey(bk))
      }
    }

    super(
      args.firstChild,
      args.secondChild,
      args.crossFadeState,
      args.duration,
      args.reverseDuration,
      args.firstCurve ?? Curves.linear,
      args.secondCurve ?? Curves.linear,
      args.sizeCurve ?? Curves.linear,
      args.alignment ?? Alignment.topCenter,
      lb,
      args.key?.[octoKey]
    )
  }

  static defaultLayoutBuilder = (
    topChild: Widget,
    topChildKey: Key,
    bottomChild: Widget,
    bottomChildKey: Key
  ): Widget => {
    return new Stack({
      clipBehavior: Clip.none,
      children: [
        new Positioned({
          key: bottomChildKey,
          left: 0.0,
          top: 0.0,
          right: 0.0,
          child: bottomChild,
        }),
        new Positioned({
          key: topChildKey,
          child: topChild,
        }),
      ],
    })
  }
}

// AnimatedCrossFade: function AnimatedCrossFade(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10) {
//     var _ = this;
//     _.firstChild = t0;
//     _.secondChild = t1;
//     _.crossFadeState = t2;
//     _.duration = t3;
//     _.reverseDuration = t4;
//     _.firstCurve = t5;
//     _.secondCurve = t6;
//     _.sizeCurve = t7;
//     _.alignment = t8;
//     _.layoutBuilder = t9;
//     _.key0 = t10;
//   },
