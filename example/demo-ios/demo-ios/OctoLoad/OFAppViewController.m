//
//  OFAppViewController.m
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import "OFAppViewController.h"
#import "OFAppContainerController.h"
#import "OFAssetLoader.h"

#import "OFPlatformViewTestFactory.h"

@interface OFAppViewController ()<UITableViewDelegate, UITableViewDataSource>
@property (nonatomic, strong) NSArray *debugItems;
@property (nonatomic, strong) UITableView *debugTable;
@property (nonatomic, strong) UIButton *hideTableButton;
@end

@implementation OFAppViewController

- (void)viewDidLoad {
    [super viewDidLoad];
        
    CGFloat w = 30;
    UIButton *btnBack = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btnBack.frame = CGRectMake(self.view.bounds.size.width-20-w, 90, w, w);
    btnBack.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.3];
    [btnBack setTitle:@"X" forState:(UIControlStateNormal)];
    [btnBack setTitleColor:[UIColor redColor] forState:(UIControlStateNormal)];
    btnBack.titleLabel.font = [UIFont systemFontOfSize:10];
    btnBack.clipsToBounds = YES;
    btnBack.layer.cornerRadius = w/2;
    btnBack.autoresizingMask = UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleRightMargin;
    [self.view addSubview:btnBack];
    [btnBack addTarget:self action:@selector(btnBackClick:) forControlEvents:(UIControlEventTouchUpInside)];
    
    UIButton * btn = [UIButton buttonWithType:(UIButtonTypeCustom)];
    btn.frame = CGRectMake(self.view.bounds.size.width-20-w, 90+w+20, w, w);
    btn.backgroundColor = [UIColor colorWithRed:0 green:0 blue:0 alpha:0.3];
    [btn setTitle:@"debug" forState:(UIControlStateNormal)];
    btn.titleLabel.font = [UIFont systemFontOfSize:8];
    btn.clipsToBounds = YES;
    btn.layer.cornerRadius = w/2;
    btn.autoresizingMask = UIViewAutoresizingFlexibleTopMargin | UIViewAutoresizingFlexibleRightMargin;
    [self.view addSubview:btn];
    [btn addTarget:self action:@selector(btnClick:) forControlEvents:(UIControlEventTouchUpInside)];
}

// 重载prepare方法
- (void)prepare
{
    [super prepare];
    
    // 注册一个appbundle platform view
    [self registerAppBundleViewFactory:[OFPlatformViewTestFactory new] withId:@"my_platform_view"];
}

#pragma mark - buttons

- (void)btnBackClick:(UIButton*)sender
{
    UIInterfaceOrientation interfaceOrientation = [[UIApplication sharedApplication] statusBarOrientation];
    NSLog(@"%@-%ld", @"back", (long)interfaceOrientation);
    [self goBack:YES];
}

- (void)btnClick:(UIButton*)sender
{
    [self showDebugTable];
}

#pragma mark - debug

- (NSArray *)debugItems
{
    if (!_debugItems) {
        _debugItems = @[
            @[@1999, @"重载app.js", @"原地重载"],
            @[@2000, @"热重载app.js", @"前提是重新编译了，较快"],
            @[@2001, @"热重载app.zip", @"前提是重新编译了，包括asset"],
        ];
    }
    return _debugItems;
}

- (UITableView *)debugTable {
    if (!_debugTable) {
        _debugTable = [[UITableView alloc] initWithFrame:CGRectMake(0, self.view.bounds.size.height, self.view.bounds.size.width, 170) style:UITableViewStylePlain];
        _debugTable.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

        if (@available(iOS 11.0, *)) {
            _debugTable.insetsContentViewsToSafeArea = false;
        } else {
            // Fallback on earlier versions
        }
        _debugTable.backgroundColor = [UIColor whiteColor];
        _debugTable.delegate = self;
        _debugTable.dataSource = self;
        _debugTable.showsVerticalScrollIndicator = NO;
        _debugTable.showsHorizontalScrollIndicator = NO;
        _debugTable.separatorStyle = UITableViewCellSeparatorStyleSingleLine;
        _debugTable.layer.borderColor = [UIColor blackColor].CGColor;
        _debugTable.layer.borderWidth = 1.0;
    }
    return _debugTable;
}

- (void)showDebugTable {
    [self.view addSubview:self.hideTableButton];
    [self.view addSubview:self.debugTable];
    [UIView animateWithDuration:0.3 animations:^{
        CGRect frame = self.debugTable.frame;
        frame.origin.y = self.view.bounds.size.height - frame.size.height;
        self.debugTable.frame = frame;
    }];
}

- (void)hideDebugTable {
    [self.hideTableButton removeFromSuperview];
    [UIView animateWithDuration:0.3 animations:^{
        CGRect frame = self.debugTable.frame;
        frame.origin.y = self.view.bounds.size.height;
        self.debugTable.frame = frame;
    }completion:^(BOOL finished) {
        [self.debugTable removeFromSuperview];
    }];
}

- (UIButton *)hideTableButton {
    if (!_hideTableButton) {
        _hideTableButton = [[UIButton alloc] initWithFrame:self.view.bounds];
        _hideTableButton.backgroundColor = [UIColor colorWithWhite:0 alpha:0.3];
        [_hideTableButton addTarget:self action:@selector(hideTableButtonClick:) forControlEvents:(UIControlEventTouchUpInside)];
    }
    return _hideTableButton;
}

- (void)hideTableButtonClick:(UIButton*)sender
{
    [self hideDebugTable];
}

#pragma mark - table datasource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section
{
    return self.debugItems.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath
{
    static NSString *CellIdentifier = @"Cell";
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    if (cell == nil) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleSubtitle reuseIdentifier:CellIdentifier];
        cell.selectionStyle = UITableViewCellSelectionStyleNone;
        cell.textLabel.textColor = [UIColor blackColor];
        cell.detailTextLabel.textColor = [UIColor darkGrayColor];
    }
    NSArray *infos = self.debugItems[indexPath.row];
    cell.textLabel.text = infos[1];
    NSString *desc = infos[2];
    if (infos.count>=4) {
        desc = [NSString stringWithFormat:@"%@%@", desc, infos[3]];
    }
    cell.detailTextLabel.text = desc;
    return cell;
}

#pragma mark - table delegate
- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath
{
    return 44;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    NSArray *infos = self.debugItems[indexPath.row];
    NSInteger tag = [infos[0] integerValue];
    switch (tag-1000) {
        case 999:
        {
            // 重载app.js
            NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
            [center postNotificationName:@"kUpdateApp" object:@(999)];
        }
            break;
        case 1000:
        {
            // 热重载app.js，前提是重新编译了
            NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
            [center postNotificationName:@"kUpdateApp" object:@(1000)];
        }
            break;
        case 1001:
        {
            // 热重载app.zip，前提是重新编译了
            NSNotificationCenter *center = [NSNotificationCenter defaultCenter];
            [center postNotificationName:@"kUpdateApp" object:@(1001)];
        }
            break;
        default:
            break;
    }
    
    // 关闭debug页面
    [self hideDebugTable];
}
@end
