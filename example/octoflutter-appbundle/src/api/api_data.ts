export class ApiItemData {
  parent: string
  name: string
  classes: Array<string>
  enums: Array<string>
  types: Array<string>
  constants: Array<string>
  functions: Array<string>

  constructor(
    parent: string,
    name: string,
    classes: Array<string>,
    enums: Array<string>,
    types: Array<string>,
    constants: Array<string>,
    functions: Array<string>
  ) {
    this.parent = parent
    this.name = name
    this.classes = classes
    this.enums = enums
    this.types = types
    this.constants = constants
    this.functions = functions
  }

  static fromJson(json, parent): ApiItemData {
    return new ApiItemData(
      parent,
      json['name'],
      json['classes'],
      json['enums'],
      json['types'],
      json['constants'],
      json['functions']
    )
  }
}

export class ApiData {
  dartsdk: Array<ApiItemData>
  flutter: Array<ApiItemData>
  octo: Array<ApiItemData>
  octopack: Array<ApiItemData>

  constructor(
    dartsdk: Array<ApiItemData>,
    flutter: Array<ApiItemData>,
    octo: Array<ApiItemData>,
    octopack: Array<ApiItemData>
  ) {
    this.dartsdk = dartsdk
    this.flutter = flutter
    this.octo = octo
    this.octopack = octopack
  }

  static fromJson(json): ApiData {
    const dartsdk = []
    json['dartsdk']?.forEach((v, i, a) => {
      dartsdk.push(ApiItemData.fromJson(v, 'dartsdk'))
    })

    const flutter = []
    json['flutter']?.forEach((v, i, a) => {
      flutter.push(ApiItemData.fromJson(v, 'flutter'))
    })

    const octo = []
    json['octo']?.forEach((v, i, a) => {
      octo.push(ApiItemData.fromJson(v, 'octo'))
    })

    const octopack = []
    json['octopack']?.forEach((v, i, a) => {
      octopack.push(ApiItemData.fromJson(v, 'octopack'))
    })

    return new ApiData(dartsdk, flutter, octo, octopack)
  }
}

