import {StatusBar as StatusBarGlobal, Platform,NativeModules} from 'react-native'
import React from 'react'
import { View, Text } from 'dripsy';

export default function StatusBar() {
    const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
    
  return (
    <View sx={{backgroundColor:'$primary',height:STATUSBAR_HEIGHT}}>
        <StatusBarGlobal barStyle={'light-content'} />
    </View>
  )
}