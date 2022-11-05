import { StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { View } from "dripsy";
import { useContext, useEffect, useRef, useState } from "react";
import { debug } from "react-native-reanimated";

interface Props {
    
    setScreen:(amount:number,screen:string)=>void,
    codeValue: string,
    img: any
}

export default function QRCodeGenerator({ codeValue, img , setScreen}: Props) {
    console.log(codeValue);
    
    return (
        <View sx={qrCodeGenearator.container}>
            <QRCode
                value={codeValue}
                size={220}
                logo={img}
                logoSize={70}
                logoBorderRadius={100}
                logoBackgroundColor="white"
            />
        </View>
    );
}


const qrCodeGenearator = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: '$5'
    }
});