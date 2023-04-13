import {Widget} from '@octoflutter/flutter'
import {guideCommonWidgets, guideConfigs} from './guide_basic_widget'
import {
  guideChromeDebug,
  guideMobileDebug,
  guideMobileJSDebug,
} from './guide_debug_widget'
import {
  guideAdvancedFlutterWidgets,
  guideAdvancedTSWidgets,
  guidePerformanceWidgets,
} from './guide_advanced_widget'
import {fastStart, guideIntroduceWidgets} from './guide_start_widget'
import {androidIntegration, iosIntegration} from './guide_integration_widget'

export const findGuideContentWidget = (index, indexOfItem): Array<Widget> => {
  if (index === 0) {
    if (indexOfItem === 0) {
      return guideIntroduceWidgets()
    } else {
      return fastStart()
    }
  } else if (index === 1) {
    if (indexOfItem === 0) {
      return androidIntegration()
    } else {
      return iosIntegration()
    }
  } else if (index === 2) {
    if (indexOfItem === 0) {
      return guideConfigs()
    } else {
      return guideCommonWidgets()
    }
  } else if (index === 3) {
    if (indexOfItem === 0) {
      return guideAdvancedFlutterWidgets()
    } else if (indexOfItem === 1) {
      return guideAdvancedTSWidgets()
    } else {
      return guidePerformanceWidgets()
    }
  } else if (index === 4) {
    if (indexOfItem === 0) {
      return guideChromeDebug()
    } else if (indexOfItem === 1) {
      return guideMobileDebug()
    } else {
      return guideMobileJSDebug()
    }
  }
  return []
}
