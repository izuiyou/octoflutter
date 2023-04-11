//
//  OFAppBundleMCVideo.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/16.
//

#import "OFAppBundleMCVideo.h"
#import "VideoPlayer.h"
#import "VideoMessages.h"
#import "FrameUpdater.h"

@interface OFAppBundleMCVideo()
@property (nonatomic, strong) NSMutableDictionary<NSNumber*, VideoPlayer*> *players;
@end

@implementation OFAppBundleMCVideo

// 重载
+ (NSString*)getBaseChannelName {
    return @"example.plugins/video";
}

+ (NSString*)getBasePlayerEventChannelName {
    return @"example.plugins/video_event_";
}

#pragma mark - getter
- (NSMutableDictionary<NSNumber *,VideoPlayer *> *)players
{
    if (!_players) {
        _players = [NSMutableDictionary dictionaryWithCapacity:1];
    }
    return _players;
}

#pragma mark - method call拼接后对应的方法

- (void)initialize:(OFResult)result {
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
        [self clear];
        result(nil);
    }];
}

- (void)create:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        CreateMessage *input = [CreateMessage fromMap:arguments];
        int64_t textureId = [self create:input error:nil];
        NSLog(@"create textureId:%lld", textureId);
        result(@(textureId));
    }];
}

- (void)value:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@:%@", [self class], NSStringFromSelector(_cmd), arguments);
    VideoPlayer* player = _players[@([arguments[@"textureId"] intValue])];
    if (player) {
        [self.currentEngine runPlatformTask:^{
            CGSize size = player.size;
            NSDictionary *data = @{
                @"duration": @(player.duration),
                @"position": @(player.position),
                @"width": @(size.width),
                @"height": @(size.height),
                @"playing": @(player.isPlaying),
                @"loop": @(player.isLooping),
                @"volume": @(player.volume),
            };
            result([OFUtils stringFromDic:data]);
        }];
    }
}

- (void)play:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        TextureMessage *input = [TextureMessage fromMap:arguments];
        [self play:input error:nil];
        result(nil);
    }];
}

- (void)loop:(NSDictionary*)arguments result:(OFResult)result
{
    [self setLooping:arguments result:result];
}
- (void)setLooping:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        LoopingMessage *input = [LoopingMessage fromMap:arguments];
        [self setLooping:input error:nil];
        result(nil);
    }];
}

- (void)volume:(NSDictionary*)arguments result:(OFResult)result
{
    [self setVolume:arguments result:result];
}
- (void)setVolume:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        VolumeMessage *input = [VolumeMessage fromMap:arguments];
        [self setVolume:input error:nil];
        result(nil);
    }];
}

- (void)setPlaybackSpeed:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        PlaybackSpeedMessage *input = [PlaybackSpeedMessage fromMap:arguments];
        [self setPlaybackSpeed:input error:nil];
        result(nil);
    }];
}

- (void)position:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        TextureMessage *input = [TextureMessage fromMap:arguments];
        PositionMessage *p = [self position:input error:nil];
        result(p.position);
    }];
}

- (void)seekTo:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        PositionMessage *input = [PositionMessage fromMap:arguments];
        [self seekTo:input error:nil completionHandler:^(BOOL finished) {
            result(nil);
        }];
    }];
}

- (void)pause:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        TextureMessage *input = [TextureMessage fromMap:arguments];
        [self pause:input error:nil];
        result(nil);
    }];
}

- (void)setMixWithOthers:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        MixWithOthersMessage *input = [MixWithOthersMessage fromMap:arguments];
        [self setMixWithOthers:input error:nil];
        result(nil);
    }];
}

- (void)dispose:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self.currentEngine runPlatformTask:^{
        TextureMessage *input = [TextureMessage fromMap:arguments];
        [self dispose:input error:nil];
        result(nil);
    }];
}

#pragma mark - private

- (void)clear
{
    for (NSNumber *key in _players.allKeys) {
        [self.currentEngine unregisterTexture:[key unsignedIntegerValue]];
    }
    [_players removeAllObjects];
}

