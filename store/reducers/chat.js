import * as actionType from '../actions/actionType'


const initialState = {
    user1:null,
    user2:null,
    sender:null,
    reciever:null,
    room:null,
    loading:false,
    enable:false
}

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case (actionType.SET_CHAT):
            return{
                ...state,
                user1:action.user1,
                user2:action.user2,
                sender:action.sender,
                reciever:action.reciever,
                room:action.room,
                loading:false,
                enable:true
            }
            
        case (actionType.SETTING):
            return{
                ...state,
                loading:true
            }
        default: return state
    }
}

export default reducer