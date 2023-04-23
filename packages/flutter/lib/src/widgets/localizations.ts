export abstract class LocalizationsDelegate {}

export class DefaultWidgetsLocalizations implements LocalizationsDelegate {
  static delegate: DefaultWidgetsLocalizations =
    N.defaultWidgetsLocalizationsDelegate()
}
