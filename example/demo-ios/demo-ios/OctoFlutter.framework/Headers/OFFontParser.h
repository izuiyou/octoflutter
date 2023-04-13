//
//  OFFontParser.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/14.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFFontModel : NSObject
@property (nonatomic, strong) NSString  *assetPath;//相对路径
@property (nonatomic, assign) int       defaultWeight;//默认字号
@property (nonatomic, strong) NSString  *fontName;//字体名字
@property (nonatomic, strong) NSString  *family;//字体

@end

@interface OFFontParser : NSObject

- (instancetype)initWithEngineKey:(NSString*)engineKey;

@property (nonatomic, strong, readonly) NSDictionary *fontFamilies;//key是family name，value是font model数组

@end

NS_ASSUME_NONNULL_END
