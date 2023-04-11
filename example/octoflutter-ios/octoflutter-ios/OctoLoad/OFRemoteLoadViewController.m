//
//  OFRemoteLoadViewController.m
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFRemoteLoadViewController.h"
#import <OctoFlutter/OctoFlutter.h>
#import "OFAppContainerController.h"

@interface OFRemoteLoadViewController ()
@property (nonatomic, strong) UITextField *textField1;
@end

@implementation OFRemoteLoadViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.view.backgroundColor = [UIColor whiteColor];

    [self buildViews];
}

- (void)touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    [self.view endEditing:YES];
}

- (void)buildViews
{
    NSString *ip = [[NSUserDefaults standardUserDefaults] objectForKey:@"octo_mock_ip"];
    
    NSString *tip = @"请输入OctoFlutter小程序运行后所在的服务IP";
    
    UILabel*lbl = [[UILabel alloc] initWithFrame:CGRectMake(20, 100, 300, 20)];
    lbl.text = tip;
    lbl.textAlignment = NSTextAlignmentLeft;
    lbl.backgroundColor = [UIColor clearColor];
    lbl.font = [UIFont systemFontOfSize:13];
    lbl.textColor = [UIColor darkGrayColor];
    [self.view addSubview:lbl];
    
    UITextField *textField = [[UITextField alloc] initWithFrame:CGRectMake(20, 120, self.view.bounds.size.width-20*2, 45)];
    textField.placeholder = tip;
    textField.backgroundColor = [UIColor lightGrayColor];
    textField.clearButtonMode = UITextFieldViewModeAlways;
    textField.font = [UIFont systemFontOfSize:14];
    [self.view addSubview:textField];
    textField.text = ip ? ip : @"192.168.?.?";
    self.textField1 = textField;
    
    UIButton *btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake((self.view.bounds.size.width-180)/2, 200, 180, 45);
    btn.backgroundColor = [UIColor lightGrayColor];
    [btn setTitle:@"go mock" forState:(UIControlStateNormal)];
    [btn addTarget:self action:@selector(goMock:) forControlEvents:(UIControlEventTouchUpInside)];
    [self.view addSubview:btn];
}

- (void)goMock:(UIButton*)sender
{
    [OFAppEngineManager sharedInstance].keepOneSharedEngine = YES;
    [OFAppEngineManager sharedInstance].saveAppJS = YES;
    
    NSString *url = [NSString stringWithFormat:@"http://%@:54322/output/mock.json", self.textField1.text];
    OFAppContainerController *vc = [[OFAppContainerController alloc] initWithMockUrl:url];
    vc.modalPresentationStyle = UIModalPresentationFullScreen;
    [self presentViewController:vc animated:YES completion:nil];
    
    [[NSUserDefaults standardUserDefaults] setValue:self.textField1.text forKey:@"octo_mock_ip"];
}
@end
