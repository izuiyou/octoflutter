import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {kCodeLottie} from '../constants'
import {commCodeSamplePage} from '../common_widgets'
import {CODE_LOTTIE} from '../plugins/codes'
import {MobilePageLottie} from './mobile_page_lottie'

export class WebPageLottie extends StatelessWidget {
  build(context: BuildContext): Widget {
    return commCodeSamplePage(
      'PageLottie',
      CODE_LOTTIE,
      kCodeLottie,
      new MobilePageLottie(true)
    )
  }
}
