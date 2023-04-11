import {Key, octoKey, ValueKey} from '../foundation/key'
import {BuildContext, octoContext, Widget} from './framework'

export class PageStorageKey<T> extends ValueKey<T> {
  constructor(value: T) {
    super(null)
    this[octoKey] = N.pageStorageKeyInstance(value)
  }
}

export class PageStorageBucket extends N.PageStorageBucket {
  constructor() {
    super()
  }

  writeState(context: BuildContext, data: any, identifier?: any) {
    N.pageStorageBucketWriteState(
      this,
      context[octoContext](),
      data,
      identifier
    )
  }

  readState(context: BuildContext, identifier?: any) {
    return N.pageStorageBucketReadState(
      this,
      context[octoContext](),
      identifier
    )
  }
}

// PageStorageBucket: function PageStorageBucket() {
//     this._storage = null;
//   },

export class PageStorage extends N.PageStorage {
  constructor(args: {key?: Key; bucket: PageStorageBucket; child: Widget}) {
    super(args.child, args.bucket, args.key?.[octoKey])
  }
}

// PageStorage: function PageStorage(t0, t1, t2) {
//     this.child = t0;
//     this.bucket = t1;
//     this.key0 = t2;
//   },
