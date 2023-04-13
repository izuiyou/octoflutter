//
//  VideoMessages.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import <Foundation/Foundation.h>

@protocol OFBinaryMessengerProtocol;
@class OFError;

NS_ASSUME_NONNULL_BEGIN

// TextureMessage

@interface TextureMessage : NSObject
+ (TextureMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *textureId;
@end

//--------------------------------------------

// CreateMessage

@interface CreateMessage : NSObject
+ (CreateMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, copy, nullable) NSString *asset;
@property(nonatomic, copy, nullable) NSString *uri;
@property(nonatomic, copy, nullable) NSString *packageName;
@property(nonatomic, copy, nullable) NSString *formatHint;
@property(nonatomic, strong, nullable) NSDictionary *httpHeaders;
@end

//--------------------------------------------

// LoopingMessage

@interface LoopingMessage : NSObject
+ (LoopingMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *textureId;
@property(nonatomic, strong, nullable) NSNumber *isLooping;
@end

//--------------------------------------------

// VolumeMessage

@interface VolumeMessage : NSObject
+ (VolumeMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *textureId;
@property(nonatomic, strong, nullable) NSNumber *volume;
@end

//--------------------------------------------

// PlaybackSpeedMessage

@interface PlaybackSpeedMessage : NSObject
+ (PlaybackSpeedMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *textureId;
@property(nonatomic, strong, nullable) NSNumber *speed;
@end

//--------------------------------------------

// PositionMessage

@interface PositionMessage : NSObject
+ (PositionMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *textureId;
@property(nonatomic, strong, nullable) NSNumber *position;
@end

//--------------------------------------------

// MixWithOthersMessage

@interface MixWithOthersMessage : NSObject
+ (MixWithOthersMessage *)fromMap:(NSDictionary *)dict;
@property(nonatomic, strong, nullable) NSNumber *mixWithOthers;
@end

//--------------------------------------------

NS_ASSUME_NONNULL_END
