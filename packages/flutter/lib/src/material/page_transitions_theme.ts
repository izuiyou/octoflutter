export class PageTransitionsTheme extends N.PageTransitionsTheme {
  constructor(args?: {builders?: any}) {
    super(args?.builders ?? N.octoPageTransitionsBuilder())
  }
}

// PageTransitionsTheme: function PageTransitionsTheme(t0) {
//     this._builders = t0;
//   },
