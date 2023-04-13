//
//  OFRemoteLoadViewController.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFRemoteLoadViewController.h"

@interface OFRemoteLoadViewController ()<UITextFieldDelegate>
@property (nonatomic, strong) UITextField *textField1;
@property (nonatomic, strong) UITextField *textField2;
@property (nonatomic, strong) UITextField *textField3;
@property (nonatomic, strong) UITextField *textField4;
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
    NSString *tip = @"To launch remote appbundle:\n \
1. Run [pnpm dm] to make sure front-end project (like 'demo-appbundle') has successfully run\n \
2. Enter the local IP of the development machine here";
    
    UILabel*lbl = [[UILabel alloc] initWithFrame:CGRectMake(20, 100, 300, 100)];
    lbl.text = tip;
    lbl.textAlignment = NSTextAlignmentLeft;
    lbl.backgroundColor = [UIColor clearColor];
    lbl.font = [UIFont systemFontOfSize:13];
    lbl.textColor = [UIColor darkGrayColor];
    lbl.numberOfLines = 0;
    [self.view addSubview:lbl];
    
    NSString *ip = [[NSUserDefaults standardUserDefaults] objectForKey:@"octo_mock_ip"];
    ip = ip ? ip : @"192.168.0.0";
    NSArray *components = [ip componentsSeparatedByString:@"."];
    
    CGFloat tx = 20;
    CGFloat ty = 200;
    CGFloat tw = 60;
    CGFloat th = 45;
    CGFloat gap = 30;
    for (int i=0; i<components.count; ++i) {
        UITextField *textField = [[UITextField alloc] initWithFrame:CGRectMake(tx, ty, tw, th)];
        textField.backgroundColor = [UIColor lightGrayColor];
        textField.font = [UIFont systemFontOfSize:14];
        textField.textAlignment = NSTextAlignmentCenter;
        textField.delegate = self;
        textField.keyboardType = UIKeyboardTypeNumberPad;
        [self.view addSubview:textField];
        textField.text = components[i];
        
        if (i == 0) {
            self.textField1 = textField;
        } else if (i == 1) {
            self.textField2 = textField;
        } else if (i == 2) {
            self.textField3 = textField;
        } else if (i == 3) {
            self.textField4 = textField;
            break;
        }
        
        tx += tw;
        UILabel*lbl = [[UILabel alloc] initWithFrame:CGRectMake(tx, ty, gap, th)];
        lbl.text = @".";
        lbl.textAlignment = NSTextAlignmentCenter;
        lbl.backgroundColor = [UIColor clearColor];
        lbl.font = [UIFont systemFontOfSize:15];
        lbl.textColor = [UIColor blackColor];
        [self.view addSubview:lbl];
        
        tx += gap;
    }
    
    UIButton *btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake((self.view.bounds.size.width-180)/2, 280, 180, 45);
    btn.backgroundColor = [UIColor lightGrayColor];
    [btn setTitle:@"save" forState:(UIControlStateNormal)];
    [btn addTarget:self action:@selector(btnSaveClick:) forControlEvents:(UIControlEventTouchUpInside)];
    [self.view addSubview:btn];
}

- (void)btnSaveClick:(UIButton*)sender
{
    if (self.textField1.text.length == 0 ||
        self.textField2.text.length == 0 ||
        self.textField3.text.length == 0 ||
        self.textField4.text.length == 0
        ) {
        UIAlertController* alert = [UIAlertController alertControllerWithTitle:nil
                                                                       message:@"Please enter corret IP"
                                                                preferredStyle:UIAlertControllerStyleAlert];
        UIAlertAction* defaultAction = [UIAlertAction actionWithTitle:@"OK"
                                                                style:UIAlertActionStyleDefault
                                                              handler:nil];
        [alert addAction:defaultAction];
        [self presentViewController:alert animated:YES completion:nil];
        return;
    }

    NSString *ip = [NSString stringWithFormat:@"%@.%@.%@.%@",
                    self.textField1.text,
                    self.textField2.text,
                    self.textField3.text,
                    self.textField4.text];
    [[NSUserDefaults standardUserDefaults] setValue:ip forKey:@"octo_mock_ip"];
    
    [self.navigationController popViewControllerAnimated:YES];
}

#pragma mark - UITextFieldDelegate

- (void)textFieldDidBeginEditing:(UITextField *)textField {

    //点击UITextField，全选文字
    UITextPosition *endDocument = textField.endOfDocument;//获取 text的 尾部的 TextPositext
    
    UITextPosition *end = [textField positionFromPosition:endDocument offset:0];
    UITextPosition *start = [textField positionFromPosition:end offset:-textField.text.length];//左－右＋
    textField.selectedTextRange = [textField textRangeFromPosition:start toPosition:end];
   
}

- (BOOL)textFieldShouldEndEditing:(UITextField *)textField{
    
    //点击UITextField，全选文字
    UITextPosition *beginDocument = textField.beginningOfDocument;
    UITextPosition *end = [textField positionFromPosition:beginDocument offset:0];
    UITextPosition *start = [textField positionFromPosition:beginDocument offset:0];//左－右＋
    textField.selectedTextRange = [textField textRangeFromPosition:start toPosition:end];
    return YES;
}

@end
