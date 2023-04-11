export enum TableCellVerticalAlignment {
  top = C.TableCellVerticalAlignment_0,
  middle = C.TableCellVerticalAlignment_1,
  bottom = C.TableCellVerticalAlignment_2,
  baseline = C.TableCellVerticalAlignment_3,
  fill = C.TableCellVerticalAlignment_4,
}

export abstract class TableColumnWidth {}

export class IntrinsicColumnWidth
  extends N.IntrinsicColumnWidth
  implements TableColumnWidth
{
  constructor(flex?: number) {
    super(flex)
  }
}

// IntrinsicColumnWidth: function IntrinsicColumnWidth(t0) {
//     this._flex = t0;
//   },

export class FixedColumnWidth
  extends N.FixedColumnWidth
  implements TableColumnWidth
{
  constructor(value: number) {
    super(value)
  }
}

// FixedColumnWidth: function FixedColumnWidth(t0) {
//     this.value = t0;
//   },

export class FractionColumnWidth
  extends N.FractionColumnWidth
  implements TableColumnWidth
{
  constructor(value: number) {
    super(value)
  }
}

// FractionColumnWidth: function FractionColumnWidth(t0) {
//     this.value = t0;
//   },

export class FlexColumnWidth
  extends N.FlexColumnWidth
  implements TableColumnWidth
{
  constructor(value?: number) {
    super(value ?? 1.0)
  }
}
// FlexColumnWidth: function FlexColumnWidth(t0) {
//     this.value = t0;
//   },

export class MaxColumnWidth
  extends N.MaxColumnWidth
  implements TableColumnWidth
{
  constructor(a: TableColumnWidth, b: TableColumnWidth) {
    super(a, b)
  }
}

// MaxColumnWidth: function MaxColumnWidth(t0, t1) {
//     this.a = t0;
//     this.b = t1;
//   },

export class MinColumnWidth
  extends N.MinColumnWidth
  implements TableColumnWidth
{
  constructor(a: TableColumnWidth, b: TableColumnWidth) {
    super(a, b)
  }
}
// MinColumnWidth: function MinColumnWidth(t0, t1) {
//     this.a = t0;
//     this.b = t1;
//   },
