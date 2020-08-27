//
//  ProtectedData.h
//  ProtectedData
//
//  Created by Gboyega Dada on 27/08/2020.
//
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


static NSString *const RNCApplicationProtectedDataWillBecomeUnavailable;
static NSString *const RNCApplicationProtectedDataDidBecomeUnavailable;
static NSString *const RNCApplicationProtectedDataWillBecomeAvailable;
static NSString *const RNCApplicationProtectedDataDidBecomeAvailable;

@interface RNCProtectedDataIOS : RCTEventEmitter <RCTBridgeModule>
    + (id)getInstance;
    - (void)eventReceived:(NSString *)eventName;
@end
