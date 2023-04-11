import {Color} from '@octoflutter/dartsdk'
import {Colors, kToolbarHeight} from '@octoflutter/flutter'

export const kSize18 = kIsWeb ? 24 : 18
export const kSize16 = kIsWeb ? 20 : 16
export const kSize14 = kIsWeb ? 16 : 14
export const kSizeToolBar = kIsWeb ? 60 : kToolbarHeight
export const kToolBarColor = kIsWeb ? Colors.white : Colors.blue
export const kTitleTextColor = kIsWeb
  ? Color.fromARGB(255, 74, 74, 74)
  : Colors.white
export const kHoverTextColor = Color.fromARGB(255, 4, 104, 215)
export const kHoverBgColor = Color.fromARGB(255, 248, 249, 250)
export const kButtonBgColor = Color.fromARGB(255, 19, 137, 253)
export const kButtonHoverColor = Color.fromARGB(255, 2, 118, 232)
export const kSubTitleColor = kIsWeb
  ? Color.fromARGB(255, 74, 74, 74)
  : Colors.black87

export const kApiItemColor = Color.fromARGB(255, 19, 137, 253)

export const kGitHubUrl = 'https://github.com/izuiyou/octoflutter'

export const kCodeAnimation =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/animation/mobile_page_animation.ts'

export const kCodeCustomPaint =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/custom_paint/mobile_page_custom_paint.ts'

export const kCodeLottie =
  kGitHubUrl + '/example/octoflutter-appbundle/src/lottie/mobile_page_lottie.ts'

export const kCodePageView =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/pageview/mobile_page_pageview.ts'

export const kCodeNestedRefresh =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/refresh/mobile_page_nested_refresh.ts'

export const kCodeHttpPlugin1 =
  kGitHubUrl + '/example/octoflutter-appbundle/src/plugins/http_plugin.ts'

export const kCodeHttpPlugin2 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/plugins/HttpPlugin.kt'

export const kCodeHttpPlugin3 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/plugins/PluginRegister.kt'

export const kCodeVideo1 =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/plugins/video_appbundle_plugin.ts'

export const kCodeVideo2 =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/plugins/video_appbundle_plugin.ts'

export const kCodeVideo3 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/plugins/VideoAppBundlePlugin.kt'

export const kCodeVideo4 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/plugins/PluginRegister.kt'

export const kCodePlatformView1 =
  kGitHubUrl +
  '/example/octoflutter-appbundle/src/plugins/mobile_page_platform_view.ts'

export const kCodePlatformView2 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/platformview/ExamplePlatformViewAppBundlePlugin.kt'

export const kCodePlatformView3 =
  kGitHubUrl +
  '/example/octoflutter-android/app/src/main/java/example/octoflutter/plugins/PluginRegister.kt'
