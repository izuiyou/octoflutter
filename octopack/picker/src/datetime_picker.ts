import {DateTime, isNullOrUndefined} from '@octoflutter/dartsdk'
import {octoContext, BuildContext} from '@octoflutter/flutter'
import {DatePickerTheme} from './datetime_picker_theme'
import {LocaleType} from './localeype'

N.octoLoadPicker()

export type DateChangedCallback = (dateTime: DateTime) => void
export type DateCancelledCallback = () => void

export class DatePicker {
  static showDatePicker = (
    context: BuildContext,
    args?: {
      showTitleActions?: boolean
      minTime?: DateTime
      maxTime?: DateTime
      onChanged?: DateChangedCallback
      onConfirm?: DateChangedCallback
      onCancel?: DateCancelledCallback
      locale?: LocaleType
      currentTime?: DateTime
      theme?: DatePickerTheme
    }
  ) => {
    let cbChanged = null
    if (!isNullOrUndefined(args?.onChanged)) {
      cbChanged = (t) => {
        args?.onChanged(new DateTime(t))
      }
    }

    let cbConform = null
    if (!isNullOrUndefined(args?.onConfirm)) {
      cbConform = (t) => {
        args?.onConfirm(new DateTime(t))
      }
    }

    PICKER.octoShowDatePicker(
      context[octoContext](),
      args?.showTitleActions ?? true,
      args?.minTime,
      args?.maxTime,
      cbChanged,
      cbConform,
      args?.onCancel,
      args?.locale ?? LocaleType.zh,
      args?.currentTime,
      args?.theme
    )
  }

  static showTimePicker = (
    context: BuildContext,
    args?: {
      showTitleActions?: boolean
      showSecondsColumn?: boolean
      onChanged?: DateChangedCallback
      onConfirm?: DateChangedCallback
      onCancel?: DateCancelledCallback
      locale?: LocaleType
      currentTime?: DateTime
      theme?: DatePickerTheme
    }
  ) => {
    let cbChanged = null
    if (!isNullOrUndefined(args?.onChanged)) {
      cbChanged = (t) => {
        args?.onChanged(new DateTime(t))
      }
    }

    let cbConform = null
    if (!isNullOrUndefined(args?.onConfirm)) {
      cbConform = (t) => {
        args?.onConfirm(new DateTime(t))
      }
    }

    PICKER.octoShowTimePicker(
      context[octoContext](),
      args?.showTitleActions ?? true,
      args?.showSecondsColumn ?? true,
      cbChanged,
      cbConform,
      args?.onCancel,
      args?.locale ?? LocaleType.zh,
      args?.currentTime,
      args?.theme
    )
  }

  static showTime12hPicker = (
    context: BuildContext,
    args?: {
      showTitleActions?: boolean
      onChanged?: DateChangedCallback
      onConfirm?: DateChangedCallback
      onCancel?: DateCancelledCallback
      locale?: LocaleType
      currentTime?: DateTime
      theme?: DatePickerTheme
    }
  ) => {
    let cbChanged = null
    if (!isNullOrUndefined(args?.onChanged)) {
      cbChanged = (t) => {
        args?.onChanged(new DateTime(t))
      }
    }

    let cbConform = null
    if (!isNullOrUndefined(args?.onConfirm)) {
      cbConform = (t) => {
        args?.onConfirm(new DateTime(t))
      }
    }

    PICKER.octoShowTime12hPicker(
      context[octoContext](),
      args?.showTitleActions ?? true,
      cbChanged,
      cbConform,
      args?.onCancel,
      args?.locale ?? LocaleType.zh,
      args?.currentTime,
      args?.theme
    )
  }

  static showDateTimePicker = (
    context: BuildContext,
    args?: {
      showTitleActions?: boolean
      minTime?: DateTime
      maxTime?: DateTime
      onChanged?: DateChangedCallback
      onConfirm?: DateChangedCallback
      onCancel?: DateCancelledCallback
      locale?: LocaleType
      currentTime?: DateTime
      theme?: DatePickerTheme
    }
  ) => {
    let cbChanged = null
    if (!isNullOrUndefined(args?.onChanged)) {
      cbChanged = (t) => {
        args?.onChanged(new DateTime(t))
      }
    }

    let cbConform = null
    if (!isNullOrUndefined(args?.onConfirm)) {
      cbConform = (t) => {
        args?.onConfirm(new DateTime(t))
      }
    }

    PICKER.octoShowDateTimePicker(
      context[octoContext](),
      args?.showTitleActions ?? true,
      args?.minTime,
      args?.maxTime,
      cbChanged,
      cbConform,
      args?.onCancel,
      args?.locale ?? LocaleType.zh,
      args?.currentTime,
      args?.theme
    )
  }
}
