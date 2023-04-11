//
//  OFEventChannel.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol OFBinaryMessengerProtocol;
@protocol OFMethodCodec;

@class OFError;

/**
 * An event sink callback.
 *
 * @param event The event.
 */
typedef void (^OFEventSink)(id _Nullable event);

/**
 * A strategy for exposing an event stream to the Flutter side.
 */
@protocol OFStreamHandler
/**
 * Sets up an event stream and begin emitting events.
 *
 * Invoked when the first listener is registered with the Stream associated to
 * this channel on the Flutter side.
 *
 * @param arguments Arguments for the stream.
 * @param events A callback to asynchronously emit events. Invoke the
 *     callback with a `OFError` to emit an error event. Invoke the
 *     callback with `OFEndOfEventStream` to indicate that no more
 *     events will be emitted. Any other value, including `nil` are emitted as
 *     successful events.
 * @return A OFError instance, if setup fails.
 */
- (OFError* _Nullable)onListenWithArguments:(id _Nullable)arguments
                                       eventSink:(OFEventSink)events;

/**
 * Tears down an event stream.
 *
 * Invoked when the last listener is deregistered from the Stream associated to
 * this channel on the Flutter side.
 *
 * The channel implementation may call this method with `nil` arguments
 * to separate a pair of two consecutive set up requests. Such request pairs
 * may occur during OF hot restart.
 *
 * @param arguments Arguments for the stream.
 * @return A OFError instance, if teardown fails.
 */
- (OFError* _Nullable)onCancelWithArguments:(id _Nullable)arguments;
@end

/**
 * A constant used with `OFEventChannel` to indicate end of stream.
 */
extern NSString * const OFEndOfEventStream;

/**
 * A channel for communicating with the Flutter side using event streams.
 */
@interface OFEventChannel : NSObject
/**
 * Creates a `OFEventChannel` with the specified name and binary messenger.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `OFViewController`.
 *
 * The channel uses `OFStandardMethodCodec` to decode stream setup and
 * teardown requests, and to encode event envelopes.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 */
+ (instancetype)eventChannelWithName:(NSString*)name
                     binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger;

/**
 * Creates a `OFEventChannel` with the specified name, binary messenger,
 * and method codec.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `OFViewController`.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 * @param codec The method codec.
 */
+ (instancetype)eventChannelWithName:(NSString*)name
                     binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger
                               codec:(NSObject<OFMethodCodec>*)codec;

/**
 * Initializes a `OFEventChannel` with the specified name, binary messenger,
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
             binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger
                       codec:(NSObject<OFMethodCodec>*)codec;
/**
 * Registers a handler for stream setup requests from the Flutter side.
 *
 * Replaces any existing handler. Use a `nil` handler for unregistering the
 * existing handler.
 *
 * @param handler The stream handler.
 */
- (void)setStreamHandler:(NSObject<OFStreamHandler>* _Nullable)handler;
@end

NS_ASSUME_NONNULL_END
