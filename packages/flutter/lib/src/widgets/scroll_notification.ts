import {BuildContext, Widget} from './framework'
import {ScrollMetrics} from './scroll_metrics'
import {Notification} from './notification_listener'
import {Key, octoKey} from '../foundation/key'
import {isNullOrUndefined} from '@octoflutter/dartsdk'

export class ScrollNotification implements Notification {
  private readonly real: any
  public readonly metrics: ScrollMetrics
  public readonly context: BuildContext
  public readonly depth: number

  constructor(real: any) {
    this.real = real
    const arr = N.attrOfScrollNotification(real)
    this.metrics = new ScrollMetrics(arr[0])
    this.context = new BuildContext(arr[1])
    this.depth = arr[2]
  }
}

export type ScrollNotificationListenerCallback = (
  notification: ScrollNotification
) => boolean

export class ScrollNotificationListener extends N.ScrollNotificationListener {
  constructor(args: {
    child: Widget
    key?: Key
    onNotification?: ScrollNotificationListenerCallback
  }) {
    let cb = null
    if (!isNullOrUndefined(args.onNotification)) {
      cb = (n) => {
        return args.onNotification(new ScrollNotification(n))
      }
    }
    super(args.child, cb, args.key?.[octoKey])
  }
}

// ScrollNotificationListener: function ScrollNotificationListener(t0, t1, t2) {
//     this.child = t0;
//     this.onNotification = t1;
//     this.key0 = t2;
//   },
