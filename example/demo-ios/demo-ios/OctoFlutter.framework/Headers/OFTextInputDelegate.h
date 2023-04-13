//
//  OFTextInputDelegate.h
//  Pods
//
//  Created by Simon Yang on 2021/9/16.
//

#ifndef OFTextInputDelegate_h
#define OFTextInputDelegate_h

#import "OFUIPressProxy.h"

typedef NS_ENUM(NSInteger, OFTextInputAction) {
  OFTextInputActionUnspecified,
  OFTextInputActionDone,
  OFTextInputActionGo,
  OFTextInputActionSend,
  OFTextInputActionSearch,
  OFTextInputActionNext,
  OFTextInputActionContinue,
  OFTextInputActionJoin,
  OFTextInputActionRoute,
  OFTextInputActionEmergencyCall,
  OFTextInputActionNewline,
};

typedef NS_ENUM(NSInteger, OFFloatingCursorDragState) {
  OFFloatingCursorDragStateStart,
  OFFloatingCursorDragStateUpdate,
  OFFloatingCursorDragStateEnd,
};

@class OFTextInputView;
@protocol OFTextInputDelegate <NSObject>
- (void)ofTextInputView:(OFTextInputView*)textInputView
         updateEditingClient:(int)client
                   withState:(NSDictionary*)state;
- (void)ofTextInputView:(OFTextInputView*)textInputView
         updateEditingClient:(int)client
                   withState:(NSDictionary*)state
                     withTag:(NSString*)tag;
- (void)ofTextInputView:(OFTextInputView*)textInputView
         updateEditingClient:(int)client
                   withDelta:(NSDictionary*)state;
- (void)ofTextInputView:(OFTextInputView*)textInputView
               performAction:(OFTextInputAction)action
                  withClient:(int)client;
- (void)ofTextInputView:(OFTextInputView*)textInputView
        updateFloatingCursor:(OFFloatingCursorDragState)state
                  withClient:(int)client
                withPosition:(NSDictionary*)point;
- (void)ofTextInputView:(OFTextInputView*)textInputView
    showAutocorrectionPromptRectForStart:(NSUInteger)start
                                     end:(NSUInteger)end
                              withClient:(int)client;
- (void)ofTextInputView:(OFTextInputView*)textInputView showToolbar:(int)client;
- (void)ofTextInputViewScribbleInteractionBegan:(OFTextInputView*)textInputView;
- (void)ofTextInputViewScribbleInteractionFinished:(OFTextInputView*)textInputView;
- (void)ofTextInputView:(OFTextInputView*)textInputView
    insertTextPlaceholderWithSize:(CGSize)size
                       withClient:(int)client;
- (void)ofTextInputView:(OFTextInputView*)textInputView removeTextPlaceholder:(int)client;

@end

#endif /* OFTextInputDelegate_h */
