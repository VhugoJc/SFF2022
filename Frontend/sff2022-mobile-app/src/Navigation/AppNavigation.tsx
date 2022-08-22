import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Icon} from "@rneui/base"; //react native elements

import {StackScreenProps } from '@react-navigation/stack';


//navigation stacks
import { HomeNavigation } from './HomeNavigation';
import { FoodNavigation } from './FoodNavigation';
import { AccountNavigation } from './AccountNavigation';


// single screens
import FavoritesScreen from '../screens/user/FavoritesScreen';
import PreSalesScreen from '../screens/user/PreSalesScreen';
import { MyPresaleNavigation } from './MyPresaleNavigation';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
    return(
        <Tab.Navigator
        screenOptions={
            ({route})=>({
                tabBarActiveTintColor:"#457B9D",//$primary
                tabBarInactiveTintColor:"rgba(29,53,87,0.7)",//$primaryTransparent
                // tabBarInactiveTintColor:"#A8DADC",//$blueLight
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
        <Tab.Screen name='HomeNav' options={{headerShown:false, title:"Home"}} component={HomeNavigation}/>
        <Tab.Screen name='FoodNav' initialParams={{status:"Equipo"}} options={{headerShown:false, title:"Comida"}} component={FoodNavigation}/>
        <Tab.Screen name='Favoritos' component={FavoritesScreen}/>
        <Tab.Screen name='PresaleNav'options={{headerShown:false, title:"Mis Preventas"}}  component={MyPresaleNavigation}/>
        <Tab.Screen name='AccountNav' component={AccountNavigation} options={{headerShown:false,title:"Mi cuenta"}}/>
    </Tab.Navigator>
    ); 
}


const screenOptions = (route:any, color:any, size:any) =>{
    let iconName='';
    switch(route.name){
        case 'HomeNav':
            iconName='home';
            break;

        case 'FoodNav':
            iconName='restaurant';
            break;

        case 'Favoritos':
            iconName='favorite';
            break;

        case 'PresaleNav':
            iconName='shopping-bag';
            break;

        case 'AccountNav':
            iconName='person';
            break;

        default:
        break;
    }
    return <Icon type='material' name={iconName} color={color}  size={size}/>
}

