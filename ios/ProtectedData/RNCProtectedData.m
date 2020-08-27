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

- (void)eventReceived:(NSNotification *)notification
{
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": eventName}];
}

@end
