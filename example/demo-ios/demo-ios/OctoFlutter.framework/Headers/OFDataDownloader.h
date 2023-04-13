//
//  OFDataDownloader.h
//  octoflutter
//
//  Created by Simon Yang on 2021/9/13.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFDataDownloader : NSObject

+ (instancetype)shareInstance;

- (void)fetchDataWithURL:(NSString *)url completion:(void(^)(NSData * _Nullable data, NSError * _Nullable error))completionBlock;

@end

NS_ASSUME_NONNULL_END
