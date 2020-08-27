export type ProtectedDataEventName = 'UIApplicationProtectedDataWillBecomeAvailable' | 'UIApplicationProtectedDataDidBecomeAvailable' | 'UIApplicationProtectedDataWillBecomeUnavailable' | 'UIApplicationProtectedDataDidBecomeUnavailable'
export type ProtectedDataJSEventName = 'willBecomeAvailable' | 'didBecomeAvailable' | 'willBecomeUnavailable' | 'didBecomeUnavailable'

export interface ProtectedDataEvent {
  name: ProtectedDataEventName
}

export type ProtectedDataListener = (protectedDataEvent: ProtectedDataEvent) => void
