import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {Env} from '../env'
import {MobilePageCustomPaint} from './mobile_page_custom_paint'
import {WebPageCustomPaint} from './web_page_custom_paint'

export class PageCustomPaint extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb && Env.showNormalWebSize
      ? new WebPageCustomPaint()
      : new MobilePageCustomPaint()
  }
}
