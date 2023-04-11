import {Rect, Size} from '@octoflutter/dartsdk'
import {Key, octoKey, Widget} from '@octoflutter/flutter'

export class VisibilityInfo {
  public readonly visibleFraction: number
  public readonly size: Size
  public readonly visibleBounds: Rect

  constructor(real: any) {
    const arr = N.octoVisibilityInfo(real)
    this.visibleFraction = arr[0]
    this.size = new Size(arr[1], arr[2])
    this.visibleBounds = Rect.fromLTRB(arr[3], arr[4], arr[5], arr[6])
  }
}

export type VisibilityChangedCallback = (info: VisibilityInfo) => void

export class VisibilityDetector extends N.VisibilityDetector {
  constructor(args: {
    key: Key
    child: Widget
    onVisibilityChanged: VisibilityChangedCallback
  }) {
    const cb = (info) => {
      args.onVisibilityChanged(new VisibilityInfo(info))
    }
    super(cb, args.child, args.key?.[octoKey])
  }
}

// VisibilityDetector: function VisibilityDetector(t0, t1, t2) {
//     this.onVisibilityChanged = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },
