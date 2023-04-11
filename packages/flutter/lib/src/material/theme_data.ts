import {Color, Brightness} from '@octoflutter/dartsdk'
import {NoDefaultCupertinoThemeData} from '../cupertino/theme'
import {TargetPlatform} from '../foundation/platform'
import {EdgeInsets} from '../painting/edge_insets'
import {TextStyle} from '../painting/text_style'
import {IconThemeData} from '../widgets/icon_theme_data'
import {AndroidOverscrollIndicator} from '../widgets/scroll_configuration'
import {AppBarTheme} from './app_bar_theme'
import {MaterialBannerThemeData} from './banner_theme'
import {BottomAppBarTheme} from './bottom_app_bar_theme'
import {BottomNavigationBarThemeData} from './bottom_navigation_bar_theme'
import {BottomSheetThemeData} from './bottom_sheet_theme'
import {ButtonBarThemeData} from './button_bar_theme'
import {ButtonThemeData} from './button_theme'
import {CardTheme} from './card_theme'
import {CheckboxThemeData} from './checkbox_theme'
import {ChipThemeData} from './chip_theme'
import {Colors, MaterialColor} from './colors'
import {ColorScheme} from './color_scheme'
import {DataTableThemeData} from './data_table_theme'
import {DialogTheme} from './dialog_theme'
import {DividerThemeData} from './divider_theme'
import {DrawerThemeData} from './drawer_theme'
import {ElevatedButtonThemeData} from './elevated_button_theme'
import {FloatingActionButtonThemeData} from './floating_action_button_theme'
import {InkSplash, InteractiveInkFeatureFactory} from './ink_splash'
import {InputDecorationTheme} from './input_decorator'
import {ListTileThemeData} from './list_tile'
import {NavigationBarThemeData} from './navigation_bar_theme'
import {NavigationRailThemeData} from './navigation_rail_theme'
import {OutlinedButtonThemeData} from './outlined_button_theme'
import {PageTransitionsTheme} from './page_transitions_theme'
import {PopupMenuThemeData} from './popup_menu_theme'
import {ProgressIndicatorThemeData} from './progress_indicator_theme'
import {RadioThemeData} from './radio_theme'
import {ScrollbarThemeData} from './scrollbar_theme'
import {SliderThemeData} from './slider_theme'
import {SnackBarThemeData} from './snack_bar_theme'
import {SwitchThemeData} from './switch_theme'
import {TabBarTheme} from './tab_bar_theme'
import {TextButtonThemeData} from './text_button_theme'
import {TextSelectionThemeData} from './text_selection_theme'
import {TextTheme} from './text_theme'
import {TimePickerThemeData} from './time_picker_theme'
import {ToggleButtonsThemeData} from './toggle_buttons_theme'
import {TooltipThemeData} from './tooltip_theme'
import {Typography} from './typograph'

export class VisualDensity extends N.VisualDensity {
  public readonly horizontal?: number
  public readonly vertical?: number

  constructor(args?: {horizontal?: number; vertical?: number}) {
    const h = args?.horizontal ?? 0
    const v = args?.vertical ?? 0
    super(h, v)
    this.horizontal = h
    this.vertical = v
  }
}

// VisualDensity: function VisualDensity(t0, t1) {
//     this.horizontal = t0;
//     this.vertical = t1;
//   },

export enum MaterialTapTargetSize {
  padded = C.MaterialTapTargetSize_0,
  shrinkWrap = C.MaterialTapTargetSize_1,
}

