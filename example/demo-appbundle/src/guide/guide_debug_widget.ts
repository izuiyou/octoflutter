import {
  Colors,
  Container,
  EdgeInsets,
  TextStyle,
  Text,
  GestureDetector,
  Builder,
  Navigator,
  PageRouteBuilder,
  AppBar,
  Scaffold,
  IconThemeData,
} from '@octoflutter/flutter'
import {Lang} from '../lang'
import {
  kSize14,
  kSize16,
  kSize18,
  kSizeToolBar,
  kSubTitleColor,
  kTitleTextColor,
  kToolBarColor,
} from '../constants'
import {OctoImage} from '@octoflutter/octo'
import {FontWeight} from '@octoflutter/dartsdk'
import {PhotoView} from '@octoflutter/photo'

function imageWidget(img: string) {
  return new Builder({
    builder: (context) => {
      return new GestureDetector({
        child: new Container({
          child: OctoImage.asset(img),
          padding: EdgeInsets.only({left: 20, right: 20}),
        }),
        onTap: () => {
          Navigator.of(context).push(
            new PageRouteBuilder({
              pageBuilder: (ctx, a1, a2) => {
                return new Scaffold({
                  backgroundColor: Colors.white,
                  appBar: new AppBar({
                    title: new Text(img, {
                      style: new TextStyle({
                        fontSize: kSize18,
                        color: kTitleTextColor,
                      }),
                    }),
                    toolbarHeight: kSizeToolBar,
                    backgroundColor: kToolBarColor,
                    iconTheme: new IconThemeData({
                      size: kSize18,
                      color: kTitleTextColor,
                    }),
                    leadingWidth: kSizeToolBar,
                  }),
                  body: PhotoView.asset({
                    asset: img,
                    minScale: 0.1,
                    useOcto: true,
                  }),
                })
              },
            })
          )
        },
      })
    },
  })
}

export function guideChromeDebug() {
  return [
    new Container({
      child: new Text(Lang.instance.res().debug_1, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    imageWidget('example_web.png'),
  ]
}

export function guideMobileDebug() {
  return [
    new Container({
      child: new Text(Lang.instance.res().debug_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    imageWidget('example_mobile.jpg'),
  ]
}

export function guideMobileJSDebug() {
  return [
    new Container({
      child: new Text(Lang.instance.res().debug_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text('Android', {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    imageWidget('example_android.png'),
    new Container({
      child: new Text('iOS', {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    imageWidget('example_ios.png'),
  ]
}
