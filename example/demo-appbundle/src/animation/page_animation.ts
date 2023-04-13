import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {Env} from '../env'
import {MobilePageAnimation} from './mobile_page_animation'
import {WebPageAnimation} from './web_page_animation'

export class PageAnimation extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb && Env.showNormalWebSize
      ? new WebPageAnimation()
      : new MobilePageAnimation()
  }
}
