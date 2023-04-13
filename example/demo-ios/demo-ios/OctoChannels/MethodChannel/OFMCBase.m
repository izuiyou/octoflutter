//
//  OFMCBase.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFMCBase.h"

static NSString *const kZYOFMCPrefix = @"example.plugins/";

@implementation OFMCBase

// 可重载
+ (NSString*)channelPrefix {
    return kZYOFMCPrefix;
}

// 需重载
+ (NSString*)channelBaseName {
    return @"base";
}

+ (NSString*)getChannelName {
    NSString *channleName = [NSString stringWithFormat:@"%@%@",
                             [[self class] channelPrefix],
                             [[self class] channelBaseName]];
    return channleName;
}

// 方法例子
- (void)method:(OFResult)result
{
    NSLog(@"%@", NSStringFromSelector(_cmd));
}

- (void)method:(NSDictionary*)arguments result:(OFResult)result
{
    NSLog(@"%@: %@", NSStringFromSelector(_cmd), arguments);
}

@end
