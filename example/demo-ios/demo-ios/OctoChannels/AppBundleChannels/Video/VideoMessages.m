//
//  VideoMessages.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import "VideoMessages.h"
#import <OctoFlutter/OctoFlutter.h>

// TextureMessage

@interface TextureMessage ()
- (NSDictionary *)toMap;
@end

@implementation TextureMessage
+ (TextureMessage *)fromMap:(NSDictionary *)dict {
    TextureMessage *result = [[TextureMessage alloc] init];
    result.textureId = dict[@"textureId"];
    if ((NSNull *)result.textureId == [NSNull null]) {
        result.textureId = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.textureId != nil ? self.textureId : [NSNull null]),
            @"textureId", nil];
}
@end

//--------------------------------------------

// CreateMessage

@interface CreateMessage ()
- (NSDictionary *)toMap;
@end

@implementation CreateMessage
+ (CreateMessage *)fromMap:(NSDictionary *)dict {
    CreateMessage *result = [[CreateMessage alloc] init];
    result.asset = dict[@"asset"];
    if ((NSNull *)result.asset == [NSNull null]) {
        result.asset = nil;
    }
    result.uri = dict[@"uri"];
    if ((NSNull *)result.uri == [NSNull null]) {
        result.uri = nil;
    }
    result.packageName = dict[@"packageName"];
    if ((NSNull *)result.packageName == [NSNull null]) {
        result.packageName = nil;
    }
    result.formatHint = dict[@"formatHint"];
    if ((NSNull *)result.formatHint == [NSNull null]) {
        result.formatHint = nil;
    }
    result.httpHeaders = dict[@"httpHeaders"];
    if ((NSNull *)result.httpHeaders == [NSNull null]) {
        result.httpHeaders = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.asset ? self.asset : [NSNull null]), @"asset",
            (self.uri ? self.uri : [NSNull null]), @"uri",
            (self.packageName ? self.packageName : [NSNull null]),
            @"packageName",
            (self.formatHint ? self.formatHint : [NSNull null]),
            @"formatHint",
            (self.httpHeaders ? self.httpHeaders : [NSNull null]),
            @"httpHeaders", nil];
}
@end

//--------------------------------------------

// LoopingMessage

@interface LoopingMessage ()
- (NSDictionary *)toMap;
@end

@implementation LoopingMessage
+ (LoopingMessage *)fromMap:(NSDictionary *)dict {
    LoopingMessage *result = [[LoopingMessage alloc] init];
    result.textureId = dict[@"textureId"];
    if ((NSNull *)result.textureId == [NSNull null]) {
        result.textureId = nil;
    }
    result.isLooping = dict[@"isLooping"];
    if ((NSNull *)result.isLooping == [NSNull null]) {
        result.isLooping = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.textureId != nil ? self.textureId : [NSNull null]),
            @"textureId",
            (self.isLooping != nil ? self.isLooping : [NSNull null]),
            @"isLooping", nil];
}
@end

//--------------------------------------------

// VolumeMessage

@interface VolumeMessage ()
- (NSDictionary *)toMap;
@end

@implementation VolumeMessage
+ (VolumeMessage *)fromMap:(NSDictionary *)dict {
    VolumeMessage *result = [[VolumeMessage alloc] init];
    result.textureId = dict[@"textureId"];
    if ((NSNull *)result.textureId == [NSNull null]) {
        result.textureId = nil;
    }
    result.volume = dict[@"volume"];
    if ((NSNull *)result.volume == [NSNull null]) {
        result.volume = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.textureId != nil ? self.textureId : [NSNull null]),
            @"textureId", (self.volume != nil ? self.volume : [NSNull null]),
            @"volume", nil];
}
@end

//--------------------------------------------

// PlaybackSpeedMessage

@interface PlaybackSpeedMessage ()
- (NSDictionary *)toMap;
@end

@implementation PlaybackSpeedMessage
+ (PlaybackSpeedMessage *)fromMap:(NSDictionary *)dict {
    PlaybackSpeedMessage *result = [[PlaybackSpeedMessage alloc] init];
    result.textureId = dict[@"textureId"];
    if ((NSNull *)result.textureId == [NSNull null]) {
        result.textureId = nil;
    }
    result.speed = dict[@"speed"];
    if ((NSNull *)result.speed == [NSNull null]) {
        result.speed = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.textureId != nil ? self.textureId : [NSNull null]),
            @"textureId", (self.speed != nil ? self.speed : [NSNull null]),
            @"speed", nil];
}
@end

//--------------------------------------------

// PositionMessage

@interface PositionMessage ()
- (NSDictionary *)toMap;
@end

@implementation PositionMessage
+ (PositionMessage *)fromMap:(NSDictionary *)dict {
    PositionMessage *result = [[PositionMessage alloc] init];
    result.textureId = dict[@"textureId"];
    if ((NSNull *)result.textureId == [NSNull null]) {
        result.textureId = nil;
    }
    result.position = dict[@"position"];
    if ((NSNull *)result.position == [NSNull null]) {
        result.position = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.textureId != nil ? self.textureId : [NSNull null]),
            @"textureId",
            (self.position != nil ? self.position : [NSNull null]),
            @"position", nil];
}
@end

//--------------------------------------------

// MixWithOthersMessage

@interface MixWithOthersMessage ()
+ (MixWithOthersMessage *)fromMap:(NSDictionary *)dict;
- (NSDictionary *)toMap;
@end

@implementation MixWithOthersMessage
+ (MixWithOthersMessage *)fromMap:(NSDictionary *)dict {
    MixWithOthersMessage *result = [[MixWithOthersMessage alloc] init];
    result.mixWithOthers = dict[@"mixWithOthers"];
    if ((NSNull *)result.mixWithOthers == [NSNull null]) {
        result.mixWithOthers = nil;
    }
    return result;
}
- (NSDictionary *)toMap {
    return [NSDictionary
            dictionaryWithObjectsAndKeys:(self.mixWithOthers != nil ? self.mixWithOthers : [NSNull null]),
            @"mixWithOthers", nil];
}

//--------------------------------------------

@end
