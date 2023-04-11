import {
  BuildContext,
  Colors,
  Key,
  MaterialApp,
  runApp,
  StatelessWidget,
  TargetPlatform,
  ThemeData,
  Widget,
  WidgetBuilder,
} from '@octoflutter/flutter'
import {PageAnimation} from './animation/page_animation'
import {PageApi} from './api/page_api'
import {PageCustomPaint} from './custom_paint/page_custom_paint'
import {HomePageMobile} from './home/page_home_mobile'
import {HomePageWeb} from './home/page_home_web'
import {PageLottie} from './lottie/page_lottie'
import {PageTransformPageView} from './pageview/page_pageview'
import {PageHttpPlugin} from './plugins/page_http_plugin'
import {PagePlatformView} from './plugins/page_platform_view'
import {PageVideo} from './plugins/page_video_plugin'
import {PageNestedRefresh} from './refresh/page_nested_refresh'

class MyApp extends StatelessWidget {
  constructor(args?: {key?: Key}) {
    super(args)
  }

  build(context: BuildContext): Widget {
    return new MaterialApp({
      title: 'OctoFlutter',
      theme: new ThemeData({
        primarySwatch: Colors.blue,
        platform: kIsWeb ? null : TargetPlatform.android,
      }),
      home: kIsWeb ? new HomePageWeb() : new HomePageMobile(),
      routes: new Map<string, WidgetBuilder>([
        ['/page_animation', (ctx) => new PageAnimation()],
        ['/page_custom_paint', (ctx) => new PageCustomPaint()],
        ['/page_lottie', (ctx) => new PageLottie()],
        ['/page_transform_pv', (ctx) => new PageTransformPageView()],
        ['/page_nested_refresh', (ctx) => new PageNestedRefresh()],
        ['/page_plugin_http', (ctx) => new PageHttpPlugin()],
        ['/page_plugin_video', (ctx) => new PageVideo()],
        ['/page_platform_view', (ctx) => new PagePlatformView()],
        ['/page_api', (ctx) => new PageApi()],
      ]),
    })
  }
}

function main() {
  runApp(new MyApp())
}
