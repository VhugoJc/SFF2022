import { StyleSheet} from "react-native";
import QRCode from "react-native-qrcode-svg";
import { View } from "dripsy";

interface Props {
    codeValue:string
}

export default function QRCodeGenerator({codeValue}:Props) {
    return (
        <View sx={qrCodeGenearator.container}>
            <QRCode
                value={codeValue}
                size={220}
                logo={require('../../../assets/img/team1.jpg')}
                logoSize={70}
                logoBorderRadius={100}
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