import { StyleSheet } from 'react-native';
import React from 'react'
import { Text, TextInput, View, ScrollView } from 'dripsy';
import { styles } from '../../theme/stylesheet';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import UploadImgBtn from '../../components/Button/UploadImgBtn';
import LargeBtn from '../../components/Button/LargeBtn';

export default function EditProductsScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    return (
        <View>
            <CircleBtn right name='close' onPress={() => navigation.goBack()} />
            <ScrollView bounces={false} sx={editProducts.container as object}>
                <View sx={editProducts.formContainer as object}>
                    <Text sx={Object.assign({}, styles.subtitle, { color: '$primary' })}>
                        Nuevo Producto
                    </Text>
                    <View>
                        <UploadImgBtn />
                    </View>
                    <TextInput sx={styles.input} placeholder='Nombre' />
                    <TextInput sx={styles.textArea} placeholder='Descripción' multiline={true} numberOfLines={3} />
                </View>
                <View sx={editProducts.btnContainer}>
                    <LargeBtn name={'Agregar producto'} />
                </View>
            </ScrollView>
        </View>
    )
}

const editProducts = StyleSheet.create({
    container: {
        minHeight: '100%',
        zIndex: -1
    },
    btnContainer: {
        alignItems: 'center',
        marginTop: '$3'
    },
    formContainer: {
        paddingHorizontal: '$3'
    }

});