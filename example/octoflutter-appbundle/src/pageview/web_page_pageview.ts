import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {kCodePageView} from '../constants'
import {commCodeSamplePage} from '../common_widgets'
import {CODE_PAGE_VIEW} from '../plugins/codes'
import {MobilePageTransformPageView} from './mobile_page_pageview'

export class WebPageTransformView extends StatelessWidget {
  build(context: BuildContext): Widget {
    return commCodeSamplePage(
      'PageTransformPageView',
      CODE_PAGE_VIEW,
      kCodePageView,
      new MobilePageTransformPageView(true)
    )
  }
}
