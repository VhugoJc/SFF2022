import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAdminScreen from '../screens/admin/HomeAdminScreen';
import { Icon } from '@rneui/base';

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
        </Tab.Navigator>
    )
}

const screenOptions = (route: any, color: any, size: any) => {
    let iconName = '';
    switch (route.name) {
        case 'HomeAdmn':
            iconName = 'home';
            break;
        default:
            break;
    }
    return <Icon type='material' name={iconName} color={color}  size={size}/>

}