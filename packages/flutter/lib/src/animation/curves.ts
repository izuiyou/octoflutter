import {clampNumber} from '@octoflutter/dartsdk'

abstract class ParametricCurve<T> extends N.OctoCurve {
  constructor() {
    super()
  }

  private anp(t: any) {
    return this.transform(t)
  }

  transform(t: number): T {
    return this.transformInternal(t)
  }

  abstract transformInternal(t: number): T
}

export abstract class Curve extends ParametricCurve<number> {
  constructor() {
    super()
  }

  transform(t: number) {
    if (t == 0.0 || t == 1.0) {
      return t
    }
    return super.transform(t)
  }

  get flipped(): Curve {
    return new FlippedCurve(this)
  }
}

export class FlippedCurve extends Curve {
  curve: Curve

  constructor(curve: Curve) {
    super()
    this.curve = curve
  }

  transformInternal(t: number) {
    return 1.0 - this.curve.transform(1.0 - t)
  }
}

export class _Linear extends Curve {
  transformInternal(t: number) {
    return t
  }
}

export class SawTooth extends Curve {
  count: number
  constructor(count: number) {
    super()
    this.count = count
  }

  transformInternal(t: number) {
    t *= this.count
    return t - Math.floor(t)
  }
}

export class Interval extends Curve {
  begin: number
  end: number
  curve: Curve
  constructor(begin: number, end: number, curve?: Curve) {
    super()
    this.begin = begin
    this.end = end
    this.curve = curve ?? new _Linear()
  }

  transformInternal(t: number) {
    t = clampNumber((t - this.begin) / (this.end - this.begin), 0, 1)
    if (t === 0.0 || t === 1.0) return t
    return this.curve.transform(t)
  }
}

export class Threshold extends Curve {
  threshold: number
  constructor(threshold: number) {
    super()
    this.threshold = threshold
  }

  transformInternal(t: number) {
    return t < this.threshold ? 0.0 : 1.0
  }
}

export class Cubic extends Curve {
  a: number
  b: number
  c: number
  d: number
  constructor(a: number, b: number, c: number, d: number) {
    super()
    this.a = a
    this.b = b
    this.c = c
    this.d = d
  }

  static _cubicErrorBound = 0.001

  _evaluateCubic(a: number, b: number, m: number) {
    return 3 * a * (1 - m) * (1 - m) * m + 3 * b * (1 - m) * m * m + m * m * m
  }

  transformInternal = (t: number) => {
    let t1, t2, start, end, midpoint, estimate
    for (t1 = this.a, t2 = this.c, start = 0, end = 1; ; ) {
      midpoint = (start + end) / 2
      estimate = this._evaluateCubic(t1, t2, midpoint)
      if (Math.abs(t - estimate) < 0.001)
        return this._evaluateCubic(this.b, this.d, midpoint)
      if (estimate < t) start = midpoint
      else end = midpoint
    }
  }
}

export class Curves {
  /// A linear animation curve.
  ///
  /// This is the identity map over the unit interval: its [Curve.transform]
  /// method returns its input unmodified. This is useful as a default curve for
  /// cases where a [Curve] is required but no actual curve is desired.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_linear.mp4}
  static linear: Curve = new _Linear()

