//
//  OFMethodChannel.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol OFBinaryMessengerProtocol;
@protocol OFMethodCodec;

@class OFMethodCall;

/**
 * A method call result callback.
 *
 * Used for submitting a method call result back to a Flutter caller. Also used in
 * the dual capacity for handling a method call result received from Flutter.
 *
 * @param result The result.
 */
typedef void (^OFResult)(id _Nullable result);

/**
 * A strategy for handling method calls.
 *
 * @param call The incoming method call.
 * @param result A callback to asynchronously submit the result of the call.
 *     Invoke the callback with a `OFError` to indicate that the call failed.
 *     Invoke the callback with `OFMethodNotImplemented` to indicate that the
 *     method was unknown. Any other values, including `nil`, are interpreted as
 *     successful results.
 */
typedef void (^OFMethodCallHandler)(OFMethodCall* call, OFResult result);

/**
 * A constant used with `OFMethodCallHandler` to respond to the call of an
 * unknown method.
 */
extern NSString * const OFMethodNotImplemented;

/**
 开发者可以在OFMethodCallHandler中响应method call
 也可以转而调用实现了OFMethodChannelBusiness的类
 */
@protocol OFMethodChannelBusiness

- (void)handleMethodCall:(OFMethodCall*)call result:(OFResult)result;

@end

/**
 * A channel for communicating with the Flutter side using invocation of
 * asynchronous methods.
 */
@interface OFMethodChannel : NSObject
/**
 * Creates a `OFMethodChannel` with the specified name and binary messenger.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `OFEngine` and `OFViewController`.
 *
 * The channel uses `OFStandardMethodCodec` to encode and decode method calls
 * and result envelopes.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 */
+ (instancetype)methodChannelWithName:(NSString*)name
                      binaryMessenger:(NSObject<OFBinaryMessengerProtocol>* _Nullable)messenger;

/**
 * Creates a `OFMethodChannel` with the specified name, binary messenger, and
 * method codec.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `OFEngine` and `OFViewController`.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 * @param codec The method codec.
 */
+ (instancetype)methodChannelWithName:(NSString*)name
                      binaryMessenger:(NSObject<OFBinaryMessengerProtocol>* _Nullable)messenger
                                codec:(NSObject<OFMethodCodec>*)codec;

/**
 * Initializes a `OFMethodChannel` with the specified name, binary messenger,
 * and method codec.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `OFEngine` and `OFViewController`.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 * @param codec The method codec.
 */
- (instancetype)initWithName:(NSString*)name
             binaryMessenger:(NSObject<OFBinaryMessengerProtocol>* _Nullable)messenger
                       codec:(NSObject<OFMethodCodec>*)codec;

// clang-format off
/**
 * Invokes the specified Flutter method with the specified arguments, expecting
 * no results.
 *
 * @see [MethodChannel.setMethodCallHandler](https://api.OF.dev/OF/services/MethodChannel/setMethodCallHandler.html)
 *
 * @param method The name of the method to invoke.
 * @param arguments The arguments. Must be a value supported by the codec of this
 *     channel.
 */
// clang-format on
- (void)invokeMethod:(NSString*)method arguments:(id _Nullable)arguments;

/**
 * Invokes the specified Flutter method with the specified arguments, expecting
 * an asynchronous result.
 *
 * @param method The name of the method to invoke.
 * @param arguments The arguments. Must be a value supported by the codec of this
 *     channel.
 * @param callback A callback that will be invoked with the asynchronous result.
 *     The result will be a `OFError` instance, if the method call resulted
 *     in an error on the Flutter side. Will be `OFMethodNotImplemented`, if
 *     the method called was not implemented on the Flutter side. Any other value,
 *     including `nil`, should be interpreted as successful results.
 */
- (void)invokeMethod:(NSString*)method
           arguments:(id _Nullable)arguments
              result:(OFResult _Nullable)callback;
/**
 * Registers a handler for method calls from the Flutter side.
 *
 * Replaces any existing handler. Use a `nil` handler for unregistering the
 * existing handler.
 *
 * @param handler The method call handler.
 */
- (void)setMethodCallHandler:(OFMethodCallHandler _Nullable)handler;

/**
 * Adjusts the number of messages that will get buffered when sending messages to
 * channels that aren't fully set up yet.  For example, the engine isn't running
 * yet or the channel's message handler isn't set up on the Dart side yet.
 */
- (void)resizeChannelBuffer:(NSInteger)newSize;

@property (nonatomic, strong, readonly) NSString *channelNmae;

- (void)setMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger;
@end

NS_ASSUME_NONNULL_END
