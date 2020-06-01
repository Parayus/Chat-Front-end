import * as actionType from '../actions/actionType'

const initialState = {
    path:'/'
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case actionType.SIGNUP_REDIRECT:
            return{
                ...state,
                path:'/'
            }
        default: return state
    }

}

export default reducer