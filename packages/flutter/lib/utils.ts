import {
  Color,
  Duration,
  isNullOrUndefined,
  Offset,
  Rect,
  Size,
} from '@octoflutter/dartsdk'
import {EdgeInsets, ImageConfiguration} from './painting'
import {MaterialAccentColor, MaterialColor} from './src/material/colors'
import {TextTheme} from './src/material/text_theme'
import {ThemeData, VisualDensity} from './src/material/theme_data'
import {TextStyle} from './src/painting/text_style'
import {MediaQueryData} from './src/widgets/media_query'
import {
  DragDownDetails,
  DragEndDetails,
  DragStartDetails,
  DragUpdateDetails,
  ForcePressDetails,
  LongPressDownDetails,
  LongPressEndDetails,
  LongPressMoveUpdateDetails,
  LongPressStartDetails,
  ScaleEndDetails,
  ScaleStartDetails,
  ScaleUpdateDetails,
  TapDownDetails,
  Velocity,
} from './gestures'

const convertSize = (size: any) => {
  if (!isNullOrUndefined(size)) {
    const keys = Reflect.ownKeys(size)
    return new Size(Reflect.get(size, keys[0]), Reflect.get(size, keys[1]))
  }
  return null
}

export const convertRect = (rect: any) => {
  if (!isNullOrUndefined(rect)) {
    const keys = Reflect.ownKeys(rect)
    return new Rect(
      Reflect.get(rect, keys[0]),
      Reflect.get(rect, keys[1]),
      Reflect.get(rect, keys[2]),
      Reflect.get(rect, keys[3])
    )
  }
  return null
}

const convertEdgeInsets = (edgeInsets: any) => {
  if (!isNullOrUndefined(edgeInsets)) {
    const keys = Reflect.ownKeys(edgeInsets)
    return EdgeInsets.only({
      left: Reflect.get(edgeInsets, keys[0]),
      top: Reflect.get(edgeInsets, keys[1]),
      right: Reflect.get(edgeInsets, keys[2]),
      bottom: Reflect.get(edgeInsets, keys[3]),
    })
  }
  return null
}

const convertColor = (color: any) => {
  if (!isNullOrUndefined(color)) {
    const keys = Reflect.ownKeys(color)
    if (keys.length === 2) {
      //ColorSwatch
      const swatch = N.octoColorToList(color)
      const value = Reflect.get(color, keys[1])

      if (color.constructor.name === 'MaterialColor') {
        const map: Map<number, Color> = new Map([
          [50, convertColor(swatch[0])],
          [100, convertColor(swatch[1])],
          [200, convertColor(swatch[2])],
          [300, convertColor(swatch[3])],
          [400, convertColor(swatch[4])],
          [500, convertColor(swatch[5])],
          [600, convertColor(swatch[6])],
          [700, convertColor(swatch[7])],
          [800, convertColor(swatch[8])],
          [900, convertColor(swatch[9])],
        ])
        return new MaterialColor(value, map)
      } else if (color.constructor.name === 'MaterialAccentColor') {
        const map: Map<number, Color> = new Map([
          [100, convertColor(swatch[0])],
          [200, convertColor(swatch[1])],
          [400, convertColor(swatch[2])],
          [700, convertColor(swatch[3])],
        ])
        return new MaterialAccentColor(value, swatch)
      } else {
        return new Color(value)
      }
    } else {
      return new Color(Reflect.get(color, keys[0]))
    }
  }
  return null
}

const convertVisualDensity = (density: any) => {
  if (!isNullOrUndefined(density)) {
    const keys = Reflect.ownKeys(density)
    return new VisualDensity({
      horizontal: Reflect.get(density, keys[0]),
      vertical: Reflect.get(density, keys[1]),
    })
  }
  return null
}

const convertTextStyle = (style: any) => {
  if (!isNullOrUndefined(style)) {
    const keys = Reflect.ownKeys(style)
    return new TextStyle({
      inherit: Reflect.get(style, keys[0]),
      color: convertColor(Reflect.get(style, keys[1])),
      backgroundColor: convertColor(Reflect.get(style, keys[2])),
      fontSize: Reflect.get(style, keys[6]),
      fontWeight: Reflect.get(style, keys[7]),
      fontStyle: Reflect.get(style, keys[8]),
      letterSpacing: Reflect.get(style, keys[9]),
      wordSpacing: Reflect.get(style, keys[10]),
      textBaseline: Reflect.get(style, keys[11]),
      height: Reflect.get(style, keys[12]),
      overflow: Reflect.get(style, keys[24]),
    })
  }
  return null
}

