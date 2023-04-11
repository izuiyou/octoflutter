//
//  OFAppInfo.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFAppInfo.h"

@implementation OFAppInfo

- (BOOL)getFullScreen
{
    if (_config && _config[@"fullScreen"]) {
        return [_config[@"fullScreen"] boolValue];
    }
    return NO;
}

- (BOOL)getSwipeBack
{
    if (_config && _config[@"swipeBack"]) {
        return [_config[@"swipeBack"] boolValue];
    }
    return YES;
}

@end