//通过脚本生成
const jsonData =
  '{"dartsdk":[{"name":"dartsdk:async","classes":["Stream","StreamSubscription","Timer"],"enums":[],"types":["TimerTickCallback"],"constants":[],"functions":[]},{"name":"dartsdk:core","classes":["DateTime","Duration","Uri"],"enums":[],"types":[],"constants":[],"functions":["print"]},{"name":"dartsdk:ui","classes":["Offset","Size","RRect","Rect","Radius","Color","ColorFilter","ImageFilter","Image","Paint","Path","Canvas","Locale","DisplayFeature","FontWeight","TextDecoration","TextHeightBehavior","TextPosition","TextRange"],"enums":["BlendMode","TileMode","FilterQuality","Clip","PaintingStyle","StrokeCap","StrokeJoin","PathFillType","ClipOp","BlurStyle","AppLifecycleState","DisplayFeatureState","DisplayFeatureType","PointerDeviceKind","FontStyle","TextAlign","TextBaseline","TextDecorationStyle","TextLeadingDistribution","TextDirection","PlaceholderAlignment","TextAffinity","BoxHeightStyle","BoxWidthStyle","Brightness"],"types":["ImageDecoderCallback","Shader","ImageDecodeCallback","VoidCallback"],"constants":[],"functions":["lerpNumber","floor","clampNumber","decodeImageFromList"]},{"name":"dartsdk:math","classes":["Matrix2","Matrix3","Matrix4","Vector2","Vector3","Vector4"],"enums":[],"types":[],"constants":[],"functions":[]}],"flutter":[{"name":"animation","classes":["AnimationController","Animation","Cubic","Curve","Curves","Threshold","SawTooth","Interval","FlippedCurve","Animatable","Tween","RectTween","SizeTween","OffsetTween","StepTween","ColorTween","CurveTween","NumberTween","ReverseTween","ConstantTween","TweenSequence","TweenSequenceItem","FlippedTweenSequence"],"enums":["AnimationBehavior","AnimationStatus"],"types":["AnimationStatusListener"],"constants":[],"functions":[]},{"name":"cupertino","classes":["CupertinoApp","CupertinoSliverRefreshControl","CupertinoDialogRoute","CupertinoModalPopupRoute","CupertinoPage","CupertinoPageRoute","NoDefaultCupertinoThemeData"],"enums":["RefreshIndicatorMode"],"types":["RefreshCallback","RefreshControlIndicatorBuilder"],"constants":[],"functions":[]},{"name":"foundation","classes":["LocalKey","ValueKey","Listenable","ChangeNotifier"],"enums":["TargetPlatform"],"types":["ValueChanged","ValueGetter","ValueSetter","AsyncValueGetter","AsyncValueSetter","AsyncCallback"],"constants":["defaultTargetPlatform"],"functions":[]},{"name":"gestures","classes":["DragDownDetails","DragEndDetails","DragStartDetails","DragUpdateDetails","ForcePressDetails","LongPressEndDetails","LongPressMoveUpdateDetails","LongPressStartDetails","LongPressDownDetails","DeviceGestureSettings","ScaleEndDetails","ScaleStartDetails","ScaleUpdateDetails","TapDownDetails","TapUpDetails","Velocity"],"enums":["DragStartBehavior"],"types":["GestureDragDownCallback","GestureDragStartCallback","GestureDragUpdateCallback","GestureForcePressEndCallback","GestureForcePressPeakCallback","GestureForcePressStartCallback","GestureForcePressUpdateCallback","GestureLongPressCallback","GestureLongPressEndCallback","GestureLongPressMoveUpdateCallback","GestureLongPressStartCallback","GestureLongPressUpCallback","GestureLongPressCancelCallback","GestureLongPressDownCallback","GestureDragCancelCallback","GestureDragEndCallback","GestureScaleEndCallback","GestureScaleStartCallback","GestureScaleUpdateCallback","GestureTapCallback","GestureTapCancelCallback","GestureTapDownCallback","GestureTapUpCallback"],"constants":[],"functions":[]},{"name":"material","classes":["AppBarTheme","AppBar","SliverAppBar","MaterialApp","MaterialScrollBehavior","MaterialBannerThemeData","BottomAppBarTheme","BottomNavigationBarThemeData","BottomSheetThemeData","ButtonBarThemeData","ButtonStyle","ButtonThemeData","ButtonTheme","RawMaterialButton","CardTheme","Card","CheckboxThemeData","Checkbox","ChipThemeData","Chip","ChoiceChip","InputChip","RawChip","ActionChip","FilterChip","ColorScheme","Colors","MaterialColor","MaterialAccentColor","DataTableThemeData","DialogTheme","DividerThemeData","Divider","VerticalDivider","DrawerThemeData","Drawer","DrawerController","ElevatedButtonThemeData","ElevatedButton","FlexibleSpaceBar","FloatingActionButtonLocation","FloatingActionButtonAnimator","FloatingActionButtonThemeData","FloatingActionButton","Icons","InkRipple","InkSplash","InkWell","UnderlineInputBorder","OutlineInputBorder","InputBorder","InputDecoration","InputDecorationTheme","ListTileThemeData","MaterialStateProperty","NavigationBarThemeData","NavigationRailThemeData","OutlinedButtonThemeData","OutlinedButton","PageTransitionsTheme","MaterialPage","MaterialPageRoute","PopupMenuThemeData","ProgressIndicatorThemeData","LinearProgressIndicator","CircularProgressIndicator","RadioThemeData","Scaffold","ScaffoldState","PersistentBottomSheetController","ScaffoldFeatureController","ScaffoldMessengerState","ScaffoldMessenger","Scrollbar","ScrollbarThemeData","SelectableText","SliderThemeData","SnackBarThemeData","SnackBar","SnackBarAction","SwitchThemeData","TabBarTheme","DefaultTabController","TabController","UnderlineTabIndicator","Tab","TabBar","TabBarView","TabPageSelector","TextButtonThemeData","TextField","TextSelectionThemeData","TextTheme","ThemeData","VisualDensity","Theme","TimePickerThemeData","ToggleButtonsThemeData","TooltipThemeData","Typography"],"enums":["ThemeMode","BottomNavigationBarLandscapeLayout","BottomNavigationBarType","ButtonTextTheme","ButtonBarLayoutBehavior","DrawerAlignment","StretchMode","CollapseMode","FloatingLabelBehavior","MaterialState","SnackBarBehavior","TabBarIndicatorSize","MaterialTapTargetSize"],"types":["DrawerCallback"],"constants":["kToolbarHeight"],"functions":[]},{"name":"painting","classes":["Alignment","AlignmentDirectional","BorderRadius","BorderRadiusDirectional","BorderSide","ShapeBorder","OutlinedBorder","Border","BorderDirectional","BoxDecoration","BoxShadow","CircleBorder","ColorSwatch","DecorationImage","Decoration","AbsDecoration","BoxPainter","EdgeInsets","EdgeInsetsDirectional","GradientRotation","LinearGradient","FileImage","MemoryImage","NetworkImage","ExactAssetImage","ImageConfiguration","AssetImage","RoundedRectangleBorder","StrutStyle","TextPainter","TextSpan","TextStyle"],"enums":["RenderComparison","Axis","AxisDirection","VerticalDirection","BorderStyle","BoxShape","BoxFit","ImageRepeat","TextWidthBasis"],"types":["AlignmentGeometry","BorderRadiusGeometry","BoxBorder","EdgeInsetsGeometry","GradientTransform","ImageProvider","InlineSpan"],"constants":[],"functions":[]},{"name":"rendering","classes":["BoxConstraints","CustomPainter","RenderObject","CustomClipper","SliverGridDelegateWithFixedCrossAxisCount","SliverGridDelegateWithMaxCrossAxisExtent","TableBorder","MaxColumnWidth","MinColumnWidth","FlexColumnWidth","FixedColumnWidth","TableColumnWidth","FractionColumnWidth","IntrinsicColumnWidth"],"enums":["FlexFit","MainAxisAlignment","MainAxisSize","CrossAxisAlignment","TextOverflow","PlatformViewHitTestBehavior","HitTestBehavior","StackFit","TableCellVerticalAlignment","WrapAlignment","WrapCrossAlignment"],"types":["SliverGridDelegate"],"constants":[],"functions":[]},{"name":"scheduler","classes":["SchedulerBinding","Ticker"],"enums":[],"types":["TickerProvider","TickerCallback"],"constants":[],"functions":[]},{"name":"services","classes":["AssetBundle","ClipBoard","ClipboardData","MethodCall","MessageCodec","MethodCodec","StandardMessageCodec","StandardMethodCodec","JSONMethodCodec","JSONMessageCodec","BinaryCodec","StringCodec","EventChannel","MethodChannel","BasicMessageChannel","ApplicationSwitcherDescription","SystemUiOverlayStyle","SystemChrome","SystemNavigator","TextSelection"],"enums":["DeviceOrientation","SystemUiOverlay","MaxLengthEnforcement","SmartDashesType","SmartQuotesType","TextInputAction","TextCapitalization","TextInputType","SelectionChangedCause"],"types":["PlatformViewCreatedCallback"],"constants":["rootBundle"],"functions":[]},{"name":"widgets","classes":["AnimatedCrossFade","AnimatedList","AnimatedListState","AnimatedSize","AnimatedSwitcher","WidgetsApp","AutomaticKeepAlive","Opacity","Directionality","ShaderMask","BackdropFilter","Align","Row","Column","Flex","Stack","IndexedStack","ClipRect","ClipRRect","ClipOval","ClipPath","PhysicalModel","PhysicalShape","FittedBox","Padding","Center","SizedBox","FractionallySizedBox","AspectRatio","Flexible","Expanded","Wrap","LayoutId","Positioned","IgnorePointer","AbsorbPointer","ColoredBox","LimitedBox","OverflowBox","SizedOverflowBox","Offstage","ConstrainedBox","UnconstrainedBox","IntrinsicWidth","IntrinsicHeight","Baseline","SliverToBoxAdapter","SliverPadding","ListBody","KeyedSubtree","Builder","RichText","Transform","FractionalTranslation","CustomPaint","RepaintBoundary","WidgetsBinding","WidgetsBindingObserver","ColorFiltered","Container","TextEditingController","ToolbarOptions","UniqueKey","ObjectKey","GlobalKey","GlobalObjectKey","Widget","StatelessWidget","StatefulWidget","BuildContext","GestureDetector","GridPaper","IconData","IconThemeData","Icon","Image","InteractiveViewer","TransformationController","ListWheelChildBuilderDelegate","ListWheelChildListDelegate","ListWheelChildLoopingListDelegate","ListWheelScrollView","MediaQueryData","MediaQuery","RouteSettings","Page","NavigatorObserver","DefaultTransitionDelegate","Navigator","NavigatorState","NestedScrollView","NestedScrollViewViewport","SliverOverlapAbsorber","SliverOverlapAbsorberHandle","SliverOverlapInjector","Notification","PageStorage","PageStorageBucket","PageStorageKey","PageController","PageView","PageScrollPhysics","PageRoute","PageRouteBuilder","AndroidView","AppbundleAndroidView","AppbundleUiKitView","UiKitView","PreferredSize","RouteAware","RouteObserver","OverlayRoute","TransitionRoute","ModalRoute","PopupRoute","RawDialogRoute","SafeArea","RawScrollbar","ScrollController","ScrollMetrics","ScrollNotification","ScrollNotificationListener","AlwaysScrollableScrollPhysics","NeverScrollableScrollPhysics","BouncingScrollPhysics","ClampingScrollPhysics","RangeMaintainingScrollPhysics","ListView","GridView","CustomScrollView","SingleChildScrollView","SliverFillRemaining","SliverPersistentHeader","SliverPersistentHeaderDelegate","SliverChildBuilderDelegate","SliverChildListDelegate","SliverList","SliverFixedExtentList","SliverGrid","SliverOpacity","SliverIgnorePointer","SliverOffstage","Spacer","Table","TableCell","TableRow","DefaultTextStyle","Text","Texture","TickerProviderStateMixin","AnimatedWidget","SlideTransition","ScaleTransition","RotationTransition","SizeTransition","FadeTransition","SliverFadeTransition","AnimatedBuilder","Visibility","SliverVisibility","WidgetSpan","WillPopScope"],"enums":["DismissDirection","NavigationMode","Orientation","RoutePopDisposition","ScrollbarOrientation","AndroidOverscrollIndicator","ScrollViewKeyboardDismissBehavior"],"types":["AnimatedCrossFadeBuilder","AnimatedListItemBuilder","AnimatedListRemovedItemBuilder","AnimatedSwitcherLayoutBuilder","AnimatedSwitcherTransitionBuilder","GenerateAppTitle","InitialRouteListFactory","SelectionChangedCallback","WidgetBuilder","TransitionBuilder","IndexedWidgetBuilder","NullableIndexedWidgetBuilder","ImageErrorWidgetBuilder","ImageLoadingBuilder","ListWheelChildDelegate","RoutePredicate","WillPopCallback","PopPageCallback","RouteFactory","RouteListFactory","RestorableRouteBuilder","NestedScrollViewHeaderSliversBuilder","PreferredSizeWidget","RoutePageBuilder","RouteTransitionsBuilder","ScrollBehavior","ScrollNotificationListenerCallback","SemanticIndexCallback","ChildIndexGetter","SliverChildDelegate"],"constants":[],"functions":["runApp","showGeneralDialog"]}],"octo":[{"name":"octo","classes":["MultiSliver","SliverAnimatedPaintExtent","SliverPositioned","SliverStack","AppBundleMethodChannel","AppBundleEventChannel","AppBundleBasicMessageChannel","OctoImage","FrameSeparateWidget","OctoListView","OctoRepaintBoundary","OctoScrollIndicator","PageTransformer","TransformInfo","ThreeDTransformer","TransformerPageController","TransformerPageView","AbsPageTransformer","AccordionTransformer","ScaleAndFadeTransformer","OctoNestedTabBar","OctoCarouselIndicator","OctoLinkTab","OctoLinkTabBar","OctoLinkTabBarView","TransformerTabBarView","OctoNestedScrollView","OctoVisibilityDetector","VisibilityDetector","VisibilityInfo","InnerShadow","DelayWidget"],"enums":[],"types":["DecodeErrorCallback","ImageSaveCallback","OnNestedTabSelected","VisibilityChangedCallback"],"constants":[],"functions":["decodeImageFromAsset","captureToImageFile"]}],"octopack":[{"name":"flare","classes":["FlareActor","FlareCacheBuilder","AssetFlare","FlareAnimation"],"enums":[],"types":["FlareCompletedCallback","FlareWidgetBuilder","AssetProvider"],"constants":[],"functions":[]},{"name":"lottie","classes":["LottieBuilder","LottieProvider","AssetLottie","OctoLottieAnimation"],"enums":[],"types":["LottieLoadCallback","LottiePreloadCallback"],"constants":[],"functions":[]},{"name":"photo","classes":["PhotoView"],"enums":[],"types":[],"constants":[],"functions":[]},{"name":"picker","classes":["DatePickerTheme","DatePicker"],"enums":["LocaleType"],"types":["DateChangedCallback","DateCancelledCallback"],"constants":[],"functions":[]},{"name":"refresh","classes":["SmartRefresher","RefreshController","ClassicFooter","ClassicHeader","CustomFooter","CustomHeader"],"enums":["RefreshStatus","RefreshStyle","LoadStatus","LoadStyle","IconPosition"],"types":["OnTwoLevel","OuterBuilder","HeaderBuilder","VoidPromiseCallBack","OffsetCallBack","ModeChangeCallBack","FooterBuilder"],"constants":[],"functions":[]}]}'

export const apiData = ApiData.fromJson(JSON.parse(jsonData))
