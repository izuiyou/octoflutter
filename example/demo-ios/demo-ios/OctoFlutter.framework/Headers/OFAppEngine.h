//
//  OFAppEngine.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/14.
//

#import <Foundation/Foundation.h>
#import "OFJSContext.h"
#import "OFChannelEngine.h"
#import "OFBindingWindowSupport.h"
#import "OFBindingTouchInput.h"
#import "OFBindingWindowEvents.h"
#import "OFAppBundleManager.h"
#import "FlutterTexture.h"
#import "OFPlatformViewInterface.h"

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSUInteger, OFAppEngineMode) {
    OFAppEngineMode_Isolate = 0,
    OFAppEngineMode_Shared
};

@class FlutterEngine;
@interface OFAppEngine : NSObject<FlutterTextureRegistry>

@property (nonatomic, strong, readonly) FlutterEngine       *flutterEngine;

@property (nonatomic, assign, readonly) OFAppEngineMode     mode;

@property (nonatomic, strong, readonly) NSString            *engineKey;

@property (nonatomic, strong, readonly) OFJSContext         *jsContext;

@property (nonatomic, strong, readonly) OFChannelEngine     *channelEngine;

// 渲染画面尺寸，默认取全屏，！！！注意：是UIView的size，不乘以scale！！！
@property (nonatomic, assign, readonly) CGSize              currentViewSize;

// app bundles manager
@property (nonatomic, strong, readonly) OFAppBundleManager  *appBundleManager;

@property (nonatomic, assign, readonly) int                 frameworkVersion;
@property (nonatomic, strong, readonly) NSString            *frameworkFolder;

@property (nonatomic, strong, readonly) NSString            *frameworkFileName;

// 触摸事件
@property (nonatomic, strong) OFBindingWindowSupport   *windowSupport;

// 触摸事件
@property (nonatomic, strong) OFBindingTouchInput   *touchInput;

// window事件
@property (nonatomic, strong) OFBindingWindowEvents *windowEvents;

// top vc
@property (nonatomic, weak, readonly) id      topVC;

// device_pixel_ratio
@property (nonatomic, assign, readonly) float     devicePixelRatio;

// 是否将app脚本保存至文件，默认为否
@property (nonatomic, assign) BOOL saveAppJS;

#pragma mark - init

- (instancetype)initWithMode:(OFAppEngineMode)mode engineKey:(NSString*)engineKey;

- (void)setupWithConfig:(OFOpenConfig*)config;

#pragma mark - work for FlutterViewController

- (OFAppBundleIsolate*)launchWithConfig:(OFOpenConfig*)config andVC:(UIViewController*)vc;

- (void)updateViewportMetrics:(OFViewportMetrics*)viewportMetrics;

- (void)doDispatchPacketBytes:(const unsigned char *)bytes length:(int)length;

- (void)sendLifecycleState:(OFLifecycleState)state;

- (void)activeAnimationFrame;

- (void)popIsolateApp:(OFAppBundleIsolate*)isolateApp;

- (void)viewResized:(CGSize)size;

- (void)updateTopVC:(id)topVC;

#pragma mark - manage FlutterEngine

- (FlutterEngine*)setupFlutterEngine;

- (void)maybeRemoveLastFlutterEngine;

#pragma mark - destroy

- (void)destroy;

#pragma mark - touch

- (void)setFastTouchEvent:(JSValue*)callback;

#pragma mark - platform view

- (void)onPlatformViewsMethodCall:(OFMethodCall*)call result:(OFResult)result;

#pragma mark - task runner

- (void)runPlatformTask:(void (^)(void))block;
- (void)runLatchPlatformTask:(void (^)(void))block;
- (void)runUITask:(void (^)(void))block;
- (void)runLatchUITask:(void (^)(void))block;
- (void)runRasterTask:(void (^)(void))block;
- (void)runLatchRasterTask:(void (^)(void))block;
- (void)runIOTask:(void (^)(void))block;

#pragma mark - timer

- (int)scheduleTimer:(JSValue*)callback interval:(NSTimeInterval)interval repeat:(BOOL)repeat;

- (int)cancelTimerWithId:(int)tid;

- (int)scheduleAnimationFrame:(JSValue*)callback;

- (int)cancelAnimationFrameWithId:(int)fid;

#pragma mark - path tool

- (NSString *)pathForAppFolder;

- (NSString *)pathForAppResource:(NSString *)path;

- (NSString *)pathForFrameworkResource:(NSString *)path;

- (NSString *)pathForFrameworkJS;

- (NSString *)folderForLibraries;

- (NSString *)pathForResource:(NSString *)path inFolder:(NSString*)folder;

- (NSString *)pathForLibResource:(NSString *)name;

@end

NS_ASSUME_NONNULL_END
