import {Color} from '@octoflutter/dartsdk'
import {
  Alignment,
  Axis,
  BuildContext,
  Colors,
  Column,
  Container,
  CrossAxisAlignment,
  EdgeInsets,
  GestureDetector,
  MainAxisAlignment,
  RepaintBoundary,
  SingleChildScrollView,
  StatelessWidget,
  Text,
  TextStyle,
  Widget,
} from '@octoflutter/flutter'
import {kApiItemColor, kSize14, kSize16} from '../constants'
import {ApiData, ApiItemData} from './api_data'

export type OnItemClickListener = (item: ApiItemData) => void
export type OnApiItemClickListener = (content: string, type: string) => void

export class LeftApiNavWidget extends StatelessWidget {
  data: ApiData
  callback: OnItemClickListener
  constructor(data: ApiData, callback: OnItemClickListener) {
    super()
    this.data = data
    this.callback = callback
  }

  build(context: BuildContext): Widget {
    return new SingleChildScrollView({
      scrollDirection: Axis.vertical,
      child: new RepaintBoundary({
        child: new Container({
          margin: EdgeInsets.only({left: 20}),
          alignment: Alignment.topLeft,
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: this.contentWidgets(),
          }),
          width: kIsWeb ? 180 : 120,
        }),
      }),
    })
  }

  titleWidget = (title) => {
    return new Container({
      height: 40,
      alignment: Alignment.centerLeft,
      child: new Text(title, {
        style: new TextStyle({
          fontSize: kSize16,
          color: Colors.black87,
        }),
      }),
    })
  }

  itemWidget = (item: ApiItemData, callback: OnItemClickListener) => {
    return new GestureDetector({
      child: new Container({
        height: 30,
        margin: EdgeInsets.only({left: 10}),
        alignment: Alignment.centerLeft,
        child: new Text(item.name, {
          style: new TextStyle({
            fontSize: kSize14,
            color: kApiItemColor,
          }),
        }),
      }),
      onTap: () => {
        callback(item)
      },
    })
  }

  contentWidgets = () => {
    const widgets = []
    widgets.push(this.titleWidget('flutter'))
    this.data.flutter.forEach((v) => {
      widgets.push(this.itemWidget(v, this.callback))
    })
    widgets.push(this.titleWidget('dartsdk'))
    this.data.dartsdk.forEach((v) => {
      widgets.push(this.itemWidget(v, this.callback))
    })
    widgets.push(this.titleWidget('octo'))
    this.data.octo.forEach((v) => {
      widgets.push(this.itemWidget(v, this.callback))
    })
    widgets.push(this.titleWidget('octopack'))
    this.data.octopack.forEach((v) => {
      widgets.push(this.itemWidget(v, this.callback))
    })
    return widgets
  }
}

export class ApiContentWidget extends StatelessWidget {
  item: ApiItemData
  callback: OnApiItemClickListener
  constructor(item: ApiItemData, callback: OnApiItemClickListener) {
    super()
    this.item = item
    this.callback = callback
  }

  build(context: BuildContext): Widget {
    return new SingleChildScrollView({
      scrollDirection: Axis.vertical,
      child: new RepaintBoundary({
        child: new Container({
          margin: EdgeInsets.only({left: 10}),
          child: new Column({
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: this.contentWidgets(),
          }),
        }),
      }),
    })
  }

  contentWidgets = () => {
    const widgets = []

    if (this.item.classes.length > 0) {
      widgets.push(this.titleWidget('Classes'))
      this.item.classes.forEach((v) => {
        widgets.push(this.itemWidget(v, 'classes', this.callback))
      })
    }

    if (this.item.enums.length > 0) {
      widgets.push(this.titleWidget('Enums'))
      this.item.enums.forEach((v) => {
        widgets.push(this.itemWidget(v, 'enums', this.callback))
      })
    }

    if (this.item.types.length > 0) {
      widgets.push(this.titleWidget('Types'))
      this.item.types.forEach((v) => {
        widgets.push(this.itemWidget(v, 'types', this.callback))
      })
    }

    if (this.item.constants.length > 0) {
      widgets.push(this.titleWidget('Constants'))
      this.item.constants.forEach((v) => {
        widgets.push(this.itemWidget(v, 'constants', this.callback))
      })
    }

    if (this.item.functions.length > 0) {
      widgets.push(this.titleWidget('Functions'))
      this.item.functions.forEach((v) => {
        widgets.push(this.itemWidget(v, 'functions', this.callback))
      })
    }

    return widgets
  }

  titleWidget = (title) => {
    return new Container({
      height: 40,
      alignment: Alignment.centerLeft,
      child: new Text(title, {
        style: new TextStyle({
          fontSize: kSize16,
          color: Color.fromARGB(255, 110, 110, 110),
        }),
      }),
    })
  }

  itemWidget = (
    item: string,
    type: string,
    callback: OnApiItemClickListener
  ) => {
    return new GestureDetector({
      child: new Container({
        height: 30,
        margin: EdgeInsets.only({left: 10}),
        alignment: Alignment.centerLeft,
        child: new Text(item, {
          style: new TextStyle({
            fontSize: kSize14,
            color: kApiItemColor,
          }),
        }),
      }),
      onTap: () => {
        callback(item, type)
      },
    })
  }
}
