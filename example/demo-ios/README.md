# OctoFlutter iOS Integration Document

This document is intended to help iOS application developers quickly integrate' OctoFlutter 'in their programs. Please follow the instructions below<br>
 !> Note: This document assumes that you have some iOS development experience.

## Automatic Integration
OctoFlutter is published through CocoaPods and can be automatically deployed after configuration. This method is recommended.<br>
!> Note: This document assumes that you have experience using CocoaPods.
1. Add a line of statements in Podfile:
```ruby
pod 'OctoFlutter'

# OR specify a version
pod 'OctoFlutter', '~> 0.0.1'
```
2. Run this command in the terminal to install：
```shell
pod install

# OR install with CocoaPods index updated
pod install --repo-update
```

## Manual Integration

1. Open an iOS project. If you don't already have one, please create a new project<br>
2. Add 'OctoFlutter.framework' to your project by "Add Files to"<br>
   * You can find it [here] (../../artifact/ios)

3. XCode project settings<br>
   * "General" - "Frameworks, Libraries, and Embedded Content" - "OctoFlutter. framework" set to "Embedde & Sign"
   * "Build Settings" - "Enable Bitcode" set to "NO"
   * "Build Settings" - "Validate Workspace" set to "YES"

## Code
   * Build *OFOpenConfig*, refer to the code of *OFOpenManager* in this project
```objc
OFOpenConfig *config = [[OFOpenConfig alloc] init];
config.mode = 0;
config.appFolder = @"xx/xx";// path to the folder where app.js is located
config.appBundleName = @"name";// app bundle name
config.fullScreen = YES;// full screen or not
config.canSwipeBack = YES;// can swipe back or not
config.frameworkVersion = 1;// version of framework.js
config.frameworkFolder = @"yy/yy";// path to the folder where framework.js is located
```
   * Create *OFAppEngine*, refer to the code of *OFOpenManager* in this project
```objc
OFAppEngine *engine = [[OFAppEngineManager sharedInstance] buildEngineMode:OFAppEngineMode_ Isolate config:config];
```
   * Use *OFBaseViewController* or a class that inherits from it, refer to the code of *OFAppViewController* and *OFAppContainerController* in this project
```objc
OFBaseViewController *vc = [[OFBaseViewController alloc] initWithEngine:engine openConfg:config];
[vc prepare];
```
   * Register channels (like plugins in Flutter), refer to the code of *OFMCHttp* and *OFAppBundleMCVideo* in this project
```objc
// common channel, inherited from OFAppEngineMCBase
@interface OFMCHttp : OFAppEngineMCBase

// channel of some app bundle, inherited from OFAppBundleMCBase
@interface OFAppBundleMCVideo : OFAppBundleMCBase

// record the class names of common channels, triggering automatic registration
config.engineMCClassNames = @[
@"OFMCHttp",
];

// record the class names of the app bundle channels, triggering automatic registration
config.appMCClassNames = @[
@"OFAppBundleMCVideo"
];
```


## Precautions
   * The minimum system version supported by OctoFlutter for real machines is iOS 10.0
   * OctoFlutter support iOS Simulators, with a minimum system version of iOS 13.0