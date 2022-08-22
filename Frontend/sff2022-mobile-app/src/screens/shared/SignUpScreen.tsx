import { View, Text, ScrollView, Image, TextInput } from 'dripsy';
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import LargeBtn from '../../components/Button/LargeBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
export default function SignUpScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <ScrollView sx={loginScreen.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View sx={loginScreen.imgContainer}>
                <Image sx={loginScreen.img} source={require('../../../assets/img/palette_illustration.png')} />
                <Text sx={styles.subtitle}>
                    Crear Cuenta
                </Text>
            </View>
            <View sx={loginScreen.formsContainer as object}>
                <TextInput sx={styles.input} placeholder='Nombre(s)' />
                <TextInput sx={styles.input} placeholder='Apellido' />
                <TextInput sx={styles.input} placeholder='Número de Celular' />
                <TextInput sx={styles.input} placeholder='Correo Electrónico' />
                <TextInput sx={styles.input} placeholder='Contraseña' secureTextEntry={true} />
                <TextInput sx={styles.input} placeholder='Confirmar Contraseña' secureTextEntry={true} />
            </View>
            <View sx={loginScreen.btnContainer}>
                <LargeBtn name={'Iniciar Sesión'} />
            </View>
            <View sx={loginScreen.txtContainer}>
                <Text sx={styles.text}>
                    ¿Ya tienes cuenta?{"\t"}
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("LogIn")}>
                    <Text  sx={styles.textBold}>
                        Iniciar Sesión
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

const loginScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$background',
    },
    img: {
        width: 140,
        height: 140,
    },
    imgContainer: {
        alignItems: 'center',
        marginTop: '$5'
    },
    formsContainer: {
        paddingHorizontal: '$3'
    },
    btnContainer: {
        alignItems: 'center',
        marginTop:'$4'
    },
    txtContainer:{
        marginVertical:'$5',
        flexDirection:'row',
        justifyContent:'center',
    }
});