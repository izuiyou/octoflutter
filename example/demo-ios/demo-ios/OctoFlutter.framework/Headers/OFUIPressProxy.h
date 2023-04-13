//
//  OFUIPressProxy.h
//  octoflutter
//
//  Created by Simon Yang on 2021/9/16.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * A event class that is a wrapper around a UIPress and a UIEvent to allow
 * overidding for testing purposes, since UIKit doesn't allow creation of
 * UIEvent or UIPress directly.
 */
@interface OFUIPressProxy : NSObject

- (instancetype)initWithPress:(UIPress*)press withEvent:(UIEvent*)event;

- (UIPressPhase)phase;
- (UIKey*)key API_AVAILABLE(ios(13.4));
- (UIEventType)type;
- (NSTimeInterval)timestamp;

@end

NS_ASSUME_NONNULL_END
