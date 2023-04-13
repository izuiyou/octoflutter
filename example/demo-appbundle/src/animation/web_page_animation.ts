import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {kCodeAnimation} from '../constants'
import {commCodeSamplePage} from '../common_widgets'
import {CODE_ANIMATION} from '../plugins/codes'
import {MobilePageAnimation} from './mobile_page_animation'

export class WebPageAnimation extends StatelessWidget {
  build(context: BuildContext): Widget {
    return commCodeSamplePage(
      'PageAnimation',
      CODE_ANIMATION,
      kCodeAnimation,
      new MobilePageAnimation(true)
    )
  }
}
