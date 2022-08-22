import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductsScreen from '../../screens/admin/ProductsScreen';
import EditProductsScreen from '../../screens/admin/EditProductsScreen';



const Stack = createStackNavigator();

export const ProductsNav = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
        <Stack.Screen  name="Mis Productos"  component={ProductsScreen} />
        <Stack.Screen  name="Editar Producto" options={{headerShown:false,presentation:"modal"}} component={EditProductsScreen} />   
        </Stack.Navigator>
    )
}
