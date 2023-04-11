//
//  OFStandardMessageCodec.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/1.
//

#import <Foundation/Foundation.h>
#import "OFCodec.h"

NS_ASSUME_NONNULL_BEGIN

@class OFStandardReaderWriter;

/**
 * A `OFMessageCodec` using the Flutter standard binary encoding.
 *
 * This codec is guaranteed to be compatible with the corresponding
 * [StandardMessageCodec](https://api.flutter.dev/flutter/services/StandardMessageCodec-class.html)
 * on the Dart side. These parts of the Flutter SDK are evolved synchronously.
 *
 * Supported messages are acyclic values of these forms:
 *
 * - `nil` or `NSNull`
 * - `NSNumber` (including their representation of Boolean values)
 * - `NSString`
 * - `FlutterStandardTypedData`
 * - `NSArray` of supported values
 * - `NSDictionary` with supported keys and values
 *
 * On the Dart side, these values are represented as follows:
 *
 * - `nil` or `NSNull`: null
 * - `NSNumber`: `bool`, `int`, or `double`, depending on the contained value.
 * - `NSString`: `String`
 * - `FlutterStandardTypedData`: `Uint8List`, `Int32List`, `Int64List`, or `Float64List`
 * - `NSArray`: `List`
 * - `NSDictionary`: `Map`
 */
@interface OFStandardMessageCodec : NSObject <OFMessageCodec>
/**
 * Create a `FlutterStandardMessageCodec` who will read and write to \p readerWriter.
 */
+ (instancetype)codecWithReaderWriter:(OFStandardReaderWriter*)readerWriter;
@end

NS_ASSUME_NONNULL_END
