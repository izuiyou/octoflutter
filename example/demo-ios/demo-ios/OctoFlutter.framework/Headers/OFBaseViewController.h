//
//  OFBaseViewController.h
//  octoflutter
//
//  Created by Simon Yang on 2023/4/3.
//

#import <UIKit/UIKit.h>
#import "FlutterViewController.h"

NS_ASSUME_NONNULL_BEGIN
@class OFAppEngine;
@class OFOpenConfig;

@interface OFBaseViewController : FlutterViewController

@property (nonatomic, strong) UIColor *bgColor;

@property (nonatomic, assign) BOOL showDebugUI;

@property (nonatomic, copy, nullable) void (^customPopGestureEnable)(BOOL);

@property (nonatomic, copy, nullable) void (^customSwipeEdgePercent)(CGFloat percent);

@property (nonatomic, copy, nullable) void (^onAppLaunch)(void);

@property (nonatomic, copy, nullable) void (^buildDebugUI)(void);

- (void)enablePopGesture:(BOOL)enabled;

- (void)onSwipeEdgePercentSet:(CGFloat)percent;

- (NSDictionary*)fetchAppInfo;

@end

NS_ASSUME_NONNULL_END
