import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {MobilePageHttpPlugin} from './mobile_page_plugin'
import {WebPageHttpPlugin} from './web_page_plugin'

export class PageHttpPlugin extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb ? new WebPageHttpPlugin() : new MobilePageHttpPlugin()
  }
}
