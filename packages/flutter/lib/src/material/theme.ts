import {convertThemeData} from '../../utils'
import {Key, octoKey} from '../foundation/key'
import {BuildContext, octoThemeData, Widget} from '../widgets/framework'
import {ThemeData} from './theme_data'

export class Theme extends N.Theme {
  constructor(args: {key?: Key; data: ThemeData; child: Widget}) {
    super(args.data, args.child, args.key?.[octoKey])
  }

  static of(context: BuildContext): ThemeData {
    return convertThemeData(context[octoThemeData]())
  }
}

// Theme: function Theme(t0, t1, t2) {
//     this.data = t0;
//     this.child = t1;
//     this.key = t2;
//   },
