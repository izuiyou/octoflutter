//
//  OFError.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * Error object representing an unsuccessful outcome of invoking a method
 * on a `OFMethodChannel`, or an error event on a `OFEventChannel`.
 */
@interface OFError : NSObject
/**
 * Creates a `OFError` with the specified error code, message, and details.
 *
 * @param code An error code string for programmatic use.
 * @param message A human-readable error message.
 * @param details Custom error details.
 */
+ (instancetype)errorWithCode:(NSString*)code
                      message:(NSString* _Nullable)message
                      details:(id _Nullable)details;
/**
 The error code.
 */
@property(readonly, nonatomic) NSString* code;

/**
 The error message.
 */
@property(readonly, nonatomic, nullable) NSString* message;

/**
 The error details.
 */
@property(readonly, nonatomic, nullable) id details;
@end

NS_ASSUME_NONNULL_END
