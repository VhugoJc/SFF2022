import { View, Text, ScrollView, Image } from 'dripsy';
import React from 'react';
import CircleBtn from '../../components/Button/CircleBtn';
import { styles } from '../../theme/stylesheet';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Alert } from 'react-native';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import SellerBanner from '../../components/Shared/SellerBanner';
import { Presale, User } from '../../interfaces/SalesInterface';
import { PresaleData } from '../../interfaces/UserInterfaces';
import LargeBtn from '../../components/Button/LargeBtn';

interface Props {
    presale: PresaleData;
    totalAmount?: number;//if includes amount, it means this is a checking sale else, it is a recipt
    user: User;
    salesInfo?: any //if includes salesInfo, it means this is a recipt else, it is a checking sale
}

export default function PaidPresaleScreen({ presale, user, totalAmount, salesInfo }: Props) {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <View>
            <ScrollView sx={paidPrewsale.container} bounces={false} showsVerticalScrollIndicator={false}>
                <View style={{zIndex:1}}>
                    <CircleBtn right onPress={() => navigation.goBack()} name='close' />
                </View>
                {
                    // <View sx={paidPrewsale.idContainer}>
                    //     <Text sx={styles.text}>
                    //         ID:
                    //     </Text>
                    //         <Text sx={Object.assign({}, styles.text, { color: '$secondary' })}>
                    //             507f1f77bcf86cd799439011
                    //         </Text>
                    // </View>
                }
                <View>
                    {
                        totalAmount
                            ? <CheckingSale presale={presale} totalAmount={totalAmount} user={user} />
                            : null //value from database 
                    }
                </View>

            </ScrollView>
        </View>
    )
}

function CheckingSale({ totalAmount, presale, user }: Props) {
    return (
        <>
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
                        ()=>Alert.alert('Confirmación de Venta','Después de cconfirmar, no hay vuelta atrás. ¿Estás seguro de esta venta?',[{
                            text:'Confirmar', 
                        },{
                            text: 'Cancelar',
                            style: 'cancel',
                        }])
                    }
                />
            </View>
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