  /// A curve where the rate of change starts out quickly and then decelerates; an
  /// upside-down `f(t) = t²` parabola.
  ///
  /// This is equivalent to the Android `DecelerateInterpolator` class with a unit
  /// factor (the default factor).
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_decelerate.mp4}
  // static decelerate: Curve = _DecelerateCurve._();

  /// A curve that is very steep and linear at the beginning, but quickly flattens out
  /// and very slowly eases in.
  ///
  /// By default is the curve used to animate pages on iOS back to their original
  /// position if a swipe gesture is ended midway through a swipe.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_fast_linear_to_slow_ease_in.mp4}
  static fastLinearToSlowEaseIn: Cubic = new Cubic(0.18, 1.0, 0.04, 1.0)

  /// A cubic animation curve that speeds up quickly and ends slowly.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease.mp4}
  static ease: Cubic = new Cubic(0.25, 0.1, 0.25, 1.0)

  /// A cubic animation curve that starts slowly and ends quickly.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in.mp4}
  static easeIn: Cubic = new Cubic(0.42, 0.0, 1.0, 1.0)

  /// A cubic animation curve that starts starts slowly and ends linearly.
  ///
  /// The symmetric animation to [linearToEaseOut].
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_to_linear.mp4}
  static easeInToLinear: Cubic = new Cubic(0.67, 0.03, 0.65, 0.09)

  /// A cubic animation curve that starts slowly and ends quickly. This is
  /// similar to [Curves.easeIn], but with sinusoidal easing for a slightly less
  /// abrupt beginning and end. Nonetheless, the result is quite gentle and is
  /// hard to distinguish from [Curves.linear] at a glance.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_sine.mp4}
  static easeInSine: Cubic = new Cubic(0.47, 0.0, 0.745, 0.715)

  /// A cubic animation curve that starts slowly and ends quickly. Based on a
  /// quadratic equation where `f(t) = t²`, this is effectively the inverse of
  /// [Curves.decelerate].
  ///
  /// Compared to [Curves.easeInSine], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_quad.mp4}
  static easeInQuad: Cubic = new Cubic(0.55, 0.085, 0.68, 0.53)

  /// A cubic animation curve that starts slowly and ends quickly. This curve is
  /// based on a cubic equation where `f(t) = t³`. The result is a safe sweet
  /// spot when choosing a curve for widgets animating off the viewport.
  ///
  /// Compared to [Curves.easeInQuad], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_cubic.mp4}
  static easeInCubic: Cubic = new Cubic(0.55, 0.055, 0.675, 0.19)

  /// A cubic animation curve that starts slowly and ends quickly. This curve is
  /// based on a quartic equation where `f(t) = t⁴`.
  ///
  /// Animations using this curve or steeper curves will benefit from a longer
  /// duration to avoid motion feeling unnatural.
  ///
  /// Compared to [Curves.easeInCubic], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_quart.mp4}
  static easeInQuart: Cubic = new Cubic(0.895, 0.03, 0.685, 0.22)

  /// A cubic animation curve that starts slowly and ends quickly. This curve is
  /// based on a quintic equation where `f(t) = t⁵`.
  ///
  /// Compared to [Curves.easeInQuart], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_quint.mp4}
  static easeInQuint: Cubic = new Cubic(0.755, 0.05, 0.855, 0.06)

  /// A cubic animation curve that starts slowly and ends quickly. This curve is
  /// based on an exponential equation where `f(t) = 2¹⁰⁽ᵗ⁻¹⁾`.
  ///
  /// Using this curve can give your animations extra flare, but a longer
  /// duration may need to be used to compensate for the steepness of the curve.
  ///
  /// Compared to [Curves.easeInQuint], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_expo.mp4}
  static easeInExpo: Cubic = new Cubic(0.95, 0.05, 0.795, 0.035)

  /// A cubic animation curve that starts slowly and ends quickly. This curve is
  /// effectively the bottom-right quarter of a circle.
  ///
  /// Like [Curves.easeInExpo], this curve is fairly dramatic and will reduce
  /// the clarity of an animation if not given a longer duration.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_circ.mp4}
  static easeInCirc: Cubic = new Cubic(0.6, 0.04, 0.98, 0.335)

  /// A cubic animation curve that starts slowly and ends quickly. This curve
  /// is similar to [Curves.elasticIn] in that it overshoots its bounds before
  /// reaching its end. Instead of repeated swinging motions before ascending,
  /// though, this curve overshoots once, then continues to ascend.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_back.mp4}
  static easeInBack: Cubic = new Cubic(0.6, -0.28, 0.735, 0.045)

  /// A cubic animation curve that starts quickly and ends slowly.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out.mp4}
  static easeOut: Cubic = new Cubic(0.0, 0.0, 0.58, 1.0)

  /// A cubic animation curve that starts linearly and ends slowly.
  ///
  /// A symmetric animation to [easeInToLinear].
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_linear_to_ease_out.mp4}
  static linearToEaseOut: Cubic = new Cubic(0.35, 0.91, 0.33, 0.97)

  /// A cubic animation curve that starts quickly and ends slowly. This is
  /// similar to [Curves.easeOut], but with sinusoidal easing for a slightly
  /// less abrupt beginning and end. Nonetheless, the result is quite gentle and
  /// is hard to distinguish from [Curves.linear] at a glance.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_sine.mp4}
  static easeOutSine: Cubic = new Cubic(0.39, 0.575, 0.565, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This is
  /// effectively the same as [Curves.decelerate], only simulated using a cubic
  /// bezier function.
  ///
  /// Compared to [Curves.easeOutSine], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_quad.mp4}
  static easeOutQuad: Cubic = new Cubic(0.25, 0.46, 0.45, 0.94)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// a flipped version of [Curves.easeInCubic].
  ///
  /// The result is a safe sweet spot when choosing a curve for animating a
  /// widget's position entering or already inside the viewport.
  ///
  /// Compared to [Curves.easeOutQuad], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_cubic.mp4}
  static easeOutCubic: Cubic = new Cubic(0.215, 0.61, 0.355, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// a flipped version of [Curves.easeInQuart].
  ///
  /// Animations using this curve or steeper curves will benefit from a longer
  /// duration to avoid motion feeling unnatural.
  ///
  /// Compared to [Curves.easeOutCubic], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_quart.mp4}
  static easeOutQuart: Cubic = new Cubic(0.165, 0.84, 0.44, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// a flipped version of [Curves.easeInQuint].
  ///
  /// Compared to [Curves.easeOutQuart], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_quint.mp4}
  static easeOutQuint: Cubic = new Cubic(0.23, 1.0, 0.32, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// a flipped version of [Curves.easeInExpo]. Using this curve can give your
  /// animations extra flare, but a longer duration may need to be used to
  /// compensate for the steepness of the curve.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_expo.mp4}
  static easeOutExpo: Cubic = new Cubic(0.19, 1.0, 0.22, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// effectively the top-left quarter of a circle.
  ///
  /// Like [Curves.easeOutExpo], this curve is fairly dramatic and will reduce
  /// the clarity of an animation if not given a longer duration.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_circ.mp4}
  static easeOutCirc: Cubic = new Cubic(0.075, 0.82, 0.165, 1.0)

  /// A cubic animation curve that starts quickly and ends slowly. This curve is
  /// similar to [Curves.elasticOut] in that it overshoots its bounds before
  /// reaching its end. Instead of repeated swinging motions after ascending,
  /// though, this curve only overshoots once.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_out_back.mp4}
  static easeOutBack: Cubic = new Cubic(0.175, 0.885, 0.32, 1.275)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out.mp4}
  static easeInOut: Cubic = new Cubic(0.42, 0.0, 0.58, 1.0)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This is similar to [Curves.easeInOut], but with sinusoidal easing
  /// for a slightly less abrupt beginning and end.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_sine.mp4}
  static easeInOutSine: Cubic = new Cubic(0.445, 0.05, 0.55, 0.95)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInQuad] as the first
  /// half, and [Curves.easeOutQuad] as the second.
  ///
  /// Compared to [Curves.easeInOutSine], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_quad.mp4}
  static easeInOutQuad: Cubic = new Cubic(0.455, 0.03, 0.515, 0.955)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInCubic] as the first
  /// half, and [Curves.easeOutCubic] as the second.
  ///
  /// The result is a safe sweet spot when choosing a curve for a widget whose
  /// initial and final positions are both within the viewport.
  ///
  /// Compared to [Curves.easeInOutQuad], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_cubic.mp4}
  static easeInOutCubic: Cubic = new Cubic(0.645, 0.045, 0.355, 1.0)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInQuart] as the first
  /// half, and [Curves.easeOutQuart] as the second.
  ///
  /// Animations using this curve or steeper curves will benefit from a longer
  /// duration to avoid motion feeling unnatural.
  ///
  /// Compared to [Curves.easeInOutCubic], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_quart.mp4}
  static easeInOutQuart: Cubic = new Cubic(0.77, 0.0, 0.175, 1.0)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInQuint] as the first
  /// half, and [Curves.easeOutQuint] as the second.
  ///
  /// Compared to [Curves.easeInOutQuart], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_quint.mp4}
  static easeInOutQuint: Cubic = new Cubic(0.86, 0.0, 0.07, 1.0)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly.
  ///
  /// Since this curve is arrived at with an exponential function, the midpoint
  /// is exceptionally steep. Extra consideration should be taken when designing
  /// an animation using this.
  ///
  /// Compared to [Curves.easeInOutQuint], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_expo.mp4}
  static easeInOutExpo: Cubic = new Cubic(1.0, 0.0, 0.0, 1.0)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInCirc] as the first
  /// half, and [Curves.easeOutCirc] as the second.
  ///
  /// Like [Curves.easeInOutExpo], this curve is fairly dramatic and will reduce
  /// the clarity of an animation if not given a longer duration.
  ///
  /// Compared to [Curves.easeInOutExpo], this curve is slightly steeper.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_circ.mp4}
  static easeInOutCirc: Cubic = new Cubic(0.785, 0.135, 0.15, 0.86)

  /// A cubic animation curve that starts slowly, speeds up, and then ends
  /// slowly. This curve can be imagined as [Curves.easeInBack] as the first
  /// half, and [Curves.easeOutBack] as the second.
  ///
  /// Since two curves are used as a basis for this curve, the resulting
  /// animation will overshoot its bounds twice before reaching its end - first
  /// by exceeding its lower bound, then exceeding its upper bound and finally
  /// descending to its final position.
  ///
  /// Derived from Robert Penner’s easing functions.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_ease_in_out_back.mp4}
  static easeInOutBack: Cubic = new Cubic(0.68, -0.55, 0.265, 1.55)

  /// A curve that starts quickly and eases into its final position.
  ///
  /// Over the course of the animation, the object spends more time near its
  /// final destination. As a result, the user isn’t left waiting for the
  /// animation to finish, and the negative effects of motion are minimized.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_fast_out_slow_in.mp4}
  ///
  /// See also:
  ///
  ///  * [standardEasing], the name for this curve in the Material specification.
  static fastOutSlowIn: Cubic = new Cubic(0.4, 0.0, 0.2, 1.0)

  /// A cubic animation curve that starts quickly, slows down, and then ends
  /// quickly.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_slow_middle.mp4}
  static slowMiddle: Cubic = new Cubic(0.15, 0.85, 0.85, 0.15)

  /// An oscillating curve that grows in magnitude.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_bounce_in.mp4}
  // static  bounceIn:Cubic  = _BounceInCurve._();

  /// An oscillating curve that first grows and then shrink in magnitude.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_bounce_out.mp4}
  // static  bounceOut:Cubic  = _BounceOutCurve._();

  /// An oscillating curve that first grows and then shrink in magnitude.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_bounce_in_out.mp4}
  // static  bounceInOut :Cubic = _BounceInOutCurve._();

  /// An oscillating curve that grows in magnitude while overshooting its bounds.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_elastic_in.mp4}
  // static  elasticIn:Cubic  = ElasticInCurve();

  /// An oscillating curve that shrinks in magnitude while overshooting its bounds.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_elastic_out.mp4}
  // static  elasticOut:Cubic  = ElasticOutCurve();

  /// An oscillating curve that grows and then shrinks in magnitude while overshooting its bounds.
  ///
  /// {@animation 464 192 https://flutter.github.io/assets-for-api-docs/assets/animation/curve_elastic_in_out.mp4}
  // static  elasticInOut:Cubic  = ElasticInOutCurve();
}
