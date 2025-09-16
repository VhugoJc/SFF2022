import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function LoadingScreen() {
    return (
        <View
            style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#ffffff'
            }}
        >
            <ActivityIndicator
                size="large"
                color="#1D3557"
            />
            <Text style={{ marginTop: 20, fontSize: 16, color: '#1D3557' }}>
                Cargando...
            </Text>
        </View>
    )
}