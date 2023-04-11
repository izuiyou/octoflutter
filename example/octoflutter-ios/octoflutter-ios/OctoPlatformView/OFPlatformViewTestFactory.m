//
//  OFPlatformViewTestFactory.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/17.
//

#import "OFPlatformViewTestFactory.h"
#import "OFPlatformViewTest.h"

@interface OFPlatformViewTestFactory()
@property (nonatomic, weak) OFAppEngine *engine;
@property (nonatomic, assign) int bid;
@property (nonatomic, strong) NSString* factoryId;

@property (nonatomic, strong) NSMutableDictionary *platformViewMap;
@end

@implementation OFPlatformViewTestFactory

- (void)setup:(OFAppEngine *)engine bid:(int)bid factoryId:(NSString *)factoryId
{
    self.engine = engine;
    self.bid = bid;
    self.factoryId = factoryId;
    [self _registerChannel];
}

- (nonnull NSObject<OFPlatformView> *)createWithFrame:(CGRect)frame viewIdentifier:(int64_t)viewId arguments:(id _Nullable)args {
    
    __weak typeof(self) weakSelf = self;
    OFPlatformViewTest *platformView = [[OFPlatformViewTest alloc] initWithFrame:frame viewIdentifier:viewId arguments:args removeBlock:^(int64_t viewId) {
        __strong typeof(weakSelf)strongSelf = weakSelf;
        if (strongSelf) {
            [strongSelf.platformViewMap removeObjectForKey:[NSString stringWithFormat:@"%@", @(viewId)]];
            NSLog(@"OFPlatformViewTest removed: %lld", viewId);
        }
    }];

    [self.platformViewMap setValue:[platformView view] forKey:[NSString stringWithFormat:@"%@", @(viewId)]];
    
    return platformView;
}

- (NSObject<OFMessageCodec>*)createArgsCodec
{
    return [OFJSONMessageCodec sharedInstance];
}

#pragma mark -

- (NSMutableDictionary *)platformViewMap
{
    if (!_platformViewMap) {
        _platformViewMap = [NSMutableDictionary dictionary];
    }
    return _platformViewMap;
}

#pragma mark - channel to response

- (void)_registerChannel
{
    if (_engine) {
        OFMethodCallHandler handler = ^(OFMethodCall * _Nonnull call, OFResult  _Nonnull result) {
            if ([call.method isEqualToString:@"getText"]) {
                dispatch_async(dispatch_get_main_queue(), ^(void) {
                    id viewId = call.arguments[@"viewId"] ? call.arguments[@"viewId"] : @(0);
                    
                    UITextView *textView = (UITextView *)self.platformViewMap[[NSString stringWithFormat:@"%@", viewId]];
                    if (textView && [textView isKindOfClass:[UITextView class]]) {
                        result(textView.text);
                    }
                });
            } else {
                result(OFMethodNotImplemented);
            }
        };
        NSString *channel = self.factoryId;
        if (self.bid >= 0) {
            [self.engine.channelEngine registerAppBundleChannel:channel bid:self.bid handler:handler];
        } else {
            [self.engine.channelEngine registerMethodChannel:channel handler:handler];
        }
    }
}

#pragma mark -

- (void)dealloc
{
    if (_platformViewMap) {
        [_platformViewMap removeAllObjects];
    }
}

@end
