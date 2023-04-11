//
//  VideoPlayer.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import "VideoPlayer.h"
#import "FrameUpdater.h"

@interface VideoPlayer()
@property (nonatomic, assign) BOOL  playTriggered;
@property (nonatomic, assign) BOOL  activePlaying;
@end

@implementation VideoPlayer

- (void)dealloc
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
}

#pragma mark - init

- (instancetype)initWithAsset:(NSString*)asset frameUpdater:(FrameUpdater*)frameUpdater {
    NSString* path = asset;
    return [self initWithURL:[NSURL fileURLWithPath:path] frameUpdater:frameUpdater httpHeaders:nil];
}

- (instancetype)initWithURL:(NSURL*)url
               frameUpdater:(FrameUpdater*)frameUpdater
                httpHeaders:(NSDictionary<NSString*, NSString*>*)headers {
    NSDictionary<NSString*, id>* options = nil;
    if (headers != nil && [headers count] != 0) {
        options = @{@"AVURLAssetHTTPHeaderFieldsKey" : headers};
    }
    AVURLAsset* urlAsset = [AVURLAsset URLAssetWithURL:url options:options];
    AVPlayerItem* item = [AVPlayerItem playerItemWithAsset:urlAsset];
    return [self initWithPlayerItem:item frameUpdater:frameUpdater];
}

- (instancetype)initWithPlayerItem:(AVPlayerItem*)item frameUpdater:(FrameUpdater*)frameUpdater {
    self = [super init];
    NSAssert(self, @"super init cannot be nil");
    _isInitialized = false;
    _activePlaying = false;
    _disposed = false;
    
    _player = [AVPlayer playerWithPlayerItem:item];
    _player.actionAtItemEnd = AVPlayerActionAtItemEndNone;
    
    [self createVideoOutputAndDisplayLink:frameUpdater];
    
    [self addObservers:item];
    
    [self addAssetCompletionHandler:item];
    
    return self;
}

#pragma mark - observers

- (void)addObservers:(AVPlayerItem*)item {
    [item addObserver:self
           forKeyPath:@"loadedTimeRanges"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:timeRangeContext];
    [item addObserver:self
           forKeyPath:@"status"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:statusContext];
    [item addObserver:self
           forKeyPath:@"presentationSize"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:presentationSizeContext];
    [item addObserver:self
           forKeyPath:@"duration"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:durationContext];
    [item addObserver:self
           forKeyPath:@"playbackLikelyToKeepUp"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:playbackLikelyToKeepUpContext];
    [item addObserver:self
           forKeyPath:@"playbackBufferEmpty"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:playbackBufferEmptyContext];
    [item addObserver:self
           forKeyPath:@"playbackBufferFull"
              options:NSKeyValueObservingOptionInitial | NSKeyValueObservingOptionNew
              context:playbackBufferFullContext];
    
    // Add an observer that will respond to itemDidPlayToEndTime
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(itemDidPlayToEndTime:)
                                                 name:AVPlayerItemDidPlayToEndTimeNotification
                                               object:item];
}

- (void)observeValueForKeyPath:(NSString*)path
                      ofObject:(id)object
                        change:(NSDictionary*)change
                       context:(void*)context {
    if (context == timeRangeContext) {

    } else if (context == statusContext) {
        AVPlayerItem* item = (AVPlayerItem*)object;
        switch (item.status) {
            case AVPlayerItemStatusFailed:
                [self.methodChannel invokeMethod:@"onError" arguments:[@"Failed to load video: " stringByAppendingString:[item.error localizedDescription]]];
                break;
            case AVPlayerItemStatusUnknown:
                break;
            case AVPlayerItemStatusReadyToPlay:
                NSLog(@"video player statusContext:%@", @"ReadyToPlay");
                [item addOutput:_videoOutput];
                [self setupEventSinkIfReadyToPlay];
                [self updatePlayingState];
                break;
        }
    } else if (context == presentationSizeContext || context == durationContext) {
        AVPlayerItem* item = (AVPlayerItem*)object;
        if (item.status == AVPlayerItemStatusReadyToPlay) {
            // Due to an apparent bug, when the player item is ready, it still may not have determined
            // its presentation size or duration. When these properties are finally set, re-check if
            // all required properties and instantiate the event sink if it is not already set up.
            NSLog(@"video player %@:%@", (context == presentationSizeContext)?@"presentationSizeContext":@"durationContext", @"ReadyToPlay");
            [self setupEventSinkIfReadyToPlay];
            [self updatePlayingState];
        }
    } else if (context == playbackLikelyToKeepUpContext) {
        if ([[_player currentItem] isPlaybackLikelyToKeepUp]) {
            [self updatePlayingState];
        }
    } else if (context == playbackBufferEmptyContext) {
        
    } else if (context == playbackBufferFullContext) {

    }
}

