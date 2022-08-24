import { createContext, useReducer } from "react"
import { authReducer } from "./AuthReducer";

// my info 
export interface AuthState {
    isLoggedIn: boolean,
    userName?: string,
    userId?: string,
    role?: string,
}

//initital state
export const authInitialState: AuthState ={
    isLoggedIn:false,
    userName:undefined,
    userId:undefined,
    role:undefined,
    
}

//what share the context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
}

//create context
export const AuthContext = createContext({} as AuthContextProps);

//state provider
export const AuthProvider = ({children}:any) =>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {

        dispatch({type:'SignIn'});
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