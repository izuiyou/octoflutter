export class LangRes {
  home_title: string

  section_start: string
  section_integration: string
  section_basic: string
  section_advanced: string
  section_debug: string
  section_practice: string

  section_start_1: string
  section_start_2: string
  section_integration_1: string
  section_integration_2: string
  section_basic_1: string
  section_basic_2: string
  section_advanced_1: string
  section_advanced_2: string
  section_advanced_3: string
  section_debug_1: string
  section_debug_2: string
  section_debug_3: string
  section_practice_1: string
  section_practice_2: string
  section_practice_3: string
  section_practice_4: string
  section_practice_5: string
  section_practice_6: string
  section_practice_7: string
  section_practice_8: string

  intro_1: string
  intro_2: string
  intro_3: string
  intro_content_1: string
  intro_content_2: string
  intro_content_3: string

  quick_start_1: string
  quick_start_2: string
  quick_start_3: string
  quick_start_4: string
  quick_start_content_1: string
  quick_start_content_2: string
  quick_start_content_3: string
  quick_start_content_4: string

  android_integration_1: string
  android_integration_2: string
  android_integration_3: string
  android_integration_4: string

  android_integration_content_1: string
  android_integration_content_2: string
  android_integration_content_3: string
  android_integration_content_4: string

  android_integration_rich_1: string
  android_integration_rich_2: string
  android_integration_rich_3: string
  android_integration_rich_4: string
  android_integration_rich_5: string
  android_integration_rich_6: string
  android_integration_rich_7: string
  android_integration_rich_8: string
  android_integration_rich_9: string
  android_integration_rich_10: string
  android_integration_rich_11: string
  android_integration_rich_12: string

  ios_integration_1: string
  ios_integration_2: string

  ios_integration_content_1: string
  ios_integration_content_2: string

  ios_integration_rich_1: string
  ios_integration_rich_2: string
  ios_integration_rich_3: string
  ios_integration_rich_4: string
  ios_integration_rich_5: string
  ios_integration_rich_6: string
  ios_integration_rich_7: string
  ios_integration_rich_8: string
  ios_integration_rich_9: string
  ios_integration_rich_10: string
  ios_integration_rich_11: string
  ios_integration_rich_12: string

  basic_config_1: string
  basic_config_2: string
  basic_config_content_1: string
  basic_config_content_2: string
  basic_config_param: string
  basic_config_type: string
  basic_config_des: string
  basic_config_des_fullscreen: string
  basic_config_des_orientation: string
  basic_config_des_scheme: string
  basic_config_des_host: string
  basic_config_des_path: string
  basic_config_des_query1: string
  basic_config_des_query2: string

  basic_widget_1: string
  basic_widget_2: string
  basic_widget_3: string
  basic_widget_4: string
  basic_widget_5: string
  basic_widget_6: string
  basic_widget_content_1: string
  basic_widget_content_2: string
  basic_widget_content_3: string
  basic_widget_content_4: string
  basic_widget_content_5: string
  basic_widget_content_6: string

  advanced_widget_1: string
  advanced_widget_2: string
  advanced_widget_3: string
  advanced_widget_4: string
  advanced_widget_content_1: string
  advanced_widget_content_2: string
  advanced_widget_content_3: string
  advanced_widget_content_4: string

  advanced_eco_1: string
  advanced_eco_content_1: string

  advanced_performance_1: string
  advanced_performance_2: string
  advanced_performance_3: string
  advanced_performance_4: string
  advanced_performance_content_1: string
  advanced_performance_content_2: string
  advanced_performance_content_3: string
  advanced_performance_content_4: string

  debug_1: string
  debug_2: string
  debug_3: string

  custom_paint_tip: string
  plugin_4_engine_tip: string
  video_play: string
  video_pause: string
  video_replay: string
  platform_view_tip: string

  plugin_tip_1: string
  plugin_tip_2: string
  plugin_tip_3: string

  api_tip: string
}

