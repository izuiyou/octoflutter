//
//  OFAssetLoader.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFAssetLoader.h"
#import <SSZipArchive/SSZipArchive.h>
#import <CommonCrypto/CommonDigest.h>

typedef void (^ZYAPISuccessBlock)(NSURLSessionTask *task, id responseObject);
typedef void (^ZYAPIFailureBlock)(NSURLSessionTask *task, NSError *error);

@implementation OFAssetLoader

#pragma mark - get asset online

+ (void)getMockAppWithEV:(int)ev mockUrl:(NSString*)mockUrl result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] getAppWithEV:ev url:mockUrl params:nil result:resultBlock];
}

+ (void)getAppWithEV:(int)ev url:(NSString*)url params:(NSDictionary*)params result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] getWithURL:url parameters:params success:^(NSURLSessionTask *task, id responseObject) {
        if (responseObject) {
            if ([responseObject[@"ret"] intValue]==-1) {
                resultBlock(OFAssetRequest_Fail, nil);
                return;
            }
            
            // 进入#资源判断#
            NSDictionary *info = responseObject[@"data"];
            NSDictionary *finfo = info[@"framework"];

            OFFrameworkInfo *f = [[OFFrameworkInfo alloc] init];
            f.engineVersion = [finfo[@"ev"] intValue];
            if (f.engineVersion != ev) {
                resultBlock(OFAssetRequest_EngineNotMatch, nil);
                return;
            }
            f.frameworkVersion = [finfo[@"fv"] intValue];
            f.url = finfo[@"url"];
            f.md5 = finfo[@"md5"];
            [self checkFrameworkExist:f];

            OFAppInfo *a = [[OFAppInfo alloc] init];
            a.framework = f;
            a.mode = [info[@"mode"] intValue];
            a.name = info[@"bundle"];
            a.url = info[@"url"];
            if (!a.url || a.url.length==0) {
                resultBlock(OFAssetLoad_UrlLoadFail, nil);
                return;
            }
            a.md5 = info[@"md5"];
            if (!a.md5 || a.md5.length==0) {
                resultBlock(OFAssetLoad_Md5ValidateFail, nil);
                return;
            }
            a.config = info[@"config"];
            
            BOOL exist = [[self class] checkAppExist:a];
            if (exist) {
                // 有缓存，直接用
                resultBlock(OFAssetLoad_Success, a);
            }
            else {
                // 去下载
                [[self class] downloadApp:a result:resultBlock];
            }
        }
        else {
            // 请求失败
            resultBlock(OFAssetRequest_Fail, nil);
        }
    } failure:^(NSURLSessionTask *task, NSError *error) {
        // 请求失败
        resultBlock(OFAssetRequest_Fail, nil);
    }];
}

+ (void)getFrameworkWithInfo:(OFFrameworkInfo*)fi engineVersion:(int)ev result:(OFAssetLoadResultBlock)resultBlock
{
    if (fi.engineVersion != ev) {
        resultBlock(OFAssetRequest_EngineNotMatch, nil);
        return;
    }
    if (!fi.url || fi.url.length==0) {
        resultBlock(OFAssetLoad_UrlLoadFail, nil);
        return;
    }
    if (!fi.md5 || fi.md5.length==0) {
        resultBlock(OFAssetLoad_Md5ValidateFail, nil);
        return;
    }
    BOOL exist = [[self class] checkFrameworkExist:fi];
    if (exist) {
        // 有缓存，直接用
        resultBlock(OFAssetLoad_Success, fi);
    }
    else {
        // 去下载
        [[self class] downloadFramework:fi result:resultBlock];
    }
}

#pragma mark - get asset local

+ (void)getLocalApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock {
    BOOL exist = [[self class] checkAppExist:ai];
    if (exist) {
        // 有缓存，直接用
        resultBlock(OFAssetLoad_Success, ai);
    }
    else {
        // 去解压app.zip
        NSString *appZipPath = ai.url;
        // md5校验
        BOOL validate = [[self class] validateFile:appZipPath md5String:ai.md5];
        if (validate) {
            // 去解压
            [[self class] unzipPath:appZipPath forAppInfo:ai result:resultBlock];
        }
        else {
            // 校验失败
            resultBlock(OFAssetLoad_Md5ValidateFail, nil);
        }
    }
}

