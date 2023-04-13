import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {kCodeNestedRefresh} from '../constants'
import {commCodeSamplePage} from '../common_widgets'
import {CODE_NESTED_REFRESH} from '../plugins/codes'
import {MobilePageNestedRefresh} from './mobile_page_nested_refresh'

export class WebPageNestedRefresh extends StatelessWidget {
  build(context: BuildContext): Widget {
    return commCodeSamplePage(
      'PageNestedRefresh',
      CODE_NESTED_REFRESH,
      kCodeNestedRefresh,
      new MobilePageNestedRefresh(true)
    )
  }
}
