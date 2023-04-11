import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {kCodeCustomPaint} from '../constants'
import {commCodeSamplePage} from '../common_widgets'
import {CODE_CUSTOM_PAINT} from '../plugins/codes'
import {MobilePageCustomPaint} from './mobile_page_custom_paint'

export class WebPageCustomPaint extends StatelessWidget {
  build(context: BuildContext): Widget {
    return commCodeSamplePage(
      'PageCustomPaint',
      CODE_CUSTOM_PAINT,
      kCodeCustomPaint,
      new MobilePageCustomPaint(true)
    )
  }
}
