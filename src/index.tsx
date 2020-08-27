import * as React from 'react'
import { NativeEventEmitter, NativeModules } from 'react-native'
import { EventEmitter, EventSubscription } from 'fbemitter'
import { ProtectedDataEvent, ProtectedDataJSEventName, ProtectedDataListener } from './ProtectedData';

export * from './ProtectedData.d'

console.log(React.version)

// Initialize the native event emitter
const nativeEventEmitter = new NativeEventEmitter(NativeModules.RNCProtectedData);
nativeEventEmitter.addListener('ApplicationProtectedDataEvent', (e: ProtectedDataEvent) => {
  console.log('GBOYEGA NATIVE EVENT:', e)

  ProtectedData.emit(e)
})

// Initialize the user-facing event emitter
const eventEmitter = new EventEmitter()

export class ProtectedData {
  
  /**
   * Relay native event to JS listeners
  */
 static emit(e: ProtectedDataEvent): void {
  
  switch(e.name) {
    case "applicationProtectedDataWillBecomeAvailable":
      eventEmitter.emit('willBecomeAvailable', e)
      break
    case "applicationProtectedDataDidBecomeAvailable":
      eventEmitter.emit('didBecomeAvailable', e)
      break
    case "applicationProtectedDataWillBecomeUnavailable":
      eventEmitter.emit('willBecomeUnavailable', e)
      break
    case "applicationProtectedDataDidBecomeUnavailable":
      eventEmitter.emit('didBecomeUnavailable', e)
      break
  }
 }

 /**
  * Add an event handler that is fired when native event is received.
  */
 static addChangeListener(name: ProtectedDataJSEventName, listener: ProtectedDataListener): EventSubscription {
   return eventEmitter.addListener(name, listener);
 }

}
