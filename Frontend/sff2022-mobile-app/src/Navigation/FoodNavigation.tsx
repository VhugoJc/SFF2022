import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FoodScreen from '../screens/user/FoodScreen';
import ItemFoodScreen from '../screens/user/ItemFoodScreen';
import TeamScreen from '../screens/user/TeamScreen';
import SelingPresaleScreen from '../screens/user/SelingPresaleScreen';

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
            <Stack.Screen  name="Comida" component={FoodScreen} />
            
            <Stack.Group screenOptions={{headerShown:false}}>
                <Stack.Screen  name="Mi Comida" options={{headerShown:false,presentation:"modal"}} component={ItemFoodScreen} />
                <Stack.Screen  name="Mi Pedido" options={{headerShown:false,presentation:"modal"}} component={SelingPresaleScreen} />
                <Stack.Screen  name="Equipo" component={TeamScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