const convertTextTheme = (theme: any) => {
  if (!isNullOrUndefined(theme)) {
    const keys = Reflect.ownKeys(theme)
    return new TextTheme({
      displayLarge: convertTextStyle(Reflect.get(theme, keys[0])),
      displayMedium: convertTextStyle(Reflect.get(theme, keys[1])),
      displaySmall: convertTextStyle(Reflect.get(theme, keys[2])),
      headlineLarge: convertTextStyle(Reflect.get(theme, keys[3])),
      headlineMedium: convertTextStyle(Reflect.get(theme, keys[4])),
      headlineSmall: convertTextStyle(Reflect.get(theme, keys[5])),
      titleLarge: convertTextStyle(Reflect.get(theme, keys[6])),
      titleMedium: convertTextStyle(Reflect.get(theme, keys[7])),
      titleSmall: convertTextStyle(Reflect.get(theme, keys[8])),
      bodyLarge: convertTextStyle(Reflect.get(theme, keys[9])),
      bodyMedium: convertTextStyle(Reflect.get(theme, keys[10])),
      bodySmall: convertTextStyle(Reflect.get(theme, keys[11])),
      labelLarge: convertTextStyle(Reflect.get(theme, keys[12])),
      labelMedium: convertTextStyle(Reflect.get(theme, keys[13])),
      labelSmall: convertTextStyle(Reflect.get(theme, keys[14])),
    })
  }
  return null
}

export const convertThemeData = (data: any) => {
  const keys = Reflect.ownKeys(data)
  //todo 补全实现
  return new ThemeData({
    androidOverscrollIndicator: Reflect.get(data, keys[0]),
    applyElevationOverlayColor: Reflect.get(data, keys[1]),
    platform: Reflect.get(data, keys[6]),
    splashFactory: Reflect.get(data, keys[8]),
    visualDensity: convertVisualDensity(Reflect.get(data, keys[9])),
    useMaterial3: Reflect.get(data, keys[10]),
    primaryColor: convertColor(Reflect.get(data, keys[12])),
    primaryColorLight: convertColor(Reflect.get(data, keys[13])),
    primaryColorDark: convertColor(Reflect.get(data, keys[14])),
    focusColor: convertColor(Reflect.get(data, keys[15])),
    hoverColor: convertColor(Reflect.get(data, keys[16])),
    shadowColor: convertColor(Reflect.get(data, keys[17])),
    canvasColor: convertColor(Reflect.get(data, keys[18])),
    scaffoldBackgroundColor: convertColor(Reflect.get(data, keys[19])),
    bottomAppBarColor: convertColor(Reflect.get(data, keys[20])),
    cardColor: convertColor(Reflect.get(data, keys[21])),
    dividerColor: convertColor(Reflect.get(data, keys[22])),
    highlightColor: convertColor(Reflect.get(data, keys[23])),
    splashColor: convertColor(Reflect.get(data, keys[24])),
    selectedRowColor: convertColor(Reflect.get(data, keys[25])),
    unselectedWidgetColor: convertColor(Reflect.get(data, keys[26])),
    disabledColor: convertColor(Reflect.get(data, keys[27])),
    secondaryHeaderColor: convertColor(Reflect.get(data, keys[28])),
    backgroundColor: convertColor(Reflect.get(data, keys[29])),
    dialogBackgroundColor: convertColor(Reflect.get(data, keys[30])),
    indicatorColor: convertColor(Reflect.get(data, keys[31])),
    hintColor: convertColor(Reflect.get(data, keys[32])),
    errorColor: convertColor(Reflect.get(data, keys[33])),
    toggleableActiveColor: convertColor(Reflect.get(data, keys[34])),
    textTheme: convertTextTheme(Reflect.get(data, keys[36])),
    primaryTextTheme: convertTextTheme(Reflect.get(data, keys[37])),
    buttonTheme: Reflect.get(data, keys[46]),
    toggleButtonsTheme: Reflect.get(data, keys[70]),
  })
}

