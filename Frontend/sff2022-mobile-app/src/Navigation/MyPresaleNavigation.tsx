import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PreSalesScreen from '../screens/user/PreSalesScreen';
import PaidPresaleScreen from '../screens/shared/PaidPresaleScreen';

const Stack = createStackNavigator();

export const MyPresaleNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Rubik-regular',
                },
            }}
        >
            <Stack.Screen name="Mis Preventas" component={PreSalesScreen} />
            <Stack.Screen name="Mi Preventa"  options={{headerShown:false,presentation:"modal"}} component={PaidPresaleScreen} />
        </Stack.Navigator>
    )
}
