import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAdminScreen from '../../screens/admin/HomeAdminScreen';
import { Icon } from '@rneui/base';
import MoneyScreen from '../../screens/admin/MoneyScreen';
import { ProductsNav } from './ProductsNav';
import { AccountNavigation } from '../shared/AccountNavigation';
import { PresalesNav } from './PresalesNav';
import { MoneyNav } from './MoneyNav';

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

            <Tab.Screen name='ProductAdmn' options={{headerShown:false, title:"Mis Productos"}} component={ProductsNav}/>
            <Tab.Screen name='PresalesAdmn' options={{headerShown:false,title:"Mis Preventas"}} component={PresalesNav}/>

            <Tab.Screen name='MoneyAdmn' options={{headerShown:false, title:"Mis Ventas"}}  component={MoneyNav}/>
            <Tab.Screen name='AccountAdmn' options={{headerShown:false, title:"Mi Cuenta"}} component={AccountNavigation}/>
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