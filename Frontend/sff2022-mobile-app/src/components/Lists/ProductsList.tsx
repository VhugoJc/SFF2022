import { View, Text } from 'react-native'
import React from 'react'
import ProductCard from '../Cards/ProductCard';

interface Props {
    products: Array<any>
}

export default function ProductsList({ products }: Props) {

    return (
        <View>
            {
                products.map(item => {
                    return <ProductCard
                        key={item.product._id}
                        name={item.product.name}
                        description={item.product.description}
                        img={ item.product?.img ?item.product.img :'https://dicesabajio.com.mx/wp-content/uploads/2021/06/no-image.jpeg'}
                        amount={item.product.amount*item.sold}
                    />
                })
            }
        </View>
    )
}