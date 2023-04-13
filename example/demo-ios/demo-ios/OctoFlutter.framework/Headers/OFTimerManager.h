//
//  OFTimerManager.h
//  octoflutter
//
//  Created by Simon Yang on 2022/1/12.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

NS_ASSUME_NONNULL_BEGIN

@class OFAppEngine;
@interface OFTimerManager : NSObject

- (instancetype)initWithEngine:(OFAppEngine *)engine;

- (int)scheduleCallback:(JSValue*)callback interval:(NSTimeInterval)interval repeat:(BOOL)repeat;

- (int)scheduleAnimationFrame:(JSValue*)callback;

- (void)cancelId:(int)timerId;

- (void)stopAllTimers;

@end

NS_ASSUME_NONNULL_END
