//
//  OFBindingTouchInput.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/15.
//

#import "OFBindingEvent.h"

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingTouchInputExport <JSExport>

@property (nonatomic, strong) JSValue *ontouchstart;

@property (nonatomic, strong) JSValue *ontouchend;

@property (nonatomic, strong) JSValue *ontouchmove;

@property (nonatomic, strong) JSValue *ontouchcancel;

@end

@interface OFBindingTouchInput : OFBindingEvent<OFBindingTouchInputExport>

@end

NS_ASSUME_NONNULL_END
