import React, { createContext, useEffect, useReducer } from "react"
import { favReducer } from './FavReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface FavsState {
    FoodIds:string[]
}

//initital state
export const favInitialState: FavsState ={
    FoodIds:[]
}

//what share the context
export interface FavsContextProps {
    favsState: FavsState;
    addFood:(id:string)=>void
    deleteFood:(id:string)=>void,
    empty:()=>void
}

//create context
export const FavContext = createContext({} as FavsContextProps);

export default function FavProvider({children}:any) {
    const [favsState, dispatch] = useReducer(favReducer, favInitialState);

    useEffect(()=>{
        getFavs();
    },[]);
    const getFavs = async()=>{
        const getFavs = await AsyncStorage.getItem('favs');
        if(!getFavs){//if favs doesnt exist
            return dispatch({type:'EmptyFood'});
        }
        const favsFood:any=await AsyncStorage.getItem('favs');
        const favsFoodArray = JSON.parse(favsFood);
        dispatch({type:'AddFood',payload:{newArray:favsFoodArray}});
    }

    const addFood = async(id:string)=>{
        let newArray=[...favsState.FoodIds,id];
        await AsyncStorage.setItem('favs', JSON.stringify(newArray));
        dispatch({type:'AddFood',payload:{newArray}});
        console.log(favsState.FoodIds);
        
    }
    const deleteFood = async(id:string)=>{
        let newArray = favsState.FoodIds;
        newArray = newArray.filter(item=>item!==id);
        await AsyncStorage.setItem('favs', JSON.stringify(newArray));
        dispatch({type:'DeleteFood',payload:{newArray:newArray}})
    }

    const empty=async()=>{
        await AsyncStorage.removeItem('favs');
        dispatch({type:'EmptyFood'});
    }
    return(
        <FavContext.Provider
            value={{
                favsState,
                addFood,
                deleteFood,
                empty
            }}
        >
            {children}
        </FavContext.Provider>
    );
}
