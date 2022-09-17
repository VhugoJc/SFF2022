import { StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { View } from "dripsy";
import { useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { AuthContext } from "../../context/authContext/AuthContext";
import { baseSocketURL } from '../../api/SocketApi';

interface Props {
    
    setScreen:(amount:number,screen:string)=>void,
    codeValue: string,
    img: any
}

export default function QRCodeGenerator({ codeValue, img , setScreen}: Props) {
    const socket = io(baseSocketURL);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);
    const {authState} = useContext(AuthContext);
    const [Status, setStatus] = useState(false);

    
    useEffect(() => {
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.emit('store-qr-client',{
            jwt:authState.token,
            id: authState.user?._uid
        });

        socket.on('successful-sale',()=>{
            setScreen(0,'success');
            
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