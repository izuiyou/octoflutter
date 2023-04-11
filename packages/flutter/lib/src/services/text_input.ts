export enum SmartDashesType {
  disabled = C.SmartDashesType_0,
  enabled = C.SmartDashesType_1,
}

export enum SmartQuotesType {
  disabled = C.SmartQuotesType_0,
  enabled = C.SmartQuotesType_1,
}

export enum TextInputAction {
  none = C.TextInputAction_0,
  unspecified = C.TextInputAction_1,
  done = C.TextInputAction_2,
  go = C.TextInputAction_3,
  search = C.TextInputAction_4,
  send = C.TextInputAction_5,
  next = C.TextInputAction_6,
  previous = C.TextInputAction_7,
  continueAction = C.TextInputAction_8,
  join = C.TextInputAction_9,
  route = C.TextInputAction_10,
  emergencyCall = C.TextInputAction_11,
  newline = C.TextInputAction_12,
}

export enum TextCapitalization {
  words = C.TextCapitalization_0,
  sentences = C.TextCapitalization_1,
  characters = C.TextCapitalization_2,
  none = C.TextCapitalization_3,
}

export enum TextInputType {
  text = N.textInputTypeInstance(0),
  multiline = N.textInputTypeInstance(1),
  number = N.textInputTypeInstance(2),
  phone = N.textInputTypeInstance(3),
  datetime = N.textInputTypeInstance(4),
  emailAddress = N.textInputTypeInstance(5),
  url = N.textInputTypeInstance(6),
  visiblePassword = N.textInputTypeInstance(7),
  name = N.textInputTypeInstance(8),
  streetAddress = N.textInputTypeInstance(9),
  none = N.textInputTypeInstance(10),
}

export enum SelectionChangedCause {
  tap = C.SelectionChangedCause_0,
  doubleTap = C.SelectionChangedCause_1,
  longPress = C.SelectionChangedCause_2,
  forcePress = C.SelectionChangedCause_3,
  keyboard = C.SelectionChangedCause_4,
  toolbar = C.SelectionChangedCause_5,
  drag = C.SelectionChangedCause_6,
}
