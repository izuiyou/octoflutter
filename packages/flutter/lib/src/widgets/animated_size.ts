import {Clip, Duration} from '@octoflutter/dartsdk'
import {Curve, Curves} from '../animation/curves'
import {Key, octoKey} from '../foundation/key'
import {Alignment} from '../painting/alignment'
import {Widget} from './framework'

export class AnimatedSize extends N.AnimatedSize {
  constructor(args: {
    key?: Key
    child?: Widget
    alignment?: Alignment
    curve?: Curve
    duration: Duration
    reverseDuration?: Duration
    clipBehavior?: Clip
  }) {
    super(
      args.child,
      args.alignment ?? Alignment.center,
      args.curve ?? Curves.linear,
      args.duration,
      args.reverseDuration,
      args.clipBehavior ?? Clip.hardEdge,
      args.key?.[octoKey]
    )
  }
}

// AnimatedSize: function AnimatedSize(t0, t1, t2, t3, t4, t5, t6) {
//     var _ = this;
//     _.child = t0;
//     _.alignment = t1;
//     _.curve = t2;
//     _.duration = t3;
//     _.reverseDuration = t4;
//     _.clipBehavior = t5;
//     _.key0 = t6;
//   },
