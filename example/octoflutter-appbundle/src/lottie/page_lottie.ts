import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {Env} from '../env'
import {MobilePageLottie} from './mobile_page_lottie'
import {WebPageLottie} from './web_page_lottie'

export class PageLottie extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb && Env.showNormalWebSize
      ? new WebPageLottie()
      : new MobilePageLottie()
  }
}
