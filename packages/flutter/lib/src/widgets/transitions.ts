import {Offset, TextDirection, Matrix4} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'
import {BuildContext, TransitionBuilder, Widget} from './framework'
import {Animation} from '../animation/animation'
import {Alignment, AlignmentDirectional} from '../painting/alignment'
import {Axis} from '../painting/basic_types'
import {Listenable} from '../foundation/change_notifier'
import {FractionalTranslation, Transform, ClipRect, Align} from './basic'

export abstract class AnimatedWidget extends N.OctoAnimatedWidget {
  constructor(args?: {key?: Key; listenable?: Listenable}) {
    super(args?.listenable, args?.key?.[octoKey])
  }

  abstract build(context: BuildContext): Widget

  private wgb(_: any, context: any) {
    return this.build(new BuildContext(context))
  }
}

// OctoAnimatedWidget: function OctoAnimatedWidget(t0, t1) {
//     this.listenable = t0;
//     this.key = t1;
//   },

export class SlideTransition extends AnimatedWidget {
  position: Animation<Offset>
  transformHitTests?: boolean
  textDirection?: TextDirection
  child?: Widget
  constructor(args: {
    key?: Key
    position: Animation<Offset>
    transformHitTests?: boolean
    textDirection?: TextDirection
    child?: Widget
  }) {
    super({listenable: args.position, key: args.key})
    this.position = args.position
    this.transformHitTests = args.transformHitTests ?? true
    this.textDirection = args.textDirection
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    let offset = this.position.value
    if (this.textDirection == TextDirection.rtl) {
      offset = new Offset(-offset.dx, offset.dy)
    }

    return new FractionalTranslation({
      translation: offset,
      transformHitTests: this.transformHitTests,
      child: this.child,
    })
  }
}
// SlideTransition: function SlideTransition(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.textDirection = t0;
//     _.transformHitTests = t1;
//     _.child = t2;
//     _.listenable = t3;
//     _.key = t4;
//   },

export class ScaleTransition extends AnimatedWidget {
  scale: Animation<number>
  alignment?: Alignment
  child?: Widget
  constructor(args: {
    key?: Key
    scale: Animation<number>
    alignment?: Alignment
    child?: Widget
  }) {
    super({listenable: args.scale, key: args.key})
    this.scale = args.scale
    this.alignment = args.alignment ?? Alignment.center
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    const scaleValue = this.scale.value
    const transform = Matrix4.identity()
    transform.scale(scaleValue, scaleValue, 1)
    return new Transform({
      transform: transform,
      alignment: this.alignment,
      child: this.child,
    })
  }
}

// ScaleTransition: function ScaleTransition(t0, t1, t2, t3) {
//     var _ = this;
//     _.alignment = t0;
//     _.child = t1;
//     _.listenable = t2;
//     _.key = t3;
//   },

export class RotationTransition extends AnimatedWidget {
  turns: Animation<number>
  alignment?: Alignment
  child?: Widget
  constructor(args: {
    key?: Key
    turns: Animation<number>
    alignment?: Alignment
    child?: Widget
  }) {
    super({listenable: args.turns, key: args.key})
    this.turns = args.turns
    this.alignment = args.alignment ?? Alignment.center
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    const turnsValue = this.turns.value
    const transform = Matrix4.rotationZ(turnsValue * Math.PI * 2.0)
    return new Transform({
      transform: transform,
      alignment: this.alignment,
      child: this.child,
    })
  }
}

// RotationTransition: function RotationTransition(t0, t1, t2, t3) {
//     var _ = this;
//     _.alignment = t0;
//     _.child = t1;
//     _.listenable = t2;
//     _.key = t3;
//   },

export class SizeTransition extends AnimatedWidget {
  axis?: Axis
  sizeFactor: Animation<number>
  axisAlignment?: number
  child?: Widget
  constructor(args: {
    key?: Key
    axis?: Axis
    sizeFactor: Animation<number>
    axisAlignment?: number
    child?: Widget
  }) {
    super({listenable: args.sizeFactor, key: args.key})
    this.axis = args.axis ?? Axis.vertical
    this.sizeFactor = args.sizeFactor
    this.axisAlignment = args.axisAlignment ?? 0
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    let alignment
    if (this.axis == Axis.vertical) {
      alignment = new AlignmentDirectional(-1.0, this.axisAlignment)
    } else {
      alignment = new AlignmentDirectional(this.axisAlignment, -1.0)
    }
    return new ClipRect({
      child: new Align({
        alignment: alignment,
        child: this.child,
        heightFactor:
          this.axis == Axis.vertical
            ? Math.max(this.sizeFactor.value, 0.0)
            : null,
        widthFactor:
          this.axis == Axis.horizontal
            ? Math.max(this.sizeFactor.value, 0.0)
            : null,
      }),
    })
  }
}

// SizeTransition: function SizeTransition(t0, t1, t2, t3, t4) {
//     var _ = this;
//     _.axis = t0;
//     _.axisAlignment = t1;
//     _.child = t2;
//     _.listenable = t3;
//     _.key = t4;
//   },

export class FadeTransition extends N.FadeTransition {
  constructor(args: {
    key?: Key
    opacity: Animation<number>
    alwaysIncludeSemantics?: boolean
    child?: Widget
  }) {
    super(
      args.opacity,
      args.alwaysIncludeSemantics ?? false,
      args.child,
      args.key?.[octoKey]
    )
  }
}

// FadeTransition: function FadeTransition(t0, t1, t2, t3) {
//     var _ = this;
//     _.opacity = t0;
//     _.alwaysIncludeSemantics = t1;
//     _.child = t2;
//     _.key = t3;
//   },

export class SliverFadeTransition extends N.SliverFadeTransition {
  constructor(args: {
    key?: Key
    opacity: Animation<number>
    alwaysIncludeSemantics?: boolean
    sliver?: Widget
  }) {
    super(
      args.opacity,
      args.alwaysIncludeSemantics ?? false,
      args.sliver,
      args.key?.[octoKey]
    )
  }
}

// SliverFadeTransition: function SliverFadeTransition(t0, t1, t2, t3) {
//     var _ = this;
//     _.opacity = t0;
//     _.alwaysIncludeSemantics = t1;
//     _.child = t2;
//     _.key = t3;
//   },

export class AnimatedBuilder extends AnimatedWidget {
  builder: TransitionBuilder
  child?: Widget

  constructor(args: {
    key?: Key
    animation: Listenable
    builder: TransitionBuilder
    child?: Widget
  }) {
    super({key: args.key, listenable: args.animation})
    this.builder = args.builder
    this.child = args.child
  }

  build(context: BuildContext): Widget {
    return this.builder(context, this.child)
  }
}
