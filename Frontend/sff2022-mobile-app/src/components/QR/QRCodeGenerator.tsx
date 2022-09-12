import { StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { View } from "dripsy";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

interface Props {
    codeValue: string,
    img: any
}

export default function QRCodeGenerator({ codeValue, img }: Props) {
    const socket = io('http://192.168.0.10:5000');
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });
        socket.emit('sent-message',{
            message: 12,
            date: new Date(),
            id: 12222
        },(id:any)=>{
            console.log(`desde el server ${id}`);
        });
    }, []);
    console.log(isConnected);
    
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