//
//  FrameUpdater.h
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import <Foundation/Foundation.h>
#import <QuartzCore/QuartzCore.h>

@protocol OFTextureRegistryProtocol;

NS_ASSUME_NONNULL_BEGIN

@interface FrameUpdater : NSObject

@property(nonatomic) int64_t textureId;

@property(nonatomic, weak, readonly) NSObject<OFTextureRegistryProtocol>* registry;

- (instancetype)initWithRegistry:(NSObject<OFTextureRegistryProtocol>*)registry;

- (void)onDisplayLink:(CADisplayLink*)link;

@end

NS_ASSUME_NONNULL_END
