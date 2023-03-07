import {R_FAILURES,R_SUCCESS} from "../constants/restaurantConstants"



export const restaurantListReducers=(state={restaurantList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return{
                restaurantList:action.payload
            }
            case R_FAILURE:
                return{
                    restaurantList:action.error
                }
                default:
                    return state
    }

}