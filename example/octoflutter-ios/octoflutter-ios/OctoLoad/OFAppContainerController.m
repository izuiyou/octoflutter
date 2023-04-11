//
//  OFAppContainerController.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFAppContainerController.h"
#import <OctoFlutter/OctoFlutter.h>

#import "OFOpenManager.h"
#import "OFAppViewController.h"

@interface OFAppContainerController ()
{
    UIActivityIndicatorView *testActivityIndicator;
    UIStatusBarStyle _statusBarStyle;
}
@property (nonatomic, strong) NSString *bundleName;
@property (nonatomic, strong) NSString *route;
@property (nonatomic, strong) NSString *args;

@property (nonatomic, strong) OFAppViewController *currentVC;
@property (nonatomic, strong) OFAppInfo *appInfo;

@property (nonatomic, strong) OFOpenConfig *config;

@property (nonatomic, strong) NSString *mockUrl;
@end

@implementation OFAppContainerController

- (void)dealloc
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
    
    [self.currentVC.view removeFromSuperview];
    [self.currentVC removeFromParentViewController];
    self.currentVC = nil;
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
}

- (instancetype)init {
  NSAssert(NO, @"Use initWithAppInfo or initWithMockUrl");
  return nil;
}

- (instancetype)initWithAppInfo:(OFAppInfo*)ai
{
    self = [super init];
    if (self) {
        self.appInfo = ai;
    }
    return self;
}

- (instancetype)initWithMockUrl:(NSString*)url
{
    self = [super init];
    if (self) {
        self.mockUrl = url;
    }
    return self;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    
    _statusBarStyle = UIStatusBarStyleDefault;
    self.navigationController.navigationBarHidden = YES;
    self.view.backgroundColor = [UIColor whiteColor];
    
    // loading UI
    testActivityIndicator = [[UIActivityIndicatorView alloc]initWithActivityIndicatorStyle:UIActivityIndicatorViewStyleWhite];
    testActivityIndicator.center = CGPointMake(self.view.bounds.size.width/2, self.view.bounds.size.height/2);
    testActivityIndicator.color = [UIColor redColor];
    [testActivityIndicator startAnimating];
    [self.view addSubview:testActivityIndicator];

    if (_appInfo) {
        // 本地获取
        [[OFOpenManager sharedInstance] getLocalApp:_appInfo result:^(OFAssetLoadResult result, id infoObject) {
            if (result==OFAssetLoad_Success) {
                [self _onLocalAppInfo:infoObject];
            }
            else {
                [self _onErrorResult:result];
            }
        }];
    }
    else if (_mockUrl) {
        // 在线获取
        [[OFOpenManager sharedInstance] getMockAppWithUrl:_mockUrl result:^(OFAssetLoadResult result, id infoObject) {
            if (result==OFAssetLoad_Success) {
                [self _onAppInfo:infoObject];
            }
            else {
                [self _onErrorResult:result];
            }
        }];
    }
    
    [self addNotificationObserver];
}

#pragma mark - notification

- (void)addNotificationObserver
{
    __weak typeof(self) weakSelf = self;
    NSNotificationCenter* center = [NSNotificationCenter defaultCenter];
    [center addObserverForName:@"kUpdateApp" object:nil queue:nil usingBlock:^(NSNotification * _Nonnull note) {
        // 收到通知，单独更新app.js
        __strong typeof(weakSelf)strongSelf = weakSelf;
        if (strongSelf) {
            int mode = [note.object intValue];

            if (strongSelf.mockUrl) {
                // 在线加载方式，三种重载都可以
            }
            else {
                // 如果是加载本地，只支持本地重载
                if (mode!=999) {
                    [strongSelf showAlert:@"本地App不支持此操作"];
                    return;
                }
            }
            
            // start loading
            [strongSelf doInMain:^{
                [strongSelf.view bringSubviewToFront:strongSelf->testActivityIndicator];
                [strongSelf->testActivityIndicator startAnimating];
            }];
            
            if (mode==999) {
                // 重载
                [strongSelf.currentVC restart];
            }
            else if (mode==1000) {
                // 下载新的app.js并重载
                [[OFOpenManager sharedInstance] onlyDownloadMockAppJS:strongSelf.appInfo result:^(OFAssetLoadResult result, id infoObject) {
                    if (result==OFAssetLoad_Success) {
                        [strongSelf.currentVC restart];
                    }
                    else {
                        [strongSelf _onErrorResult:result];
                    }
                }];
            }
            else if(mode==1001) {
                // 下载新的app.zip并重载
                [[OFOpenManager sharedInstance] downloadApp:strongSelf.appInfo skipMd5:YES result:^(OFAssetLoadResult result, id infoObject) {
                    if (result==OFAssetLoad_Success) {
                        [strongSelf.currentVC restart];
                    }
                    else {
                        [strongSelf _onErrorResult:result];
                    }
                }];
            }
        }
    }];
}

