import * as React from 'react'
import { NativeEventEmitter, NativeModules } from 'react-native'
import { EventSubscription } from 'fbemitter'
import { ProtectedDataJSEventName, ProtectedDataListener } from './ProtectedData';

export * from './ProtectedData.d'

console.log(React.version)

// Initialize the native event emitter
const nativeEventEmitter = new NativeEventEmitter(NativeModules.ProtectedDataIOS);

export class ProtectedDataIOS {

  static mapped = {
    willBecomeUnavailable: "UIApplicationProtectedDataWillBecomeUnavailable",
    didBecomeAvailable: "UIApplicationProtectedDataDidBecomeAvailable",
  }

 /**
  * Add an event handler that is fired when native event is received.
  */
 static addListener(name: ProtectedDataJSEventName, listener: ProtectedDataListener): EventSubscription {
   return nativeEventEmitter.addListener(this.mapped[name], listener)
 }

}
