//
//  OFMCBase.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <OctoFlutter/OctoFlutter.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ZYOFMCProtocol

@optional
// 可重载
+ (NSString*)channelPrefix;

@required
// 需重载
+ (NSString*)channelBaseName;

@end

@interface OFMCBase : OFAppEngineMCBase<ZYOFMCProtocol>

@end

NS_ASSUME_NONNULL_END
