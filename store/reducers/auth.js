import * as actionTypes from '../actions/actionType';

const intialState = {
    access_token :null,
    refresh_token:null,
    username:null,
    loading:false,
    error:null,
    authRedirect:'/',
    user_id:null
}

const reducer = (state = intialState,action) =>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading:true,
                error:null
            }
        case(actionTypes.AUTH_SUCCESS):
        return{
            ...state,
            access_token:action.access_token,
            refresh_token:action.refresh_token,
            username:action.username,
            user_id:action.user_id,
            loading:false,
            error:null
        }
        case(actionTypes.AUTH_FAIL):
        return{
            ...state,
            error:action.error,
            loading:false
        }
        case(actionTypes.AUTH_LOGOUT):
        return{
            ...state,
            access_token:null,
            refresh_token:null,
            username:null,
        }
        case(actionTypes.AUTH_REDIRECT):
        return{
            ...state,
            authRedirect:action.path
        }
        default:return state
    }
}
export default reducer