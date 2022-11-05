import { ImageBackground, ScrollView, StyleSheet, Alert } from 'react-native';
import { View, Text, Image } from 'dripsy';
import React, { useEffect } from 'react';
import { styles } from '../../theme/stylesheet';
import CircleBtn from '../../components/Button/CircleBtn';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useState, useContext } from 'react';
import ProductsCard from '../../components/Cards/ProductsCard';
import LargeBtn from '../../components/Button/LargeBtn';
import { ProductData, idDB } from '../../interfaces/UserInterfaces';
import SellerBanner from '../../components/Shared/SellerBanner';
import { FavContext } from '../../context/FavsContext/FavsContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { userAPI } from '../../api/UserApi';


export default function ItemFoodScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<any>();

    const { presaleData } = route.params;

    const [favIcon, setfavIcon] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState<boolean>(false);

    const { addFood, deleteFood, favsState } = useContext(FavContext);
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        const favs = favsState.FoodIds;
        const favExists = favs.find(item => item === presaleData._id.$oid);
        if (favExists) {
            setfavIcon(true);
        }

    }, [])

    const handleScroll = (e: any) => {
        const y = e.nativeEvent.contentOffset.y;
        if (y === 0) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }

    const handleFavs = (id: idDB) => {
        if (!favIcon) {
            addFood(id);
            setfavIcon(true);
        } else {
            deleteFood(id);
            setfavIcon(false);

        }
    }

    return (
        <View
            sx={itemFood.container}
        >
            <View sx={showHeader ? itemFood.headerTop : { zIndex: 2 } as any}>
                <CircleBtn name='close' onPress={() => navigation.goBack()} />
                {/* {
                    authState.status === 'authenticated' && authState.user?.role === 'USER_ROLE'
                        ? <CircleBtn
                            name={favIcon ? 'favorite' : 'favorite-border'}
                            onPress={() => handleFavs(presaleData._id)} right
                        />
                        : null
                } */}
                <CircleBtn
                    name={favIcon ? 'favorite' : 'favorite-border'}
                    onPress={() => handleFavs(presaleData._id)} right
                />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} bounces={false} scrollEventThrottle={16} onScroll={handleScroll}>
                <ImageBackground
                    style={itemFood.headerImg}
                    source={{ uri: presaleData.coverImg }}
                >
                </ImageBackground>
                <View sx={itemFood.header as any}>
                    <Text sx={Object.assign({}, styles.subtitle, { textTransform: 'uppercase' }) as object}>
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
                            presaleData.products.map((product: any) => {
                                return <ProductsCard key={product._id.$oid} product={product as ProductData} />
                            })
                        }
                    </View>
                </ScrollView>
                {
                    authState.user?.role === 'ADMIN_ROLE'
                        ? <PresaleAdminData id={presaleData._id.$oid} />
                        : <SellerBanner id={presaleData.sellerId.$oid} />

                }

                <View sx={itemFood.btnContainer}>
                    {/* {
                        authState.status === 'authenticated' && authState.user?.role === 'USER_ROLE'
                            ? <LargeBtn name='Comprar preventa' onPress={() => navigation.navigate("Mi Pedido", {
                                presale: presaleData
                            })} />
                            : null
                    } */}
                    <LargeBtn name='Generar QR' onPress={() => navigation.navigate("Mi Pedido", {
                        presale: presaleData
                    })} />
                </View>
            </ScrollView>
        </View>
    )
}

const PresaleAdminData = ({ id }: any) => {
    const [total, settotal] = useState(0);
    const [amount, setamount] = useState(0);
    useEffect(() => {
        const getApi = async () => {
            try {
                const sales = await userAPI.get(`/sale/presale-stadistic/${id}`);
                settotal(sales.data.total);
                setamount(sales.data.amount);
            } catch (err) {
                Alert.alert('Error', 'Ha ocurrido un error en la petición', [{
                    text: 'Ok'
                }])
            }

        }
        getApi();
    }, []);

    return (
        <View sx={itemFood.header as object}>
            <Text sx={styles.subtitle}>
                Finanzas
            </Text>
            <Text sx={styles.text}>
                Total ganado con esta preventa:
                <Text sx={styles.textBold}>
                    {` $${total.toFixed(2)}`}
                </Text>
            </Text>
            <Text sx={styles.text}>
                Número de preventas vendidas:
                <Text sx={styles.textBold}>
                    {` ${amount}`}
                </Text>
            </Text>
        </View>
    );
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