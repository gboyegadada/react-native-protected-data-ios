export type ProtectedDataEventName = 'applicationProtectedDataWillBecomeAvailable' | 'applicationProtectedDataDidBecomeAvailable' | 'applicationProtectedDataWillBecomeUnavailable' | 'applicationProtectedDataDidBecomeUnavailable'
export type ProtectedDataJSEventName = 'willBecomeAvailable' | 'didBecomeAvailable' | 'willBecomeUnavailable' | 'didBecomeUnavailable'

export interface ProtectedDataEvent {
  name: ProtectedDataEventName
}

export type ProtectedDataListener = (protectedDataEvent: ProtectedDataEvent) => void