#pragma mark -
- (BOOL)prefersStatusBarHidden
{
    if (_appInfo) {
        return [self.appInfo getFullScreen];
    }
    return NO;
}

- (UIStatusBarStyle)preferredStatusBarStyle
{
    return _statusBarStyle;
}

#pragma mark - private

// 本地获取
- (void)_onLocalAppInfo:(OFAppInfo*)ai
{
    self.appInfo = ai;
    [self doInMain:^{
        [self setNeedsStatusBarAppearanceUpdate];
    }];
    
    if (ai.mode==0) {// isolate
        // 请求framework数据
        [[OFOpenManager sharedInstance] fetchLocalIsolateEngine:ai result:^(OFAssetLoadResult loadResult, id engine, OFOpenConfig *config) {
            if (loadResult==OFAssetLoad_Success) {
                [self appendVCWithEngine:engine config:config];
            }
            else {
                [self _onErrorResult:loadResult];
            }
        }];
    }
    else if (ai.mode==1) {
        [[OFOpenManager sharedInstance] fetchLocalSharedEngine:ai result:^(OFAssetLoadResult loadResult, OFFetchSharedEngineFetchResult fetchResult, id engine, OFOpenConfig *config) {
            if (fetchResult==OFFetchSharedEngineFetch_Fail) {
                [self _onErrorResult:loadResult];
            }
            else if (fetchResult==OFFetchSharedEngineFetch_MoreThan2) {
                // 提示重启
            }
            else {
                // 认为ok
                [self appendVCWithEngine:engine config:config];
            }
        }];
    }
}

// 在线获取
- (void)_onAppInfo:(OFAppInfo*)ai
{
    self.appInfo = ai;
    [self doInMain:^{
        [self setNeedsStatusBarAppearanceUpdate];
    }];
    
    if (ai.mode==OFAppEngineMode_Isolate) {
        [[OFOpenManager sharedInstance] fetchIsolateEngineForAppInfo:ai result:^(OFAssetLoadResult loadResult, id engine, OFOpenConfig *config) {
            if (loadResult==OFAssetLoad_Success) {
                [self appendVCWithEngine:engine config:config];
            }
            else {
                [self _onErrorResult:loadResult];
            }
        }];
    }
    else if (ai.mode==OFAppEngineMode_Shared) {
        [[OFOpenManager sharedInstance] fetchSharedEngineForAppInfo:ai result:^(OFAssetLoadResult loadResult, OFFetchSharedEngineFetchResult fetchResult, id engine, OFOpenConfig *config) {
            if (fetchResult==OFFetchSharedEngineFetch_Fail) {
                [self _onErrorResult:loadResult];
            }
            else if (fetchResult==OFFetchSharedEngineFetch_MoreThan2) {
                // 提示重启
            }
            else {
                // 认为ok
                [self appendVCWithEngine:engine config:config];
            }
        }];
    }
}

- (void)_onErrorResult:(OFAssetLoadResult)result
{
    if (result==OFAssetRequest_Fail)
    {
        // 因为网络问题/接口问题，获取app信息失败
        [self _onRequestFail];
    }
    else if (result==OFAssetRequest_NoRecord)
    {
        // 接口请求成功，但有错误码-没有该app：认为engine版本低了，需要升级
        [self _onNoRecord];
    }
    else if (result==OFAssetRequest_EngineNotMatch)
    {
        // 接口请求成功，但ev和本工程的OctoVersion不匹配
        [self _engineNotMatch];
    }
    else if (result==OFAssetRequest_Offline)
    {
        // 接口请求成功，但有错误码-该app已下线
        [self _onOffline];
    }
    else {
        [self _onOtherError];
    }
}

