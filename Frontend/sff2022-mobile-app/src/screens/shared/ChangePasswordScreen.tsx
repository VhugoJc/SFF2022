import { View, Text, ScrollView, TextInput, Image } from 'dripsy';
import React, { useState } from 'react'
import { StyleSheet, Alert } from 'react-native';
import { styles } from '../../theme/stylesheet';
import LargeBtn from '../../components/Button/LargeBtn';
import { userAPI } from '../../api/UserApi';

export default function ChangePasswordScreen() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');


    const onClick = async () => {
        if (password.length < 6) {
            return Alert.alert('Contraseña no válida', 'La contraseña debe ser de al menos 6 caracteres');
        }
        if (password !== confirmPassword) {
            return Alert.alert('Contraseña no válida', 'Las contraseñas no coinciden');
        }
        try {
            const response = await userAPI.post('/auth/reset-password',{
                newPassword:`${password}`
            });
            Alert.alert('Contraseña cambiada exitosamente','su contraseña ser ha cambiado',[{text:'Ok'}]);
            setPassword('');
            setPassword('');
            
        } catch (err:any) {
            if(err.response.data.message){
                return Alert.alert('Error cambiando la contraseña',err.response.data.message,[{text:'ok'}])
            }
            return Alert.alert('Error cambiando la contraseña','Ocurrió un error inesperado cambiando su contraseña',[{text:'ok'}])

        }

    }

    return (
        <ScrollView bounces={false} sx={changePassword.container}>
            <Image sx={changePassword.img} source={require('../../../assets/img/hidden_illustration.png')} />
            <View sx={changePassword.form as object}>
                <TextInput value={password} onChangeText={e=>setPassword(e)} sx={styles.input} placeholder='Nueva Contraseña' secureTextEntry />
                <TextInput value={confirmPassword} onChangeText={e=>setConfirmPassword(e)} sx={styles.input} placeholder='Confirmar Contraseña' secureTextEntry />
            </View>
            <View sx={changePassword.btnContainer}>
                <LargeBtn name={'Cambiar Contraseña'} onPress={()=>onClick()}/>
            </View>
        </ScrollView>
    )
}

const changePassword = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '$background',
    },
    form: {
        paddingHorizontal: '$3'
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: '$4'
    },
    img: {
        width: 350,
        height: 150,
        alignSelf: 'center'
    },
});