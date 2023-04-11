//
//  OFAppEnginePluginBase.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/24.
//

#import "OFMethodChannel.h"
#import "OFEventChannelBusiness.h"

NS_ASSUME_NONNULL_BEGIN
@class OFAppEngine;
@protocol OFAppEngineChannelProtocol

@required

+ (NSString*)getChannelName;

+ (instancetype)channelForEngineKey:(NSString*)engineKey;

@property (nonatomic, strong) NSString  *engineKey;

@property (nonatomic, weak) OFAppEngine *currentEngine;
@end

@interface OFAppEngineMCBase : OFMethodChannel<OFAppEngineChannelProtocol>

- (void)prepare;
@end

@interface OFAppEngineECBusinessBase : OFEventChannelBusiness<OFAppEngineChannelProtocol>
@end

NS_ASSUME_NONNULL_END
