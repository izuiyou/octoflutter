//
//  OFPlatformViewTest.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/17.
//

#import <OctoFlutter/OctoFlutter.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFPlatformViewTest : NSObject<OFPlatformView>

- (instancetype)initWithFrame:(CGRect)frame
               viewIdentifier:(int64_t)viewId
                    arguments:(id _Nullable)args
                  removeBlock:(void (^)(int64_t viewId))removeBlock;

@end

NS_ASSUME_NONNULL_END
