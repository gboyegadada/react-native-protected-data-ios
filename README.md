## ProtectedDataIOS

React Native module for subscribing to the iOS Application Protected Data event lifecycle.


## 1. Installation
```
$ ~ yarn add react-native-protected-data-ios
$ ~ cd ios && pod install
```

## 2. Usage
```ts
import { ProtectedDataIOS } from 'react-native-protected-data-ios'

const willBecomeUnavailable = () => {
  // Suspend i/o before device is locked!
}

const didBecomeAvailable = () => {
  // Resume i/o when device is unlocked and protected 
  // data becomes available.
}

useEffect(() => {
  const removeWillBecomeUnavailable: EmitterSubscription = ProtectedDataIOS.addListener('willBecomeUnavailable', willBecomeUnavailable)
  const removeDidBecomeAvailable: EmitterSubscription = ProtectedDataIOS.addListener('didBecomeAvailable', didBecomeAvailable)

  return () => {
    removeWillBecomeUnavailable.remove()
    removeDidBecomeAvailable.remove()
  }
}, [])

```

