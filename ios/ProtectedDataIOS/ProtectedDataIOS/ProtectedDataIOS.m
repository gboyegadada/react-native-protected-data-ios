//
//  ProtectedData.m
//  ProtectedDataIOS
//
//  Created by Gboyega Dada on 27/08/2020.
//

#import "ProtectedDataIOS.h"

#import <React/RCTBridge.h>
#import <React/RCTEventEmitter.h>


static NSString *const RNCApplicationProtectedDataWillBecomeUnavailable = @"UIApplicationProtectedDataWillBecomeUnavailable";

static NSString *const RNCApplicationProtectedDataDidBecomeAvailable = @"UIApplicationProtectedDataDidBecomeAvailable";

@implementation ProtectedDataIOS

RCT_EXPORT_MODULE();

#pragma mark - Event Emitter

- (NSArray<NSString *> *)supportedEvents
{
  return @[
      UIApplicationProtectedDataDidBecomeAvailable,
      UIApplicationProtectedDataWillBecomeUnavailable
  ];
}

-(void)startObserving
{
    for (NSString *event in [self supportedEvents]) {
        [[NSNotificationCenter defaultCenter] addObserver:self
                                                selector:@selector(handleNotification:)
                                                    name:event
                                                  object:nil];
      }
}

- (void)stopObserving
{
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)handleNotification:(NSNotification *)notification
{
    if([notification.name isEqualToString:UIApplicationProtectedDataWillBecomeUnavailable])
    {
        [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": RNCApplicationProtectedDataWillBecomeUnavailable}];
    }
    
    else if([notification.name isEqualToString:UIApplicationProtectedDataDidBecomeAvailable])
    {
        [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": RNCApplicationProtectedDataDidBecomeAvailable}];
    }
}

@end
