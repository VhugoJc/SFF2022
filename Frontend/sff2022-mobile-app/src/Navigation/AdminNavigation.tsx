import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAdminScreen from '../screens/admin/HomeAdminScreen';
import { Icon } from '@rneui/base';
import ProductsScreen from '../screens/admin/ProductsScreen';
import PresalesAdmn from '../screens/admin/PresalesAdmn';
import MoneyScreen from '../screens/admin/MoneyScreen';
import AccountScreen from '../screens/user/AccountScreen';

export default function AdminNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
        screenOptions={
            ({route})=>({
                tabBarActiveTintColor:"#457B9D",//$primary
                tabBarInactiveTintColor:"rgba(29,53,87,0.7)",//$primaryTransparent
                tabBarLabelStyle:{
                    fontFamily:'Rubik-regular'
                },
                tabBarIcon:({color,size})=>screenOptions(route,color,size),
                headerTitleStyle:{
                    fontFamily:'Rubik-regular'
                },
            })
        }
        >
            <Tab.Screen name='HomeAdmn' options={{headerShown:false, title:"Home"}} component={HomeAdminScreen}/>
            <Tab.Screen name='ProductAdmn' options={{title:"Mis Productos"}} component={ProductsScreen}/>
            <Tab.Screen name='PresalesAdmn' options={{ title:"Mis Preventas"}} component={PresalesAdmn}/>
            <Tab.Screen name='MoneyAdmn' options={{title:"Mis Finanzas"}} component={MoneyScreen}/>
            <Tab.Screen name='AccountAdmn' options={{headerShown:false, title:"Mi Cuenta"}} component={AccountScreen}/>
        </Tab.Navigator>
    )
}

const screenOptions = (route: any, color: any, size: any) => {
    let iconName = '';
    switch (route.name) {
        case 'HomeAdmn':
            iconName = 'home';
            break;
        case 'ProductAdmn':
            iconName = 'lunch-dining';
            break;
        case 'PresalesAdmn':
            iconName = 'shopping-bag';
            break;
        case 'MoneyAdmn':
            iconName = 'payment';
            break;
        case 'AccountAdmn':
            iconName = 'account-circle';
            break;
        default:
            break;
    }
    return <Icon type='material' name={iconName} color={color}  size={size}/>

}