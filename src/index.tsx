import * as React from 'react'
import { NativeEventEmitter, NativeModules } from 'react-native'
import { EventEmitter, EventSubscription } from 'fbemitter'
import { ProtectedDataEvent, ProtectedDataJSEventName, ProtectedDataListener } from './ProtectedData';

export * from './ProtectedData.d'

console.log(React.version)

// Initialize the native event emitter
const nativeEventEmitter = new NativeEventEmitter(NativeModules.ProtectedDataIOS);
nativeEventEmitter.addListener('ApplicationProtectedDataEvent', (e: ProtectedDataEvent) => ProtectedDataIOS.emit(e))

// Initialize the user-facing event emitter
const eventEmitter = new EventEmitter()

export class ProtectedDataIOS {
  
  /**
   * Relay native event to JS listeners
  */
 static emit(e: ProtectedDataEvent): void {
  
  switch(e.name) {
    case "UIApplicationProtectedDataDidBecomeAvailable":
      eventEmitter.emit('didBecomeAvailable', e)
      break
    case "UIApplicationProtectedDataWillBecomeUnavailable":
      eventEmitter.emit('willBecomeUnavailable', e)
      break
  }
 }

 /**
  * Add an event handler that is fired when native event is received.
  */
 static addListener(name: ProtectedDataJSEventName, listener: ProtectedDataListener): EventSubscription {
   return eventEmitter.addListener(name, listener);
 }

}