export const convertMediaQuery = (data: any) => {
  const keys = Reflect.ownKeys(data)

  return new MediaQueryData({
    size: convertSize(Reflect.get(data, keys[0])),
    devicePixelRatio: Reflect.get(data, keys[1]),
    textScaleFactor: Reflect.get(data, keys[2]),
    platformBrightness: Reflect.get(data, keys[3]),
    viewInsets: convertEdgeInsets(Reflect.get(data, keys[4])),
    padding: convertEdgeInsets(Reflect.get(data, keys[5])),
    viewPadding: convertEdgeInsets(Reflect.get(data, keys[6])),
    systemGestureInsets: convertEdgeInsets(Reflect.get(data, keys[7])),
    alwaysUse24HourFormat: Reflect.get(data, keys[8]),
    accessibleNavigation: Reflect.get(data, keys[9]),
    invertColors: Reflect.get(data, keys[10]),
    highContrast: Reflect.get(data, keys[11]),
    disableAnimations: Reflect.get(data, keys[12]),
    boldText: Reflect.get(data, keys[13]),
    navigationMode: Reflect.get(data, keys[14]),
  })
}

export const convertDuration = (duration: any) => {
  if (!isNullOrUndefined(duration)) {
    return new Duration({milliseconds: N.octoDurationInMills(duration)})
  }
  return null
}

//-------Events------------
export const convertDragDownDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoDragDownDetails(event)
    return new DragDownDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
    })
  }
  return null
}

export const convertDragStartDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoDragStartDetails(event)
    return new DragStartDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      sourceTimeStamp: new Duration({microseconds: ret[4]}),
      kind: ret[5],
    })
  }
  return null
}

export const convertDragUpdateDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoDragUpdateDetails(event)
    return new DragUpdateDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      sourceTimeStamp: new Duration({microseconds: ret[4]}),
      primaryDelta: ret[5],
      delta: new Offset(ret[6], ret[7]),
    })
  }
  return null
}

export const convertDragEndDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoDragEndDetails(event)
    return new DragEndDetails({
      primaryVelocity: ret[0],
      velocity: new Velocity({pixelsPerSecond: new Offset(ret[1], ret[2])}),
    })
  }
  return null
}

export const convertTapDownDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoTapDownDetails(event)
    return new TapDownDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      kind: ret[4],
    })
  }
  return null
}

export const convertTapUpDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoTapUpDetails(event)
    return new TapDownDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      kind: ret[4],
    })
  }
  return null
}

export const convertScaleStartDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoScaleStartDetails(event)
    return new ScaleStartDetails({
      focalPoint: new Offset(ret[0], ret[1]),
      localFocalPoint: new Offset(ret[2], ret[3]),
      pointerCount: ret[4],
    })
  }
  return null
}

export const convertScaleUpdateDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoScaleUpdateDetails(event)
    return new ScaleUpdateDetails({
      focalPoint: new Offset(ret[0], ret[1]),
      localFocalPoint: new Offset(ret[2], ret[3]),
      pointerCount: ret[4],
      focalPointDelta: new Offset(ret[5], ret[6]),
      horizontalScale: ret[7],
      verticalScale: ret[8],
      scale: ret[9],
      rotation: ret[10],
    })
  }
  return null
}

export const convertScaleEndDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoScaleEndDetails(event)
    return new ScaleEndDetails({
      velocity: new Velocity({pixelsPerSecond: new Offset(ret[0], ret[1])}),
      pointerCount: ret[2],
    })
  }
  return null
}

export const convertLongPressStartDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoLongPressStartDetails(event)
    return new LongPressStartDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
    })
  }
  return null
}

export const convertLongPressMoveUpdateDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoLongPressMoveUpdateDetails(event)
    return new LongPressMoveUpdateDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      offsetFromOrigin: new Offset(ret[4], ret[5]),
      localOffsetFromOrigin: new Offset(ret[6], ret[7]),
    })
  }
  return null
}

export const convertLongPressEndDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoLongPressEndDetails(event)
    return new LongPressEndDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      velocity: new Velocity({pixelsPerSecond: new Offset(ret[4], ret[5])}),
    })
  }
  return null
}

export const convertLongPressDownDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoLongPressDownDetails(event)
    return new LongPressDownDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      kind: ret[4],
    })
  }
  return null
}

export const convertForcePressDetails = (event: any) => {
  if (!isNullOrUndefined(event)) {
    const ret = N.octoForcePressDetails(event)
    return new ForcePressDetails({
      globalPosition: new Offset(ret[0], ret[1]),
      localPosition: new Offset(ret[2], ret[3]),
      pressure: ret[4],
    })
  }
  return null
}

export const convertImageConfiguration = (conf: any) => {
  if (!isNullOrUndefined(conf)) {
    const keys = Reflect.ownKeys(conf)
    return new ImageConfiguration({
      devicePixelRatio: Reflect.get(conf, keys[1]),
      textDirection: Reflect.get(conf, keys[3]),
      size: convertSize(Reflect.get(conf, keys[4])),
      platform: Reflect.get(conf, keys[5]),
    })
  }
  return null
}