- (void)_onRequestFail
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self showCloseAlert:@"request fail"];
}

- (void)_onNoRecord
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self showCloseAlert:@"no record"];
}

- (void)_engineNotMatch
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self showCloseAlert:@"engine not match"];
}

- (void)_onOffline
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self showCloseAlert:@"offline"];
}

- (void)_onOtherError
{
    NSLog(@"————%@:%@", [self class], NSStringFromSelector(_cmd));
    [self showCloseAlert:@"other error"];
}

#pragma mark - alert

- (void)showCloseAlert:(NSString*)msg
{
    [self showAlert:msg shouldClose:YES];
}

- (void)showAlert:(NSString*)msg
{
    [self showAlert:msg shouldClose:NO];
}

- (void)showAlert:(NSString*)msg shouldClose:(BOOL)shouldClose
{
    __weak typeof(self) weakSelf = self;
    [self doInMain:^{
        __strong typeof(weakSelf)strongSelf = weakSelf;
        if (strongSelf) {
            UIAlertController* alert = [UIAlertController alertControllerWithTitle:nil
                                                                           message:msg
                                                                    preferredStyle:UIAlertControllerStyleAlert];
            
            UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                                  handler:^(UIAlertAction * action) {
                if (shouldClose) {
                    if (strongSelf.navigationController.viewControllers.count>1) {
                        [strongSelf.navigationController popViewControllerAnimated:YES];
                    }
                    else {
                        [strongSelf dismissViewControllerAnimated:YES completion:nil];
                    }
                }
            }];
            
            [alert addAction:defaultAction];
            
            [strongSelf presentViewController:alert animated:YES completion:nil];
        }
    }];
}

#pragma mark -

- (void)appendVCWithEngine:(OFAppEngine*)engine config:(OFOpenConfig*)config
{
    [self doInMain:^{
        // 指定小程序业务路径，默认是/main
        if (self.route) {
            config.route = self.route;
        }
        // 给小程序业务传入参数
        if (self.args) {
            config.args = self.args;
        }
        
        OFAppViewController *vc = [[OFAppViewController alloc] initWithEngine:engine openConfg:config];
        self.currentVC = vc;
        
        __weak typeof(self) weakSelf = self;
        vc.onAppLaunch = ^(void) {
            __strong typeof(weakSelf)strongSelf = weakSelf;
            if (strongSelf) {
                [strongSelf doInMain:^{
                    [strongSelf didRunApp];
                }];
            }
        };
        vc.onStatusBarUpdate = ^(UIStatusBarStyle style) {
            __strong typeof(weakSelf)strongSelf = weakSelf;
            if (strongSelf) {
                [strongSelf doInMain:^{
                    strongSelf->_statusBarStyle = style;
                    [strongSelf setNeedsStatusBarAppearanceUpdate];
                }];
            }
        };
        [vc prepare];
    }];
}

- (void)didRunApp
{
    [testActivityIndicator stopAnimating];
    
    self.currentVC.view.frame = self.view.bounds;
    self.currentVC.view.alpha = 0;
    [self.currentVC setBgColor:[UIColor clearColor]];
    [self.view addSubview:self.currentVC.view];
    [self addChildViewController:self.currentVC];
    
    [UIView animateWithDuration:0.5 animations:^{
        self.currentVC.view.alpha = 1;
    } completion:^(BOOL finished) {
    }];
}

#pragma mark - tool

- (void)doInMain:(dispatch_block_t)block
{
    if ([[NSThread currentThread] isMainThread]) {
        block();
    }
    else {
        dispatch_async(dispatch_get_main_queue(), block);
    }
}

- (void)setInterfaceOrientation:(UIInterfaceOrientation)orientation {
    [self.currentVC performOrientationUpdate:(1 << orientation)];
}
@end
