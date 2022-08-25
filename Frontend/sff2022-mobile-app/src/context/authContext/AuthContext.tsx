import { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";
import { userAPI } from '../../api/UserApi';
import { loginResponse, LoginData, User } from '../../interfaces/UserInterfaces';

// my info 
export interface AuthState {
    user?: User,
    isLoggedIn:boolean
}

//initital state
export const authInitialState: AuthState ={
    user:undefined,
    isLoggedIn:false,
    
}

//what share the context
export interface AuthContextProps {
    authState: AuthState;
    signIn: (loginData:LoginData) => void;
    logOut: () => void;
}

//create context
export const AuthContext = createContext({} as AuthContextProps);

//state provider
export const AuthProvider = ({children}:any) =>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);


    const signIn = async ({email,password}: LoginData) => {
        console.log(email);
        
        try{
            const {data} = await userAPI.post<loginResponse>('/auth/login',{email,password});
            console.log(data);
            dispatch({type:'SignIn',payload:{user:data.user, isLogged:true}});
            
        }catch(err){
            console.log(err);
            
        }
    }
    const logOut = () => {

        dispatch({type:'LogOut'});
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    );
}