import { StyleSheet} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { View } from "dripsy";

interface Props {
    codeValue:string,
    img:any
}

export default function QRCodeGenerator({codeValue, img}:Props) {
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
    container:{
        flex:1,
        alignItems:'center',
        marginVertical:'$5'
    }
});