import { StatusBar as StatusBarGlobal, Platform } from 'react-native'
import React from 'react'
import { View } from 'dripsy';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function StatusBar() {
  const insets = useSafeAreaInsets();

  return (
    <>
      {
        Platform.OS === 'ios'
          ? (
            <View sx={{ backgroundColor: '$primary', height: insets.top }}>
              <StatusBarGlobal barStyle={'light-content'} />
            </View>
          )
          : <StatusBarGlobal barStyle={'light-content'} />
      }
    </>
  )
}