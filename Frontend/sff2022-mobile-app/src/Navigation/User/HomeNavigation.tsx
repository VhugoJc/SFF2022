import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Entreteinment from '../../screens/user/EntertainmentScreen';
import HomeScreen from '../../screens/user/HomeScreen';



const Stack = createStackNavigator();//se establerce el tipo con las paginas que se usaran y los params

export const HomeNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
            <Stack.Screen  name="Home" options={{headerShown:false}} component={HomeScreen} />
            <Stack.Screen name="Entretenimiento" component={Entreteinment} />
        </Stack.Navigator>
    )
}
