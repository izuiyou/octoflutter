//
//  OFPlatformViewsProtocol.h
//  Pods
//
//  Created by Simon Yang on 2023/2/22.
//

#ifndef OFPlatformViewsProtocol_h
#define OFPlatformViewsProtocol_h

#import <UIKit/UIKit.h>
#import "OFCodec.h"

NS_ASSUME_NONNULL_BEGIN

/**
 * How the UIGestureRecognizers of a platform view are blocked.
 *
 * UIGestureRecognizers of platform views can be blocked based on decisions made by the
 * Flutter Framework (e.g. When an interact-able widget is covering the platform view).
 */
typedef enum {
  /**
   * Flutter blocks all the UIGestureRecognizers on the platform view as soon as it
   * decides they should be blocked.
   *
   * With this policy, only the `touchesBegan` method for all the UIGestureRecognizers is guaranteed
   * to be called.
   */
  OFPlatformViewGestureRecognizersBlockingPolicyEager,
  /**
   * Flutter blocks the platform view's UIGestureRecognizers from recognizing only after
   * touchesEnded was invoked.
   *
   * This results in the platform view's UIGestureRecognizers seeing the entire touch sequence,
   * but never recognizing the gesture (and never invoking actions).
   */
  OFPlatformViewGestureRecognizersBlockingPolicyWaitUntilTouchesEnded,

} OFPlatformViewGestureRecognizersBlockingPolicy;

/**
 * Wraps a `UIView` for embedding in the OF hierarchy
 */
@protocol OFPlatformView <NSObject>
/**
 * Returns a reference to the `UIView` that is wrapped by this `OFPlatformView`.
 */
- (UIView*)view;
@end

@class OFAppEngine;
@protocol OFPlatformViewFactory <NSObject>
/**
 * Create a `OFPlatformView`.
 *
 * Implemented by iOS code that expose a `UIView` for embedding in a OF app.
 *
 * The implementation of this method should create a new `UIView` and return it.
 *
 * @param frame The rectangle for the newly created `UIView` measured in points.
 * @param viewId A unique identifier for this `UIView`.
 * @param args Parameters for creating the `UIView` sent from the Dart side of the OF app.
 *   If `createArgsCodec` is not implemented, or if no creation arguments were sent from the Dart
 *   code, this will be null. Otherwise this will be the value sent from the Dart code as decoded by
 *   `createArgsCodec`.
 */
- (NSObject<OFPlatformView>*)createWithFrame:(CGRect)frame
                              viewIdentifier:(int64_t)viewId
                                   arguments:(id _Nullable)args;

/**
 * Returns the `OFMessageCodec` for decoding the args parameter of `createWithFrame`.
 *
 * Only needs to be implemented if `createWithFrame` needs an arguments parameter.
 */
@optional
- (NSObject<OFMessageCodec>*)createArgsCodec;

- (void)setup:(OFAppEngine*)engine bid:(int)bid factoryId:(NSString*)factoryId;
@end

NS_ASSUME_NONNULL_END

#endif /* OFPlatformViewsProtocol_h */
