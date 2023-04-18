# OctoFlutter iOS 接入文档

本文档旨在帮助iOS应用开发者在程序中快速接入`OctoFlutter`，请按照下述指南进行操作。<br>
!> 注意: 本文档假设您已经具备一定的iOS开发经验。

## 自动集成
OctoFlutter通过CocoaPods发布，经过配置后可以自动部署，推荐使用这种方式。<br>
!> 注意: 本文档假设您已经具备CocoaPods的使用经验。<br>
1、在Podfile中添加一行语句：
```ruby
pod 'OctoFlutter'

# 或指定版本号
pod 'OctoFlutter', '~> 0.0.1'
```
2、在终端中运行命令进行安装：
```shell
pod install

# 或确保CocoaPods索引更新的情况下安装
pod install --repo-update
```

## 手动集成

1、打开iOS项目，如果还没有，请创建一个新的项目<br>
2、通过“添加文件”的方式添加 `OctoFlutter.framework` 到您的项目中<br>
   * 您可以在 [这里](../../artifact/ios) 找到它

3、XCode项目设置<br>
   * "General" - "Frameworks,Libraries,and Embedded Content" - "OctoFlutter.framework"设为"Embed & Sign"
   * "Build Settings" - "Enable Bitcode"设为"NO"
   * "Build Settings" - "Validate Workspace"设为"YES"

## 接入代码
   * 构建*OFOpenConfig*，参考本工程的*OFOpenManager*
```objc
OFOpenConfig *config = [[OFOpenConfig alloc] init];
config.mode = 0;
config.appFolder = @"xx/xx";// 业务app.js所在文件夹路径
config.appBundleName = @"name";// 业务名称
config.fullScreen = YES;// 是否全屏
config.canSwipeBack = YES;// 是否可以右划返回
config.frameworkVersion = 1;// framework.js的版本
config.frameworkFolder = @"yy/yy";// framework.js所在文件夹路径
```
   * 创建*OFAppEngine*，参考本工程的*OFOpenManager*
```objc
OFAppEngine *engine = [[OFAppEngineManager sharedInstance] buildEngineMode:OFAppEngineMode_Isolate config:config];
```
   * 使用*OFBaseViewController*或继承自它的类，参考本工程的*OFAppViewController*和*OFAppContainerController*
```objc
OFBaseViewController *vc = [[OFBaseViewController alloc] initWithEngine:engine openConfg:config];
[vc prepare];
```
   * 注册channel（类似Flutter的插件），参考本工程的*OFMCHttp*和*OFAppBundleMCVideo*
```objc
// 通用channel，继承自OFAppEngineMCBase
@interface OFMCHttp : OFAppEngineMCBase

// 某个业务使用的channel，继承自OFAppBundleMCBase
@interface OFAppBundleMCVideo : OFAppBundleMCBase

// config记录通用channel的类名，触发自动注册
config.engineMCClassNames = @[
   @"OFMCHttp",
];

// config记录通用业务channel的类名，触发自动注册
config.appMCClassNames = @[
   @"OFAppBundleMCVideo"
];
```


## 注意事项
 * OctoFlutter支持的最小系统版本为iOS 10.0
 * OctoFlutter不支持iOS模拟器，请使用真机调试