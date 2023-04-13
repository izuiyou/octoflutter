import {FontWeight} from '@octoflutter/dartsdk'
import {
  Alignment,
  BorderSide,
  BorderStyle,
  BoxDecoration,
  Colors,
  Container,
  EdgeInsets,
  FlexColumnWidth,
  Table,
  TableBorder,
  TableColumnWidth,
  TableRow,
  Text,
  TextStyle,
} from '@octoflutter/flutter'
import {Lang} from '../lang'
import {kSize14, kSize16, kSubTitleColor} from '../constants'

function tabItem(text: string) {
  return new Container({
    color: Colors.transparent,
    alignment: Alignment.center,
    padding: EdgeInsets.all(5),
    child: new Text(text, {
      style: new TextStyle({
        fontSize: kSize14,
        color: kSubTitleColor,
      }),
    }),
  })
}

export function guideConfigs() {
  return [
    new Container({
      child: new Text(Lang.instance.res().basic_config_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().basic_config_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Table({
        columnWidths: new Map<number, TableColumnWidth>([
          [0, new FlexColumnWidth(1.5)],
          [1, new FlexColumnWidth(1)],
          [2, new FlexColumnWidth(3)],
        ]),
        border: new TableBorder({
          left: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          top: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          right: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          bottom: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          horizontalInside: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          verticalInside: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
        }),
        children: [
          new TableRow({
            decoration: new BoxDecoration({
              color: Colors.blue,
            }),
            children: [
              tabItem(Lang.instance.res().basic_config_param),
              tabItem(Lang.instance.res().basic_config_type),
              tabItem(Lang.instance.res().basic_config_des),
            ],
          }),
          new TableRow({
            children: [
              tabItem('fullScreen'),
              tabItem('boolean'),
              tabItem(Lang.instance.res().basic_config_des_fullscreen),
            ],
          }),
          new TableRow({
            children: [
              tabItem('orientation'),
              tabItem('String'),
              tabItem(Lang.instance.res().basic_config_des_orientation),
            ],
          }),
        ],
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().basic_config_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_config_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Table({
        columnWidths: new Map<number, TableColumnWidth>([
          [0, new FlexColumnWidth(1)],
          [1, new FlexColumnWidth(1)],
          [2, new FlexColumnWidth(3)],
        ]),
        border: new TableBorder({
          left: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          top: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          right: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          bottom: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          horizontalInside: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
          verticalInside: new BorderSide({
            color: Colors.black,
            width: 2,
            style: BorderStyle.solid,
          }),
        }),
        children: [
          new TableRow({
            decoration: new BoxDecoration({
              color: Colors.blue,
            }),
            children: [
              tabItem(Lang.instance.res().basic_config_param),
              tabItem(Lang.instance.res().basic_config_type),
              tabItem(Lang.instance.res().basic_config_des),
            ],
          }),
          new TableRow({
            children: [
              tabItem('flutter'),
              tabItem('scheme'),
              tabItem(Lang.instance.res().basic_config_des_scheme),
            ],
          }),
          new TableRow({
            children: [
              tabItem('bundle'),
              tabItem('host'),
              tabItem(Lang.instance.res().basic_config_des_host),
            ],
          }),
          new TableRow({
            children: [
              tabItem('/main'),
              tabItem('path'),
              tabItem(Lang.instance.res().basic_config_des_path),
            ],
          }),
          new TableRow({
            children: [
              tabItem('from'),
              tabItem('query'),
              tabItem(Lang.instance.res().basic_config_des_query1),
            ],
          }),
          new TableRow({
            children: [
              tabItem('transparent'),
              tabItem('query'),
              tabItem(Lang.instance.res().basic_config_des_query2),
            ],
          }),
        ],
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}

export function guideCommonWidgets() {
  return [
    new Container({
      child: new Text(Lang.instance.res().basic_widget_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_4, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_4, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_5, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_5, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_6, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().basic_widget_content_6, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}
