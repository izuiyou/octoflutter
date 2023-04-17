//
//  FlutterViewController.h
//  octoflutter
//
//  Created by Simon Yang on 2023/3/13.
//

#import <UIKit/UIKit.h>
#import "OFPlatformViewInterface.h"

extern NSNotificationName const FlutterViewControllerWillDealloc;

@class OFAppEngine;
@class FlutterEngine;
@class OFOpenConfig;

@interface FlutterViewController : UIViewController

- (instancetype)initWithAppEngine:(OFAppEngine*)appEngine openConfg:(OFOpenConfig*)openConfig;

@property (nonatomic, strong, readonly) OFAppEngine *appEngine;

@property(weak, nonatomic, readonly) FlutterEngine* engine;

@property (nonatomic, strong, readonly) OFOpenConfig *openConfig;

@property (nonatomic, copy) void (^onStatusBarUpdate)(UIStatusBarStyle style);

@property (nonatomic, copy) void (^onStatusBarHidden)(BOOL hidden);

- (void)resumeSurface;

- (void)restart;

- (void)setEveryFrameCallback:(void (^)(void))callback;

- (void)goBack:(BOOL)isAnimated;

- (void)performOrientationUpdate:(UIInterfaceOrientationMask)new_preferences;

- (void)setSupportedInterfaceOrientation:(UIInterfaceOrientationMask)orientation;

- (void)makeStatusBarHidden:(BOOL)hidden;

- (void)forceTouchesCancelled:(NSSet*)touches;

- (void)test;

// 注册platform view

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
@end
