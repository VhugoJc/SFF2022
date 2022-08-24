import { AuthState } from './AuthContext';

type AuthAction = {type:'SignIn' | 'LogOut'}

export const authReducer = ( state: AuthState, action: AuthAction):AuthState => { //always return an AuthState type object
    switch(action.type){
        case 'SignIn':
            return {
                ...state,
                isLoggedIn:true,
                userName:'no-username-yet',
                role:'user'
            }
        case 'LogOut':
            return {
                ...state,
                isLoggedIn:false,
                userName:undefined,
                userId:undefined,
                role:undefined,
            }
        default:
            return state;
            break;
    }
}