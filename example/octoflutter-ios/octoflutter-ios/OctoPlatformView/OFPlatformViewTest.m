//
//  OFPlatformViewTest.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/17.
//

#import "OFPlatformViewTest.h"

@interface OFPlatformViewTest()
@property (nonatomic, strong) UIView * platformView;
@property (nonatomic, assign) int64_t viewId;
@property (nonatomic, copy) void (^removeBlock)(int64_t viewId);
@end

@implementation OFPlatformViewTest

- (instancetype)initWithFrame:(CGRect)frame
               viewIdentifier:(int64_t)viewId
                    arguments:(id _Nullable)args
                  removeBlock:(void (^)(int64_t viewId))removeBlock
{
    _viewId = viewId;
    _removeBlock = removeBlock;
    NSString *text = @"iOS端PlatformView";
    
    if ([args isKindOfClass:[NSDictionary class]]) {
        NSDictionary *params = (NSDictionary *)args;
        if([[params allKeys] containsObject:@"text"]){
            if ([[params valueForKey:@"text"] isKindOfClass:[NSString class]]) {
                text= [params valueForKey:@"text"];
            }
        }
    }
    else if ([args isKindOfClass:[NSString class]]) {
        NSDictionary *params = [OFUtils dicFromString:args];
        if([[params allKeys] containsObject:@"text"]){
            if ([[params valueForKey:@"text"] isKindOfClass:[NSString class]]) {
                text= [params valueForKey:@"text"];
            }
        }
    }
    
    text = [NSString stringWithFormat:@"%@: %lld", text, viewId];
    
    {
        UITextView *textView = [[UITextView alloc] initWithFrame:frame];
        textView.backgroundColor = [UIColor lightGrayColor];
        textView.text = [NSString stringWithFormat:@"UITextView: %@", text];
        _platformView = textView;
    }
    
    return self;
}

- (nonnull UIView *)view {
    return _platformView;
}

- (void)dealloc
{
    if (_removeBlock) {
        _removeBlock(_viewId);
    }
}
@end
