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
#import "OFTimerManager.h"
#import "OFAppBundleManager.h"
#import "OFTexture.h"
#import "OFPlatformViewInterface.h"

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSUInteger, OFAppEngineMode) {
    OFAppEngineMode_Isolate = 0,
    OFAppEngineMode_Shared
};

@interface OFAppEngine : NSObject<OFTextureRegistryProtocol>

@property (nonatomic, assign, readonly) OFAppEngineMode     mode;

@property (nonatomic, strong, readonly) NSString            *engineKey;

@property (nonatomic, strong, readonly) OFJSContext         *jsContext;

@property (nonatomic, strong, readonly) OFChannelEngine     *channelEngine;

// 渲染画面尺寸，默认取全屏
@property (nonatomic, assign, readonly) CGSize              currentViewSize;

// timer
@property (nonatomic, strong, readonly) OFTimerManager      *timerManager;

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

// 是否将app脚本保存至文件，默认为否
@property (nonatomic, assign) BOOL saveAppJS;

- (instancetype)initWithMode:(OFAppEngineMode)mode engineKey:(NSString*)engineKey;

- (void)setupFramework:(NSString*)folder fileName:(NSString*)fileName version:(int)version;

- (void)setupWithConfig:(OFOpenConfig*)config;

#pragma mark - shell
- (void)runPlatformTask:(void (^)(void))block;
- (void)runLatchPlatformTask:(void (^)(void))block;
- (void)runUITask:(void (^)(void))block;
- (void)runLatchUITask:(void (^)(void))block;
- (void)runRasterTask:(void (^)(void))block;
- (void)runLatchRasterTask:(void (^)(void))block;
- (void)runIOTask:(void (^)(void))block;

#pragma mark - surface
- (void)bindSurface:(CAEAGLLayer*)layer width:(int)width height:(int)height;

- (void)unbindSurface;

- (void)rebindSurface:(CAEAGLLayer*)layer width:(int)width height:(int)height;

- (void)refreshCurrentIsolate;

#pragma mark - shell
- (void)cleanUp;

- (void)destroy;

- (uintptr_t)getShellPtr;

#pragma mark - channels
- (void)registerMethodChannels:(NSArray*)channels;

- (void)registerEventChannels:(NSArray*)channels;

#pragma mark - path tool
- (NSString *)pathForAppFolder;

- (NSString *)pathForAppResource:(NSString *)path;

- (NSString *)pathForFrameworkResource:(NSString *)path;

- (NSString *)pathForFrameworkJS;

- (NSString *)folderForLibraries;

- (NSString *)pathForResource:(NSString *)path inFolder:(NSString*)folder;

- (NSString *)pathForLibResource:(NSString *)name;

#pragma mark - image cache

- (void)recordImageKey:(NSString*)key isLocal:(BOOL)isLocal;

#pragma mark - topVC

- (void)updateTopVC:(id)topVC;

#pragma mark - timer

- (int)scheduleTimer:(JSValue*)callback interval:(NSTimeInterval)interval repeat:(BOOL)repeat;

- (int)cancelTimerWithId:(int)tid;

- (int)scheduleAnimationFrame:(JSValue*)callback;

- (int)cancelAnimationFrameWithId:(int)fid;

#pragma mark - touch

- (void)setFastTouchEvent:(JSValue*)callback;

- (void)dispatchTouches:(NSSet*)touches event:(UIEvent*)event;

- (void)forceTouchesCancelled:(NSSet*)touches;

#pragma mark - platform view

- (void)setPlatformView:(UIView* _Nullable)view vc:(UIViewController* _Nullable)vc;

- (void)onPlatformViewsMethodCall:(OFMethodCall*)call result:(OFResult)result;

- (void)registerViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                     withId:(NSString*)factoryId;

- (void)registerViewFactory:(NSObject<OFPlatformViewFactory>*)factory
                     withId:(NSString*)factoryId
                     policy:(OFPlatformViewGestureRecognizersBlockingPolicy)gestureRecognizersBlockingPolicy;

#pragma mark - test

- (void)test;
@end

NS_ASSUME_NONNULL_END
