import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MoneyScreen from '../../screens/admin/MoneyScreen';
import NewSale from '../../screens/admin/NewSale';
import OldSales from '../../screens/admin/OldSales';
import PaidPresaleScreen from '../../screens/shared/PaidPresaleScreen';



const Stack = createStackNavigator();

export const MoneyNav = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
        <Stack.Screen  name="Mis Ventas"  component={MoneyScreen} />
        <Stack.Screen  name="Nueva Venta" options={{headerShown:false,presentation:"modal"}} component={NewSale} />   
        <Stack.Screen  name="Ventas Anteriores"  component={OldSales} /> 
        <Stack.Screen name="Mi Preventa"  options={{headerShown:false,presentation:"modal"}} component={PaidPresaleScreen} />
         
        </Stack.Navigator>
    )
}
