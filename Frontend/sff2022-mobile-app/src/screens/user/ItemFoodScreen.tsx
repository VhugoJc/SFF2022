import { ImageBackground, ScrollView } from 'react-native';
import { View, Text, } from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import ProductsCard from '../../components/Cards/ProductsCard';
import LargeBtn from '../../components/Button/LargeBtn';


export default function ItemFoodScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [favIcon, setfavIcon] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState<boolean>(false);


    const handleScroll = (e:Object) =>{
        const y =e.nativeEvent.contentOffset.y;
        if(y===0){
            setShowHeader(false);
        }else{
            setShowHeader(true);
        }
    }

    return (
        <View
            sx={itemFood.container}
        >
            {
                showHeader
                ?(  
                <View>
                    <Text>ssss</Text>
                    <Text>ssss</Text>
                    <Text>ssss</Text>
                </View>)
                : null
            }
            <ScrollView bounces={false} scrollEventThrottle={16}  onScroll ={handleScroll}>
                <ImageBackground
                    style={itemFood.headerImg}
                    source={require('../../../assets/img/food1.jpg')}
                >
                    {
                        showHeader
                        ? null
                        : (<View style={{ flexDirection: 'row' }}>
                        <CircleBtn name='close' onPress={() => navigation.navigate("Comida")} />
                        <CircleBtn name={favIcon ? 'favorite' : 'favorite-border'} onPress={() => setfavIcon(!favIcon)
                        } right />
                    </View>)
                    }
                </ImageBackground>
                <View sx={itemFood.header as any}>
                    <Text sx={styles.subtitle}>
                        FRANKIETORTA
                    </Text>
                    <Text sx={itemFood.price}>
                        $49.00
                    </Text>

                    <Text sx={Object.assign({}, styles.text, { color: '$secondary' })}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>

                    <Text sx={Object.assign({}, styles.text, itemFood.subtitle)}>
                        Incluye:
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View sx={styles.flexDirection as any}>
                        <ProductsCard imgUrl={require('../../../assets/img/product4.png')} />
                        {/* <ProductsCard imgUrl={require('../../../assets/img/product1.png')}/> */}
                        <ProductsCard imgUrl={require('../../../assets/img/product2.png')} />
                        <ProductsCard imgUrl={require('../../../assets/img/product3.png')} />
                    </View>
                </ScrollView>
                <View sx={itemFood.btnContainer}>
                        <LargeBtn/>
                </View>
            </ScrollView>
        </View>
    )
}

// const itemFood = StyleSheet.create({
const itemFood = ({
    container: {
        flex: 1,
        backgroundColor: '$background',
    },
    header: {
        paddingHorizontal: '$3',
    },
    headerImg: {
        height: 200
    },
    price: {
        color: '$blueLight',
        fontFamily: 'Rubik-regular',
        fontSize: '$2',
        marginBottom: '$4'
    },
    subtitle: {
        color: '$secondary',
        marginTop: '$4',
        fontSize: '$2'
    },
    btnContainer:{
        alignItems:'center',
        paddingVertical:'$4'
    }
});