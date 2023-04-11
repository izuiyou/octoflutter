//
//  OFAppEngineManager.h
//  octoflutter
//
//  Created by Simon Yang on 2022/2/14.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

static const int OctoVersion = 6;

NS_ASSUME_NONNULL_BEGIN
typedef void (^ExternImageCompletionBlock)(UIImage * _Nullable image, NSError * _Nullable error);
typedef void (^UnzipCompletionBlock)(NSString *path, BOOL succeeded, NSError * _Nullable error);

@class OFAppEngine;
@class OFOpenConfig;
@interface OFAppEngineManager : NSObject

@property (nonatomic, strong, readonly) NSMutableArray *engines;

@property (nonatomic, assign) BOOL  keepOneSharedEngine;

@property (nonatomic, assign) BOOL showJSLog;

// 是否将app脚本保存至文件，默认为否
@property (nonatomic, assign) BOOL saveAppJS;

// 外部可接受js抛出的异常
@property (nonatomic, copy) void (^jsExceptionBlock)(NSString *exception);
// 外部可接受文字输入抛出的异常
@property (nonatomic, copy) void (^inputExceptionBlock)(NSString *exception);
// 外部可提供在线图片加载方法
@property (nonatomic, copy) void (^externImageLoader)(NSString *url, ExternImageCompletionBlock completion);
@property (nonatomic, copy) NSData* (^externImageFetcher)(NSString *url);
// 外部提供解压方法
@property (nonatomic, copy) void (^externUnzipBlock)(NSString *path, NSString *targetDir, UnzipCompletionBlock completion);

+ (OFAppEngineManager*)sharedInstance;

- (OFAppEngine*)buildEngineMode:(NSUInteger)mode config:(OFOpenConfig*)config;

- (OFAppEngine*)engineForKey:(NSString*)engineKey;

- (void)removeAppEngine:(OFAppEngine*)engine;

#pragma mark - test
- (void)appendInit:(NSString*)key;
- (void)appendDealloc:(NSString*)key;
- (void)printDiff;

- (void)appendMethodLog:(NSString*)log;
- (void)printAllMethod;

- (void)printInit;

- (void)clearTestData;
@end

NS_ASSUME_NONNULL_END
