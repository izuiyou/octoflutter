import {BuildContext, StatelessWidget, Widget} from '@octoflutter/flutter'
import {Env} from '../env'
import {MobilePageNestedRefresh} from './mobile_page_nested_refresh'
import {WebPageNestedRefresh} from './web_page_nested_refresh'

export class PageNestedRefresh extends StatelessWidget {
  build(context: BuildContext): Widget {
    return kIsWeb && Env.showNormalWebSize
      ? new WebPageNestedRefresh()
      : new MobilePageNestedRefresh()
  }
}
