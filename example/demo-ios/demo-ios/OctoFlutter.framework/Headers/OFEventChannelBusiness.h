//
//  OFEventChannelBusiness.h
//  octoflutter
//
//  Created by Simon Yang on 2021/8/2.
//

#import <Foundation/Foundation.h>
#import "OFEventChannel.h"

NS_ASSUME_NONNULL_BEGIN

@interface OFEventChannelBusiness : NSObject<OFStreamHandler>

@property (nonatomic, copy, nullable) OFEventSink eventCallback;

@end

NS_ASSUME_NONNULL_END
