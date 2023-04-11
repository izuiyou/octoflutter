//
//  OFBinaryMessenger.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

NS_ASSUME_NONNULL_BEGIN

/**
 * A message reply callback.
 *
 * Used for submitting a binary reply back to a Flutter message sender. Also used
 * in for handling a binary message reply received from Flutter.
 *
 * @param reply The reply.
 */
typedef void (^OFBinaryReply)(NSData* _Nullable reply);

/**
 * A strategy for handling incoming binary messages from Flutter and to send
 * asynchronous replies back to Flutter.
 *
 * @param message The message.
 * @param reply A callback for submitting an asynchronous reply to the sender.
 */
typedef void (^OFBinaryMessageHandler)(NSData* _Nullable message, _Nullable OFBinaryReply reply);

/**
 * messenger的关键方法
 */
@protocol OFBinaryMessengerProtocol <NSObject>
/**
 * Sends a binary message to the Flutter side on the specified channel, expecting
 * no reply.
 *
 * @param channel The channel name.
 * @param message The message.
 */
- (void)sendOnChannel:(NSString*)channel message:(NSData* _Nullable)message;

/**
 * Sends a binary message to the Flutter side on the specified channel, expecting
 * an asynchronous reply.
 *
 * @param channel The channel name.
 * @param message The message.
 * @param callback A callback for receiving a reply.
 */
- (void)sendOnChannel:(NSString*)channel
              message:(NSData* _Nullable)message
          binaryReply:(OFBinaryReply _Nullable)callback;

/**
 * Registers a message handler for incoming binary messages from the Flutter side
 * on the specified channel.
 *
 * Replaces any existing handler. Use a `nil` handler for unregistering the
 * existing handler.
 *
 * @param channel The channel name.
 * @param handler The message handler.
 */
- (int)setMessageHandlerOnChannel:(NSString*)channel
                                          binaryMessageHandler:
                                              (OFBinaryMessageHandler _Nullable)handler;

/**
 * Clears out a channel's message handler if that handler is still the one that
 * was created as a result of
 * `setMessageHandlerOnChannel:binaryMessageHandler:`.
 *
 * @param connection The result from `setMessageHandlerOnChannel:binaryMessageHandler:`.
 */
- (void)cleanupConnection:(int)connection;

/**
 * 设置JSValue回调，会通过它调用JS代码进行通信
 * 这个回调的参数：String data, ByteBuffer buffer, int limit
 */
- (void)setMessengerCallback:(JSValue*)callback;

/**
 * 接收flutter端的消息并处理
 */
- (void)onMessage:(NSString*)data buffer:(NSArray*)buffer limit:(int)limit;

@optional
- (void)resizeChannelBuffer:(NSString*)channel newSize:(NSInteger)newSize;

@end

@interface OFBinaryMessenger : NSObject<OFBinaryMessengerProtocol>

- (instancetype)initWithEngineKey:(NSString*)engineKey;

- (void)clear;

#pragma mark - test
- (void)testMessageOnChannel:(NSString*)channel rid:(int)rid method:(NSString*)method args:(id)args;

@end

NS_ASSUME_NONNULL_END
