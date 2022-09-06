import { ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image } from 'dripsy';
import React from 'react';
import { styles } from '../../theme/stylesheet';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState } from 'react';
import ProductsCard from '../../components/Cards/ProductsCard';
import LargeBtn from '../../components/Button/LargeBtn';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProductData } from '../../interfaces/UserInterfaces';


export default function ItemFoodScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<any>();

    const { presaleData } = route.params;

    const [favIcon, setfavIcon] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState<boolean>(false);

    const handleScroll = (e: any) => {
        const y = e.nativeEvent.contentOffset.y;
        if (y === 0) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }

    return (
        <View
            sx={itemFood.container}
        >
            <View sx={showHeader ? itemFood.headerTop : { zIndex: 2 } as any}>
                <CircleBtn name='close' onPress={() => navigation.goBack()} />
                <CircleBtn name={favIcon ? 'favorite' : 'favorite-border'} onPress={() => setfavIcon(!favIcon)} right />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false} scrollEventThrottle={16} onScroll={handleScroll}>
                <ImageBackground
                    style={itemFood.headerImg}
                    source={{ uri: presaleData.coverImg }}
                >
                </ImageBackground>
                <View sx={itemFood.header as any}>
                    <Text sx={styles.subtitle}>
                        {presaleData.name}
                    </Text>
                    <Text sx={itemFood.price}>
                        {`$${presaleData.cost.toFixed(2)}`}
                    </Text>

                    <Text sx={Object.assign({}, styles.text, { color: '$secondary' })}>
                        {presaleData.description}
                    </Text>

                    <Text sx={Object.assign({}, styles.text, itemFood.subtitle)}>
                        Incluye:
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View sx={styles.flexDirection as any}>
                        {
                            presaleData.products.map((product:ProductData) => {
                                return (
                                    <ProductsCard key={product._id.$oid} product={product} />
                                );
                            })
                        }
                    </View>
                </ScrollView>

                <View sx={itemFood.header as any}>
                    <Text sx={Object.assign({}, styles.text, itemFood.subtitle)}>
                        Vendedor:
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image sx={styles.imageTeanm} source={require('../../../assets/img/team1.png')} />
                </TouchableOpacity>
                <View sx={itemFood.btnContainer}>
                    <LargeBtn name='Comprar preventa' onPress={() => navigation.navigate("Mi Pedido")} />
                </View>
            </ScrollView>
        </View>
    )
}

const itemFood = StyleSheet.create({
    // const itemFood = ({
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
    btnContainer: {
        alignItems: 'center',
        paddingVertical: '$4'
    },
    headerTop: {
        // alignItems:'center',
        height: 45,
        position: 'absolute',
        zIndex: 10,
        backgroundColor: '$background',
        width: '100%'
    },

});