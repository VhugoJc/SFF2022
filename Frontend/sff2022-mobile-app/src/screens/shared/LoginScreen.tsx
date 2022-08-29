import { View, Text, Image, TextInput, ScrollView } from 'dripsy';
import React, { useContext, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LargeBtn from '../../components/Button/LargeBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext } from '../../context/authContext/AuthContext';
import { useState } from 'react';
import { validateEmail } from '../../utils/validation';

export default function LoginScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { authState, signIn, loading } = useContext(AuthContext);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const onClick = () => {
        if(email.length<6){
            return Alert.alert('No válido', 'Correo electrónico no es válido', [
                { text: 'OK'},
            ]);
        }
        if(password.length<6){
            return Alert.alert('No válida', 'La contraseña debe ser de al menos 6 caracterés', [
                { text: 'OK'},
            ]);
        }
        const emailValidated = validateEmail(email);
        if(emailValidated===null){
            return Alert.alert('No válida', 'La contraseña debe ser de al menos 6 caracteres', [
                { text: 'OK'},
            ]);
        }
        // loading();
        signIn({ email, password });
    }
    return (
        <ScrollView sx={loginScreen.container} bounces={false}>
            <View sx={loginScreen.imgContainer}>
                <Image sx={loginScreen.img} source={require('../../../assets/img/taco_illustration.png')} />
                <Text sx={styles.subtitle}>
                    Iniciar Sesión
                </Text>
            </View>
            <View sx={loginScreen.formsContainer as object}>
                <TextInput onChangeText={e => setemail(e)} sx={styles.input} placeholder='Correo Electrónico' />
                <TextInput onChangeText={e => setpassword(e)} sx={styles.input} placeholder='Contraseña' secureTextEntry={true} />
            </View>
            <View sx={loginScreen.btnContainer}>
                <LargeBtn name={'Iniciar Sesión'}
                    onPress={onClick}
                />
            </View>
            <View sx={loginScreen.txtContainer}>
                <Text sx={styles.text}>
                    ¿Aún no tienes una cuenta?{"\t"}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text sx={styles.textBold}>
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
        marginTop: '$4'
    },
    txtContainer: {
        marginVertical: '$5',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});