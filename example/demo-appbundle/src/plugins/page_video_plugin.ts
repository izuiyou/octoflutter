import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {MobilePageVideo} from './mobile_page_video'
import {WebPageVideo} from './web_page_video'

export class PageVideo extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb ? new WebPageVideo() : new MobilePageVideo()
  }
}
