//
//  OFUtils.h
//  octoflutter
//
//  Created by Simon Yang on 2021/7/29.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface OFUtils : NSObject

+ (NSString*)stringFromDic:(NSDictionary*)dic;

+ (NSDictionary *)dicFromString:(NSString *)json;

+ (UIColor*)colorFromFlutterInt:(NSInteger)fltValue;

+ (UIViewController *)topCurrentViewController;

+ (void)showAlert:(NSString*)msg;

+ (NSData*)arrayToData:(NSArray*)array;

+ (void)logTime:(NSString*)text;

@end

NS_ASSUME_NONNULL_END
