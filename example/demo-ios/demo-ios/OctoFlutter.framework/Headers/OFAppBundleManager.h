//
//  OFAppBundleManager.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/14.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

extern NSNotificationName const kOFAppBundleRestarting;

@class OFAppEngine;
@class OFOpenConfig;
@class OFAppBundle;
@class OFAppBundleIsolate;
@interface OFAppBundleManager : NSObject

- (instancetype)initWithEngine:(OFAppEngine *)engine;

- (OFAppBundleIsolate *)pushWithOpenConfig:(OFOpenConfig*)config pageVC:(id)pageVC;

- (void)popIsolateApp:(OFAppBundleIsolate*)isolateApp;

- (OFAppBundleIsolate*)findIsolateForBid:(int)bid;

- (void)onAppEnvironmentReady;

- (void)shutApp:(int)bid;

- (void)launchApp:(int)bid;

- (void)recordImageKey:(NSString*)key isLocal:(BOOL)isLocal bid:(int)bid;

- (NSString *)lookupAppAsset:(NSString*)url;

- (BOOL)isEmpty;

- (BOOL)bundleExistForName:(NSString*)name;

- (void)refreshLastIsolate;

- (OFAppBundle *)findTopAppBundle;

@end

NS_ASSUME_NONNULL_END
