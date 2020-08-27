import { NativeEventEmitter, EventSubscription, EventEmitter } from 'react-native'
import { NativeProtectedData } from './NativeProtectedData';
import { ProtectedDataEvent, ProtectedDataJSEventName, ProtectedDataListener } from './ProtectedData';

export * from './ProtectedData.d'

// Initialize the native event emitter
const nativeEventEmitter = new NativeEventEmitter(NativeProtectedData);
nativeEventEmitter.addListener('ApplicationProtectedDataEvent', (e: ProtectedDataEvent) => {
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
