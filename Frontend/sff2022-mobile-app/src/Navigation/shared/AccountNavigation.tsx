import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../../screens/shared/AccountScreen';
import AuthorCredits from '../../screens/shared/AuthorCreditsScreen';
import ChangePasswordScreen from '../../screens/shared/ChangePasswordScreen';



const Stack = createStackNavigator();

export const AccountNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
            <Stack.Screen name="Mi Cuenta" 
                options={{headerShown:false}} 
                component={AccountScreen} 
            />
            <Stack.Screen name="Acerca de" component={AuthorCredits}/>
            {/* <Stack.Screen name="Cambiar contraseña" component={ChangePasswordScreen}/> */}
        </Stack.Navigator>
    )
}
