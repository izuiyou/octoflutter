//
//  FrameUpdater.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import "FrameUpdater.h"
#import <OctoFlutter/OctoFlutter.h>

@implementation FrameUpdater

- (instancetype)initWithRegistry:(NSObject<OFTextureRegistryProtocol>*)registry
{
    self = [super init];
    if (self) {
        _registry = registry;
    }
    return self;
}

- (void)onDisplayLink:(CADisplayLink*)link {
  [_registry textureFrameAvailable:_textureId];
}

@end
