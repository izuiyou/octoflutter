//
//  OFJSONMessageCodec.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>
#import "OFCodec.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * A `OFMessageCodec` using UTF-8 encoded JSON messages.
 *
 * This codec is guaranteed to be compatible with the corresponding
 * [JSONMessageCodec](https://api.flutter.dev/flutter/services/JSONMessageCodec-class.html)
 * on the Dart side. These parts of the Flutter SDK are evolved synchronously.
 *
 * Supports values accepted by `NSJSONSerialization` plus top-level
 * `nil`, `NSNumber`, and `NSString`.
 *
 * On the Dart side, JSON messages are handled by the JSON facilities of the
 * [`dart:convert`](https://api.dartlang.org/stable/dart-convert/JSON-constant.html)
 * package.
 */
@interface OFJSONMessageCodec : NSObject<OFMessageCodec>

@end

NS_ASSUME_NONNULL_END
