//
//  OFOpenConfig.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/16.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFOpenConfig : NSObject

@property (nonatomic, assign) int      mode;//0 isolate, 1 shared

// framework

@property (nonatomic, assign) int      frameworkVersion;

@property (nonatomic, strong) NSString *frameworkFolder;

@property (nonatomic, strong) NSString *frameworkFileName;

@property (nonatomic, strong) NSArray *engineMCClassNames;

@property (nonatomic, strong) NSArray *engineECClassNames;

// app

@property (nonatomic, strong) NSString *appBundleName;

@property (nonatomic, strong) NSString *appFolder;

@property (nonatomic, strong) NSString *appFileName;

@property (nonatomic, strong) NSString *route;

@property (nonatomic, strong) NSString *args;

@property (nonatomic, strong) NSArray *appMCClassNames;

@property (nonatomic, strong) NSArray *appECClassNames;

@property (nonatomic, assign) BOOL fullScreen;

@property (nonatomic, assign) BOOL canSwipeBack;

// 控制内部代码实现
@property (nonatomic, assign) BOOL useIOManager;
@property (nonatomic, assign) BOOL useRasterCache;

// 记录app.js被更新的次数，debug时使用，默认为0
@property (nonatomic, assign) int updateCount;

@end

NS_ASSUME_NONNULL_END
