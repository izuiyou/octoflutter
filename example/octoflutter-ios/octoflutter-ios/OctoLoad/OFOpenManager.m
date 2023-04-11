//
//  OFOpenManager.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFOpenManager.h"
#import <OctoFlutter/OctoFlutter.h>

@interface OFOpenManager()
@property (nonatomic, weak) OFAppEngine *topSharedEngine;
@property (nonatomic, weak) OFAppEngine *secondSharedEngine;
@property (nonatomic, assign) int octoVersion;
@end

@implementation OFOpenManager

+ (OFOpenManager*)sharedInstance {
    static OFOpenManager *sharedInstance = nil;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        sharedInstance = [[self alloc] init];
    });
 
    return sharedInstance;
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        self.octoVersion = OctoVersion;
        // 如果是共享模式，即使没在运行任何app，仍保留一个engine对象
        [OFAppEngineManager sharedInstance].keepOneSharedEngine = YES;
#ifdef DEBUG
        // 打印js侧的log
//        [OFAppEngineManager sharedInstance].showJSLog = YES;
        // 在缓存中保存app.js，这样在safari开发模式下查看的时候可以看到这个文件
        [OFAppEngineManager sharedInstance].saveAppJS = YES;
#endif
    }
    return self;
}

+ (OFOpenConfig*)openConfigFromFrameworkInfo:(OFFrameworkInfo*)fi
{
    OFOpenConfig *config = [[OFOpenConfig alloc] init];
    config.frameworkVersion = fi.frameworkVersion;
    config.frameworkFolder = fi.frameworkFolder;
    // 注册channel
    config.engineMCClassNames = @[
        @"OFMCHttp",
        @"OFRouter",
    ];
    return config;
}

+ (OFOpenConfig*)openConfigFromAppInfo:(OFAppInfo*)ai
{
    OFOpenConfig *config = [[self class] openConfigFromFrameworkInfo:ai.framework];
    
    // 拿app信息补全config
    config.mode = ai.mode;
    config.appFolder = ai.appFolder;
    config.appBundleName = ai.name;
    config.fullScreen = [ai getFullScreen];
    config.canSwipeBack = [ai getSwipeBack];
    // 注册app bundle channel
    config.appMCClassNames = @[
        @"OFAppBundleMCVideo"
    ];
    
    return config;
}

#pragma mark - isolate模式
- (void)fetchIsolateEngineForAppInfo:(OFAppInfo*)ai result:(OFFetchIsolateEngineBlock)resultBlock
{
    [self getFrameworkWithInfo:ai.framework result:^(OFAssetLoadResult result, id infoObject) {
        if (result==OFAssetLoad_Success) {
            dispatch_async(dispatch_get_main_queue(), ^(void) {
                ai.framework = infoObject;
                [self _loadIsolateEngineForAppInfo:ai loadResult:result resultBlock:resultBlock];
            });
        }
        else {
            resultBlock(result, nil, nil);
        }
    }];
}

- (void)_loadIsolateEngineForAppInfo:(OFAppInfo*)ai
                          loadResult:(OFAssetLoadResult)loadResult
                         resultBlock:(OFFetchIsolateEngineBlock)resultBlock {
    BOOL noframework = [OFAppEngineManager sharedInstance].engines.count==0;
    OFOpenConfig *config = [[self class] openConfigFromAppInfo:ai];
    OFAppEngine *engine = [[OFAppEngineManager sharedInstance] buildEngineMode:OFAppEngineMode_Isolate config:config];
    
    BOOL bundleExist = [engine.appBundleManager bundleExistForName:ai.name];

    resultBlock(loadResult, engine, config);
    
    if (noframework) {
        [OFAssetLoader clearFrameworkExcept:ai.framework];
    }
    if (!bundleExist) {
        [OFAssetLoader clearAppExcept:ai];
    }
}

#pragma mark - shared模式
- (void)fetchSharedEngineForAppInfo:(OFAppInfo*)ai result:(OFFetchSharedEngineBlock)resultBlock
{
    // [1]如果未加载engine，先对信息里的framework进行#资源判断#，然后加载；完了对app进行#资源判断#，然后加载
    if (!_topSharedEngine) {
        OFAssetLoadResultBlock block = ^(OFAssetLoadResult result, id infoObject) {
            if (result==OFAssetLoad_Success) {
                dispatch_async(dispatch_get_main_queue(), ^(void) {
                    ai.framework = infoObject;
                    [self _loadSharedEngineForAppInfo:ai loadResult:result resultBlock:resultBlock];
                });
            }
            else {
                resultBlock(result, OFFetchSharedEngineFetch_Fail, nil, nil);
            }
        };
        [OFAssetLoader getFrameworkWithInfo:ai.framework engineVersion:self.octoVersion result:block];
    }
    else {
        // [2]如果已有engine，当前framework版本>=信息内framework版本，对app进行#资源判断#，然后加载
        if (self.topSharedEngine.frameworkVersion >= ai.framework.frameworkVersion) {
            BOOL bundleExist = [self.topSharedEngine.appBundleManager bundleExistForName:ai.name];

            OFOpenConfig *config = [[self class] openConfigFromAppInfo:ai];
            resultBlock(OFAssetLoad_Success, OFFetchSharedEngineFetch_Reuse, _topSharedEngine, config);
            
            if (!bundleExist) {
                [OFAssetLoader clearAppExcept:ai];
            }
        }
        else {
            /*
             [3]如果已有engine，当前framework版本<信息内framework版本，需要新开一个shared模式的engine，先对信息里的framework进行#资源判断#，然后加载；完了对app进行#资源判断#，然后加载；并将新的framework记为当前版本，engine为当前engine
             */
            if (self.secondSharedEngine) {
                // 已有两个engine，需提示重启
                resultBlock(OFAssetLoad_ContentError, OFFetchSharedEngineFetch_MoreThan2, nil, nil);
            }
            else {
                // 多加载一个shared engine
                [self getFrameworkWithInfo:ai.framework result:^(OFAssetLoadResult result, id infoObject) {
                    if (result==OFAssetLoad_Success) {
                        dispatch_async(dispatch_get_main_queue(), ^(void) {
                            self.secondSharedEngine = self.topSharedEngine;
                            OFOpenConfig *config = [[self class] openConfigFromAppInfo:ai];
                            self.topSharedEngine = [[OFAppEngineManager sharedInstance] buildEngineMode:OFAppEngineMode_Shared config:config];
                            resultBlock(result, OFFetchSharedEngineFetch_SecondNew, self->_topSharedEngine, config);
                        });
                    }
                    else {
                        resultBlock(result, OFFetchSharedEngineFetch_Fail, nil, nil);
                    }
                }];
            }
        }
    }
}

