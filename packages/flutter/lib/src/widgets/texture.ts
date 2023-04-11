import {FilterQuality} from '@octoflutter/dartsdk'
import {Key, octoKey} from '../foundation/key'

export class Texture extends N.Texture {
  constructor(args: {
    key?: Key
    textureId: number
    freeze?: boolean
    filterQuality?: FilterQuality
  }) {
    super(
      args.textureId,
      args.freeze ?? false,
      args.filterQuality ?? FilterQuality.low,
      args.key?.[octoKey]
    )
  }
}

// Texture: function Texture(t0, t1, t2, t3) {
//     var _ = this;
//     _.textureId = t0;
//     _.freeze = t1;
//     _.filterQuality = t2;
//     _.key = t3;
//   },