+ (void)getLocalFramework:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock
{
    if (!fi.url || fi.url.length==0) {
        resultBlock(OFAssetLoad_UrlLoadFail, nil);
        return;
    }
    if (!fi.md5 || fi.md5.length==0) {
        resultBlock(OFAssetLoad_Md5ValidateFail, nil);
        return;
    }
    BOOL exist = [[self class] checkFrameworkExist:fi];
    if (exist) {
        // 有缓存，直接用
        resultBlock(OFAssetLoad_Success, fi);
    }
    else {
        // 去解压framework.zip
        NSString *frameworkZipPath = fi.url;
        // md5校验
        BOOL validate = [[self class] validateFile:frameworkZipPath md5String:fi.md5];
        if (validate) {
            // 去解压
            [[self class] unzipPath:frameworkZipPath forFrameworkInfo:fi result:resultBlock];
        }
        else {
            // 校验失败
            resultBlock(OFAssetLoad_Md5ValidateFail, nil);
        }
    }
}

#pragma mark - request

+ (NSURLSessionTask *)getWithURL:(NSString *)url
                      parameters:(NSDictionary *)parameters
                         success:(ZYAPISuccessBlock)success
                         failure:(ZYAPIFailureBlock)failure {
    NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:url]];
    [request setHTTPMethod:@"GET"];
    
    for( NSString *header in parameters ) {
        [request setValue:[NSString stringWithFormat:@"%@", parameters[header]] forHTTPHeaderField:header];
    }
    
    NSURLSessionConfiguration *configuration = [NSURLSessionConfiguration defaultSessionConfiguration];
    configuration.requestCachePolicy = NSURLRequestReloadIgnoringCacheData;
    NSURLSession *session = [NSURLSession sessionWithConfiguration:configuration];
    
    NSURLSessionDataTask *task = [session dataTaskWithRequest:request completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (!data || !response || error) {
            failure([NSURLSessionTask new], error);
            return;
        }
        NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
        success([NSURLSessionTask new], dic);
    }];
    [task resume];
    return task;
}

#pragma mark - download

static NSURLSession *downloadSession;

+ (void)ensureDownloadSession {
    if (!downloadSession) {
        downloadSession = [NSURLSession sharedSession];
    }
}

+ (void)downloadFramework:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] ensureDownloadSession];
    
    NSURLSessionDataTask *dataTask = [downloadSession dataTaskWithURL:[NSURL URLWithString:fi.url] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (error) {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
            return;
        }

        NSString *octoPath = [fi.frameworkFolder stringByAppendingPathComponent:@"octo"];
        [[NSFileManager defaultManager] removeItemAtPath:octoPath error:nil];
        
        NSError *werror;
        BOOL r = [data writeToFile:octoPath options:0 error:&werror];
        if (r) {
            // md5校验
            BOOL validate = [[self class] validateFile:octoPath md5String:fi.md5];
            if (validate) {
                // 去解压
                [[self class] unzipPath:octoPath forFrameworkInfo:fi result:resultBlock];
            }
            else {
                // 校验失败
                resultBlock(OFAssetLoad_Md5ValidateFail, nil);
            }
        }
        else {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
        }
    }];
    [dataTask resume];
}

+ (void)downloadApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] downloadApp:ai skipMd5:NO result:resultBlock];
}

+ (void)downloadApp:(OFAppInfo*)ai skipMd5:(BOOL)skipMd5 result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] ensureDownloadSession];

    NSURLSessionDataTask *dataTask = [downloadSession dataTaskWithURL:[NSURL URLWithString:ai.url] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (error) {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
            return;
        }

        NSString *octoPath = [ai.appFolder stringByAppendingPathComponent:@"octo"];
        [[NSFileManager defaultManager] removeItemAtPath:octoPath error:nil];
        
        NSURL *fileURL = [NSURL fileURLWithPath:octoPath];
        BOOL r = [data writeToURL:fileURL atomically:YES];
        if (r) {
            if (skipMd5) {
                // 去解压
                [[self class] unzipPath:octoPath forAppInfo:ai result:resultBlock];
            }
            else {
                // md5校验
                BOOL validate = [[self class] validateFile:octoPath md5String:ai.md5];
                if (validate) {
                    // 去解压
                    [[self class] unzipPath:octoPath forAppInfo:ai result:resultBlock];
                }
                else {
                    // 校验失败
                    resultBlock(OFAssetLoad_Md5ValidateFail, nil);
                }
            }
        }
        else {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
        }
    }];
    [dataTask resume];
}

