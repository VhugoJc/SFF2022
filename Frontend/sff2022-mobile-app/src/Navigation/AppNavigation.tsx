import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "@rneui/base"; //react native elements


import HomeScreen from '../screens/user/HomeScreen';
import FoodScreen from '../screens/user/FoodScreen';
import FavoritesScreen from '../screens/user/FavoritesScreen';
import PreSalesScreen from '../screens/user/PreSalesScreen';
import AccountScreen from '../screens/user/AccountScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Tab.Navigator 
        screenOptions={
            ({route})=>({
                tabBarActiveTintColor:"#1D3557",//$primary
                tabBarInactiveTintColor:"#A8DADC",//$secondary
                tabBarLabelStyle:{
                    fontFamily:'Rubik-regular'
                },
                tabBarIcon:({color,size})=>screenOptions(route,color,size),
                headerShown:headerManager(route),
                headerTitleStyle:{
                    fontFamily:'Rubik-regular'
                }
            })
        }
        
        >
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Comida' component={FoodScreen}/>
        <Tab.Screen name='Favoritos' component={FavoritesScreen}/>
        <Tab.Screen name='Mis Preventas' component={PreSalesScreen}/>
        <Tab.Screen name='Mi Cuenta' component={AccountScreen}/>
    </Tab.Navigator>
  )
}


const screenOptions = (route:any, color:any, size:any) =>{
    let iconName='';
    switch(route.name){
        case 'Home':
            iconName='home';
            break;

        case 'Comida':
            iconName='restaurant';
            break;

        case 'Favoritos':
            iconName='favorite';
            break;

        case 'Mis Preventas':
            iconName='payment';
            break;

        case 'Mi Cuenta':
            iconName='person';
            break;

        default:
        break;
    }

    return <Icon type='material' name={iconName} color={color}  size={size}/>
}

const headerManager = (route:any)=>{
    if(route.name==='Home'){
        return false;
    }

    return true;
}
