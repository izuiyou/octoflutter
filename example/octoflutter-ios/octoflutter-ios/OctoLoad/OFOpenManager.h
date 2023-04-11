//
//  OFOpenManager.h
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <Foundation/Foundation.h>
#import "OFAssetLoader.h"

@class OFOpenConfig;
@class OFAppEngine;

typedef NS_ENUM(NSUInteger, OFFetchSharedEngineFetchResult) {
    OFFetchSharedEngineFetch_Fail = 0,
    OFFetchSharedEngineFetch_Reuse,
    OFFetchSharedEngineFetch_FirstNew,
    OFFetchSharedEngineFetch_SecondNew,
    OFFetchSharedEngineFetch_MoreThan2,
};

typedef void (^OFFetchIsolateEngineBlock)(OFAssetLoadResult loadResult,
                                         id engine,
                                         OFOpenConfig *config
                                         );

typedef void (^OFFetchSharedEngineBlock)(OFAssetLoadResult loadResult,
                                         OFFetchSharedEngineFetchResult fetchResult,
                                         id engine,
                                         OFOpenConfig *config
                                         );

@interface OFOpenManager : NSObject

+ (OFOpenManager*)sharedInstance;

+ (OFOpenConfig*)openConfigFromFrameworkInfo:(OFFrameworkInfo*)fi;
+ (OFOpenConfig*)openConfigFromAppInfo:(OFAppInfo*)ai;

- (void)getFrameworkWithInfo:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock;

- (void)getMockAppWithUrl:(NSString*)url result:(OFAssetLoadResultBlock)resultBlock;

- (void)fetchIsolateEngineForAppInfo:(OFAppInfo*)ai result:(OFFetchIsolateEngineBlock)resultBlock;

- (void)fetchSharedEngineForAppInfo:(OFAppInfo*)ai result:(OFFetchSharedEngineBlock)resultBlock;

- (void)downloadApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;
- (void)downloadApp:(OFAppInfo*)ai skipMd5:(BOOL)skipMd5 result:(OFAssetLoadResultBlock)resultBlock;

- (void)onlyDownloadMockAppJS:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;

- (void)getLocalApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;

- (void)fetchLocalIsolateEngine:(OFAppInfo*)ai result:(OFFetchIsolateEngineBlock)resultBlock;

- (void)fetchLocalSharedEngine:(OFAppInfo*)ai result:(OFFetchSharedEngineBlock)resultBlock;

@end

/*
 4、加载问题
 1）获取framework信息
 ————网络问题/接口问题获取信息失败——沉默
 ————获取信息成功，判断engine版本——不匹配-沉默
 ————对framework进行#资源判断#
 成功：以shared模式初始化engine，记录当前framework版本

 2）打开一个业务（先不考虑透明容器）
 ——(1)先打开页面：头顶进度，中间小笑脸；同时获取app信息
 ——(2)因为网络问题/接口问题，获取app信息：出来刷新按钮
 ——(3)接口请求成功，但有错误码-没有该app：认为engine版本低了，需要升级
 ——(4)接口请求成功，但有错误码-该app已下线（一般业务不会，活动会）：提示已下线
 ——(5.0)接口请求成功，判断engine版本：不匹配则提示有错
 ——(5.1)成功拿到可用的app信息，isolate模式
 ————[1]拿信息里的framework和app来用，进入#资源判断#，资源没问题就加载了
 ——(6)成功拿到可用的app信息，shared模式
 ————[1]如果未加载engine，先对信息里的framework进行#资源判断#，然后加载；完了对app进行#资源判断#，然后加载
 ————[2]如果已有engine，当前framework版本>=信息内framework版本，对app进行#资源判断#，然后加载
 ————[3]如果已有engine，当前framework版本<信息内framework版本，需要新开一个shared模式的engine，先对信息里的framework进行#资源判断#，然后加载；完了对app进行#资源判断#，然后加载；并将新的framework记为当前版本，engine为当前engine

 #资源判断
 ————如果判断本地已有该资源，直接用
 ————先判断framework，再判断app
 ————还没资源，如果url为空、url下载失败，下载后md5对比有错、解压出错、解压后内容有问题，都应该报错——return
 ————包含下载逻辑、解压逻辑、存储逻辑（md5为指导）
 ————判断都过了则开始加载——return
 #

 3）shared模式下，如果已经有了两个engine（两版本的framework），又碰到了当前framework版本<信息内framework版本，则提示用户杀掉app重进

 4）scheme会带着path过来，加载app时要把这个赋给route

 5、透明容器
 1）scheme里带着透明参数（假定为0-100）
 2）拿到透明度后需要将容器所有view都搞成黑色透明，否则还是用白
 3）加载过程可能不一样（头顶进度条、中间笑脸）
 4）其他报错可能也不一样
 */