export class ThemeData extends N.ThemeData {
  public readonly androidOverscrollIndicator?: AndroidOverscrollIndicator
  public readonly applyElevationOverlayColor?: boolean
  public readonly cupertinoOverrideTheme?: NoDefaultCupertinoThemeData
  public readonly inputDecorationTheme?: InputDecorationTheme
  public readonly materialTapTargetSize?: MaterialTapTargetSize
  public readonly pageTransitionsTheme?: PageTransitionsTheme
  public readonly platform?: TargetPlatform
  public readonly scrollbarTheme?: ScrollbarThemeData
  public readonly splashFactory?: InteractiveInkFeatureFactory
  public readonly visualDensity?: VisualDensity
  public readonly useMaterial3?: boolean
  public readonly colorScheme?: ColorScheme
  public readonly colorSchemeSeed?: Color
  public readonly brightness?: Brightness
  public readonly primarySwatch?: MaterialColor
  public readonly primaryColor?: Color
  public readonly primaryColorLight?: Color
  public readonly primaryColorDark?: Color
  public readonly focusColor?: Color
  public readonly hoverColor?: Color
  public readonly shadowColor?: Color
  public readonly canvasColor?: Color
  public readonly scaffoldBackgroundColor?: Color
  public readonly bottomAppBarColor?: Color
  public readonly cardColor?: Color
  public readonly dividerColor?: Color
  public readonly highlightColor?: Color
  public readonly splashColor?: Color
  public readonly selectedRowColor?: Color
  public readonly unselectedWidgetColor?: Color
  public readonly disabledColor?: Color
  public readonly secondaryHeaderColor?: Color
  public readonly backgroundColor?: Color
  public readonly dialogBackgroundColor?: Color
  public readonly indicatorColor?: Color
  public readonly hintColor?: Color
  public readonly errorColor?: Color
  public readonly toggleableActiveColor?: Color
  public readonly fontFamily?: string
  public readonly typography?: Typography
  public readonly textTheme?: TextTheme
  public readonly primaryTextTheme?: TextTheme
  public readonly iconTheme?: IconThemeData
  public readonly primaryIconTheme?: IconThemeData
  public readonly appBarTheme?: AppBarTheme
  public readonly bannerTheme?: MaterialBannerThemeData
  public readonly bottomAppBarTheme?: BottomAppBarTheme
  public readonly bottomNavigationBarTheme?: BottomNavigationBarThemeData
  public readonly bottomSheetTheme?: BottomSheetThemeData
  public readonly buttonBarTheme?: ButtonBarThemeData
  public readonly buttonTheme?: ButtonThemeData
  public readonly cardTheme?: CardTheme
  public readonly checkboxTheme?: CheckboxThemeData
  public readonly chipTheme?: ChipThemeData
  public readonly dataTableTheme?: DataTableThemeData
  public readonly dialogTheme?: DialogTheme
  public readonly dividerTheme?: DividerThemeData
  public readonly drawerTheme?: DrawerThemeData
  public readonly elevatedButtonTheme?: ElevatedButtonThemeData
  public readonly floatingActionButtonTheme?: FloatingActionButtonThemeData
  public readonly listTileTheme?: ListTileThemeData
  public readonly navigationBarTheme?: NavigationBarThemeData
  public readonly navigationRailTheme?: NavigationRailThemeData
  public readonly outlinedButtonTheme?: OutlinedButtonThemeData
  public readonly popupMenuTheme?: PopupMenuThemeData
  public readonly progressIndicatorTheme?: ProgressIndicatorThemeData
  public readonly radioTheme?: RadioThemeData
  public readonly sliderTheme?: SliderThemeData
  public readonly snackBarTheme?: SnackBarThemeData
  public readonly switchTheme?: SwitchThemeData
  public readonly tabBarTheme?: TabBarTheme
  public readonly textButtonTheme?: TextButtonThemeData
  public readonly textSelectionTheme?: TextSelectionThemeData
  public readonly timePickerTheme?: TimePickerThemeData
  public readonly toggleButtonsTheme?: ToggleButtonsThemeData
  public readonly tooltipTheme?: TooltipThemeData

