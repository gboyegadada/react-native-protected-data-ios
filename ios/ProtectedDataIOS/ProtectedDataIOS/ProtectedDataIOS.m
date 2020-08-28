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

static NSString *const RNCApplicationProtectedDataDidBecomeUnavailable = @"UIApplicationProtectedDataDidBecomeUnavailable";

static NSString *const RNCApplicationProtectedDataWillBecomeAvailable = @"UIApplicationProtectedDataWillBecomeAvailable";

static NSString *const RNCApplicationProtectedDataDidBecomeAvailable = @"UIApplicationProtectedDataDidBecomeAvailable";

@implementation ProtectedDataIOS
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

#pragma mark Singleton Methods

+ (id)getInstance {
    static ProtectedDataIOS *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[self alloc] init];
    });
    return instance;
}

- (id)init {
  if (self = [super init]) {
      hasListeners = NO;
  }
  return self;
}

#pragma mark - Event Emitter

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"ApplicationProtectedDataEvent"];
}

-(void)startObserving {
    if (@available(iOS 13.0, *)) {
      [[NSNotificationCenter defaultCenter] addObserver:self
                                               selector:@selector(willBecomeAvailable)
                                                   name:UIApplicationProtectedDataDidBecomeAvailable
                                                 object:nil];
      
      [[NSNotificationCenter defaultCenter] addObserver:self
                                               selector:@selector(willBecomeUnavailable)
                                                   name:UIApplicationProtectedDataWillBecomeUnavailable
                                                 object:nil];

      [[NSNotificationCenter defaultCenter] addObserver:self
                                                 selector:@selector(didBecomeAvailable)
                                                     name:UIApplicationProtectedDataDidBecomeAvailable
                                                   object:nil];
    }
}

- (void)stopObserving
{
  if (@available(iOS 13.0, *)) {
    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                    name:UIApplicationProtectedDataDidBecomeAvailable
                                                  object:nil];

    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                      name:UIApplicationProtectedDataWillBecomeUnavailable
                                                    object:nil];

    [[NSNotificationCenter defaultCenter] removeObserver:self
                                                  name:UIApplicationProtectedDataDidBecomeAvailable
                                                object:nil];
  }
}

- (void)willBecomeAvailable
{
    [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": RNCApplicationProtectedDataWillBecomeAvailable}];
}

- (void)willBecomeUnavailable
{
    [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": RNCApplicationProtectedDataWillBecomeUnavailable}];
}

- (void)didBecomeAvailable
{
    [self sendEventWithName:@"ApplicationProtectedDataEvent" body:@{@"name": RNCApplicationProtectedDataDidBecomeAvailable}];
}

@end
