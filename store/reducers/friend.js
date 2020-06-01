import * as actionTypes from '../actions/actionType'

const initialState = {
    friends:null,
    pending_request:null,
    loading:false,
}

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case(actionTypes.LIST_START):
            return{
                ...state,
                loading:true
        }
        case(actionTypes.LIST_FETCHED):
            return{
                ...state,
                loading:false
            }
        case(actionTypes.PENDING_REQUESTS):
            return{
                ...state,
                pending_request:action.pendingRequest
            }
        case(actionTypes.FRIEND_LIST):
        // console.log(action.friend)
            return{
                ...state,
                friends: action.friend,
                loading:false
            }
        default: return state
    }
    
}
export default reducer