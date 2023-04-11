//
//  OFSkiaView.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/9.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN
@class OFGLContext;
@class OFAppBundleIsolate;
@interface OFSkiaView : UIView

- (instancetype)initWithFrame:(CGRect)frame isolate:(OFAppBundleIsolate*)isolate;

- (void)setup;

- (void)refresh;

- (void)clear;

- (void)updateIsolate:(OFAppBundleIsolate*)isolate;

@end

NS_ASSUME_NONNULL_END
