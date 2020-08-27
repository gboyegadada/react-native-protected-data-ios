
```
- (void)applicationProtectedDataWillBecomeUnavailable:(UIApplication *)application
{
  [[RNCProtectedDataIOS getInstance] eventReceived:RNCApplicationProtectedDataWillBecomeUnavailable];
}

- (void)applicationProtectedDataDidBecomeUnavailable:(UIApplication *)application
{
  [[RNCProtectedDataIOS getInstance] eventReceived:RNCApplicationProtectedDataDidBecomeUnavailable];
}

- (void)applicationProtectedDataWillBecomeAvailable:(UIApplication *)application
{
  [[RNCProtectedDataIOS getInstance] eventReceived:RNCApplicationProtectedDataWillBecomeAvailable];
}

- (void)applicationProtectedDataDidBecomeAvailable:(UIApplication *)application
{
  [[RNCProtectedDataIOS getInstance] eventReceived:RNCApplicationProtectedDataDidBecomeAvailable];
}
```

