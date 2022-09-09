import { FavsState } from './FavsContext';
import { idDB } from '../../interfaces/UserInterfaces';
type AuthAction = {type:'AddFood',payload:{newArray:Array<string>}} | {type:'DeleteFood',payload:{newArray:Array<string>}}  | {type:'EmptyFood'}
export const favReducer = ( state: FavsState, action: AuthAction):FavsState => { //always return an AuthState type object
    switch(action.type){
        case 'AddFood':
            return {
                ...state,
                FoodIds:action.payload.newArray
            }
        case 'DeleteFood':
            return {
                ...state,
                FoodIds:action.payload.newArray
            }
        case 'EmptyFood':
            return{
                ...state,
                FoodIds:[]
            }
        default:
            return state;
    }
}