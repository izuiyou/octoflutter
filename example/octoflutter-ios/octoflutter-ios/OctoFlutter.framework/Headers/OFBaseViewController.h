//
//  OFBaseViewController.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/14.
//

#import <UIKit/UIKit.h>
#import "OFPlatformViewInterface.h"

NS_ASSUME_NONNULL_BEGIN
@class OFAppEngine;
@class OFOpenConfig;
@interface OFBaseViewController : UIViewController

@property (nonatomic, strong) UIColor *bgColor;

@property (nonatomic, copy, nullable) void (^customPopGestureEnable)(BOOL);

@property (nonatomic, copy, nullable) void (^customSwipeEdgePercent)(CGFloat percent);

@property (nonatomic, copy, nullable) void (^onAppLaunch)(void);

@property (nonatomic, copy, nullable) void (^onAppShut)(int bid, BOOL result);

@property (nonatomic, copy, nullable) void (^onStatusBarUpdate)(UIStatusBarStyle style);

@property (nonatomic, copy, nullable) void (^afterPrepared)(void);

- (instancetype)initWithEngine:(OFAppEngine*)engine openConfg:(OFOpenConfig*)openConfig;

- (void)prepare;

- (void)restart;

- (void)doInMain:(dispatch_block_t)block;

- (void)enablePopGesture:(BOOL)enabled;

- (void)onSwipeEdgePercentSet:(CGFloat)percent;

/// 屏幕旋转
- (void)performOrientationUpdate:(UIInterfaceOrientationMask)new_preferences;

- (void)setSupportedInterfaceOrientation:(UIInterfaceOrientationMask)orientation;

- (void)goBack:(BOOL)isAnimated;

#pragma mark - platform view
/*
 *  在调用prepare之后再注册，推荐在afterPrepared中调用，也可重载prepare方法
 */

- (void)registerViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                     withId:(NSString*)factoryId;

- (void)registerViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                     withId:(NSString*)factoryId
                     policy:(OFPlatformViewGestureRecognizersBlockingPolicy)gestureRecognizersBlockingPolicy;

- (void)registerAppBundleViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                              withId:(NSString*)factoryId;

- (void)registerAppBundleViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                              withId:(NSString*)factoryId
                              policy:(OFPlatformViewGestureRecognizersBlockingPolicy)gestureRecognizersBlockingPolicy;

- (void)forceTouchesCancelled:(NSSet*)touches;

#pragma mark - private

- (NSDictionary*)fetchAppInfo;

- (void)test;

@end

NS_ASSUME_NONNULL_END
