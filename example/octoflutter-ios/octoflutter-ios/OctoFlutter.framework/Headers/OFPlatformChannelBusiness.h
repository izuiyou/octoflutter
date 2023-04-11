//
//  OFPlatformChannelBusiness.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>
#import "OFMethodChannel.h"

NS_ASSUME_NONNULL_BEGIN

extern const char* const kOFOverlayStyleUpdateNotificationName;
extern const char* const kOFOverlayStyleUpdateNotificationKey_StatusBarBrightness;
extern const char* const kOFOverlayStyleUpdateNotificationKey_StatusBarColor;

extern const char* const kOFOrientationUpdateNotificationName;
extern const char* const kOFOrientationUpdateNotificationKey;

extern NSNotificationName const OFViewControllerShowHomeIndicator;
extern NSNotificationName const OFViewControllerHideHomeIndicator;

@interface OFPlatformChannelBusiness : NSObject<OFMethodChannelBusiness>

@property (nonatomic, copy, nullable) void (^popSystemNavigatorBlock)(BOOL isAnimated);
@end

NS_ASSUME_NONNULL_END
