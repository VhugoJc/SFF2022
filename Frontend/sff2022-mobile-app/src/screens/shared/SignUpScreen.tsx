import { View, Text, ScrollView, Image, TextInput } from 'dripsy';
import React, { useEffect } from 'react'
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import LargeBtn from '../../components/Button/LargeBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import { NewUser } from '../../interfaces/UserInterfaces';
import { userAPI } from '../../api/UserApi';
import { validateEmail } from '../../utils/validation';
import Navigation from '../../Navigation/Index';


export default function SignUpScreen() {
    useEffect(()=>{
        setuserData(InitialState);
    },[]);
    
    const navigation = useNavigation<StackNavigationProp<any>>();
    const InitialState = {
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',
    }
    const [userData, setuserData] = useState<NewUser>(InitialState);

    const onClick = async () => {
        const emailValidated = validateEmail(userData.email);
        if (!emailValidated) {
            return Alert.alert('Usuario no creado', 'El email es incorrecto', [
                { text: 'OK' },
            ]);
        }
        if (userData.password.length < 6) {
            return Alert.alert('Usuario no creado', 'La contraseña es muy corta', [
                { text: 'OK' },
            ]);
        }
        if (userData.password !== userData.confirmpassword) {
            return Alert.alert('Usuario no creado', 'Las contraseñas no coinciden', [
                { text: 'OK' },
            ]);
        }

        try {
            const { data } = await userAPI.post<NewUser>('/user', {
                name: userData.name,
                lastname: userData.lastname,
                email: userData.email,
                password: userData.password
            });
            Alert.alert('Usuario creado', 'Se ha creado exitosamente su cuenta, se le enviará un correo electrónico para terminar su registro', [
                { text: 'OK', onPress: () => navigation.goBack()},
            ]);

        } catch (err:any) {
            if (err?.response?.data?.error?.message) {
                // Request made and server responded
                Alert.alert('Usuario no creado', err.response.data.error.message, [
                    { text: 'OK' },
                ]);
            } else {
                if (err?.response?.data?.errors[0]?.msg) {
                    Alert.alert('Usuario no creado', err.response.data.errors[0].msg, [
                        { text: 'OK' },
                    ]);
                }
            }
        }
    }

    return (
        <ScrollView sx={loginScreen.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View sx={loginScreen.imgContainer}>
                <Image sx={loginScreen.img} source={require('../../../assets/img/palette_illustration.png')} />
                <Text sx={styles.subtitle}>
                    Crear Cuenta
                </Text>
            </View>
            <View sx={loginScreen.formsContainer as object}>
                <TextInput sx={styles.input} value={userData.name} onChangeText={(e) => setuserData({ ...userData, name: e })} placeholder='Nombre(s)' />
                <TextInput sx={styles.input} value={userData.lastname} onChangeText={(e) => setuserData({ ...userData, lastname: e })} placeholder='Apellido' />
                {/* <TextInput sx={styles.input} onChangeText={(e)=>setuserData({...userData,name:e})} placeholder='Número de Celular' /> */}
                <TextInput sx={styles.input} value={userData.email} onChangeText={(e) => setuserData({ ...userData, email: e })} placeholder='Correo Electrónico' />
                <TextInput sx={styles.input} value={userData.password} onChangeText={(e) => setuserData({ ...userData, password: e })} placeholder='Contraseña' secureTextEntry={true} />
                <TextInput sx={styles.input} value={userData.confirmpassword} onChangeText={(e) => setuserData({ ...userData, confirmpassword: e })} placeholder='Confirmar Contraseña' secureTextEntry={true} />
            </View>
            <View sx={loginScreen.btnContainer}>
                <LargeBtn name={'Crear cuenta'} onPress={onClick} />
            </View>
            <View sx={loginScreen.txtContainer}>
                <Text sx={styles.text}>
                    ¿Ya tienes cuenta?{"\t"}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
                    <Text sx={styles.textBold}>
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
        marginTop: '$4'
    },
    txtContainer: {
        marginVertical: '$5',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});