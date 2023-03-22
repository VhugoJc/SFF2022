import { StatusBar as StatusBarGlobal, Platform, NativeModules } from 'react-native'
import React from 'react'
import { View, Text } from 'dripsy';
import Constants from 'expo-constants';

export default function StatusBar() {
  const { StatusBarManager } = NativeModules;

  const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBarManager.HEIGHT;

  return (
    <>
      {
        Platform.OS === 'ios'
          ? (
            <View sx={{ backgroundColor: '$primary', height:Constants.statusBarHeight }}>
              <StatusBarGlobal barStyle={'light-content'} />
            </View>
          )
          : <StatusBarGlobal barStyle={'light-content'} />
      }
    </>
  )
}