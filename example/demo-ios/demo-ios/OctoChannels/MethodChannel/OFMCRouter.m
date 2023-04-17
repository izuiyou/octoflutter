//
//  OFMCRouter.m
//  demo-ios
//
//  Created by Simon Yang on 2023/4/6.
//

#import "OFMCRouter.h"
#import <SafariServices/SafariServices.h>

@implementation OFMCRouter

// 重载
+ (NSString*)channelBaseName {
    return @"router";
}

#pragma mark - method call拼接后对应的方法

- (void)open:(id)arguments result:(OFResult)result
{
    NSLog(@"%@ %@", NSStringFromSelector(_cmd), arguments);
    
    if (arguments && [arguments isKindOfClass:[NSString class]]) {
        dispatch_async(dispatch_get_main_queue(), ^(void) {
            NSURL *url = [NSURL URLWithString:arguments];
            SFSafariViewController *safariVC = [[SFSafariViewController alloc] initWithURL:url];
            [self.currentEngine.topVC presentViewController:safariVC animated:YES completion:nil];
        });
    }
    else {
        NSLog(@"error: %@", @"open wrong arguments");
    }
}

@end
