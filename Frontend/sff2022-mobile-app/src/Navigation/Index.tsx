import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import LoadingScreen from '../screens/shared/LoadingScreen';
import HomeScreen from '../screens/user/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Navigation() {
    const { authState } = useContext(AuthContext);
    
    console.log('Auth State:', authState.status);
    
    if(authState.status==='checking'){
        return <LoadingScreen/>
    }

    // Navegación con el HomeScreen original
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#1D3557',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{ title: 'SFF 2022' }}
            />
        </Stack.Navigator>
    );
}