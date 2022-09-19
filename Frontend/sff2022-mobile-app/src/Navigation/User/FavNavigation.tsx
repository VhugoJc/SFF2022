import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ItemFoodScreen from '../../screens/user/ItemFoodScreen';
import FavoritesScreen from '../../screens/user/FavoritesScreen';

const Stack = createStackNavigator();

export const FavNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
            <Stack.Screen  name="Favoritos" component={FavoritesScreen}/>
            
            <Stack.Group screenOptions={{headerShown:false}}>
                <Stack.Screen  name="Mi Comida Fav" options={{headerShown:false,presentation:"modal"}} component={ItemFoodScreen} />
            </Stack.Group>
        </Stack.Navigator>
    )
}