  constructor(args?: {
    androidOverscrollIndicator?: AndroidOverscrollIndicator
    applyElevationOverlayColor?: boolean
    cupertinoOverrideTheme?: NoDefaultCupertinoThemeData
    inputDecorationTheme?: InputDecorationTheme
    materialTapTargetSize?: MaterialTapTargetSize
    pageTransitionsTheme?: PageTransitionsTheme
    platform?: TargetPlatform
    scrollbarTheme?: ScrollbarThemeData
    splashFactory?: InteractiveInkFeatureFactory
    visualDensity?: VisualDensity
    useMaterial3?: boolean
    colorScheme?: ColorScheme
    colorSchemeSeed?: Color
    brightness?: Brightness
    primarySwatch?: MaterialColor
    primaryColor?: Color
    primaryColorLight?: Color
    primaryColorDark?: Color
    focusColor?: Color
    hoverColor?: Color
    shadowColor?: Color
    canvasColor?: Color
    scaffoldBackgroundColor?: Color
    bottomAppBarColor?: Color
    cardColor?: Color
    dividerColor?: Color
    highlightColor?: Color
    splashColor?: Color
    selectedRowColor?: Color
    unselectedWidgetColor?: Color
    disabledColor?: Color
    secondaryHeaderColor?: Color
    backgroundColor?: Color
    dialogBackgroundColor?: Color
    indicatorColor?: Color
    hintColor?: Color
    errorColor?: Color
    toggleableActiveColor?: Color
    fontFamily?: string
    typography?: Typography
    textTheme?: TextTheme
    primaryTextTheme?: TextTheme
    iconTheme?: IconThemeData
    primaryIconTheme?: IconThemeData
    appBarTheme?: AppBarTheme
    bannerTheme?: MaterialBannerThemeData
    bottomAppBarTheme?: BottomAppBarTheme
    bottomNavigationBarTheme?: BottomNavigationBarThemeData
    bottomSheetTheme?: BottomSheetThemeData
    buttonBarTheme?: ButtonBarThemeData
    buttonTheme?: ButtonThemeData
    cardTheme?: CardTheme
    checkboxTheme?: CheckboxThemeData
    chipTheme?: ChipThemeData
    dataTableTheme?: DataTableThemeData
    dialogTheme?: DialogTheme
    dividerTheme?: DividerThemeData
    drawerTheme?: DrawerThemeData
    elevatedButtonTheme?: ElevatedButtonThemeData
    floatingActionButtonTheme?: FloatingActionButtonThemeData
    listTileTheme?: ListTileThemeData
    navigationBarTheme?: NavigationBarThemeData
    navigationRailTheme?: NavigationRailThemeData
    outlinedButtonTheme?: OutlinedButtonThemeData
    popupMenuTheme?: PopupMenuThemeData
    progressIndicatorTheme?: ProgressIndicatorThemeData
    radioTheme?: RadioThemeData
    sliderTheme?: SliderThemeData
    snackBarTheme?: SnackBarThemeData
    switchTheme?: SwitchThemeData
    tabBarTheme?: TabBarTheme
    textButtonTheme?: TextButtonThemeData
    textSelectionTheme?: TextSelectionThemeData
    timePickerTheme?: TimePickerThemeData
    toggleButtonsTheme?: ToggleButtonsThemeData
    tooltipTheme?: TooltipThemeData
  }) {
    const androidOverscrollIndicator =
      args?.androidOverscrollIndicator ?? AndroidOverscrollIndicator.glow
    const cupertinoOverrideTheme =
      args?.cupertinoOverrideTheme ?? new NoDefaultCupertinoThemeData()
    const inputDecorationTheme =
      args?.inputDecorationTheme ?? new InputDecorationTheme()
    const ios = window.navigator.platform?.startsWith('i') ?? false
    const platform =
      args?.platform ?? ios ? TargetPlatform.iOS : TargetPlatform.android
    const materialTapTargetSize =
      args?.materialTapTargetSize ?? MaterialTapTargetSize.padded
    const pageTransitionsTheme =
      args?.pageTransitionsTheme ?? new PageTransitionsTheme()
    const scrollbarTheme = args?.scrollbarTheme ?? new ScrollbarThemeData()
    const splashFactory = args?.splashFactory ?? InkSplash.splashFactory
    const visualDensity =
      args?.visualDensity ?? new VisualDensity({horizontal: 0, vertical: 0})
    const useMaterial3 = args?.useMaterial3 ?? false

    const brightness = args?.brightness ?? Brightness.light
    const isDark = brightness == Brightness.dark

    const applyElevationOverlayColor = args?.applyElevationOverlayColor ?? false
    const primarySwatch = args?.primarySwatch ?? Colors.blue
    const primaryColor =
      args?.primaryColor ?? (isDark ? new Color(0xff212121) : primarySwatch)

    const primaryColorBrightness =
      ThemeData.estimateBrightnessForColor(primaryColor)
    const primaryColorLight =
      args?.primaryColorLight ??
      (isDark
        ? new Color(0xff9e9e9e)
        : primarySwatch.shade100 ?? new Color(0xffbbdefb))
    const primaryColorDark =
      args?.primaryColorDark ??
      (isDark ? Colors.black : primarySwatch.shade700 ?? new Color(0xff1976d2))

    const toggleableActiveColor =
      args?.toggleableActiveColor ??
      (isDark ? new Color(0xff64ffda) : new Color(0xff1e88e5))
    const accentColor = isDark ? new Color(0xff64ffda) : new Color(0xff2196f3)
    const accentColorBrightness =
      ThemeData.estimateBrightnessForColor(accentColor)
    const focusColor =
      args?.focusColor ??
      (isDark ? Colors.white.withOpacity(0.12) : Colors.black.withOpacity(0.12))
    const hoverColor =
      args?.hoverColor ??
      (isDark ? Colors.white.withOpacity(0.04) : Colors.black.withOpacity(0.04))
    const shadowColor = args?.shadowColor ?? Colors.black
    const canvasColor =
      args?.canvasColor ??
      (isDark ? new Color(0xff303030) : new Color(0xff303030))
    const scaffoldBackgroundColor = args?.scaffoldBackgroundColor ?? canvasColor
    const bottomAppBarColor =
      args?.bottomAppBarColor ?? (isDark ? new Color(0xff424242) : Colors.white)
    const cardColor =
      args?.cardColor ?? (isDark ? new Color(0xff424242) : Colors.white)
    const dividerColor =
      args?.dividerColor ??
      (isDark ? new Color(0x1fffffff) : new Color(0x1f000000))
    const colorScheme =
      args?.colorScheme ??
      ColorScheme.fromSwatch({
        primarySwatch: primarySwatch,
        primaryColorDark: primaryColorDark,
        accentColor: accentColor,
        cardColor: cardColor,
        backgroundColor: args?.backgroundColor,
        errorColor: args?.errorColor,
        brightness: brightness,
      })
    const selectedRowColor = args?.selectedRowColor ?? new Color(0xfff5f5f5)
    const unselectedWidgetColor =
      args?.unselectedWidgetColor ?? (isDark ? Colors.white70 : Colors.black54)
    const secondaryHeaderColor =
      args?.secondaryHeaderColor ??
      (isDark
        ? new Color(0xff616161)
        : primarySwatch.shade50 ?? new Color(0xffe3f2fd))
    const backgroundColor =
      args?.backgroundColor ??
      (isDark
        ? new Color(0xff616161)
        : primarySwatch.shade200 ?? new Color(0xff90caf9))
    const dialogBackgroundColor =
      args?.dialogBackgroundColor ??
      (isDark
        ? new Color(0xff616161)
        : primarySwatch.shade200 ?? new Color(0xff90caf9))
    const indicatorColor =
      args?.indicatorColor ?? accentColor?.value === primaryColor?.value
        ? Colors.white
        : accentColor
    const hintColor =
      args?.hintColor ??
      (isDark ? Colors.white60 : Colors.black.withOpacity(0.6))
    const errorColor = args?.errorColor ?? new Color(0xffd32f2f)
    const disabledColor =
      args?.disabledColor ?? (isDark ? Colors.white38 : Colors.black38)
    const highlightColor =
      args?.highlightColor ??
      (isDark ? new Color(0x40cccccc) : new Color(0x66bcbcbc))
    const splashColor =
      args?.splashColor ??
      (isDark ? new Color(0x40cccccc) : new Color(0x66c8c8c8))
    const buttonColor = isDark ? new Color(0xff1e88e5) : new Color(0xffe0e0e0)
    const buttonTheme =
      args?.buttonTheme ??
      new ButtonThemeData({
        colorScheme: args?.colorScheme,
        buttonColor: buttonColor,
        disabledColor: disabledColor,
        focusColor: focusColor,
        hoverColor: hoverColor,
        highlightColor: highlightColor,
        splashColor: splashColor,
        materialTapTargetSize: materialTapTargetSize,
      })
    const typography = args?.typography ?? Typography.material2018()
    const textTheme = args?.textTheme ?? new TextTheme()
    const ps = new TextStyle({color: isDark ? Colors.black : Colors.white})
    const primaryTextTheme =
      args?.primaryTextTheme ??
      new TextTheme({
        displayLarge: ps,
        displayMedium: ps,
        displaySmall: ps,
        headlineLarge: ps,
        headlineMedium: ps,
        headlineSmall: ps,
        titleLarge: ps,
        titleMedium: ps,
        titleSmall: ps,
        bodyLarge: ps,
        bodyMedium: ps,
        bodySmall: ps,
        labelLarge: ps,
        labelMedium: ps,
        labelSmall: ps,
      })
    const iconTheme = args?.iconTheme ?? new IconThemeData()
    const primaryIconTheme = args?.primaryIconTheme ?? new IconThemeData()
    const appBarTheme = args?.appBarTheme ?? new AppBarTheme()
    const bannerTheme = args?.bannerTheme ?? new MaterialBannerThemeData()
    const bottomAppBarTheme = args?.bottomAppBarTheme ?? new BottomAppBarTheme()
    const bottomNavigationBarTheme =
      args?.bottomNavigationBarTheme ?? new BottomNavigationBarThemeData()
    const bottomSheetTheme =
      args?.bottomSheetTheme ?? new BottomSheetThemeData()
    const buttonBarTheme = args?.buttonBarTheme ?? new ButtonBarThemeData()
    const cardTheme = args?.cardTheme ?? new CardTheme()
    const chipTheme =
      args?.chipTheme ??
      new ChipThemeData({
        backgroundColor: backgroundColor,
        disabledColor: disabledColor,
        selectedColor: selectedRowColor,
        secondarySelectedColor: secondaryHeaderColor,
        padding: EdgeInsets.all(0),
        labelStyle: new TextStyle(),
        secondaryLabelStyle: new TextStyle(),
        brightness: brightness,
      })
    const checkboxTheme = args?.checkboxTheme ?? new CheckboxThemeData()
    const dataTableTheme = args?.dataTableTheme ?? new DataTableThemeData()
    const dialogTheme = args?.dialogTheme ?? new DialogTheme()
    const dividerTheme = args?.dividerTheme ?? new DividerThemeData()
    const drawerTheme = args?.drawerTheme ?? new DrawerThemeData()
    const elevatedButtonTheme =
      args?.elevatedButtonTheme ?? new ElevatedButtonThemeData()
    const floatingActionButtonTheme =
      args?.floatingActionButtonTheme ?? new FloatingActionButtonThemeData()
    const listTileTheme = args?.listTileTheme ?? new ListTileThemeData()
    const navigationBarTheme =
      args?.navigationBarTheme ?? new NavigationBarThemeData()
    const navigationRailTheme =
      args?.navigationRailTheme ?? new NavigationRailThemeData()
    const outlinedButtonTheme =
      args?.outlinedButtonTheme ?? new OutlinedButtonThemeData()
    const popupMenuTheme = args?.popupMenuTheme ?? new PopupMenuThemeData()
    const progressIndicatorTheme =
      args?.progressIndicatorTheme ?? new ProgressIndicatorThemeData()
    const radioTheme = args?.radioTheme ?? new RadioThemeData()
    const sliderTheme = args?.sliderTheme ?? new SliderThemeData()
    const snackBarTheme = args?.snackBarTheme ?? new SnackBarThemeData()
    const switchTheme = args?.switchTheme ?? new SwitchThemeData()
    const tabBarTheme = args?.tabBarTheme ?? new TabBarTheme()
    const textButtonTheme = args?.textButtonTheme ?? new TextButtonThemeData()
    const textSelectionTheme =
      args?.textSelectionTheme ?? new TextSelectionThemeData()
    const timePickerTheme = args?.timePickerTheme ?? new TimePickerThemeData()
    const toggleButtonsTheme =
      args?.toggleButtonsTheme ?? new ToggleButtonsThemeData()
    const tooltipTheme = args?.tooltipTheme ?? new TooltipThemeData()

    const useTextSelectionTheme = true
    const textSelectionColor = isDark ? accentColor : new Color(0xff90caf9)
    const cursorColor = Color.fromRGBO(66, 133, 244, 1.0)
    const textSelectionHandleColor = isDark
      ? new Color(0xff1de9b6)
      : new Color(0xff64b5f6)
    const accentTextTheme = new TextTheme()
    const accentIconTheme = new IconThemeData()
    const fixTextFieldOutlineLabel = true

    super(
      androidOverscrollIndicator,
      applyElevationOverlayColor,
      cupertinoOverrideTheme,
      inputDecorationTheme,
      materialTapTargetSize,
      pageTransitionsTheme,
      platform,
      scrollbarTheme,
      splashFactory,
      visualDensity,
      useMaterial3,
      colorScheme,
      primaryColor,
      primaryColorLight,
      primaryColorDark,
      focusColor,
      hoverColor,
      shadowColor,
      canvasColor,
      scaffoldBackgroundColor,
      bottomAppBarColor,
      cardColor,
      dividerColor,
      highlightColor,
      splashColor,
      selectedRowColor,
      unselectedWidgetColor,
      disabledColor,
      secondaryHeaderColor,
      backgroundColor,
      dialogBackgroundColor,
      indicatorColor,
      hintColor,
      errorColor,
      toggleableActiveColor,
      typography,
      textTheme,
      primaryTextTheme,
      iconTheme,
      primaryIconTheme,
      appBarTheme,
      bannerTheme,
      bottomAppBarTheme,
      bottomNavigationBarTheme,
      bottomSheetTheme,
      buttonBarTheme,
      buttonTheme,
      cardTheme,
      checkboxTheme,
      chipTheme,
      dataTableTheme,
      dialogTheme,
      dividerTheme,
      drawerTheme,
      elevatedButtonTheme,
      floatingActionButtonTheme,
      listTileTheme,
      navigationBarTheme,
      navigationRailTheme,
      outlinedButtonTheme,
      popupMenuTheme,
      progressIndicatorTheme,
      radioTheme,
      sliderTheme,
      snackBarTheme,
      switchTheme,
      tabBarTheme,
      textButtonTheme,
      textSelectionTheme,
      timePickerTheme,
      toggleButtonsTheme,
      tooltipTheme,
      useTextSelectionTheme,
      textSelectionColor,
      cursorColor,
      textSelectionHandleColor,
      accentColor,
      accentColorBrightness,
      accentTextTheme,
      accentIconTheme,
      buttonColor,
      fixTextFieldOutlineLabel,
      primaryColorBrightness
    )
    this.androidOverscrollIndicator = androidOverscrollIndicator
    this.applyElevationOverlayColor = applyElevationOverlayColor
    this.cupertinoOverrideTheme = cupertinoOverrideTheme
    this.inputDecorationTheme = inputDecorationTheme
    this.materialTapTargetSize = materialTapTargetSize
    this.pageTransitionsTheme = pageTransitionsTheme
    this.platform = platform
    this.scrollbarTheme = scrollbarTheme
    this.splashFactory = splashFactory
    this.visualDensity = visualDensity
    this.useMaterial3 = useMaterial3
    this.colorScheme = colorScheme
    this.colorSchemeSeed = args?.colorSchemeSeed
    this.brightness = brightness
    this.primarySwatch = primarySwatch
    this.primaryColor = primaryColor
    this.primaryColorLight = primaryColorLight
    this.primaryColorDark = primaryColorDark
    this.focusColor = focusColor
    this.hoverColor = hoverColor
    this.shadowColor = shadowColor
    this.canvasColor = canvasColor
    this.scaffoldBackgroundColor = scaffoldBackgroundColor
    this.bottomAppBarColor = bottomAppBarColor
    this.cardColor = cardColor
    this.dividerColor = dividerColor
    this.highlightColor = highlightColor
    this.splashColor = splashColor
    this.selectedRowColor = selectedRowColor
    this.unselectedWidgetColor = unselectedWidgetColor
    this.disabledColor = disabledColor
    this.secondaryHeaderColor = secondaryHeaderColor
    this.backgroundColor = backgroundColor
    this.dialogBackgroundColor = dialogBackgroundColor
    this.indicatorColor = indicatorColor
    this.buttonTheme = buttonTheme
    this.toggleButtonsTheme = toggleButtonsTheme
    this.secondaryHeaderColor = secondaryHeaderColor
    this.hintColor = hintColor
    this.errorColor = errorColor
    this.toggleableActiveColor = toggleableActiveColor
    this.fontFamily = args?.fontFamily
    this.textTheme = textTheme
    this.typography = typography
    this.textTheme = textTheme
    this.primaryTextTheme = primaryTextTheme
    this.iconTheme = iconTheme
    this.primaryIconTheme = primaryIconTheme
    this.iconTheme = iconTheme
    this.primaryIconTheme = primaryIconTheme
    this.appBarTheme = appBarTheme
    this.bannerTheme = bannerTheme
    this.bottomAppBarTheme = bottomAppBarTheme
    this.bottomNavigationBarTheme = bottomNavigationBarTheme
    this.bottomSheetTheme = bottomSheetTheme
    this.buttonBarTheme = buttonBarTheme
    this.buttonTheme = buttonTheme
    this.cardTheme = cardTheme
    this.checkboxTheme = checkboxTheme
    this.chipTheme = chipTheme
    this.dataTableTheme = dataTableTheme
    this.dialogTheme = dialogTheme
    this.dividerTheme = dividerTheme
    this.drawerTheme = drawerTheme
    this.elevatedButtonTheme = elevatedButtonTheme
    this.floatingActionButtonTheme = floatingActionButtonTheme
    this.listTileTheme = listTileTheme
    this.navigationBarTheme = navigationBarTheme
    this.navigationRailTheme = navigationRailTheme
    this.outlinedButtonTheme = outlinedButtonTheme
    this.popupMenuTheme = popupMenuTheme
    this.progressIndicatorTheme = progressIndicatorTheme
    this.radioTheme = radioTheme
    this.sliderTheme = sliderTheme
    this.snackBarTheme = snackBarTheme
    this.switchTheme = switchTheme
    this.tabBarTheme = tabBarTheme
    this.textButtonTheme = textButtonTheme
    this.textSelectionTheme = textSelectionTheme
    this.timePickerTheme = timePickerTheme
    this.toggleButtonsTheme = toggleButtonsTheme
    this.tooltipTheme = tooltipTheme
    this.colorScheme = colorScheme
  }