- (void)itemDidPlayToEndTime:(NSNotification*)notification {
    if (_isLooping) {
        AVPlayerItem* p = [notification object];
        [p seekToTime:kCMTimeZero completionHandler:nil];
    } else {
        [self pause];
        [self.methodChannel invokeMethod:@"onEnd" arguments:nil];
    }
}

#pragma mark - display link
- (void)createVideoOutputAndDisplayLink:(FrameUpdater*)frameUpdater {
    NSDictionary* pixBuffAttributes = @{
        (id)kCVPixelBufferPixelFormatTypeKey : @(kCVPixelFormatType_32BGRA),
        (id)kCVPixelBufferIOSurfacePropertiesKey : @{}
    };
    _videoOutput = [[AVPlayerItemVideoOutput alloc] initWithPixelBufferAttributes:pixBuffAttributes];
    
    _displayLink = [CADisplayLink displayLinkWithTarget:frameUpdater
                                               selector:@selector(onDisplayLink:)];
    [_displayLink addToRunLoop:[NSRunLoop currentRunLoop] forMode:NSRunLoopCommonModes];
    _displayLink.paused = YES;
}

#pragma mark - asset load complete
- (void)addAssetCompletionHandler:(AVPlayerItem*)item
{
    AVAsset *asset = [item asset];
    void (^assetCompletionHandler)(void) = ^{
        if ([asset statusOfValueForKey:@"tracks" error:nil] == AVKeyValueStatusLoaded) {
            NSArray* tracks = [asset tracksWithMediaType:AVMediaTypeVideo];
            if ([tracks count] > 0) {
                AVAssetTrack* videoTrack = tracks[0];
                // load完asset的tracks（一般就一个），load它的track的preferredTransform
                void (^trackCompletionHandler)(void) = ^{
                    if (self->_disposed) return;
                    if ([videoTrack statusOfValueForKey:@"preferredTransform"
                                                  error:nil] == AVKeyValueStatusLoaded) {
                        // Rotate the video by using a videoComposition and the preferredTransform
                        self->_preferredTransform = [self fixTransform:videoTrack];
                        // Note:
                        // https://developer.apple.com/documentation/avfoundation/avplayeritem/1388818-videocomposition
                        // Video composition can only be used with file-based media and is not supported for
                        // use with media served using HTTP Live Streaming.
                        AVMutableVideoComposition* videoComposition =
                        [self getVideoCompositionWithTransform:self->_preferredTransform
                                                     withAsset:asset
                                                withVideoTrack:videoTrack];
                        item.videoComposition = videoComposition;
                    }
                };
                [videoTrack loadValuesAsynchronouslyForKeys:@[ @"preferredTransform" ]
                                          completionHandler:trackCompletionHandler];
            }
        }
    };
    
    [asset loadValuesAsynchronouslyForKeys:@[ @"tracks" ] completionHandler:assetCompletionHandler];
}

