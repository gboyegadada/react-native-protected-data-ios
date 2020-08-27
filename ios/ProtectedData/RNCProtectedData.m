//
//  ProtectedData.m
//  ProtectedData
//
//  Created by Gboyega Dada on 27/08/2020.
//

#import "RNCProtectedData.h"

#import <React/RCTBridge.h>
#import <React/RCTEventEmitter.h>

@implementation RNCProtectedData
{
    bool hasListeners;
}

RCT_EXPORT_MODULE();

+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

#pragma mark - RCTEventEmitter

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"ApplicationProtectedDataEvent"];
}

// Will be called when this module's first listener is added.
-(void)startObserving {
    hasListeners = YES;
    // Set up any upstream listeners or background tasks as necessary
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
    hasListeners = NO;
    // Remove upstream listeners, stop unnecessary background tasks
}

- (void)eventReceived:(NSNotification *)notification
{
    NSString *eventName = notification.userInfo[@"name"];
    
    if (hasListeners) {
        [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": eventName}];
    }
}

@end
