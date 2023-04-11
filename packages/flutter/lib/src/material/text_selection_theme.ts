import {Color} from '@octoflutter/dartsdk'

export class TextSelectionThemeData extends N.TextSelectionThemeData {
  constructor(args?: {
    cursorColor?: Color
    selectionColor?: Color
    selectionHandleColor?: Color
  }) {
    super(args?.cursorColor, args?.selectionColor, args?.selectionHandleColor)
  }
}

// TextSelectionThemeData: function TextSelectionThemeData(t0, t1, t2) {
//     this.cursorColor = t0;
//     this.selectionColor = t1;
//     this.selectionHandleColor = t2;
//   },