  static estimateBrightnessForColor = (color: Color): Brightness => {
    const relativeLuminance = color.computeLuminance()
    const kThreshold = 0.15
    if ((relativeLuminance + 0.05) * (relativeLuminance + 0.05) > kThreshold)
      return Brightness.light
    return Brightness.dark
  }
}

// ThemeData: function ThemeData(t0, t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18, t19, t20, t21, t22, t23, t24, t25, t26, t27, t28, t29, t30, t31, t32, t33, t34, t35, t36, t37, t38, t39, t40, t41, t42, t43, t44, t45, t46, t47, t48, t49, t50, t51, t52, t53, t54, t55, t56, t57, t58, t59, t60, t61, t62, t63, t64, t65, t66, t67, t68, t69, t70, t71, t72, t73, t74, t75, t76, t77, t78, t79, t80, t81, t82) {
//   var _ = this;
//   _.androidOverscrollIndicator = t0;
//   _.applyElevationOverlayColor = t1;
//   _.cupertinoOverrideTheme = t2;
//   _.inputDecorationTheme = t3;
//   _.materialTapTargetSize = t4;
//   _.pageTransitionsTheme = t5;
//   _.platform = t6;
//   _.scrollbarTheme = t7;
//   _.splashFactory = t8;
//   _.visualDensity = t9;
//   _.useMaterial3 = t10;
//   _.colorScheme = t11;
//   _.primaryColor = t12;
//   _.primaryColorLight = t13;
//   _.primaryColorDark = t14;
//   _.focusColor = t15;
//   _.hoverColor = t16;
//   _.shadowColor = t17;
//   _.canvasColor = t18;
//   _.scaffoldBackgroundColor = t19;
//   _.bottomAppBarColor = t20;
//   _.cardColor = t21;
//   _.dividerColor = t22;
//   _.highlightColor = t23;
//   _.splashColor = t24;
//   _.selectedRowColor = t25;
//   _.unselectedWidgetColor = t26;
//   _.disabledColor = t27;
//   _.secondaryHeaderColor = t28;
//   _.backgroundColor = t29;
//   _.dialogBackgroundColor = t30;
//   _.indicatorColor = t31;
//   _.hintColor = t32;
//   _.errorColor = t33;
//   _.toggleableActiveColor = t34;
//   _.typography = t35;
//   _.textTheme = t36;
//   _.primaryTextTheme = t37;
//   _.iconTheme = t38;
//   _.primaryIconTheme = t39;
//   _.appBarTheme = t40;
//   _.bannerTheme = t41;
//   _.bottomAppBarTheme = t42;
//   _.bottomNavigationBarTheme = t43;
//   _.bottomSheetTheme = t44;
//   _.buttonBarTheme = t45;
//   _.buttonTheme = t46;
//   _.cardTheme = t47;
//   _.checkboxTheme = t48;
//   _.chipTheme = t49;
//   _.dataTableTheme = t50;
//   _.dialogTheme = t51;
//   _.dividerTheme = t52;
//   _.drawerTheme = t53;
//   _.elevatedButtonTheme = t54;
//   _.floatingActionButtonTheme = t55;
//   _.listTileTheme = t56;
//   _.navigationBarTheme = t57;
//   _.navigationRailTheme = t58;
//   _.outlinedButtonTheme = t59;
//   _.popupMenuTheme = t60;
//   _.progressIndicatorTheme = t61;
//   _.radioTheme = t62;
//   _.sliderTheme = t63;
//   _.snackBarTheme = t64;
//   _.switchTheme = t65;
//   _.tabBarTheme = t66;
//   _.textButtonTheme = t67;
//   _.textSelectionTheme = t68;
//   _.timePickerTheme = t69;
//   _.toggleButtonsTheme = t70;
//   _.tooltipTheme = t71;
//   _.useTextSelectionTheme = t72;
//   _.textSelectionColor = t73;
//   _.cursorColor = t74;
//   _.textSelectionHandleColor = t75;
//   _.accentColor = t76;
//   _.accentColorBrightness = t77;
//   _.accentTextTheme = t78;
//   _.accentIconTheme = t79;
//   _.buttonColor = t80;
//   _.fixTextFieldOutlineLabel = t81;
//   _.primaryColorBrightness = t82;
// },
