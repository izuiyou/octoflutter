//
//  OFAppContainerController.h
//  octoflutter-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <UIKit/UIKit.h>

@class OFAppInfo;
@interface OFAppContainerController : UIViewController

- (instancetype)initWithAppInfo:(OFAppInfo*)ai;

- (instancetype)initWithMockUrl:(NSString*)url;

- (void)setInterfaceOrientation:(UIInterfaceOrientation)orientation;
@end