function generateZh() {
  const res = new LangRes()
  res.home_title = 'OctoFlutter'
  res.section_start = '开始'
  res.section_integration = '集成'
  res.section_basic = '基础'
  res.section_advanced = '高阶'
  res.section_debug = '调试'
  res.section_practice = '实践'
  res.section_start_1 = '简介'
  res.section_start_2 = '快速上手'
  res.section_integration_1 = 'Android集成'
  res.section_integration_2 = 'iOS集成'
  res.section_basic_1 = '业务配置'
  res.section_basic_2 = '常用Widget简介'
  res.section_advanced_1 = '高阶组件'
  res.section_advanced_2 = 'TS/JS生态'
  res.section_advanced_3 = '性能优化'
  res.section_debug_1 = '在浏览器中调试'
  res.section_debug_2 = '移动设备预览及Hot Restart'
  res.section_debug_3 = '调试移动设备上的JS'
  res.section_practice_1 = '动画'
  res.section_practice_2 = 'CustomPaint'
  res.section_practice_3 = 'Lottie'
  res.section_practice_4 = 'PageView'
  res.section_practice_5 = '嵌套联动刷新'
  res.section_practice_6 = 'FlutterPlugin'
  res.section_practice_7 = 'AppBundlePlugin'
  res.section_practice_8 = 'PlatformView'

  res.intro_1 = 'OctoFlutter是什么？'
  res.intro_2 = 'OctoFlutter能做什么？'
  res.intro_3 = 'OctoFlutter适合哪些开发者？'
  res.intro_content_1 =
    'OctoFlutter是一个基于Flutter的UI框架，是Flutter Web与Flutter Mobile的一种混合体，以一种全新的思路去实现双端动态化且打通JS/TS生态，拥有跟Flutter一致的开发体验。'
  res.intro_content_2 =
    '理论上来说，Flutter能做到的事情，在OctoFlutter中都可以做到，除此之外，OctoFlutter还在Flutter的基础上进一步演进，支持多AppBundle业务模块动态装载/卸载，共享同一Engine。比较适合独立闭环的业务场景，以及小游戏场景等。'
  res.intro_content_3 =
    '1.一些TypeScript开发经验 \n2.一些Flutter开发经验 \n如果同时具备以上两点，那么学习OctoFlutter将是非常简单的事情，你可能只需要几分钟就能上手，如果不具备也不用担心，都很简单，可以通过本项目源码逐渐深入学习。'

  res.quick_start_1 = '开发工具'
  res.quick_start_2 = '脚手架'
  res.quick_start_3 = '业务工程'
  res.quick_start_4 = '样例查看'

  res.quick_start_content_1 =
    'OctoFlutter是一个面向TypeScript的新型Flutter框架，所以天然融入前端生态，这里推荐使用Visual Studio Code进行开发。'
  res.quick_start_content_2 =
    '1.安装 [pnpm add -g @octoflutter/cli]\n2.提供的常用命令\n[pnpm octoflutter -v]可查看当前@octoflutter/cli版本\n[octoflutter create app] 可以在当前目录下创建名为app的模板工程'
  res.quick_start_content_3 =
    '1:cd到app根目录，执行[pnpm install],安装依赖,开发者可按需修改package.json中@octoflutter/flutter,@octoflutter/dartsdk到某一个版本\n2:[pnpm dw] 在业务工程执行，可以通过http://localhost:54321 在浏览器中预览调试等\n3:[pnpm dm] 在业务工程执行，可以在build/output下生成适合mobile运行的zip文件'
  res.quick_start_content_4 = '参考本项目源码或test目录下测试工程'

  res.android_integration_1 = '简易集成'
  res.android_integration_2 = '高阶集成'
  res.android_integration_3 = '注意事项'

  res.android_integration_content_1 = `  1.创建一个Android工程
  2.本地集成
    复制 octoflutter.jar 到你的项目libs目录下, 你可以在artifact目录下找到它
    配置 build.gradle
      api files('libs/octoflutter.jar')
    
  3.实现 ImageDataProvider , 你可以参考本工程的 [FrescoImageProvider](./support/src/main/java/com/example/support/FrescoImageProvider.java)
  4.实现 Ambient , 你可以参考本工程的 [LocalAndRemoteAmbientImpl](./support/src/main/java/com/example/support/local/LocalAndRemoteAmbientImpl.java)
  5.继承 AbsBundleSupport , 你可以参考本工程的 [AppBundleSupportImpl](./support/src/main/java/com/example/support/AppBundleSupportImpl.java)
  6.继承 AbsOctoFlutterActivity, 你可以参考本工程的 [AppBundleActivity](./app/src/main/java/example/octoflutter/AppBundleActivity.kt)
  7.如果你想在手机上调试js需要额外实现 DevEnvSupplier 和 DevEnvProvider , 你可以参考本工程的 [AppBundleDevSupplier](./support/src/main/java/com/example/support/AppBundleDevSupplier.java)
  `
  res.android_integration_content_2 = `一般来说，在 octoflutter.jar 中cn.xiaochuankeji.support目录下所有的源码都可以自己去实现，这种方式可以让你更灵活的去管理Engine和Activity等，但需要实现的逻辑也更多，你需要实现OctoFlutterSupport以及它背后关联的HttpCallProvider、ImageDataProvider、OctoResourceSettings、OctoJsWatcher等，OctoResourceSettings主要为Engine提供js内容以及资源文件。
  `
  res.android_integration_content_3 =
    'octoflutter最小支持的Android系统版本为5.0，即minSdk >= 21。\noctoflutter不包含x86架构，请使用真机测试。'

  res.android_integration_rich_1 = `1.创建一个Android工程
2.本地集成
    复制 octoflutter.jar 到你的项目libs目录下, 你可以在artifact目录下找到`
  res.android_integration_rich_2 = '它'
  res.android_integration_rich_3 = `\n    配置 build.gradle
  api files('libs/octoflutter.jar')

3.实现 ImageDataProvider , 你可以参考本工程的 `
  res.android_integration_rich_4 = 'FrescoImageProvider'
  res.android_integration_rich_5 = '\n4.实现 Ambient , 你可以参考本工程的 '
  res.android_integration_rich_6 = 'LocalAndRemoteAmbientImpl'
  res.android_integration_rich_7 =
    ' \n5.继承 AbsBundleSupport , 你可以参考本工程的'
  res.android_integration_rich_8 = 'AppBundleSupportImpl'
  res.android_integration_rich_9 =
    '\n6.继承 AbsOctoFlutterActivity, 你可以参考本工程的'
  res.android_integration_rich_10 = 'AppBundleActivity'
  res.android_integration_rich_11 =
    '\n7.如果你想在手机上调试js需要额外实现 DevEnvSupplier 和 DevEnvProvider , 你可以参考本工程的'
  res.android_integration_rich_12 = 'AppBundleDevSupplier'

  res.ios_integration_1 = '简易集成'
  res.ios_integration_2 = '注意事项'

  res.ios_integration_content_1 = `  1、打开iOS项目，如果还没有，请创建一个新的项目
  2、通过“添加文件”的方式添加 OctoFlutter.framework 到您的项目中, 你可以在artifact目录下找到它
  3、XCode项目设置
    • "General" - "Frameworks,Libraries,and Embedded Content" - "OctoFlutter.framework"设为"Embed & Sign"
    • "Build Settings" - "Enable Bitcode"设为"NO"
    • "Build Settings" - "Validate Workspace"设为"YES"
  4、接入代码
    • 构建OFOpenConfig，参考本工程的OFOpenManager
    • 创建OFAppEngine，参考本工程的OFOpenManager
    • 使用OFBaseViewController或继承自它的类，参考本工程的OFAppViewController和OFAppContainerController
    • 注册channel（类似Flutter的插件），参考本工程的OFMCHttp和OFAppBundleMCVideo
  `
  res.ios_integration_content_2 = `  • OctoFlutter支持的最小系统版本为iOS 10.0
  • OctoFlutter不支持iOS模拟器，请使用真机调试
  `

  res.ios_integration_rich_1 = `1、打开iOS项目，如果还没有，请创建一个新的项目
2、通过“添加文件”的方式添加 OctoFlutter.framework 到您的项目中, 你可以在artifact目录下找到`
  res.ios_integration_rich_2 = '它'
  res.ios_integration_rich_3 = `\n3、XCode项目设置
  • "General" - "Frameworks,Libraries,and Embedded Content" - "OctoFlutter.framework"设为"Embed & Sign"
  • "Build Settings" - "Enable Bitcode"设为"NO"
  • "Build Settings" - "Validate Workspace"设为"YES"
4、接入代码
  • 构建OFOpenConfig，参考本工程的`
  res.ios_integration_rich_4 = 'OFOpenManager'
  res.ios_integration_rich_5 = '\n  • 创建OFAppEngine，参考本工程的'
  res.ios_integration_rich_6 =
    '\n  • 使用OFBaseViewController或继承自它的类，参考本工程的'
  res.ios_integration_rich_7 = '和'
  res.ios_integration_rich_8 = 'OFAppViewController'
  res.ios_integration_rich_9 = 'OFAppContainerController'
  res.ios_integration_rich_10 =
    '\n  • 注册channel（类似Flutter的插件），参考本工程的'
  res.ios_integration_rich_11 = 'OFMCHttp'
  res.ios_integration_rich_12 = 'OFAppBundleMCVideo'

  res.basic_config_1 = 'AppBundle配置'
  res.basic_config_2 = '路由协议'
  res.basic_config_content_1 =
    '业务相关的配置基本都集中在package.json文件中，\nname代表此业务的bundle名。如果开发者想支持动态下发，可以自行搭建小程序资源管理平台以及自定义端上的路由协议，以example工程为例，路由协议中的host部分为bundle名，当路由到原生OctoFlutter容器时，向资源管理平台请求此bundle对应的业务zip。\n\nocto代表OctoFlutter拓展的配置，assets指明资源所存放的根目录，fullScreen代表此业务是不是需要全屏模式，orientation代表容器方向，默认是竖屏，开发者可自行添加与容器相关的属性控制，除assets外的字段都会被打入业务zip的manifest'
  res.basic_config_content_2 =
    '例：flutter://bundle/main?from=my&transparent=1，\n此协议只用于举例说明，开发者可以根据自身实际情况高度定制。'
  res.basic_config_param = '字段名'
  res.basic_config_type = '类型'
  res.basic_config_des = '说明'
  res.basic_config_des_fullscreen = '容器是否全屏显示'
  res.basic_config_des_orientation =
    '容器方向 ,取值是portraitUp、portraitDown、landscapeLeft、landscapeRight中的某一个'
  res.basic_config_des_scheme = 'URI协议头'
  res.basic_config_des_host = 'URI host，表示某个业务bundle名'
  res.basic_config_des_path = 'URI path，表示路由到某个页面'
  res.basic_config_des_query1 = 'URI query，表示来源'
  res.basic_config_des_query2 =
    'URI query，表示是否是透明容器样式，1表示是，一般用作弹窗'

  res.basic_widget_1 = '文本'
  res.basic_widget_2 = '图片'
  res.basic_widget_3 = '手势'
  res.basic_widget_4 = '容器'
  res.basic_widget_5 = '列表'
  res.basic_widget_6 = '路由'
  res.basic_widget_content_1 =
    'Text或者RichText，Text一般用于简单样式的文本展示，需要注意使用时是否从@octoflutter/flutter导入Text，RichText用于较为复杂的富文本展示'
  res.basic_widget_content_2 =
    'Image或者OctoImage，推荐使用OctoImage，在Mobile上OctoImage背后打通了端上的图片框架，能复用一部分端能力，在Web上OctoImage等价于Image'
  res.basic_widget_content_3 =
    'GestureDector，主要用于监听单击、双击、长按等多种事件'
  res.basic_widget_content_4 =
    '如果要表示层级关系，可以使用Stack，横向排列可以使用Row，纵向排列使用Column,自适应换行排列使用Wrap'
  res.basic_widget_content_5 =
    '当数据量小于一定量时，在@octoflutter/octo中提供了OctoListView，相较于@octoflutter/flutter中的ListView在滑动体验上更具备优势'
  res.basic_widget_content_6 =
    '使用Navigator，目前OctoFlutter支持Navigator 1.0全部能力以及Navigator 2.0绝大部分能力，支持动态管理Page，暂不支持自定义RouteInformationParser。'

  res.advanced_widget_1 = 'FlutterPlugin'
  res.advanced_widget_2 = 'AppBundlePlugin'
  res.advanced_widget_3 = '外接纹理'
  res.advanced_widget_4 = 'PlatformView'
  res.advanced_widget_content_1 =
    'FlutterPlugin的使用方式与原生Flutter基本一致，不同点在于，共享模式下，FlutterPlugin是面向于整个Engine的能力，不面向于某个具体的业务，如果需要面向业务提供特殊能力，请使用AppBundlePlugin。独占模式下，由于Engine与业务唯一绑定，此时FlutterPlugin等价于AppBundlePlugin。'
  res.advanced_widget_content_2 =
    '一般是面向具体业务或者容器的特殊能力，其使用与FlutterPlugin类似，相关的方法调用、事件回调也需要使用AppBundleMethodChannel、AppBundleEventChannel。具体可参考本工程中的示例。'
  res.advanced_widget_content_3 =
    'OctoFlutter支持移动端外接纹理渲染，例如使用原生的播放器，将视频数据渲染到外接纹理上，最终在OctoFlutter中呈现。具体可参考本工程中的示例。'
  res.advanced_widget_content_4 =
    'OctoFlutter支持PlatformView,由于共享模式的需要，额外提供了AppbundleAndroidView和AppbundleUiKitView。具体可参考本工程中的示例。'

  res.advanced_eco_1 = '使用TS/JS生态'
  res.advanced_eco_content_1 =
    'OctoFlutter中可以使用与dom无关的package，例如：class-transformer、protobuf-ts、pinyin-pro等等。'

  res.advanced_performance_1 = '使用OctoRepaintBoundary优化复杂静态子树'
  res.advanced_performance_2 = '使用OctoImage'
  res.advanced_performance_3 = '尝试OctoListView'
  res.advanced_performance_4 = '使用DelayWidget或FrameSeparateWidget'
  res.advanced_performance_content_1 =
    'OctoRepaintBoundary是比RepaintBoundary更为激进的性能优化控件，它会将其子树进行光栅化，直接生成RasterCache，在无状态更新的复杂子树且包含大量静态图片的场景可以使用，但也要慎用，使用RasterCache会带来GPU内存的增长，应该有限度的使用。'
  res.advanced_performance_content_2 = 'OctoImage会复用端上的图片加载框架'
  res.advanced_performance_content_3 =
    '当数据量小于一定量时，OctoListView相较于ListView更加顺滑'
  res.advanced_performance_content_4 =
    '有时候高负荷场景会影响页面进入的动画流畅度，可以考虑延迟加载高负荷场景或者采用FrameSeparateWidget进行分帧'

  res.debug_1 =
    '执行pnpm dw编译成功后，可以通预览调试，跟前端开发调试一样，完全融入前端生态的调试体验，在浏览器中打开http://localhost:54321.'
  res.debug_2 =
    '执行pnpm dm编译成功后，可以通过将请求资源接口mock到本地编译输出的mock.json，或者输入开发机ip，在移动设备上预览以及Hot Restart等。具体可参考example下android/ios工程。'
  res.debug_3 =
    'Android端可以通过查看AppBundleDevSupplier Tag输出的端口号，连接USB，在Android工程./dev下执行[ sh octo_flutter_dev.sh $port]，通过借助Chrome Dev Tools进行调试。\n\niOS端可通过Safari挂载JSContext进行调试。'

  res.custom_paint_tip = '点+号显示CustomPaint ProgressDrawable，再点取消'
  res.plugin_4_engine_tip = '点+号测试发出请求：'
  res.video_play = '播放'
  res.video_pause = '暂停'
  res.video_replay = '重播'
  res.platform_view_tip =
    '由于目前OctoFlutter Android侧采用的是VirtualDisplay方案去实现PlatformView，继承了Flutter本身的一些问题，比如Android Q版本以后某些机型上无法唤起软键盘，推荐尽量采用Flutter提供的文字输入，尽量规避与软键盘相关的PlatformView场景，此处用EditText举例实为反例告诫开发者存在的风险点，不推荐这样使用，具体原因可以参考这些issue进行了解:'

  res.plugin_tip_1 = '以Android端为例：'
  res.plugin_tip_2 = '添加到Engine中：'
  res.plugin_tip_3 = '添加到AppBundle中：'

  res.api_tip =
    '目前OctoFlutter还没有支持Flutter所有的Widget，此处列出所有支持的Api，针对某个Api的具体作用，请参阅Flutter文档。'
  return res
}

