//
//  OFJSContext.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/9.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFJSContext : NSObject

// 使用库中存在的其它JS
@property (nonatomic, strong) NSArray<NSString*>  *exLocalJS;
// 使用用户提供的JS
@property (nonatomic, strong) NSArray<NSString*>  *exCustomJS;
// 使用framework与业务合并后的JS；默认false
@property (nonatomic, assign) BOOL  useFullExportedJS;

- (instancetype)initWithEngineKey:(NSString*)engineKey;

- (void)setup;

- (void)clear;

- (void)callJSMethod:(NSString*)method args:(NSArray*)args;

- (void)loadAppScriptAtPath:(NSString *)path;

- (JSValue*)convertJsonString:(NSString*)jsonString;

- (JSValue*)convertArrayData:(NSData*)data;
- (JSValue*)convertArrayBufferData:(NSData*)data;
- (JSValue*)convertArrayBytes:(uint8_t*)bytes length:(int)length;
- (JSValue*)convertFloat32Array:(NSArray*)array;

- (void)addManagedReference:(id)object withOwner:(id)owner;

- (void)removeManagedReference:(id)object withOwner:(id)owner;

#pragma mark - script

- (NSString*)scriptForFileName:(NSString*)fileName inFolder:(NSString*)folder;

- (void)evaluateScript:(NSString *)script;

- (void)evaluateScript:(NSString *)script sourceURL:(nullable NSString *)sourceURL;

#pragma mark - 辅助

- (void)markEvaluatedJSPath:(NSString*)path;

- (BOOL)jsPathEvaluated:(NSString*)path;
@end

NS_ASSUME_NONNULL_END
