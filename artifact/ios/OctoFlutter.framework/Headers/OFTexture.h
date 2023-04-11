//
//  OFTexture.h
//  Pods
//
//  Created by Simon Yang on 2022/1/14.
//

#import <CoreVideo/CoreVideo.h>

#ifndef OFTexture_h
#define OFTexture_h

/**
 * Represents a texture that can be shared with Flutter.
 *
 * See also: https://github.com/flutter/plugins/tree/master/packages/camera
 */
@protocol OFTextureProtocol <NSObject>
/** Copy the contents of the texture into a `CVPixelBuffer`. */
- (CVPixelBufferRef _Nullable)copyPixelBuffer;

/**
 * Called when the texture is unregistered.
 *
 * Called on the raster thread.
 */
@optional
- (void)onTextureUnregistered:(NSObject<OFTextureProtocol>*_Nonnull)texture;
@end

//-------------------------------------------

/**
 * A collection of registered `OFTexture`'s.
 */
@protocol OFTextureRegistryProtocol <NSObject>
/**
 * Registers a `OFTexture` for usage in Flutter and returns an id that can be used to reference
 * that texture when calling into Flutter with channels. Textures must be registered on the
 * platform thread. On success returns the pointer to the registered texture, else returns 0.
 */
- (int64_t)registerTexture:(NSObject<OFTextureProtocol>*_Nonnull)texture;
/**
 * Notifies Flutter that the content of the previously registered texture has been updated.
 *
 * This will trigger a call to `-[OFTexture copyPixelBuffer]` on the raster thread.
 */
- (void)textureFrameAvailable:(int64_t)textureId;
/**
 * Unregisters a `OFTexture` that has previously regeistered with `registerTexture:`. Textures
 * must be unregistered on the the platform thread.
 *
 * @param textureId The result that was previously returned from `registerTexture:`.
 */
- (void)unregisterTexture:(int64_t)textureId;

@end

#endif /* OFTexture_h */
