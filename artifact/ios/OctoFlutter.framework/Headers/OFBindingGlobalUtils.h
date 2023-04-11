//
//  OFBindingGlobalUtils.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/9.
//

#import "OFBindingObject.h"

NS_ASSUME_NONNULL_BEGIN

@protocol OFBindingGlobalUtilsExport <JSExport>

@property (nonatomic, assign) float devicePixelRatio;

@property (nonatomic, assign) float screenWidth;
@property (nonatomic, assign) float screenHeight;

@property (nonatomic, assign) float orientation;

@property (nonatomic, strong) NSString *language;

@property (nonatomic, strong) NSString *userAgent;

@property (nonatomic, strong) NSString *appVersion;

@property (nonatomic, strong) NSString *platform;

@property (nonatomic, assign) BOOL     onLine;

@property (nonatomic, assign) BOOL     iOS10Available;

- (double)performanceNow;
- (double)secondTimestamp;

- (void)log:(NSString*)str;

JSExportAs(setTimeout,
- (int)setTimeout:(JSValue*)cb t:(float)t
);

JSExportAs(setInterval,
- (int)setInterval:(JSValue*)cb t:(float)t
);

- (int)clearTimeout:(int)tid;

- (int)clearInterval:(int)tid;

- (void)stopAllTimer;

- (int)requestAnimationFrame:(JSValue*)cb;
- (int)cancelAnimationFrame:(int)tid;

- (void)load:(NSString*)src;
- (void)include:(NSString*)src;

- (void)loadJsApp;
JSExportAs(invokePlatform,
- (void)invokePlatform:(NSString*)data buffer:(NSArray*)buffer limit:(int)limit
);
- (void)binaryMessenger:(JSValue*)callback;

JSExportAs(requireModule,
- (void)requireModule:(NSString*)moduleId module:(NSDictionary*)module exports:(NSDictionary*)exports
);

JSExportAs(openURL,
- (void)open:(NSString*)url name:(NSString*)name
);

JSExportAs(fetchImageData,
- (void)fetchImageData:(int)bid src:(NSString*)src width:(int)width height:(int)height local:(BOOL)local headers:(NSString*)headers callback:(JSValue*)callback
);

- (NSArray*)encodeString:(NSString*)str;

JSExportAs(saveImageToFile,
- (void)saveImageToFile:(NSString*)name width:(int)width height:(int)height bytes:(NSArray*)bytes limit:(int)limit callback:(JSValue*)callback
);

- (NSString*)currentEngineKey;

- (void)appEnvironmentReady;

- (void)shutApp:(int)bid;

- (void)launchApp:(int)bid;

- (void)fastTouchEvent:(JSValue*)cb;

JSExportAs(dartDeferredLibraryLoader,
- (void)dartDeferredLibraryLoader:(NSString*)uri successCallback:(JSValue*)successCallback errorCallback:(JSValue*)errorCallback loadId:(NSString*)loadId
);

@end

@interface OFBindingGlobalUtils : OFBindingObject<OFBindingGlobalUtilsExport>

@end

NS_ASSUME_NONNULL_END
