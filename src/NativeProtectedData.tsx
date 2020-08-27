
import * as React from 'react';
import { NativeModules, Platform, View, requireNativeComponent } from 'react-native';

let FallbackProtectedDataProvider = (props: any) => <View style={{ flex: 1 }} {...props} />;

// Native modules
export const NativeProtectedData = NativeModules.RNCProtectedData;
export const NativeProtectedDataProvider =
  Platform.OS === 'android'
    ? FallbackProtectedDataProvider
    : requireNativeComponent('RNCProtectedDataProvider');
