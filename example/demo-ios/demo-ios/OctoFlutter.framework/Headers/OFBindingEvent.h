//
//  OFBindingEvent.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/13.
//

#import "OFBindingObject.h"

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingEventExport <JSExport>

JSExportAs(addEventListener,
- (void)addEventListener:(NSString*)type callback:(JSValue*)callback onoff:(BOOL)onoff
);

JSExportAs(removeEventListener,
- (void)removeEventListener:(NSString*)type callback:(JSValue*)callback onoff:(BOOL)onoff
);

@end

@interface OFBindingEvent : OFBindingObject<OFBindingEventExport>

- (void)setCallbackWithType:(NSString *)type callback:(JSValue*)callback;

- (void)triggerEvent:(NSString *)type properties:(NSArray* _Nullable)properties;

- (void)clear;

@end

NS_ASSUME_NONNULL_END