function generateEn() {
  const res = new LangRes()
  res.home_title = 'OctoFlutter'
  res.section_start = 'Get started'
  res.section_integration = 'Integration'
  res.section_basic = 'Basic'
  res.section_advanced = 'Advanced'
  res.section_debug = 'Debug'
  res.section_practice = 'Practice'
  res.section_start_1 = 'Introduction'
  res.section_start_2 = 'Quick start'
  res.section_integration_1 = 'Android Integration'
  res.section_integration_2 = 'iOS Integration'
  res.section_basic_1 = 'Configuration'
  res.section_basic_2 = 'Common widgets'
  res.section_advanced_1 = 'Advanced abilities'
  res.section_advanced_2 = 'TS/JS ecosystem'
  res.section_advanced_3 = 'Performance & Optimization'
  res.section_debug_1 = 'Debug in browser'
  res.section_debug_2 = 'Preview on mobile & Hot Restart'
  res.section_debug_3 = 'Debug JS on mobile'
  res.section_practice_1 = 'Animation'
  res.section_practice_2 = 'CustomPaint'
  res.section_practice_3 = 'Lottie'
  res.section_practice_4 = 'PageView'
  res.section_practice_5 = 'NestedRefresh'
  res.section_practice_6 = 'FlutterPlugin'
  res.section_practice_7 = 'AppBundlePlugin'
  res.section_practice_8 = 'PlatformView'

  res.intro_1 = 'What is OctoFlutter?'
  res.intro_2 = 'What OctoFlutter can do?'
  res.intro_3 = 'Who is more friendly to OctoFlutter?'

  res.intro_content_1 =
    'OctoFlutter is a UI framework based on Flutter, which is a hybrid of Flutter Web and Flutter Mobile. It uses a new approach to achieve Flutter dynamic and cross to the JS/TS ecosystem, and has a consistent development experience with Flutter.'
  res.intro_content_2 =
    'Theoretically, everything that Flutter can do can be done in OctoFlutter. In addition, OctoFlutter has further evolved on the basis of Flutter, supporting dynamic load/unload of multiple AppBundle, and sharing the same engine. It is suitable for independent business scenarios, as well as small game scenarios.'
  res.intro_content_3 =
    '1.TypeScript development experience.\n2.Flutter development experience.\nIf you have both of the above, learning OctoFlutter will be a very simple matter, and you may only need a few minutes to get started. If you don’t have it, don‘t worry, it‘s all simple. You can gradually deepen your learning through the source code of this project.'

  res.quick_start_1 = 'IDE'
  res.quick_start_2 = 'Toolchain'
  res.quick_start_3 = 'App project'
  res.quick_start_4 = 'Example'

  res.quick_start_content_1 =
    'OctoFlutter is a new type of Flutter framework for TypeScript, so it naturally integrates into the front-end ecosystem. It is recommended to use Visual Studio Code for development.'
  res.quick_start_content_2 =
    '1.[pnpm add -g @octoflutter/cli]\n2.common commands provided\n[pnpm octoflutter -v] check the version of @octoflutter/cli\n[octoflutter create app] create a template project from cwd'
  res.quick_start_content_3 =
    '1:cd to the app root directory, execute [pnpm install] to install dependencies. You can modify the version of @octoflutter/flutter、@octoflutter/dartsdk in package.json file.\n2:execute [pnpm dw] can preview and debug in the browser through http://localhost:54321\n3:execute [pnpm dm] can generate zip files suitable for mobile located in build/output.'
  res.quick_start_content_4 =
    'Refer to the source code of this project or test directory'

  res.android_integration_1 = 'Simple Integration'
  res.android_integration_2 = 'Advanced Integration'
  res.android_integration_3 = 'Attention'

  res.android_integration_content_1 = `  1.Create an Android project
  2.Local integration
      Copy octoflutter.jar to your project's libs directory.
       you can find it [here](./support/libs/octoflutter.jar)
       Configure the build.gradle
       api files('libs/octoflutter.jar')
  
  3.Implement ImageDataProvider , you can refer to [FrescoImageProvider](./support/src/main/java/com/example/support/FrescoImageProvider.java) in this project.
  4.Implement Ambient , you can refer to [LocalAndRemoteAmbientImpl](./support/src/main/java/com/example/support/local/LocalAndRemoteAmbientImpl.java) in this project.
  5.Inherit AbsBundleSupport , you can refer to [AppBundleSupportImpl](./support/src/main/java/com/example/support/AppBundleSupportImpl.java) in this project.
  6.Inherit AbsOctoFlutterActivity, you can refer to [AppBundleActivity](./app/src/main/java/example/octoflutter/AppBundleActivity.kt) in this project.
  7.If you want to debug js on mobile, implement DevEnvSupplier & DevEnvProvider , you can refer to [AppBundleDevSupplier](./support/src/main/java/com/example/support/AppBundleDevSupplier.java) in this project.
  `
  res.android_integration_content_2 =
    'Generally speaking, the code in package cn.xiaochuankeji.support can be implemented by yourself, if you want to. In this way, you need implement OctoFlutterSupport and what OctoFlutterSupport needs, such as HttpCallProvider、ImageDataProvider、OctoResourceSettings、OctoJsWatcher, implement OctoResourceSettings to provide js content and assets to Engine. You can manage the Engine and Activity yourself.'

  res.android_integration_content_3 =
    ' The minimum supported Android version is 5.0，minSdk >= 21。\noctoflutter‘s abi does not contain x86, use it on real mobile device。'

  res.android_integration_rich_1 = `1.Create an Android project
2.Local integration
      Copy octoflutter.jar to your project's libs directory.
       you can find it `
  res.android_integration_rich_2 = 'here'
  res.android_integration_rich_3 = `\n       Configure the build.gradle
  api files('libs/octoflutter.jar')

3.Implement ImageDataProvider , you can refer to `
  res.android_integration_rich_4 = 'FrescoImageProvider'
  res.android_integration_rich_5 = '\n4.Implement Ambient , you can refer to '
  res.android_integration_rich_6 = 'LocalAndRemoteAmbientImpl'
  res.android_integration_rich_7 =
    '\n5.Inherit AbsBundleSupport , you can refer to '
  res.android_integration_rich_8 = 'AppBundleSupportImpl'
  res.android_integration_rich_9 =
    '\n6.Inherit AbsOctoFlutterActivity, you can refer to '
  res.android_integration_rich_10 = 'AppBundleActivity'
  res.android_integration_rich_11 =
    '\n7.If you want to debug js on mobile, implement DevEnvSupplier & DevEnvProvider , you can refer to '
  res.android_integration_rich_12 = 'AppBundleDevSupplier'

  res.ios_integration_1 = 'Simple Integration'
  res.ios_integration_2 = 'Precautions'

  res.ios_integration_content_1 = `  1. Open an iOS project. If you don't already have one, please create a new project
  2. Add 'OctoFlutter.framework' to your project by "Add Files to", you can find it in the 'artifact' folder
  3. XCode project settings
    • "General" - "Frameworks, Libraries, and Embedded Content" - "OctoFlutter. framework" set to "Embedde & Sign"
    • "Build Settings" - "Enable Bitcode" set to "NO"
    • "Build Settings" - "Validate Workspace" set to "YES"
  4. Code
    • Build OFOpenConfig, refer to the code of OFOpenManager in this project
    • Create OFAppEngine, refer to the code of OFOpenManager in this project
    • Use OFBaseViewController or a class that inherits from it, refer to the code of OFAppViewController and OFAppContainerController in this project
    • Register channels (like plugins in Flutter), refer to the code of OFMCHttp and OFAppBundleMCVideo in this project
  `
  res.ios_integration_content_2 = `  • The minimum system version supported by OctoFlutter is iOS 10.0
  • OctoFlutter does not support iOS Simulators, please use real machine debugging
  `

  res.ios_integration_rich_1 = `1. Open an iOS project. If you don't already have one, please create a new project
2. Add 'OctoFlutter.framework' to your project by "Add Files to", you can find it `
  res.ios_integration_rich_2 = 'here'
  res.ios_integration_rich_3 = `\n3. XCode project settings
    • "General" - "Frameworks, Libraries, and Embedded Content" - "OctoFlutter. framework" set to "Embedde & Sign"
    • "Build Settings" - "Enable Bitcode" set to "NO"
    • "Build Settings" - "Validate Workspace" set to "YES"
4. Code
    • Build OFOpenConfig, refer to the code of `
  res.ios_integration_rich_4 = 'OFOpenManager'
  res.ios_integration_rich_5 =
    '\n    • Create OFAppEngine, refer to the code of '
  res.ios_integration_rich_6 =
    '\n    • Use OFBaseViewController or a class that inherits from it, refer to the code of '
  res.ios_integration_rich_7 = ' and '
  res.ios_integration_rich_8 = 'OFAppViewController'
  res.ios_integration_rich_9 = 'OFAppContainerController'
  res.ios_integration_rich_10 =
    '\n    • Register channels (like plugins in Flutter), refer to the code of '
  res.ios_integration_rich_11 = 'OFMCHttp'
  res.ios_integration_rich_12 = 'OFAppBundleMCVideo'

  res.basic_config_1 = 'AppBundle Configuration'
  res.basic_config_2 = 'Router Protocol'
  res.basic_config_content_1 =
    'Configurations are concentrated in the package.json file, and name represents the bundle name of this business. If developers want to support dynamic distribution, they can build their own appbundle resource management platform and customize the router protocol. For example, the host part of the protocol is the bundle name. When navigation to the native OctoFlutter container, they can request the resource management platform with the bundle name to define the appbundle.zip.\n\nocto represents the configuration of OctoFlutter extensions, assets indicates the root directory where the resources are located, fullScreen indicates whether the business requires full screen mode, orientation represents the container orientation, and the default is vertical screen. Developers can add property controls related to the container themselves, and fields other than assets will be packaged into the appbundle zip manifest'
  res.basic_config_content_2 =
    'ex：flutter://bundle/main?from=my&transparent=1，\nThis protocol is only for illustrative purposes, and developers can highly customize it based on their actual situation.'

  res.basic_config_param = 'param'
  res.basic_config_type = 'type'
  res.basic_config_des = 'description'
  res.basic_config_des_fullscreen = 'container is full screen or not'
  res.basic_config_des_orientation =
    'container orientation , one of the values. [portraitUp、portraitDown、landscapeLeft、landscapeRight]'
  res.basic_config_des_scheme = 'URI scheme'
  res.basic_config_des_host = 'URI host，bundle name'
  res.basic_config_des_path = 'URI path，page of bundle'
  res.basic_config_des_query1 = 'URI query，from source'
  res.basic_config_des_query2 =
    'URI query，Indicates whether it is a transparent container style, 1 is yes, and is generally used as a popup window'

  res.basic_widget_1 = 'Text'
  res.basic_widget_2 = 'Image'
  res.basic_widget_3 = 'Gesture'
  res.basic_widget_4 = 'Container'
  res.basic_widget_5 = 'List'
  res.basic_widget_6 = 'Router'
  res.basic_widget_content_1 =
    'Text or RichText, Text is generally used for simple style text display, pay attention to import Text from @octoflutter/flutter. RichText is used for more complex rich text display.'
  res.basic_widget_content_2 =
    'Image or OctoImage. It is recommended to use OctoImage. On Mobile, OctoImage is work with the image loading library of native app. On the Web, OctoImage is equivalent to Image.'
  res.basic_widget_content_3 =
    'GestureDector，mainly used to listen events such as onTap, onDoubleTap, etc.'
  res.basic_widget_content_4 =
    'If you want to represent hierarchical relationships, you can use Stack. Row for horizontal arrangement, Column for vertical arrangement, and Wrap for adaptive line wrapping arrangement'
  res.basic_widget_content_5 =
    'OctoListView provided in @octoflutter/octo is smoother then ListView in @octoflutter/flutter when list length less then a certain amount.'
  res.basic_widget_content_6 =
    'Navigator, OctoFlutter currently supports all the capabilities of Navigator 1.0 and most of Navigator 2.0, supports dynamic management of pages, and currently does not support custom RouteInformationParser.'

  res.advanced_widget_1 = 'FlutterPlugin'
  res.advanced_widget_2 = 'AppBundlePlugin'
  res.advanced_widget_3 = 'External texture'
  res.advanced_widget_4 = 'PlatformView'
  res.advanced_widget_content_1 =
    'The usage of FlutterPlugin is same as that of Flutter. The difference is that in the shared mode, FlutterPlugin is entirely submit to the engine, not bind to a specific business. If you need to provide special capabilities for the business, please use AppBundlePlugin. In isolated mode, because the Engine is uniquely bound to the business, FlutterPlugin is equivalent to AppBundlePlugin.'
  res.advanced_widget_content_2 =
    'Generally, it is a special capability related to a specific business or container, and its usage is similar to that of FlutterPlugin. AppBundleMethodChannel and AppBundleEventChannel are also required for related method call and event callback. For details, please refer to the example in this project.'
  res.advanced_widget_content_3 =
    'OctoFlutter support external texture rendering on the mobile, such as using a native player to render video data onto external texture and ultimately render them in OctoFlutter. For details, please refer to the examples in this project.'
  res.advanced_widget_content_4 =
    'OctoFlutter support PlatformView. Due to the shared mode, it provide additional AppbundleAndroidView and AppbundleUiKitView. For details, please refer to the examples in this project.'

  res.advanced_eco_1 = 'TS/JS ecosystem'
  res.advanced_eco_content_1 =
    'In OctoFlutter, you can use dom-independent packages, such as class transformer, protobuf-ts, pinyin-pro, and so on.'

  res.advanced_performance_1 =
    'try OctoRepaintBoundary to Optimize complex static subtree'
  res.advanced_performance_2 = 'use OctoImage'
  res.advanced_performance_3 = 'try OctoListView'
  res.advanced_performance_4 = 'use DelayWidget or FrameSeparateWidget'
  res.advanced_performance_content_1 =
    'OctoRepaintBoundary is a more radical optimization method than RepaintBoundary,  It rasterize its subtree and directly generate RasterCache. It can be used in scene with complex subtree with stateless update and a large number of static images, but it will also lead to the growth of GPU memory, which needs to be used sparingly.'
  res.advanced_performance_content_2 =
    'OctoImage will reuse the image loading library in the native app.'
  res.advanced_performance_content_3 =
    'OctoListView is smoother then ListView when list length less then a certain amount.'
  res.advanced_performance_content_4 =
    'Sometimes heavy scenarios can affect the smoothness of page translation animation. You can consider delaying the loading of heavy scenarios or using the FrameSeparateWidget for progressive rendering.'

  res.debug_1 =
    'After successfully executing the pnpm dw compilation, you can preview and debug it. Just like front-end development and debugging, it fully integrates the front-end ecological debugging experience and opens it in a browser http://localhost:54321.'
  res.debug_2 =
    'After successfully executing the pnpm dm compilation, you can either mock the request to the locally compiled mock.json, or input the development machine IP address, preview it on the mobile device, or Hot Restart it. For details, please refer to the demo-android/demo-ios project.'
  res.debug_3 =
    'For debug JS On the Android device, you should connect to USB, run demo-android project, pay attentation to the log tag [AppBundleDevSupplier], check the port number output from this tag, cd to ./dev in demo-android project, execute [sh octo_flutter_dev. sh $port] after launch your appbundle, now, you can debug js through the Chrome Dev Tools. \n\nFor iOS, you can debug js through attach JSContext from Safari.'

  res.custom_paint_tip =
    'Click icon + to show CustomPaint ProgressDrawable，click again to cancel'
  res.plugin_4_engine_tip = 'Click icon + to send request：'
  res.video_play = 'play'
  res.video_pause = 'pause'
  res.video_replay = 'replay'
  res.platform_view_tip =
    'Currently, PlatformView is implemented on the Android side through the VirtualDisplay solution,  which inherits some issues with Flutter itself. For example, some Android devices cannot invoke a soft keyboard since from the Android Q version. It is recommended to use the text input provided by Flutter as much as possible, and avoid PlatformView scenarios related to soft keyboard. Using EditText as an example here is actually a counter example to warn developers of the risks involved, and this is not recommended, For specific reasons, please refer to these issues:'

  res.plugin_tip_1 = 'Take Android as example:'
  res.plugin_tip_2 = 'Add to Engine：'
  res.plugin_tip_3 = 'Add to AppBundle：'

  res.api_tip =
    'Currently, OctoFlutter support most Flutter Widgets, and all API are listed here. For documentation on a specific API, please refer to the Flutter documentation.'
  return res
}

export class Lang {
  private arr = [generateZh(), generateEn()]

  private index = 0

  res(): LangRes {
    return this.arr[this.index]
  }

  toggle() {
    if (this.index === 0) {
      this.index = 1
    } else {
      this.index = 0
    }
  }

  isZh() {
    return this.index === 0
  }

  static instance = new Lang()
}