- (CGAffineTransform)fixTransform:(AVAssetTrack*)videoTrack {
    CGAffineTransform transform = videoTrack.preferredTransform;
    // TODO(@recastrodiaz): why do we need to do this? Why is the preferredTransform incorrect?
    // At least 2 user videos show a black screen when in portrait mode if we directly use the
    // videoTrack.preferredTransform Setting tx to the height of the video instead of 0, properly
    // displays the video https://github.com/flutter/flutter/issues/17606#issuecomment-413473181
    if (transform.tx == 0 && transform.ty == 0) {
        NSInteger rotationDegrees = (NSInteger)round(radiansToDegrees(atan2(transform.b, transform.a)));
        NSLog(@"TX and TY are 0. Rotation: %ld. Natural width,height: %f, %f", (long)rotationDegrees,
              videoTrack.naturalSize.width, videoTrack.naturalSize.height);
        if (rotationDegrees == 90) {
            NSLog(@"Setting transform tx");
            transform.tx = videoTrack.naturalSize.height;
            transform.ty = 0;
        } else if (rotationDegrees == 270) {
            NSLog(@"Setting transform ty");
            transform.tx = 0;
            transform.ty = videoTrack.naturalSize.width;
        }
    }
    return transform;
}

- (AVMutableVideoComposition*)getVideoCompositionWithTransform:(CGAffineTransform)transform
                                                     withAsset:(AVAsset*)asset
                                                withVideoTrack:(AVAssetTrack*)videoTrack {
    AVMutableVideoCompositionInstruction* instruction =
    [AVMutableVideoCompositionInstruction videoCompositionInstruction];
    instruction.timeRange = CMTimeRangeMake(kCMTimeZero, [asset duration]);
    AVMutableVideoCompositionLayerInstruction* layerInstruction =
    [AVMutableVideoCompositionLayerInstruction
     videoCompositionLayerInstructionWithAssetTrack:videoTrack];
    [layerInstruction setTransform:_preferredTransform atTime:kCMTimeZero];
    
    AVMutableVideoComposition* videoComposition = [AVMutableVideoComposition videoComposition];
    instruction.layerInstructions = @[ layerInstruction ];
    videoComposition.instructions = @[ instruction ];
    
    // If in portrait mode, switch the width and height of the video
    CGFloat width = videoTrack.naturalSize.width;
    CGFloat height = videoTrack.naturalSize.height;
    NSInteger rotationDegrees =
    (NSInteger)round(radiansToDegrees(atan2(_preferredTransform.b, _preferredTransform.a)));
    if (rotationDegrees == 90 || rotationDegrees == 270) {
        width = videoTrack.naturalSize.height;
        height = videoTrack.naturalSize.width;
    }
    videoComposition.renderSize = CGSizeMake(width, height);
    
    // TODO(@recastrodiaz): should we use videoTrack.nominalFrameRate ?
    // Currently set at a constant 30 FPS
    videoComposition.frameDuration = CMTimeMake(1, 30);
    
    return videoComposition;
}

#pragma mark - inner common

- (void)updatePlayingState {
    if (!_isInitialized) {
        return;
    }
    if (_activePlaying) {
        [_player play];
    } else {
        [_player pause];
    }
    _displayLink.paused = !_activePlaying;
}

- (void)setupEventSinkIfReadyToPlay {
    if (_playTriggered && _methodChannel && !_isInitialized) {
        CGSize size = [self.player currentItem].presentationSize;
        CGFloat width = size.width;
        CGFloat height = size.height;
        
        // The player has not yet initialized.
        if (height == CGSizeZero.height && width == CGSizeZero.width) {
            return;
        }
        // The player may be initialized but still needs to determine the duration.
        if ([self duration] == 0) {
            return;
        }
        
        _isInitialized = true;

        NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
        [self.methodChannel invokeMethod:@"onReady" arguments:nil];
    }
}

#pragma mark - public method

- (void)play {
    self.playTriggered = YES;
    
    if ([self.player currentItem].status==AVPlayerStatusReadyToPlay) {
        [self setupEventSinkIfReadyToPlay];
    }
    
    _activePlaying = true;
    [self updatePlayingState];
}

- (void)pause {
    _activePlaying = false;
    [self updatePlayingState];
}

- (void)seekTo:(int)location completionHandler:(void (^)(BOOL finished))completionHandler {
    [_player seekToTime:CMTimeMake(location, 1000) completionHandler:completionHandler];
}

