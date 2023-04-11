//
//  OFCodec.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@class OFMethodCall;
@class OFError;

/*
 OFMethodCodec和OFMessageCodec
 前者在encode和decode methodcall时依赖后者的encode、decode
 前者处理methodcall层面，后者处理数据编解码层面
 */

/**
 * A codec for method calls and enveloped results.
 *
 * Method calls are encoded as binary messages with enough structure that the
 * codec can extract a method name `NSString` and an arguments `NSObject`,
 * possibly `nil`. These data items are used to populate a `OFMethodCall`.
 *
 * Result envelopes are encoded as binary messages with enough structure that
 * the codec can determine whether the result was successful or an error. In
 * the former case, the codec can extract the result `NSObject`, possibly `nil`.
 * In the latter case, the codec can extract an error code `NSString`, a
 * human-readable `NSString` error message (possibly `nil`), and a custom
 * error details `NSObject`, possibly `nil`. These data items are used to
 * populate a `OFError`.
 */
@protocol OFMethodCodec
/**
 * Provides access to a shared instance this codec.
 *
 * @return The shared instance.
 */
+ (instancetype)sharedInstance;

/**
 * Encodes the specified method call into binary.
 *
 * @param methodCall The method call. The arguments value
 *   must be supported by this codec.
 * @return The binary encoding.
 */
- (NSData*)encodeMethodCall:(OFMethodCall*)methodCall;

/**
 * Decodes the specified method call from binary.
 *
 * @param methodCall The method call to decode.
 * @return The decoded method call.
 */
- (OFMethodCall*)decodeMethodCall:(NSData*)methodCall;

/**
 * Encodes the specified successful result into binary.
 *
 * @param result The result. Must be a value supported by this codec.
 * @return The binary encoding.
 */
- (NSData*)encodeSuccessEnvelope:(id _Nullable)result;

/**
 * Encodes the specified error result into binary.
 *
 * @param error The error object. The error details value must be supported
 *   by this codec.
 * @return The binary encoding.
 */
- (NSData*)encodeErrorEnvelope:(OFError*)error;

/**
 * Deccodes the specified result envelope from binary.
 *
 * @param envelope The error object.
 * @return The result value, if the envelope represented a successful result,
 *   or a `OFError` instance, if not.
 */
- (id _Nullable)decodeEnvelope:(NSData*)envelope;
@end

//----------------------------------------end of OFMethodCodec

/**
 * A message encoding/decoding mechanism.
 */
@protocol OFMessageCodec
/**
 * Returns a shared instance of this `OFMessageCodec`.
 */
+ (instancetype)sharedInstance;

/**
 * Encodes the specified message into binary.
 *
 * @param message The message.
 * @return The binary encoding, or `nil`, if `message` was `nil`.
 */
- (NSData* _Nullable)encode:(id _Nullable)message;

/**
 * Decodes the specified message from binary.
 *
 * @param message The message.
 * @return The decoded message, or `nil`, if `message` was `nil`.
 */
- (id _Nullable)decode:(NSData* _Nullable)message;
@end

//----------------------------------------end of OFMessageCodec

@interface OFCodec : NSObject

@end

//----------------------------------------end of OFCodec

NS_ASSUME_NONNULL_END
