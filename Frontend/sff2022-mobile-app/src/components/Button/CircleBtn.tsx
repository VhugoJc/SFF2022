import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import { View, } from 'dripsy';

interface Props {
    name: string,
    right?: boolean,
    onPress?(): void,
    type?: "primary" | "light"  | "blueLight" | "secondary" | "background"
}

export default function CircleBtn({ name, right, onPress,type='background' }: Props) {

    return (
        <TouchableOpacity  onPress={onPress} 
            style={Object.assign({}, circleBtn.container, right ? circleBtn.right : {},)}
        >
            <View sx={Object.assign({},circleBtn.circle,{backgroundColor: `$${type}`})}>
                <Icon size={19} name={name}  
                    color={
                        name==='favorite'
                        ? '#E63946'
                        : '#1D3557'
                    } 
                />
            </View>
        </TouchableOpacity>
    )
}

const circleBtn = StyleSheet.create({
    container: {
        position: 'absolute',
    },
    circle: {
        borderWidth: 1,
        borderColor: '$light',
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        backgroundColor: '$background',
        borderRadius: 50,
        marginTop: '$2',
        marginHorizontal: '$2',
    },
    right: {
        right: 0
    }
});