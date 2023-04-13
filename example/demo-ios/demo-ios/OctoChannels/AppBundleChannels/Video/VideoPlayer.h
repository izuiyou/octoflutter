//
//  VideoPlayer.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

#import <OctoFlutter/OctoFlutter.h>

@class FrameUpdater;

NS_ASSUME_NONNULL_BEGIN

static void* timeRangeContext = &timeRangeContext;
static void* statusContext = &statusContext;
static void* presentationSizeContext = &presentationSizeContext;
static void* durationContext = &durationContext;
static void* playbackLikelyToKeepUpContext = &playbackLikelyToKeepUpContext;
static void* playbackBufferEmptyContext = &playbackBufferEmptyContext;
static void* playbackBufferFullContext = &playbackBufferFullContext;

@interface VideoPlayer : NSObject<OFTextureProtocol>

@property(readonly, nonatomic) AVPlayer* player;
@property(readonly, nonatomic) AVPlayerItemVideoOutput* videoOutput;
@property(readonly, nonatomic) CADisplayLink* displayLink;

@property (nonatomic, strong) OFMethodChannel *methodChannel;

@property(nonatomic) CGAffineTransform preferredTransform;
@property(nonatomic, readonly) bool disposed;
@property(nonatomic, readonly) bool isPlaying;
@property(nonatomic) bool isLooping;
@property(nonatomic, readonly) bool isInitialized;

- (instancetype)initWithAsset:(NSString*)asset frameUpdater:(FrameUpdater*)frameUpdater;

- (instancetype)initWithURL:(NSURL*)url
               frameUpdater:(FrameUpdater*)frameUpdater
                httpHeaders:(NSDictionary<NSString*, NSString*>* _Nullable)headers;

- (void)play;
- (void)pause;
- (void)setIsLooping:(bool)isLooping;
- (void)updatePlayingState;

- (void)setVolume:(double)volume;
- (void)setPlaybackSpeed:(double)speed;
- (void)seekTo:(int)location completionHandler:(void (^)(BOOL finished))completionHandler;

- (int64_t)position;
- (int64_t)duration;
- (CGSize)size;
- (float)volume;

- (void)disposeSansEventChannel;
- (void)dispose;
@end

NS_ASSUME_NONNULL_END
