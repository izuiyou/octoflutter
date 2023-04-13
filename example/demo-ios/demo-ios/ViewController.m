//
//  ViewController.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "ViewController.h"
#import <OctoFlutter/OctoFlutter.h>
#import "OFRemoteLoadViewController.h"
#import "OFAppInfo.h"
#import "OFFrameworkInfo.h"
#import "OFAppContainerController.h"
#import "OFAssetLoader.h"

@interface ViewController ()
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.title = @"OctoFlutter-Demo-iOS";
    
    UIColor *flutterMainColor = [UIColor colorWithRed:(33.0/255.0) green:(150.0/255.0) blue:(243.0/255.0) alpha:1];
    UIImage *bgImage = [self imageFromColor:flutterMainColor withSize:CGSizeMake(1, 1)];

    self.navigationController.navigationBar.barTintColor = flutterMainColor;
    [self.navigationController.navigationBar setTitleTextAttributes:@{NSForegroundColorAttributeName:[UIColor whiteColor]}];
    self.navigationController.navigationBar.tintColor = [UIColor whiteColor];

    CGFloat btnWidth = 320;
    CGFloat btnHeight = 60;
    CGFloat btnGap = 80;
    CGFloat btnX = (self.view.bounds.size.width - btnWidth) / 2;
    int btnCount = 3;
    CGFloat btnY = (self.view.bounds.size.height - (btnHeight*btnCount + btnGap*(btnCount-1))) / 2;
    
    UIButton * btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake(btnX, btnY, btnWidth, btnHeight);
    [btn setBackgroundImage:bgImage forState:UIControlStateNormal];
    [btn setTitle:@"Launch Local AppBundle" forState:(UIControlStateNormal)];
    btn.clipsToBounds = YES;
    btn.layer.cornerRadius = 8;
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnLocalClick:) forControlEvents:(UIControlEventTouchUpInside)];
    
    btnY += (btnHeight+btnGap);
    btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake(btnX, btnY, btnWidth, btnHeight);
    [btn setBackgroundImage:bgImage forState:UIControlStateNormal];
    [btn setTitle:@"Launch Remote AppBundle" forState:(UIControlStateNormal)];
    btn.clipsToBounds = YES;
    btn.layer.cornerRadius = 8;
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnRemoteClick:) forControlEvents:(UIControlEventTouchUpInside)];
    
    btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake(btnX+btnWidth-160, btnY-10-30, 160, 30);
    [btn setBackgroundImage:bgImage forState:UIControlStateNormal];
    [btn setTitle:@"Remote IP Setting" forState:(UIControlStateNormal)];
    btn.titleLabel.font = [UIFont systemFontOfSize:14];
    btn.clipsToBounds = YES;
    btn.layer.cornerRadius = 8;
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnRemoteIPClick:) forControlEvents:(UIControlEventTouchUpInside)];
    
    btnY += (btnHeight+btnGap);
    btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake(btnX, btnY, btnWidth, btnHeight);
    [btn setBackgroundImage:bgImage forState:UIControlStateNormal];
    [btn setTitle:@"Launch Local Transparent AppBundle" forState:(UIControlStateNormal)];
    btn.clipsToBounds = YES;
    btn.layer.cornerRadius = 8;
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnTransparentClick:) forControlEvents:(UIControlEventTouchUpInside)];
}

- (void)btnLocalClick:(UIButton*)sender
{
    [self openLocalApp:@"octoflutter_octopack_test" bgTransparent:NO];
}

- (void)btnTransparentClick:(UIButton*)sender
{
    [self openLocalApp:@"octoflutter_transparent_test" bgTransparent:YES];
}

- (void)btnRemoteIPClick:(UIButton*)sender
{
    OFRemoteLoadViewController *vc = [[OFRemoteLoadViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}

- (void)btnRemoteClick:(UIButton*)sender
{
    NSString *ip = [[NSUserDefaults standardUserDefaults] objectForKey:@"octo_mock_ip"];
    if (ip) {
        NSString *url = [NSString stringWithFormat:@"http://%@:54322/output/mock.json", ip];
        OFAppContainerController *vc = [[OFAppContainerController alloc] initWithMockUrl:url];
        vc.modalPresentationStyle = UIModalPresentationFullScreen;
        [self presentViewController:vc animated:YES completion:nil];
    }
    else {
        UIAlertController* alert = [UIAlertController alertControllerWithTitle:nil
                                                                       message:@"Please set remote IP first"
                                                                preferredStyle:UIAlertControllerStyleAlert];
        
        UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault
                                                              handler:^(UIAlertAction * action) {
            [self btnRemoteIPClick:nil];
        }];
        
        [alert addAction:defaultAction];
        
        [self presentViewController:alert animated:YES completion:nil];
    }
}

#pragma mark - open local method

- (void)openLocalApp:(NSString*)name bgTransparent:(BOOL)bgTransparent
{
    // 指向本地文件夹OctoAssets
    NSString *assetRoot = [NSBundle.mainBundle.resourcePath stringByAppendingPathComponent:@"OctoAssets"];

    // OFFrameworkInfo与OctoAssets/framework/framework.zip的信息对应
    OFFrameworkInfo *fi = [[OFFrameworkInfo alloc] init];
    /*
     对应framework.zip/manifest.json以下字段：
     fv表示frameworkVersion
     ev表示engineVersion
     */
    fi.frameworkVersion = 9;
    fi.engineVersion = 6;
    // framework.zip路径
    fi.url = [assetRoot stringByAppendingPathComponent:[NSString stringWithFormat:@"%@/%@", @"framework", @"framework.zip"]];
    // framework.zip的md5
    fi.md5 = [OFAssetLoader md5ForPath:fi.url];
    
    // OFAppInfo与OctoAssets/app/octoflutter_eco_test.zip的信息对应
    OFAppInfo *ai = [[OFAppInfo alloc] init];
    /*
     对应octoflutter_eco_test.zip/manifest.json以下字段
     bundle表示程序名
     */
    ai.name = name;
    // 开发者指定这个程序以什么样的引擎模式打开
    ai.mode = OFAppEngineMode_Isolate;
    // octoflutter_eco_test.zip路径
    ai.url = [assetRoot stringByAppendingPathComponent:[NSString stringWithFormat:@"%@/%@.zip", @"app", name]];
    // octoflutter_eco_test.zip的md5
    ai.md5 = [OFAssetLoader md5ForPath:ai.url];
    // 程序运行对应的framework信息
    ai.framework = fi;

    OFAppContainerController *vc = [[OFAppContainerController alloc] initWithAppInfo:ai];
    if (bgTransparent) {
        vc.bgColor = [UIColor clearColor];
        vc.route = @"/main";
        vc.args = @"transparent=1";
        
        vc.modalPresentationStyle = UIModalPresentationCustom;
        vc.modalTransitionStyle = UIModalTransitionStyleCrossDissolve;
    }
    else {
        vc.modalPresentationStyle = UIModalPresentationFullScreen;
    }

    [self presentViewController:vc animated:YES completion:nil];
}

#pragma mark - private

- (UIImage *)imageFromColor: (UIColor *)color withSize:(CGSize)size {
    CGRect rect = CGRectMake(0, 0, size.width, size.height);
    UIGraphicsBeginImageContextWithOptions(rect.size, NO, [UIScreen mainScreen].scale);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetFillColorWithColor(context,color.CGColor);
    CGContextFillRect(context, rect);
    UIImage *image = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return image;
}
@end
