//
//  OFBindingObject.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/9.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

#define kShowJSLog 1

#define kUseVsync 1

//#define kShowBridgeTimeLog 1
//#define kShowCostTimeLog 1

//#define kStatInitDealloc 1
//#define kShowInitLog 1
//#define kShowDeallocLog 1
 
//#define kShowCanvasKitLog 1
//#define kShowCanvasLog 1
//#define kShowRecorderLog 1
//#define kShowSurfaceLog 1
//#define kShowPathLog 1
//#define kShowPaintLog 1
//#define kShowParagraphLog 1
//#define kShowParagraphBuilderLog 1
//#define kShowInputLog 1
//#define kShowXHRLog 1
//#define kShowImageLog 1
//#define kShowAImageLog 1

#ifdef kShowBridgeTimeLog
#define BTLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define BTLog(format, ...)
#endif

#ifdef kShowCostTimeLog
#define CTLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define CTLog(format, ...)
#endif

#ifdef kShowDeallocLog
#define DLLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define DLLog(format, ...)
#endif

#ifdef kShowInitLog
#define InitLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define InitLog(format, ...)
#endif

#ifdef kShowCanvasKitLog
#define CKLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define CKLog(format, ...)
#endif

#ifdef kShowCanvasLog
#define CanvasLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define CanvasLog(format, ...)
#endif

#ifdef kShowRecorderLog
#define RecorderLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define RecorderLog(format, ...)
#endif

#ifdef kShowSurfaceLog
#define SurfaceLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define SurfaceLog(format, ...)
#endif

#ifdef kShowPathLog
#define PathLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define PathLog(format, ...) //[OFBindingObject StatLog:format, ## __VA_ARGS__]
#endif

#ifdef kShowPaintLog
#define PaintLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define PaintLog(format, ...)
#endif

#ifdef kShowInputLog
#define InputLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define InputLog(format, ...)
#endif

#ifdef kShowParagraphLog
#define PrgLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define PrgLog(format, ...)
#endif

#ifdef kShowParagraphBuilderLog
#define PrgBLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define PrgBLog(format, ...)
#endif

#ifdef kShowXHRLog
#define XHRLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define XHRLog(format, ...)
#endif

#ifdef kShowImageLog
#define ImageLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define ImageLog(format, ...)
#endif

#ifdef kShowAImageLog
#define AImageLog(format, ...) NSLog(format, ## __VA_ARGS__)
#else
#define AImageLog(format, ...)
#endif

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingObjectExport <JSExport>

@property (nonatomic, strong) NSString *engineKey;

- (instancetype)init;

+ (id)create;

- (BOOL)isDeleted;

- (void)delete;

@end

@class OFAppEngine;
@interface OFBindingObject : NSObject<OFBindingObjectExport>

+ (void)StatLog:(NSString *)format, ...;

@property (nonatomic, weak) OFAppEngine *appEngine;

@property (nonatomic, strong) NSString *tag;
@end

// OFBindingSkFillType.mm可以看到这个宏的具体样子
#define BIND_ENUM_VALUE(clsname, propname, value)       \
@synthesize propname;                                   \
- (clsname *)propname {                                 \
    if (!propname) {                                    \
        propname = [clsname makeEnumValue:(int)value];  \
    }                                                   \
    return propname;                                    \
}

#define BIND_PROP_GETTER(clsname, propname)             \
@synthesize propname;                                   \
- (clsname *)propname {                                 \
    if (!propname) {                                    \
        propname = [[clsname alloc] init];              \
        propname.engineKey = self.engineKey;            \
    }                                                   \
    return propname;                                    \
}

@protocol OFBindingEnumValueExport <JSExport>

@property (nonatomic, assign) int value;

@end

@interface OFBindingEnumValue : OFBindingObject<OFBindingEnumValueExport>

+ (id)makeEnumValue:(int)value;
@end

NS_ASSUME_NONNULL_END
