//
//  OFViewportMetrics.h
//  octoflutter
//
//  Created by Simon Yang on 2021/9/17.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFViewportMetrics : NSObject

@property (nonatomic, assign) double device_pixel_ratio;
@property (nonatomic, assign) double physical_width;
@property (nonatomic, assign) double physical_height;
@property (nonatomic, assign) double physical_padding_top;
@property (nonatomic, assign) double physical_padding_right;
@property (nonatomic, assign) double physical_padding_bottom;
@property (nonatomic, assign) double physical_padding_left;
@property (nonatomic, assign) double physical_view_inset_top;
@property (nonatomic, assign) double physical_view_inset_right;
@property (nonatomic, assign) double physical_view_inset_bottom;
@property (nonatomic, assign) double physical_view_inset_left;
@property (nonatomic, assign) double physical_system_gesture_inset_top;
@property (nonatomic, assign) double physical_system_gesture_inset_right;
@property (nonatomic, assign) double physical_system_gesture_inset_bottom;
@property (nonatomic, assign) double physical_system_gesture_inset_left;
@property (nonatomic, assign) double physical_touch_slop;

@end

NS_ASSUME_NONNULL_END