+ (void)onlyDownloadMockAppJS:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    [[self class] ensureDownloadSession];

    // 借助ai.url拿到http://192.168.8.220:54322/这样的url
    NSRange range = [ai.url rangeOfString:@"output"];
    NSString *url = [NSString stringWithFormat:@"%@app.js", [ai.url substringToIndex:range.location]];
    NSURLSessionDataTask *dataTask = [downloadSession dataTaskWithURL:[NSURL URLWithString:url] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
        if (error) {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
            return;
        }

        NSString *octoPath = [ai.appFolder stringByAppendingPathComponent:@"app.js"];
        [[NSFileManager defaultManager] removeItemAtPath:octoPath error:nil];
        
        NSURL *fileURL = [NSURL fileURLWithPath:octoPath];
        BOOL r = [data writeToURL:fileURL atomically:YES];
        if (r) {
            // 不对md5校验了
            resultBlock(OFAssetLoad_Success, ai);
        }
        else {
            // 下载失败
            resultBlock(OFAssetLoad_UrlLoadFail, nil);
        }
    }];
    [dataTask resume];
}

#pragma mark - md5 validate

+ (BOOL)validateFile:(NSString*)path md5String:(NSString*)md5String
{
    if(md5String && md5String.length>0)
    {
        NSString *output = [[self class] md5ForPath:path];
        return [output isEqualToString:md5String];
    }
    else
    {
        return NO;
    }
}

+ (NSString*)md5ForPath:(NSString*)path {
    if(path && [[NSFileManager defaultManager] fileExistsAtPath:path] )
    {
        NSData *data = [NSData dataWithContentsOfFile:path];
        unsigned char digest[CC_MD5_DIGEST_LENGTH];
        CC_MD5( data.bytes, (CC_LONG)data.length, digest );
        
        NSMutableString *output = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH * 2];
        
        for( int i = 0; i < CC_MD5_DIGEST_LENGTH; i++ )
        {
            [output appendFormat:@"%02x", digest[i]];
        }
        
        return output;
    }
    return @"";
}

#pragma mark - unzip

+ (void)unzipPath:(NSString*)path forFrameworkInfo:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock
{
    [SSZipArchive unzipFileAtPath:path toDestination:fi.frameworkFolder progressHandler:^(NSString * _Nonnull entry, unz_file_info zipInfo, long entryNumber, long total) {

    } completionHandler:^(NSString * _Nonnull path, BOOL succeeded, NSError * _Nullable error) {
        if (succeeded) {
            BOOL exist = [[self class] checkFrameworkExist:fi];
            if (exist) {
                // 解压成功，去使用
                resultBlock(OFAssetLoad_Success, fi);
            }
            else {
                // 内容失败
                resultBlock(OFAssetLoad_ContentError, fi);
            }
        }
        else {
            // 解压失败
            resultBlock(OFAssetLoad_UnzipFail, fi);
        }
        [[NSFileManager defaultManager] removeItemAtPath:path error:nil];
    }];
}

+ (void)unzipPath:(NSString*)path forAppInfo:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    [SSZipArchive unzipFileAtPath:path toDestination:ai.appFolder progressHandler:^(NSString * _Nonnull entry, unz_file_info zipInfo, long entryNumber, long total) {

    } completionHandler:^(NSString * _Nonnull path, BOOL succeeded, NSError * _Nullable error) {
        if (succeeded) {
            BOOL exist = [[self class] checkAppExist:ai];
            if (exist) {
                // 解压成功，去使用
                resultBlock(OFAssetLoad_Success, ai);
            }
            else {
                // 内容失败
                resultBlock(OFAssetLoad_ContentError, ai);
            }
        }
        else {
            // 解压失败
            resultBlock(OFAssetLoad_UnzipFail, ai);
        }
        [[NSFileManager defaultManager] removeItemAtPath:path error:nil];
    }];
}

#pragma mark - cache

+ (void)createFolderIfNeeded:(NSString*)path
{
    if (![[NSFileManager defaultManager] fileExistsAtPath:path]) {
        [[NSFileManager defaultManager] createDirectoryAtPath:path withIntermediateDirectories:YES attributes:nil error:nil];
    }
}

+ (NSString*)rootFolder
{
    NSArray<NSString *> *paths = NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES);
    NSString *diskCachePath = [paths[0] stringByAppendingPathComponent:@"com.of.asset"];
    [[self class] createFolderIfNeeded:diskCachePath];
    return diskCachePath;
}

//---framework begin
+ (NSString*)rootFolderForFramework
{
    NSString *root = [self rootFolder];
    NSString *fpath = [root stringByAppendingPathComponent:@"framework"];
    [[self class] createFolderIfNeeded:fpath];
    return fpath;
}

+ (NSString*)folderForFrameworkInfo:(OFFrameworkInfo*)fi
{
    NSString *fpath = [self rootFolderForFramework];
    NSString *md5_path = [fpath stringByAppendingPathComponent:fi.md5];
    [[self class] createFolderIfNeeded:md5_path];
    return md5_path;
}

