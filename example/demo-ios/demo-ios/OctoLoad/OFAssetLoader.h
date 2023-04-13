//
//  OFAssetRequester.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <Foundation/Foundation.h>
#import "OFFrameworkInfo.h"
#import "OFAppInfo.h"

typedef NS_ENUM(NSUInteger, OFAssetLoadResult) {
    OFAssetLoad_Success = 0,
    
    OFAssetRequest_Fail,
    OFAssetRequest_NoRecord,
    OFAssetRequest_EngineNotMatch,
    OFAssetRequest_Offline,

    OFAssetLoad_UrlLoadFail,
    OFAssetLoad_Md5ValidateFail,
    OFAssetLoad_UnzipFail,
    OFAssetLoad_ContentError,
};

typedef void (^OFAssetLoadResultBlock)(OFAssetLoadResult result, id infoObject);

@interface OFAssetLoader : NSObject

+ (void)getMockAppWithEV:(int)ev mockUrl:(NSString*)mockUrl result:(OFAssetLoadResultBlock)resultBlock;
+ (void)getAppWithEV:(int)ev url:(NSString*)url params:(NSDictionary*)params result:(OFAssetLoadResultBlock)resultBlock;
+ (void)getFrameworkWithInfo:(OFFrameworkInfo*)fi engineVersion:(int)ev result:(OFAssetLoadResultBlock)resultBlock;

+ (void)getLocalApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;
+ (void)getLocalFramework:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock;

+ (void)downloadApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;
+ (void)downloadApp:(OFAppInfo*)ai skipMd5:(BOOL)skipMd5 result:(OFAssetLoadResultBlock)resultBlock;
+ (void)onlyDownloadMockAppJS:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock;

+ (NSString*)md5ForPath:(NSString*)path;

+ (void)clearFrameworks;
+ (void)clearFrameworkExcept:(OFFrameworkInfo*)info;

+ (void)clearAppExcept:(OFAppInfo*)info;
+ (void)clearAppForName:(NSString*)name;
+ (void)clearApps;

@end
