//
//  OFChannelEngine.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import "OFMethodChannel.h"
#import "OFEventChannel.h"
#import "OFBasicMessageChannel.h"
#import "OFPlatformChannelBusiness.h"
#import "OFTextInputDelegate.h"
#import "OFViewportMetrics.h"
#import "OFBinaryMessenger.h"

NS_ASSUME_NONNULL_BEGIN

// lifecycle state
typedef enum {
    kOFLifecycleStateInactive,
    kOFLifecycleStateResumed,
    kOFLifecycleStatePaused,
    kOFLifecycleStateDetached
} OFLifecycleState;

@interface OFChannelEngine : NSObject

- (instancetype)initWithEngineKey:(NSString*)engineKey;

- (void)setup;

- (void)clear;

- (void)attachVC:(id)vc;

@property (nonatomic, strong, readonly) OFBinaryMessenger *binaryMessenger;

//*****由flutter端触发的方法*****

- (void)onMethodInvoke:(NSString*)data buffer:(NSArray*)buffer limit:(int)limit;

- (void)binaryMessenger:(JSValue*)callback;

//*****注册methodchannel或eventchannel*****

// codec用于指定解析传递的buffer，
// 可以是standard，也可以是json，默认standard

- (OFMethodChannel*)registerMethodChannel:(NSString*)channel handler:(OFMethodCallHandler)handler;

- (OFMethodChannel*)registerMethodChannel:(NSString*)channel codec:(NSObject<OFMethodCodec> *)codec handler:(OFMethodCallHandler)handler;

- (void)registerMethodChannel:(OFMethodChannel*)methodChannel;

- (OFMethodChannel*)registerAppBundleChannel:(NSString*)channel bid:(int)bid handler:(OFMethodCallHandler)handler;

- (OFMethodChannel*)registerAppBundleChannel:(NSString*)channel bid:(int)bid codec:(NSObject<OFMethodCodec> *)codec handler:(OFMethodCallHandler)handler;

- (OFEventChannel*)registerEventChannel:(NSString*)channel handler:(NSObject<OFStreamHandler> * _Nullable)handler;

- (OFEventChannel*)registerEventChannel:(NSString*)channel codec:(NSObject<OFMethodCodec> *)codec handler:(NSObject<OFStreamHandler> * _Nullable)handler;

- (OFBasicMessageChannel*)registerBasicMessageChannel:(NSString*)channel codec:(NSObject<OFMessageCodec> *)codec handler:(OFMessageHandler)handler;
//*****get & remove channel*****

- (OFMethodChannel*)getMethodChannelForName:(NSString*)name;

- (void)removeMethodChannelForName:(NSString*)name;

- (OFEventChannel*)getEventChannelForName:(NSString*)name;

- (void)removeEventChannelForName:(NSString*)name;

//*****platform channel*****

// 触发flutter与系统相关的方法，比如platform_ready
- (void)invokePlatformChannelMethod:(NSString*)method arguments:(NSDictionary* _Nullable)arguments result:(OFResult _Nullable)callback;

- (void)invokePlatformDestroy;

- (void)invokePlatformResize;

- (void)applyWindowInsets:(OFViewportMetrics*)viewportMetrics;

//*****navigation channel*****

- (void)setInitialRoute:(NSString*)route;

- (void)popRoute;

- (void)pushRoute:(NSString*)route;

- (void)popAppBundle:(int)bid;

- (void)pushAppBundle:(NSString*)bundleName bid:(int)bid route:(NSString*)route args:(NSString*)args;

//*****lifecycle channel*****
- (void)sendLifecycleState:(OFLifecycleState)state;

//*****test message*****

- (void)testMessageOnChannel:(NSString*)channel method:(NSString*)method args:(id)args;

@end

NS_ASSUME_NONNULL_END
