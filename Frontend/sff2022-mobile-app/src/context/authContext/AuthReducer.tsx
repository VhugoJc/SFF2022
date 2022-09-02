import { AuthState } from './AuthContext';
import { User } from '../../interfaces/UserInterfaces';


type AuthAction = {type:'SignIn', payload: {user:User,status:string,token:string} } | {type:'LogOut'} |  {type:'loading'}

export const authReducer = ( state: AuthState, action: AuthAction):AuthState => { //always return an AuthState type object
    switch(action.type){
        case 'SignIn':
            return {
                ...state,
                user: action.payload.user,
                status:'authenticated',
                token:action.payload.token
            }
        case 'LogOut':
            return {
                ...state,
                user: undefined,
                status:'no-authenticated',
            }
        case 'loading':
            return {
                ...state,
                status:'checking'
            }
        default:
            return state;
            break;
    }
}