- (void)setIsLooping:(bool)isLooping {
    _isLooping = isLooping;
}

- (void)setVolume:(double)volume {
    _player.volume = (float)((volume < 0.0) ? 0.0 : ((volume > 1.0) ? 1.0 : volume));
}

- (void)setPlaybackSpeed:(double)speed {
    // See https://developer.apple.com/library/archive/qa/qa1772/_index.html for an explanation of
    // these checks.
    if (speed > 2.0 && !_player.currentItem.canPlayFastForward) {
        [self.methodChannel invokeMethod:@"onError" arguments:@"Video cannot be fast-forwarded beyond 2.0x"];
        return;
    }
    
    if (speed < 1.0 && !_player.currentItem.canPlaySlowForward) {
        [self.methodChannel invokeMethod:@"onError" arguments:@"Video cannot be slow-forwarded"];
        return;
    }
    
    _player.rate = speed;
}

- (int64_t)position {
    return OFCMTimeToMillis([_player currentTime]);
}

- (int64_t)duration {
    return OFCMTimeToMillis([[_player currentItem] duration]);
}

- (CGSize)size {
    CGSize size = [self.player currentItem].presentationSize;
    return size;
}

- (float)volume {
    return _player.volume;
}

- (bool)isPlaying {
    return self.player.rate!=0 && self.player.error==nil;
}

#pragma mark - OFTextureProtocol

- (CVPixelBufferRef)copyPixelBuffer {
    CMTime outputItemTime = [_videoOutput itemTimeForHostTime:CACurrentMediaTime()];
    if ([_videoOutput hasNewPixelBufferForItemTime:outputItemTime]) {
        return [_videoOutput copyPixelBufferForItemTime:outputItemTime itemTimeForDisplay:NULL];
    } else {
        return NULL;
    }
}

- (void)onTextureUnregistered:(NSObject<OFTextureProtocol>*)texture {
    dispatch_async(dispatch_get_main_queue(), ^{
        [self dispose];
    });
}

#pragma mark - dispose
/// This method allows you to dispose without touching the event channel.  This
/// is useful for the case where the Engine is in the process of deconstruction
/// so the channel is going to die or is already dead.
- (void)disposeSansEventChannel {
    _disposed = true;
    [_displayLink invalidate];
    [[_player currentItem] removeObserver:self forKeyPath:@"status" context:statusContext];
    [[_player currentItem] removeObserver:self
                               forKeyPath:@"loadedTimeRanges"
                                  context:timeRangeContext];
    [[_player currentItem] removeObserver:self
                               forKeyPath:@"playbackLikelyToKeepUp"
                                  context:playbackLikelyToKeepUpContext];
    [[_player currentItem] removeObserver:self
                               forKeyPath:@"playbackBufferEmpty"
                                  context:playbackBufferEmptyContext];
    [[_player currentItem] removeObserver:self
                               forKeyPath:@"playbackBufferFull"
                                  context:playbackBufferFullContext];
    [_player replaceCurrentItemWithPlayerItem:nil];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)dispose {
    [self disposeSansEventChannel];
}

#pragma mark - tool

const int64_t TIME_UNSET = -9223372036854775807;

static inline int64_t OFCMTimeToMillis(CMTime time) {
    // When CMTIME_IS_INDEFINITE return a value that matches TIME_UNSET from ExoPlayer2 on Android.
    // Fixes https://github.com/flutter/flutter/issues/48670
    if (CMTIME_IS_INDEFINITE(time)) return TIME_UNSET;
    if (time.timescale == 0) return 0;
    return time.value * 1000 / time.timescale;
}

static inline CGFloat radiansToDegrees(CGFloat radians) {
    // Input range [-pi, pi] or [-180, 180]
    CGFloat degrees = radians * (180 / M_PI);// GLKMathRadiansToDegrees((float)radians);
    if (degrees < 0) {
        // Convert -90 to 270 and -180 to 180
        return degrees + 360;
    }
    // Output degrees in between [0, 360[
    return degrees;
};

@end
