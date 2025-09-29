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
import SellerBanner from '../../components/Shared/SellerBanner';
import { FavContext } from '../../context/FavsContext/FavsContext';
import { AuthContext } from '../../context/authContext/AuthContext';
import { LocalDataService } from '../../utils/LocalDataService';
import productdb from '../../db/products.json';


export default function ItemFoodScreen() {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const route = useRoute<any>();

    const { presaleData } = route.params;

    const [favIcon, setfavIcon] = useState<boolean>(false);
    const [showHeader, setShowHeader] = useState<boolean>(false);
    const [resolvedProducts, setResolvedProducts] = useState<any[]>([]);

    const { addFood, deleteFood, favsState } = useContext(FavContext);
    const { authState } = useContext(AuthContext);

    useEffect(() => {
        const favs = favsState.FoodIds;
        const favExists = favs.find(item => item === presaleData._id);
        if (favExists) {
            setfavIcon(true);
        }

        // Resolve product ObjectId references to actual product data
        const resolveProducts = async () => {
            try {
                const products = await LocalDataService.getProducts();
                const resolved = presaleData.products.map((productRef: any) => {
                    const productId = typeof productRef === 'string' ? productRef : productRef.$oid;
                    return products.find((product: any) => {
                        const id = typeof product._id === 'string' ? product._id : product._id.$oid;
                        return id === productId;
                    });
                }).filter(Boolean); // Remove any undefined products
                
                setResolvedProducts(resolved);
            } catch (error) {
                console.error('Error resolving products:', error);
                setResolvedProducts([]);
            }
        };

        resolveProducts();
    }, [])

    const handleScroll = (e: any) => {
        const y = e.nativeEvent.contentOffset.y;
        if (y === 0) {
            setShowHeader(false);
        } else {
            setShowHeader(true);
        }
    }

    const handleFavs = (id: string) => {
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
                    <Text sx={Object.assign({}, styles.subtitle, { textTransform: 'uppercase', color: '$secondary', }) as object}>
                        {presaleData.name}
                    </Text>
                    <Text sx={Object.assign({}, styles.text, {fontFamily: 'Rubik-bold'})}>
                        {`$${presaleData.cost.toFixed(2)}`}
                    </Text>

                    <Text sx={styles.text}>
                        {presaleData.description}
                    </Text>

                    <Text sx={Object.assign({}, styles.subtitle, { textTransform: 'uppercase', color: '$secondary', }) as object}>
                        Incluye:
                    </Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View sx={styles.flexDirection as any}>
                        {
                            resolvedProducts.map((product: any, index: number) => {
                                return (
                                    <ProductsCard 
                                        key={product?._id || `product-${index}`} 
                                        product={product} 
                                    />
                                );
                            })
                        }
                    </View>
                </ScrollView>
                {
                    authState.user?.role === 'ADMIN_ROLE'
                        ? <PresaleAdminData id={presaleData._id} />
                        : <SellerBanner id={presaleData.sellerId} />

                }

                <View sx={itemFood.btnContainer}>
                    {
                        authState.status === 'authenticated' && authState.user?.role === 'USER_ROLE'
                            ? <LargeBtn name='Comprar preventa' onPress={() => navigation.navigate("Mi Pedido", {
                                presale: presaleData
                            })} />
                            : null
                    }
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
                const stats = await LocalDataService.getPresaleStatistics();
                settotal(stats.totalSales);
                setamount(stats.total);
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
        color: '$primary',
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