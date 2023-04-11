//
//  AppDelegate.h
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow * window;

// 在AppDelegate增加allowAutoRotate，辅助屏幕旋转
@property (nonatomic, assign) BOOL allowAutoRotate;
@end

/*
 OctoFlutter.framework引入工程：
 0、将文件添加进工程
 1、General-Frameworks,Libraries,and Embedded Content-OctoFlutter.framework设为Embed & Sign
 2、Build Settings-Enable Bitcode设为NO
 3、Build Settings-Validate Workspace设为YES
 */
