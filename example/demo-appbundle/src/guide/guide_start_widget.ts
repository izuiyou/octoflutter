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

export function guideIntroduceWidgets() {
  return [
    new Container({
      child: new Text(Lang.instance.res().intro_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().intro_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().intro_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().intro_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().intro_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().intro_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}

export function fastStart() {
  return [
    new Container({
      child: new Text(Lang.instance.res().quick_start_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().quick_start_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().quick_start_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().quick_start_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().quick_start_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().quick_start_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().quick_start_4, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().quick_start_content_4, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      height: 50,
    }),
  ]
}