- (int64_t)create:(CreateMessage*)input error:(OFError**)error {
    FrameUpdater* frameUpdater = [[FrameUpdater alloc] initWithRegistry:self.currentEngine];
    VideoPlayer* player;
    if (input.asset) {
        NSString* assetPath = [self.currentEngine pathForAppResource:[NSString stringWithFormat:@"assets/%@", input.asset]];
        player = [[VideoPlayer alloc] initWithAsset:assetPath frameUpdater:frameUpdater];
        return [self onPlayerSetup:player frameUpdater:frameUpdater];
    } else if (input.uri) {
        player = [[VideoPlayer alloc] initWithURL:[NSURL URLWithString:input.uri]
                                       frameUpdater:frameUpdater
                                        httpHeaders:input.httpHeaders];
        return [self onPlayerSetup:player frameUpdater:frameUpdater];
    } else {
        *error = [OFError errorWithCode:@"video_player" message:@"not implemented" details:nil];
        return -1;
    }
}
- (int64_t)onPlayerSetup:(VideoPlayer*)player
                      frameUpdater:(FrameUpdater*)frameUpdater {
    int64_t textureId = [self.currentEngine registerTexture:player];
    NSLog(@"onPlayerSetup textureId:%@", @(textureId));
    frameUpdater.textureId = textureId;

    NSString *channelName = [NSString stringWithFormat:@"%@%lld_",
                             [[self class] getBasePlayerEventChannelName],
                             textureId
    ];
    
    player.methodChannel =
    [self.currentEngine.channelEngine registerAppBundleChannel:channelName bid:self.bid handler:^(OFMethodCall * _Nonnull call, OFResult  _Nonnull result) {
        NSLog(@"player.methodChannel:%@", call.method);
        result(OFMethodNotImplemented);
    }];
    
    self.players[@(textureId)] = player;

    return textureId;
}

- (void)play:(TextureMessage*)input error:(OFError**)error {
    NSLog(@"play textureId: %@", input.textureId);
    VideoPlayer* player = _players[@([input.textureId intValue])];
    [player play];
}

- (void)setLooping:(LoopingMessage*)input error:(OFError**)error {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    [player setIsLooping:[input.isLooping boolValue]];
}

- (void)setVolume:(VolumeMessage*)input error:(OFError**)error {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    [player setVolume:[input.volume doubleValue]];
}

- (void)setPlaybackSpeed:(PlaybackSpeedMessage*)input error:(OFError**)error {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    [player setPlaybackSpeed:[input.speed doubleValue]];
}

- (PositionMessage*)position:(TextureMessage*)input error:(OFError**)error {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    PositionMessage* result = [[PositionMessage alloc] init];
    result.position = @([player position]);
    return result;
}

- (void)seekTo:(PositionMessage*)input error:(OFError**)error completionHandler:(void (^)(BOOL finished))completionHandler {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    [player seekTo:[input.position intValue] completionHandler:^(BOOL finished) {
        [self.currentEngine textureFrameAvailable:input.textureId.intValue];
        completionHandler(YES);
    }];
}

- (void)pause:(TextureMessage*)input error:(OFError**)error {
    VideoPlayer* player = _players[[self keyFromTextureId:input.textureId]];
    [player pause];
}

- (void)setMixWithOthers:(MixWithOthersMessage*)input
                   error:(OFError* _Nullable __autoreleasing*)error {
    if ([input.mixWithOthers boolValue]) {
        [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback
                                         withOptions:AVAudioSessionCategoryOptionMixWithOthers
                                               error:nil];
    } else {
        [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
    }
}

- (void)dispose:(TextureMessage*)input error:(OFError**)error {
    [self.currentEngine unregisterTexture:input.textureId.intValue];
    
    NSNumber *key = [self keyFromTextureId:input.textureId];
    VideoPlayer* player = _players[key];
    
    [self.currentEngine.channelEngine removeMethodChannelForName:player.methodChannel.channelNmae];
    
    [_players removeObjectForKey:[self keyFromTextureId:input.textureId]];
}

- (NSNumber*)keyFromTextureId:(id)texture
{
    return @([texture intValue]);
}
@end
