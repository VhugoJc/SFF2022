import { AuthState } from './AuthContext';
import { User } from '../../interfaces/UserInterfaces';

type AuthAction = {type:'SignIn', payload: {user:User,isLogged:boolean} } | {type:'LogOut'}

export const authReducer = ( state: AuthState, action: AuthAction):AuthState => { //always return an AuthState type object
    switch(action.type){
        case 'SignIn':
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn:action.payload.isLogged
            }
        case 'LogOut':
            return {
                ...state,
                user: undefined,
                isLoggedIn:false
            }
        default:
            return state;
            break;
    }
}