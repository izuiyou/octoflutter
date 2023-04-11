//
//  OFAppInfo.h
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <Foundation/Foundation.h>
#import "OFFrameworkInfo.h"

NS_ASSUME_NONNULL_BEGIN

@interface OFAppInfo : NSObject

// 源数据
@property (nonatomic, assign) int mode;//0 isolate, 1 shared
@property (nonatomic, strong) NSString *name;
@property (nonatomic, strong) NSString *url;
@property (nonatomic, strong) NSString *md5;
@property (nonatomic, strong) NSDictionary *config;

@property (nonatomic, strong) OFFrameworkInfo *framework;

- (BOOL)getFullScreen;
- (BOOL)getSwipeBack;

// 辅助数据
@property (nonatomic, strong) NSString *appFolder;

@end

NS_ASSUME_NONNULL_END
