import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import EditPresaleScreen from '../../screens/admin/EditPresaleScreen';
import PreSalesScreen from '../../screens/user/PreSalesScreen';
import PresalesAdmn from '../../screens/admin/PresalesAdmn';



const Stack = createStackNavigator();

export const PresalesNav = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitleStyle:{
                fontFamily:'Rubik-regular',
            },
        }}
        >
        <Stack.Screen  name="Mis Preventas"  component={PresalesAdmn} />
        <Stack.Screen  name="Editar Preventa" options={{headerShown:false,presentation:"modal"}} component={EditPresaleScreen} />   
        </Stack.Navigator>
    )
}
