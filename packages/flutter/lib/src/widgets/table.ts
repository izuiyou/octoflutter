import {
  isNullOrUndefined,
  map4Dart,
  TextBaseline,
  TextDirection,
} from '@octoflutter/dartsdk'
import {Key, LocalKey, octoKey} from '../foundation/key'
import {Decoration} from '../painting/decoration'
import {
  FlexColumnWidth,
  TableCellVerticalAlignment,
  TableColumnWidth,
} from '../rendering/table'
import {TableBorder} from '../rendering/table_border'
import {Widget} from './framework'

export class TableCell extends N.TableCell {
  constructor(args: {
    key?: Key
    verticalAlignment?: TableCellVerticalAlignment
    child: Widget
  }) {
    super(args.verticalAlignment, args.child, args.key?.[octoKey])
  }
}

// TableCell: function TableCell(t0, t1, t2) {
//     this.verticalAlignment = t0;
//     this.child = t1;
//     this.key0 = t2;
//   },

export class TableRow extends N.TableRow {
  constructor(args?: {
    key?: LocalKey
    decoration?: Decoration
    children?: Array<Widget>
  }) {
    super(args?.key?.[octoKey], args?.decoration, args?.children)
  }
}

// TableRow: function TableRow(t0, t1, t2) {
//     this.key0 = t0;
//     this.decoration = t1;
//     this.children = t2;
//   },

export class Table extends N.Table {
  constructor(args?: {
    key?: Key
    children?: Array<TableRow>
    columnWidths?: Map<number, TableColumnWidth>
    defaultColumnWidth?: TableColumnWidth
    textDirection?: TextDirection
    border?: TableBorder
    defaultVerticalAlignment?: TableCellVerticalAlignment
    textBaseline?: TextBaseline
  }) {
    let columnWidths = null
    if (!isNullOrUndefined(args?.columnWidths)) {
      columnWidths = map4Dart(args?.columnWidths)
    }
    super(
      args?.children,
      columnWidths,
      args?.defaultColumnWidth ?? new FlexColumnWidth(),
      args?.textDirection,
      args?.border,
      args?.defaultVerticalAlignment ?? TableCellVerticalAlignment.top,
      args?.textBaseline,
      null,
      args?.key?.[octoKey]
    )
  }
}

// Table: function Table(t0, t1, t2, t3, t4, t5, t6, t7, t8) {
//     var _ = this;
//     _.children = t0;
//     _.columnWidths = t1;
//     _.defaultColumnWidth = t2;
//     _.textDirection = t3;
//     _.border = t4;
//     _.defaultVerticalAlignment = t5;
//     _.textBaseline = t6;
//     _._rowDecorations = t7;
//     _.key0 = t8;
//   },
