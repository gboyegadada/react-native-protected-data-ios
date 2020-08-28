//
//  ProtectedData.h
//  ProtectedDataIOS
//
//  Created by Gboyega Dada on 27/08/2020.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


static NSString *const RNCApplicationProtectedDataWillBecomeUnavailable;
static NSString *const RNCApplicationProtectedDataDidBecomeUnavailable;
static NSString *const RNCApplicationProtectedDataWillBecomeAvailable;
static NSString *const RNCApplicationProtectedDataDidBecomeAvailable;

@interface ProtectedDataIOS : RCTEventEmitter <RCTBridgeModule>
    + (id)getInstance;
    - (void)willBecomeUnavailable;
    - (void)willBecomeAvailable;
    - (void)didBecomeAvailable;
@end
