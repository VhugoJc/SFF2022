import { View, Text, ScrollView, TextInput, Image } from 'dripsy';
import React, { useState } from 'react'
import CircleBtn from '../../components/Button/CircleBtn';
import { StyleSheet, Alert } from 'react-native';
import { styles } from '../../theme/stylesheet';
import LargeBtn from '../../components/Button/LargeBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { validateEmail } from '../../utils/validation';
import { userAPI } from '../../api/UserApi';

export default function PasswordRecoveryScreen() {
    const [email, setemail] = useState('');
    const navigation = useNavigation<StackNavigationProp<any>>();
    const onClick = async () => {
        const emailValidated = validateEmail(email);
        if (emailValidated === null) {
            Alert.alert('No válido', 'Correo electrónico incorrecto', [{
                text: 'ok',
            }])
        }
        try {
            const response = await userAPI.put('/auth/password-recovery', {
                email
            });
            Alert.alert('Recuperando contraseña',response.data.message,[
                {
                    text:'Ok'
                }
            ])
            setemail('');

        } catch (err: unknown) {
            if (err?.response.data.message) {
                return Alert.alert('No válido', err.response.data.message, [
                    {
                        text: 'Ok'
                    }
                ])
            }
            return Alert.alert('No válido', 'Error recuperando la contraseña', [
                {
                    text: 'Ok'
                }
            ])


        }
    }
    return (
        <ScrollView sx={passwordRecovery.container} bounces={false}>
            <CircleBtn name='close' right onPress={() => navigation.goBack()} />
            <View sx={passwordRecovery.header as object}>
                <Text sx={styles.subtitle}>
                    Recuperar mi contraseña {"\n"}
                </Text>
                <Text sx={styles.text}>
                    Ingresa tu correo electrónico para recibir las instrucciones de reestablecimiento de contraseña.
                </Text>
            </View>
            <Image sx={passwordRecovery.img} source={require('../../../assets/img/hidden_illustration.png')} />
            <View sx={passwordRecovery.forms as object}>
                <TextInput value={email} onChangeText={e => setemail(e)} sx={styles.input} placeholder='Correo Electrónico' />
            </View>
            <View sx={passwordRecovery.btnContainer}>
                <LargeBtn name={'Recuperar contraseña'}
                    onPress={onClick}
                />
            </View>
        </ScrollView>
    )
}

const passwordRecovery = StyleSheet.create({
    container: {
        backgroundColor: '$background',
    },
    header: {
        zIndex: -1,
        paddingHorizontal: '$3',
        marginBottom: '$3'
    },
    forms: {
        paddingHorizontal: '$3',
        marginBottom: '$4'
    },
    btnContainer: {
        alignItems: 'center',
    },
    img: {
        width: 280,
        height: 220,
        alignSelf: 'center',
    },
});