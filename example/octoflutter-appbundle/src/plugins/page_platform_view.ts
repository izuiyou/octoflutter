import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {MobilePagePlatformView} from './mobile_page_platform_view'
import {WebPagePlatformView} from './web_page_platform_view'

export class PagePlatformView extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb ? new WebPagePlatformView() : new MobilePagePlatformView()
  }
}