+ (BOOL)checkFrameworkExist:(OFFrameworkInfo*)fi
{
    NSString *f_folder = [[self class] folderForFrameworkInfo:fi];
    fi.frameworkFolder = f_folder;

    NSString *js_path = [f_folder stringByAppendingPathComponent:@"framework.js"];
    BOOL r = [[NSFileManager defaultManager] fileExistsAtPath:js_path];
    return r;
}
//---framework end

//---app begin
+ (NSString*)rootFolderForApp
{
    NSString *root = [self rootFolder];
    NSString *fpath = [root stringByAppendingPathComponent:@"App"];
    [[self class] createFolderIfNeeded:fpath];
    return fpath;
}

+ (NSString*)folderForAppInfo:(OFAppInfo*)ai
{
    NSString *fpath = [self rootFolderForApp];
    NSString *dir_path = [fpath stringByAppendingPathComponent:ai.name];
    [[self class] createFolderIfNeeded:dir_path];
    NSString *md5_path = [dir_path stringByAppendingPathComponent:ai.md5];
    [[self class] createFolderIfNeeded:md5_path];
    return md5_path;
}

+ (BOOL)checkAppExist:(OFAppInfo*)ai
{
    NSString *a_folder = [[self class] folderForAppInfo:ai];
    ai.appFolder = a_folder;

    NSString *js_path = [a_folder stringByAppendingPathComponent:@"app.js"];
    BOOL r = [[NSFileManager defaultManager] fileExistsAtPath:js_path];
    return r;
}
//---app end

#pragma mark - clear

// 清理所有framework
+ (void)clearFrameworks
{
    NSString *fpath = [[self class] rootFolderForFramework];
    NSFileManager* fileMgr = [NSFileManager defaultManager];
    NSArray* tempArray = [fileMgr contentsOfDirectoryAtPath:fpath error:nil];
    for (NSString* fileName in tempArray) {
        NSString* fullPath = [fpath stringByAppendingPathComponent:fileName];
        [[NSFileManager defaultManager] removeItemAtPath:fullPath error:nil];
    }
}

// 清理其它framework
+ (void)clearFrameworkExcept:(OFFrameworkInfo*)info
{
    NSString *fpath = [[self class] rootFolderForFramework];
    NSFileManager* fileMgr = [NSFileManager defaultManager];
    NSArray* tempArray = [fileMgr contentsOfDirectoryAtPath:fpath error:nil];
    if (tempArray.count>5) {
        for (NSString* fileName in tempArray) {
            if (![fileName isEqualToString:info.md5]) {
                NSString* fullPath = [fpath stringByAppendingPathComponent:fileName];
                [[NSFileManager defaultManager] removeItemAtPath:fullPath error:nil];
            }
        }
    }
}

// 清理某一个app下的所有缓存
+ (void)clearAppForName:(NSString*)name
{
    NSString *fpath = [[self class] rootFolderForApp];
    NSString *dir_path = [fpath stringByAppendingPathComponent:name];
    NSFileManager* fileMgr = [NSFileManager defaultManager];
    NSArray* tempArray = [fileMgr contentsOfDirectoryAtPath:dir_path error:nil];
    for (NSString* fileName in tempArray) {
        NSString* fullPath = [dir_path stringByAppendingPathComponent:fileName];
        [[NSFileManager defaultManager] removeItemAtPath:fullPath error:nil];
    }
}

// 清理同一个app里的多余缓存
+ (void)clearAppExcept:(OFAppInfo*)info
{
    NSString *fpath = [[self class] rootFolderForApp];
    NSString *dir_path = [fpath stringByAppendingPathComponent:info.name];
    NSFileManager* fileMgr = [NSFileManager defaultManager];
    NSArray* tempArray = [fileMgr contentsOfDirectoryAtPath:dir_path error:nil];
    if (tempArray.count>2) {
        for (NSString* fileName in tempArray) {
            if (![fileName isEqualToString:info.md5]) {
                NSString* fullPath = [dir_path stringByAppendingPathComponent:fileName];
                [[NSFileManager defaultManager] removeItemAtPath:fullPath error:nil];
            }
        }
    }
}

// 清理所有app缓存
+ (void)clearApps
{
    NSString *fpath = [[self class] rootFolderForApp];
    NSFileManager* fileMgr = [NSFileManager defaultManager];
    NSArray* tempArray = [fileMgr contentsOfDirectoryAtPath:fpath error:nil];
    for (NSString* fileName in tempArray) {
        NSString* fullPath = [fpath stringByAppendingPathComponent:fileName];
        [[NSFileManager defaultManager] removeItemAtPath:fullPath error:nil];
    }
}
@end
