//
//  OFBinaryCodec.h
//  octoflutter
//
//  Created by Simon Yang on 2021/10/29.
//

#import <Foundation/Foundation.h>
#import "OFCodec.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * A `OFMessageCodec` using unencoded binary messages, represented as
 * `NSData` instances.
 *
 * This codec is guaranteed to be compatible with the corresponding
 * [BinaryCodec](https://api.flutter.dev/flutter/services/BinaryCodec-class.html)
 * on the Dart side. These parts of the Flutter SDK are evolved synchronously.
 *
 * On the Dart side, messages are represented using `ByteData`.
 */
@interface OFBinaryCodec : NSObject<OFMessageCodec>

@end

NS_ASSUME_NONNULL_END
