//
//  OFBindingWindowEvents.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/31.
//

#import "OFBindingEvent.h"

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingWindowEventsExport <JSExport>

@property (nonatomic, strong) JSValue *onpagehide;

@property (nonatomic, strong) JSValue *onpageshow;

@property (nonatomic, strong) JSValue *onresize;

@end

@interface OFBindingWindowEvents : OFBindingEvent<OFBindingWindowEventsExport>

- (void)triggerResize;
@end

NS_ASSUME_NONNULL_END
