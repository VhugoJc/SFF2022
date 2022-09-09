import { View, Text, Image, ScrollView } from 'dripsy'
import React, { useState } from 'react'
import { styles } from '../../theme/stylesheet'
import CircleBtn from '../../components/Button/CircleBtn';
import { StyleSheet } from 'react-native';
import FoodDescriptionCard from '../../components/Cards/FoodDescriptionCard';
import LargeBtn from '../../components/Button/LargeBtn';
import { useNavigation } from '@react-navigation/native';
import { PresaleData } from '../../interfaces/UserInterfaces';

interface Props{
    setScreen:()=>void,
    presale:PresaleData
}

export default function CheckOrderScreen({setScreen,presale}:Props) {
    const [counter, setcounter] = useState<number>(1);
    const maxAmount = 5;
    const navigation = useNavigation();
    const handleCounter = (add: boolean) => {
        if (add) {
            if (counter + 1 <= maxAmount) {
                setcounter(counter + 1);
            }
        } else {
            if (counter - 1 >= 1) {
                setcounter(counter - 1);
            }
        }
    }
    return (

        <View sx={checkOrder.container}>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary' })}>
                Comprando preventa
            </Text>
            <Image sx={checkOrder.img} source={require('../../../assets/img/sell_illustration.png')} />
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary' })}>
                Mi Producto:
            </Text>
            <FoodDescriptionCard presale={presale}/>
            <View sx={checkOrder.counter}>
                <CircleBtn onPress={() => { handleCounter(false) }} name='remove' type='blueLight' />
                <Text sx={checkOrder.counterNum as any}>{counter}</Text>
                <CircleBtn onPress={() => { handleCounter(true) }} right name='add' type='blueLight' />
            </View>
            <Text sx={Object.assign({}, styles.subtitle, { color: '$primary', alignSelf: 'center' })}>
                Total: {`$${(presale.cost*counter).toFixed(2)}`}
            </Text>
            <View sx={checkOrder.btnContainer}>
                <LargeBtn onPress={setScreen} name='Generar QR Para pagar' />
            </View>
        </View>
    )
}


const checkOrder = StyleSheet.create({
    container: {
        top: '$4',
        paddingHorizontal: '$3'
    },
    img: {
        width: 200,
        height: 150,
        alignSelf: 'center'
    },
    counter: {
        alignSelf: 'center',
        marginTop: '$4',
    },
    counterNum: {
        marginVertical: '$3',
        marginHorizontal: '$5'
    },
    btnContainer: {
        marginTop: '$4',
        alignItems: 'center'
    }
});