//
//  ViewController.m
//  octoflutter-ios
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
    self.title = @"OctoFlutter-iOS";
    
    UIButton * btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake((self.view.bounds.size.width-320)/2, 240, 320, 60);
    btn.backgroundColor = [UIColor lightGrayColor];
    [btn setTitle:@"Launch Local AppBundle" forState:(UIControlStateNormal)];
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnLocalClick:) forControlEvents:(UIControlEventTouchUpInside)];
    
    btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake((self.view.bounds.size.width-320)/2, 380, 320, 60);
    btn.backgroundColor = [UIColor lightGrayColor];
    [btn setTitle:@"Launch Remote AppBundle" forState:(UIControlStateNormal)];
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnRemoteClick:) forControlEvents:(UIControlEventTouchUpInside)];
}

- (void)btnLocalClick:(UIButton*)sender
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
    ai.name = @"octoflutter_octopack_test";
    // 开发者指定这个程序以什么样的引擎模式打开
    ai.mode = OFAppEngineMode_Isolate;
    // octoflutter_eco_test.zip路径
    ai.url = [assetRoot stringByAppendingPathComponent:[NSString stringWithFormat:@"%@/%@", @"app", @"octoflutter_octopack_test.zip"]];
    // octoflutter_eco_test.zip的md5
    ai.md5 = [OFAssetLoader md5ForPath:ai.url];
    // 程序运行对应的framework信息
    ai.framework = fi;

    OFAppContainerController *vc = [[OFAppContainerController alloc] initWithAppInfo:ai];
    vc.modalPresentationStyle = UIModalPresentationFullScreen;
    [self presentViewController:vc animated:YES completion:nil];
}

- (void)btnRemoteClick:(UIButton*)sender
{
    OFRemoteLoadViewController *vc = [[OFRemoteLoadViewController alloc] init];
    [self.navigationController pushViewController:vc animated:YES];
}
@end
