//
//  OFBindingWindowSupport.h
//  octoflutter
//
//  Created by Simon Yang on 2022/5/23.
//

#import "OFBindingObject.h"

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingWindowSupportExport <JSExport>

JSExportAs(setTimeout,
- (int)setTimeout:(JSValue*)cb t:(float)t
);

JSExportAs(setInterval,
- (int)setInterval:(JSValue*)cb t:(float)t
);

- (int)clearTimeout:(int)tid;

- (int)clearInterval:(int)tid;

- (int)requestAnimationFrame:(JSValue*)cb;

- (int)cancelAnimationFrame:(int)fid;

- (void)fastTouchEvent:(JSValue*)cb;

@end

@interface OFBindingWindowSupport : OFBindingObject<OFBindingWindowSupportExport>

@end

NS_ASSUME_NONNULL_END
