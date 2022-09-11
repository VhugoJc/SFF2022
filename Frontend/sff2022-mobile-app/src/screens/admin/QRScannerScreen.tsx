import { View, Text } from 'dripsy';
import {  StyleSheet } from 'react-native';
import React from 'react';
import QRScanner from '../../components/QR/QRScanner';

export default function QRScannerScreen() {
    return (
        <View sx={qrScannerScreen.container}>
            <QRScanner/>
        </View>
    )
}

const qrScannerScreen = StyleSheet.create({
    container:{
        minHeight:'100%',
        backgroundColor:'$background',
        alignItems:'center'
    }
});