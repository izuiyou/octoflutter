import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {Env} from '../env'
import {MobilePageTransformPageView} from './mobile_page_pageview'
import {WebPageTransformView} from './web_page_pageview'

export class PageTransformPageView extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb && Env.showNormalWebSize
      ? new WebPageTransformView()
      : new MobilePageTransformPageView()
  }
}
