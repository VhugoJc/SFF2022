
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/shared/LoginScreen';
import SignUpScreen from '../../screens/shared/SignUpScreen';

export default function LoginNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleStyle: {
                    fontFamily: 'Rubik-regular',
                },
            }}
        >
            <Stack.Screen name="LogIn" options={{ headerShown:false }} component={LoginScreen} />
            <Stack.Screen name="SignUp" options={{ headerShown:false }} component={SignUpScreen} />
        </Stack.Navigator>
    )
}