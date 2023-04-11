import {
  Colors,
  Container,
  EdgeInsets,
  Text,
  TextStyle,
} from '@octoflutter/flutter'
import {FontWeight} from '@octoflutter/dartsdk'
import {kSize16, kSize14, kSubTitleColor} from '../constants'
import {Lang} from '../lang'

export function guideAdvancedFlutterWidgets() {
  return [
    new Container({
      child: new Text(Lang.instance.res().advanced_widget_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_widget_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().advanced_widget_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_widget_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().advanced_widget_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_widget_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().advanced_widget_4, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_widget_content_4, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}

export function guideAdvancedTSWidgets() {
  return [
    new Container({
      child: new Text(Lang.instance.res().advanced_eco_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_eco_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}

export function guidePerformanceWidgets() {
  return [
    new Container({
      child: new Text(Lang.instance.res().advanced_performance_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().advanced_performance_4, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().advanced_performance_content_4, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}
