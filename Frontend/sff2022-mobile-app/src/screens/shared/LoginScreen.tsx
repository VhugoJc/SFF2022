import { View, Text, ScrollView, Image, TextInput } from 'dripsy';
import React, { useContext, useEffect } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';
import LargeBtn from '../../components/Button/LargeBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../../context/authContext/AuthContext';

export default function LoginScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const {authState,signIn} = useContext(AuthContext);


    return (
        <ScrollView sx={loginScreen.container} bounces={false}>
            <View sx={loginScreen.imgContainer}>
                <Image sx={loginScreen.img} source={require('../../../assets/img/taco_illustration.png')} />
                <Text sx={styles.subtitle}>
                    Iniciar Sesión
                </Text>
            </View>
            <View sx={loginScreen.formsContainer as object}>
                <TextInput sx={styles.input} placeholder='Correo Electrónico' />
                <TextInput sx={styles.input} placeholder='Contraseña' secureTextEntry={true} />
            </View>
            <View sx={loginScreen.btnContainer}>
                <LargeBtn name={'Iniciar Sesión'} onPress={signIn}/>
            </View>
            <View sx={loginScreen.txtContainer}>
                <Text sx={styles.text}>
                    ¿Aún no tienes una cuenta?{"\t"}
                </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                    <Text  sx={styles.textBold}>
                        Crear cuenta
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