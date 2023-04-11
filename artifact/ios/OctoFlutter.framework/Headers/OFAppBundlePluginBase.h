//
//  OFAppBundlePluginBase.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/17.
//

#import "OFMethodChannel.h"
#import "OFEventChannelBusiness.h"

NS_ASSUME_NONNULL_BEGIN
@class OFAppEngine;
@protocol OFAppBundleChannelProtocol

@required

+ (NSString*)getBaseChannelName;

+ (NSString*)getIsolateNameForBid:(int)bid;

+ (instancetype)channelForBid:(int)bid engineKey:(NSString*)engineKey;

@property (nonatomic, assign) int       bid;

@property (nonatomic, strong) NSString  *engineKey;

@property (nonatomic, weak) OFAppEngine *currentEngine;
@end

@interface OFAppBundleMCBase : OFMethodChannel<OFAppBundleChannelProtocol>

- (void)prepare;
@end

@interface OFAppBundleECBusinessBase : OFEventChannelBusiness<OFAppBundleChannelProtocol>
@end

NS_ASSUME_NONNULL_END
