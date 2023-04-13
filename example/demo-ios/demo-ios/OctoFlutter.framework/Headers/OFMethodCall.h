//
//  OFMethodCall.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * Command object representing a method call on a `OFMethodChannel`.
 */
@interface OFMethodCall : NSObject
/**
 * Creates a method call for invoking the specified named method with the
 * specified arguments.
 *
 * @param method the name of the method to call.
 * @param arguments the arguments value.
 */
+ (instancetype)methodCallWithMethodName:(NSString*)method arguments:(id _Nullable)arguments;

/**
 * The method name.
 */
@property(readonly, nonatomic) NSString* method;

/**
 * The arguments.
 */
@property(readonly, nonatomic, nullable) id arguments;

/**
 arguments类型为NSDictionary时，判断其是否存在某个名称的属性
 */
- (BOOL)dicArgsHasValue:(NSString*)name;

- (void)testArguments:(id _Nullable)arguments;
@end

NS_ASSUME_NONNULL_END
