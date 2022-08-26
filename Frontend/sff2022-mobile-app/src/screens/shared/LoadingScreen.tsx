import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'dripsy'

export default function LoadingScreen() {
    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <ActivityIndicator
                size={50}
                color="black"
            />
        </View>
    )
}