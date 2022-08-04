import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from '../screens/user/FoodScreen';
import ItemFoodScreen from '../screens/user/ItemFoodScreen';
import { styles } from '../theme/stylesheet';



const Stack = createStackNavigator();

export const FoodNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
            <Stack.Screen  name="Comida" options={{headerShown:false}} component={FoodScreen} />
            <Stack.Screen  name="Mi Comida" options={{headerShown:false,presentation:"modal"}} component={ItemFoodScreen} />
        </Stack.Navigator>
    )
}