- (void)_loadSharedEngineForAppInfo:(OFAppInfo*)ai
                          loadResult:(OFAssetLoadResult)loadResult
                         resultBlock:(OFFetchSharedEngineBlock)resultBlock
{
    BOOL noframework = [OFAppEngineManager sharedInstance].engines.count==0;

    OFOpenConfig *config = [[self class] openConfigFromAppInfo:ai];
    self.topSharedEngine = [[OFAppEngineManager sharedInstance] buildEngineMode:OFAppEngineMode_Shared config:config];
    
    BOOL bundleExist = [self.topSharedEngine.appBundleManager bundleExistForName:ai.name];

    resultBlock(loadResult, OFFetchSharedEngineFetch_FirstNew, _topSharedEngine, config);
    
    if (noframework) {
        [OFAssetLoader clearFrameworkExcept:ai.framework];
    }
    
    if (!bundleExist) {
        [OFAssetLoader clearAppExcept:ai];
    }
}

#pragma mark - asset loader online

- (void)getFrameworkWithInfo:(OFFrameworkInfo*)fi result:(OFAssetLoadResultBlock)resultBlock
{
    [OFAssetLoader getFrameworkWithInfo:fi engineVersion:self.octoVersion result:resultBlock];
}

- (void)getMockAppWithUrl:(NSString*)url result:(OFAssetLoadResultBlock)resultBlock
{
    [OFAssetLoader getMockAppWithEV:self.octoVersion mockUrl:url result:resultBlock];
}

- (void)downloadApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    [OFAssetLoader downloadApp:ai result:resultBlock];
}

- (void)downloadApp:(OFAppInfo*)ai skipMd5:(BOOL)skipMd5 result:(OFAssetLoadResultBlock)resultBlock
{
    [OFAssetLoader downloadApp:ai skipMd5:skipMd5 result:resultBlock];
}

- (void)onlyDownloadMockAppJS:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    [OFAssetLoader onlyDownloadMockAppJS:ai result:resultBlock];
}

#pragma mark - asset loader local

- (void)getLocalApp:(OFAppInfo*)ai result:(OFAssetLoadResultBlock)resultBlock
{
    if (ai.framework.engineVersion != self.octoVersion) {
        resultBlock(OFAssetRequest_EngineNotMatch, ai);
        return;
    }
    [OFAssetLoader getLocalApp:ai result:resultBlock];
}

- (void)fetchLocalIsolateEngine:(OFAppInfo*)ai result:(OFFetchIsolateEngineBlock)resultBlock
{
    if (ai.framework.engineVersion != self.octoVersion) {
        resultBlock(OFAssetRequest_EngineNotMatch, nil, nil);
        return;
    }
    [OFAssetLoader getLocalFramework:ai.framework result:^(OFAssetLoadResult result, id infoObject) {
        if (result==OFAssetLoad_Success) {
            dispatch_async(dispatch_get_main_queue(), ^(void) {
                ai.framework = infoObject;
                [self _loadIsolateEngineForAppInfo:ai loadResult:result resultBlock:resultBlock];
            });
        }
        else {
            resultBlock(result, nil, nil);
        }
    }];
}

- (void)fetchLocalSharedEngine:(OFAppInfo*)ai result:(OFFetchSharedEngineBlock)resultBlock
{
    if (ai.framework.engineVersion != self.octoVersion) {
        resultBlock(OFAssetRequest_EngineNotMatch, OFFetchSharedEngineFetch_Fail, nil, nil);
        return;
    }
    // [1]如果未加载engine，先对信息里的framework进行#资源判断#，然后加载；完了对app进行#资源判断#，然后加载
    if (!_topSharedEngine) {
        OFAssetLoadResultBlock block = ^(OFAssetLoadResult result, id infoObject) {
            if (result==OFAssetLoad_Success) {
                dispatch_async(dispatch_get_main_queue(), ^(void) {
                    ai.framework = infoObject;
                    [self _loadSharedEngineForAppInfo:ai loadResult:result resultBlock:resultBlock];
                });
            }
            else {
                resultBlock(result, OFFetchSharedEngineFetch_Fail, nil, nil);
            }
        };
        [OFAssetLoader getLocalFramework:ai.framework result:block];
    }
    else {
        // [2]如果已有engine，当前framework版本>=信息内framework版本，对app进行#资源判断#，然后加载
        BOOL bundleExist = [self.topSharedEngine.appBundleManager bundleExistForName:ai.name];

        OFOpenConfig *config = [[self class] openConfigFromAppInfo:ai];
        resultBlock(OFAssetLoad_Success, OFFetchSharedEngineFetch_Reuse, _topSharedEngine, config);
        
        if (!bundleExist) {
            [OFAssetLoader clearAppExcept:ai];
        }
    }
}

@end
