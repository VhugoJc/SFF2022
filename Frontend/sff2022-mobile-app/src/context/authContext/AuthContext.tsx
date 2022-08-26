import { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";
import { userAPI } from '../../api/UserApi';
import { loginResponse, LoginData, User } from '../../interfaces/UserInterfaces';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect} from 'react';

// my info 
export interface AuthState {
    user?: User | null,
    status:'checking' | 'authenticated' | 'no-authenticated',
    token: string | null
}

//initital state
export const authInitialState: AuthState ={
    user:null,
    status:'no-authenticated',
    token: null
    
}

//what share the context
export interface AuthContextProps {
    authState: AuthState;
    signIn: (loginData:LoginData) => void;
    logOut: () => void;
    loading:() => void;
}

//create context
export const AuthContext = createContext({} as AuthContextProps);

//state provider
export const AuthProvider = ({children}:any) =>{
    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(()=>{
        getToken();
    },[]);

    const getToken =async ()=>{
        const token = await AsyncStorage.getItem('token');
        if(!token){
            return logOut();
        }
        //if token exists
        const resp = await userAPI.get('/auth');
        if(resp.status!==200){
            return logOut();
        }
        dispatch({type:'SignIn',payload:{user:resp.data.user, token:resp.data.token, status:'authenticated'}});
        
    }

    const signIn = async ({email,password}: LoginData) => {
        console.log(email,email);
        
        try{
            const {data} = await userAPI.post<loginResponse>('/auth/login',{email,password});
            console.log(data);
            dispatch({type:'SignIn',payload:{user:data.user, token:data.token, status:'authenticated'}});
            await AsyncStorage.setItem("token",data.token);
            
        }catch(err){
            console.log(err);
            logOut();
        }
    }
    const logOut = () => {
        dispatch({type:'LogOut'});
    }

    const loading = () =>{
        dispatch({type:'loading'});
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
}