import { View, Text, ScrollView, Image } from 'dripsy';
import React from 'react';
import CircleBtn from '../../components/Button/CircleBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Alert } from 'react-native';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import SellerBanner from '../../components/Shared/SellerBanner';
import { Presale, User } from '../../interfaces/SalesInterface';
import { PresaleData } from '../../interfaces/UserInterfaces';
import LargeBtn from '../../components/Button/LargeBtn';
import { userAPI } from '../../api/UserApi';
import { io } from "socket.io-client";
import { baseSocketURL } from '../../api/SocketApi';
import { useEffect } from 'react';
import moment from 'moment'
import 'moment/locale/es';

interface Props {
    presale: PresaleData;
    totalAmount?: number;//if includes amount, it means this is a checking sale else, it is a recipt
    user: User;
    salesInfo?: any //if includes salesInfo, it means this is a recipt else, it is a checking sale
}

export default function PaidPresaleScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute();
    const { amount, presale, cost, _id, saleDate, SellerTeamId }: any = route.params;

    
    return (
        <ScrollView sx={paidPrewsale.container} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={{ zIndex: 1 }}>
                <CircleBtn right onPress={() => navigation.goBack()} name='close' />
            </View>
            <View sx={paidPrewsale.dataContainer as Object}>

                <Text sx={styles.subtitle}>Mi Preventa</Text>
                <Text sx={styles.text}>
                        Fecha: {`${moment(saleDate).locale('fr').format('LLL')}`}
                    </Text>
                <View sx={paidPrewsale.idContainer}>
                    <Text sx={styles.text}>
                        ID:
                    </Text>
                    <Text sx={Object.assign({}, styles.text, { color: '$secondary' })}>
                        {_id} 
                    </Text>
                    
                </View>
                <FoodDescriptionCard btnDisable presale={presale} />
                {/* cantidad */}
                <Text sx={styles.text}>
                    Cantidad: {`${amount}`}
                </Text>
                <Text sx={styles.subtitle}>
                    Total: {`$${cost.toFixed(2)}`}
                </Text>
                <SellerBanner btnDisable id={SellerTeamId} />
            </View>

        </ScrollView>
    )
}

export function CheckingSale({ totalAmount, presale, user }: Props) {
    const socket = io(baseSocketURL);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onClick = async () => {
        if (totalAmount) {
            try {
                const response = await userAPI.post('/sale/newsale', {
                    clientId: user._uid,
                    presaleId: presale._id,
                    amount: totalAmount,
                    cost: totalAmount * presale.cost
                });

                if (response?.data.errors) {
                    return Alert.alert('Ocurrió un Error', 'Ha ocurrido un error en el registro', [{
                        text: 'Ok'
                    }]);
                }

                socket.emit('successful-sale', {
                    clientId: user._uid
                });

                Alert.alert('Venta exitosa', 'se ha creado la venta con éxito', [{
                    text: 'Ok',
                    onPress: () => navigation.goBack()
                }])

            } catch (err: any) {
                if (err?.data.error.message) {
                    Alert.alert('Error', 'Ha ocurrido un error en el proceso de pago', [{
                        text: 'Ok'
                    }]);
                    return console.log(err.data.error.message);
                }
                Alert.alert('Error', 'Ha ocurrido un error en el proceso de pago', [{
                    text: 'Ok'
                }]);
            }
        }
    }
    return (
        <>
            <ScrollView sx={paidPrewsale.container} bounces={false} showsVerticalScrollIndicator={false}>
                <View style={{ zIndex: 1 }}>
                    <CircleBtn right onPress={() => navigation.goBack()} name='close' />
                </View>
                <View sx={paidPrewsale.dataContainer as Object}>
                    <Text sx={styles.subtitle}>Mi Preventa</Text>
                    <View sx={paidPrewsale.instructions}>
                        <Text sx={styles.textBold}>
                            Instrucciones:
                        </Text>
                        <Text sx={Object.assign({}, styles.text, { color: '$secondary' })}>
                            Verifica que la información es correcta y  cuando estés seguro, realiza el cobro.
                        </Text>
                    </View>
                    <View sx={paidPrewsale.userData}>
                        <Text sx={styles.text}>
                            Preventa para
                            <Text sx={styles.textBold}>
                                {` ${user.name} ${user.lastname}`}
                            </Text>

                        </Text>
                    </View>
                    <FoodDescriptionCard btnDisable presale={presale} />
                    <Text sx={styles.text}>
                        Cantidad: {`${totalAmount}`}
                    </Text>
                    <Text sx={styles.subtitle}>
                        Total: {`$${(totalAmount ? totalAmount * presale.cost : 0).toFixed(2)}`}
                    </Text>
                    <SellerBanner btnDisable id={presale.sellerId as any} />
                </View>
                <View sx={paidPrewsale.btnContainer as object}>
                    <LargeBtn name={'Confirmar Venta'}
                        onPress={
                            () => Alert.alert('Confirmación de Venta', 'Después de cconfirmar, no hay vuelta atrás. ¿Estás seguro de esta venta?', [{
                                text: 'Confirmar',
                                onPress: onClick
                            }, {
                                text: 'Cancelar',
                                style: 'cancel',
                            }])
                        }
                    />
                </View>
            </ScrollView>
        </>
    );
}

const paidPrewsale = StyleSheet.create({
    dataContainer: {
        paddingHorizontal: '$3',
    },
    container: {
        backgroundColor: '$background',
        minHeight: '100%',
        zIndex: -1,
        // paddingHorizontal: '$3',
    },
    idContainer: {
        flexDirection: 'row',
        marginBottom: '$5'
    },
    seller: {
        fontSize: '$2',
        marginTop: '$4',
        color: '$secondary'
    },
    instructions: {
        width: '80%',
        marginBottom: '$4',
        marginTop: '$2'
    },
    userData: {
        marginBottom: '$3'
    },
    btnContainer: {
        marginVertical: '$3',
        alignItems: 'center',

    }
});