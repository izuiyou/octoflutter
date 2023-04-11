import {FontWeight} from '@octoflutter/dartsdk'
import {
  Colors,
  Container,
  EdgeInsets,
  GestureDetector,
  RichText,
  Text,
  TextSpan,
  TextStyle,
  WidgetSpan,
} from '@octoflutter/flutter'
import {
  kGitHubUrl,
  kHoverTextColor,
  kSize14,
  kSize16,
  kSubTitleColor,
} from '../constants'
import {Lang} from '../lang'
import {RouterPlugin} from '../plugins/router_plugin'

export function androidIntegration() {
  return [
    new Container({
      child: new Text(Lang.instance.res().android_integration_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new RichText({
        softWrap: true,
        text: new TextSpan({
          text: Lang.instance.res().android_integration_rich_1,
          style: new TextStyle({
            fontSize: kSize14,
            color: Colors.black54,
          }),
          children: [
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_2,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl + '/artifact/android/octoflutter.jar'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().android_integration_rich_3,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_4,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-android/support/src/main/java/com/example/support/FrescoImageProvider.java'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().android_integration_rich_5,
            }),

            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_6,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-android/support/src/main/java/com/example/support/local/LocalAndRemoteAmbientImpl.java'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().android_integration_rich_7,
            }),

            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_8,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-android/support/src/main/java/com/example/support/AppBundleSupportImpl.java'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().android_integration_rich_9,
            }),

            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_10,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-android/app/src/main/java/example/octoflutter/AppBundleActivity.kt'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().android_integration_rich_11,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(
                  Lang.instance.res().android_integration_rich_12,
                  {
                    style: new TextStyle({
                      fontSize: kSize14,
                      color: kHoverTextColor,
                    }),
                  }
                ),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-android/support/src/main/java/com/example/support/AppBundleDevSupplier.java'
                  )
                },
              }),
            }),
          ],
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().android_integration_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().android_integration_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
    new Container({
      child: new Text(Lang.instance.res().android_integration_3, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),

    new Container({
      child: new Text(Lang.instance.res().android_integration_content_3, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}

export function iosIntegration() {
  return [
    // 一级标题：简易集成
    new Container({
      child: new Text(Lang.instance.res().ios_integration_1, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    // 具体内容：集成步骤
    new Container({
      child: new RichText({
        softWrap: true,
        text: new TextSpan({
          text: Lang.instance.res().ios_integration_rich_1,
          style: new TextStyle({
            fontSize: kSize14,
            color: Colors.black54,
          }),
          children: [
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_2, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl + '/artifact/ios/OctoFlutter.framework'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_3,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_4, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoLoad/OFOpenManager.m'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_5,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_4, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoLoad/OFOpenManager.m'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_6,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_8, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoLoad/OFAppViewController.m'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_7,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_9, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoLoad/OFAppContainerController.m'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_10,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_11, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoChannels/MethodChannel/OFMCHttp.m'
                  )
                },
              }),
            }),
            new TextSpan({
              text: Lang.instance.res().ios_integration_rich_7,
            }),
            new WidgetSpan({
              child: new GestureDetector({
                child: new Text(Lang.instance.res().ios_integration_rich_12, {
                  style: new TextStyle({
                    fontSize: kSize14,
                    color: kHoverTextColor,
                  }),
                }),
                onTap: () => {
                  RouterPlugin.open(
                    kGitHubUrl +
                      '/example/octoflutter-ios/octoflutter-ios/OctoChannels/AppBundleChannels/OFAppBundleMCVideo.m'
                  )
                },
              }),
            }),
          ],
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),

    // 一级标题：注意事项
    new Container({
      child: new Text(Lang.instance.res().ios_integration_2, {
        style: new TextStyle({
          fontSize: kSize16,
          fontWeight: FontWeight.bold,
          color: kSubTitleColor,
        }),
      }),
      margin: EdgeInsets.only({top: 10, bottom: 10, left: 20, right: 20}),
    }),
    // 具体内容：注意事项
    new Container({
      child: new Text(Lang.instance.res().ios_integration_content_2, {
        style: new TextStyle({
          fontSize: kSize14,
          color: Colors.black54,
        }),
      }),
      margin: EdgeInsets.only({top: 0, bottom: 10, left: 20, right: 20}),
    }),
  ]
}
