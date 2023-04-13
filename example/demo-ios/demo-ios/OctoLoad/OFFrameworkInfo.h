//
//  OFFrameworkInfo.h
//  demo-ios
//
//  Created by Simon Yang on 2023/3/15.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFFrameworkInfo : NSObject

// 源数据
@property (nonatomic, assign) int engineVersion;
@property (nonatomic, assign) int frameworkVersion;
@property (nonatomic, strong) NSString *url;
@property (nonatomic, strong) NSString *md5;

// 辅助数据
@property (nonatomic, strong) NSString *frameworkFolder;

@end

NS_ASSUME_NONNULL_END
