
```
- (void)applicationProtectedDataWillBecomeUnavailable:(UIApplication *)application
{
  NSLog(@"PROTECTED DATA: WILL BECOME UNAVAILABLE");
}

- (void)applicationProtectedDataDidBecomeUnavailable:(UIApplication *)application
{
  NSLog(@"PROTECTED DATA: DID BECOME UNAVAILABLE");
}

- (void)applicationProtectedDataWillBecomeAvailable:(UIApplication *)application
{
  NSLog(@"PROTECTED DATA: WILL BECOME AVAILABLE");
}

- (void)applicationProtectedDataDidBecomeAvailable:(UIApplication *)application
{
  NSLog(@"PROTECTED DATA: DID BECOME AVAILABLE");
}
```

