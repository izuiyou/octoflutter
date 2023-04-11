export class IconData extends N.IconData {
  constructor(
    codePoint: number,
    args?: {
      fontFamily?: string
      fontPackage?: string
      matchTextDirection?: boolean
    }
  ) {
    super(
      codePoint,
      args?.fontFamily,
      args?.fontPackage,
      args?.matchTextDirection
    )
  }
}
