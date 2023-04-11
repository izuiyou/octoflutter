//
//  OFBasicMessageChannel.h
//  octoflutter
//
//  Created by Simon Yang on 2021/9/10.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@protocol OFBinaryMessengerProtocol;
@protocol OFMessageCodec;

/**
 * A message reply callback.
 *
 * Used for submitting a reply back to a Flutter message sender. Also used in
 * the dual capacity for handling a message reply received from Flutter.
 *
 * @param reply The reply.
 */
typedef void (^OFReply)(id _Nullable reply);

/**
 * A strategy for handling incoming messages from Flutter and to send
 * asynchronous replies back to Flutter.
 *
 * @param message The message.
 * @param callback A callback for submitting a reply to the sender.
 */
typedef void (^OFMessageHandler)(id _Nullable message, OFReply callback);

/**
 * A channel for communicating with the Flutter side using basic, asynchronous
 * message passing.
 */
@interface OFBasicMessageChannel : NSObject
/**
 * Creates a `OFBasicMessageChannel` with the specified name and binary
 * messenger.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `FlutterEngine` and `FlutterViewController`.
 *
 * The channel uses `OFStandardMessageCodec` to encode and decode messages.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 */
+ (instancetype)messageChannelWithName:(NSString*)name
                       binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger;

/**
 * Creates a `OFBasicMessageChannel` with the specified name, binary
 * messenger, and message codec.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `FlutterEngine` and `FlutterViewController`.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 * @param codec The message codec.
 */
+ (instancetype)messageChannelWithName:(NSString*)name
                       binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger
                                 codec:(NSObject<OFMessageCodec>*)codec;

/**
 * Initializes a `OFBasicMessageChannel` with the specified name, binary
 * messenger, and message codec.
 *
 * The channel name logically identifies the channel; identically named channels
 * interfere with each other's communication.
 *
 * The binary messenger is a facility for sending raw, binary messages to the
 * Flutter side. This protocol is implemented by `FlutterEngine` and `FlutterViewController`.
 *
 * @param name The channel name.
 * @param messenger The binary messenger.
 * @param codec The message codec.
 */
- (instancetype)initWithName:(NSString*)name
             binaryMessenger:(NSObject<OFBinaryMessengerProtocol>*)messenger
                       codec:(NSObject<OFMessageCodec>*)codec;

/**
 * Sends the specified message to the Flutter side, ignoring any reply.
 *
 * @param message The message. Must be supported by the codec of this
 * channel.
 */
- (void)sendMessage:(id _Nullable)message;

/**
 * Sends the specified message to the Flutter side, expecting an asynchronous
 * reply.
 *
 * @param message The message. Must be supported by the codec of this channel.
 * @param callback A callback to be invoked with the message reply from Flutter.
 */
- (void)sendMessage:(id _Nullable)message reply:(OFReply _Nullable)callback;

/**
 * Registers a message handler with this channel.
 *
 * Replaces any existing handler. Use a `nil` handler for unregistering the
 * existing handler.
 *
 * @param handler The message handler.
 */
- (void)setMessageHandler:(OFMessageHandler _Nullable)handler;

/**
 * Adjusts the number of messages that will get buffered when sending messages to
 * channels that aren't fully set up yet.  For example, the engine isn't running
 * yet or the channel's message handler isn't set up on the Dart side yet.
 */
- (void)resizeChannelBuffer:(NSInteger)newSize;

@end

NS_ASSUME_NONNULL_END
