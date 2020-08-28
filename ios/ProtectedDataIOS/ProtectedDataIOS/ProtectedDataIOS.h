//
//  ProtectedData.h
//  ProtectedDataIOS
//
//  Created by Gboyega Dada on 27/08/2020.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface ProtectedDataIOS : RCTEventEmitter <RCTBridgeModule>
    - (void)handleNotification:(NSNotification *)notification;
@end
