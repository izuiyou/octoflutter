//
//  OFAppContainerController.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <UIKit/UIKit.h>

@class OFAppInfo;
@interface OFAppContainerController : UIViewController

@property (nonatomic, strong) UIColor *bgColor;
@property (nonatomic, strong) NSString *route;
@property (nonatomic, strong) NSString *args;

- (instancetype)initWithAppInfo:(OFAppInfo*)ai;

- (instancetype)initWithMockUrl:(NSString*)url;

- (void)setInterfaceOrientation:(UIInterfaceOrientation)orientation;

@end
