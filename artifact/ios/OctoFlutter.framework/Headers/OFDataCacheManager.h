//
//  OFDataCacheManager.h
//  octoflutter
//
//  Created by Simon Yang on 2021/9/13.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSUInteger, OFDataCacheType) {
    OFDataCacheTypeNone,
    OFDataCacheTypeMemory,
    OFDataCacheTypeDisk
};

@interface OFDataCacheManager : NSObject

+ (instancetype)shareManager;

#pragma mark - query local data
- (void)syncQueryLocalDataForKey:(NSString *)key path:(NSString*)path completionBlock:(void(^)(NSData * _Nullable, OFDataCacheType))completionBlock;

- (void)asyncQueryLocalDataForKey:(NSString *)key path:(NSString*)path completionBlock:(void(^)(NSData * _Nullable, OFDataCacheType))completionBlock;

#pragma mark - query network data
- (void)syncQueryNetworkDataForKey:(NSString *)key completionBlock:(void(^)(NSData * _Nullable, OFDataCacheType))completionBlock;

- (void)asyncQueryNetworkDataForKey:(NSString *)key completionBlock:(void(^)(NSData * _Nullable, OFDataCacheType))completionBlock;

#pragma mark -
- (void)storeData:(NSData *_Nullable)data forKey:(NSString *)key;

- (void)clearMemoryCache;
- (void)clearMemoryCacheForKeys:(NSArray*)keys;

- (void)removeCachedFileForUrl:(NSString*)url;

- (NSData*)getCacheForUrl:(NSString*)url;
@end

NS_ASSUME_NONNULL_END
