import * as actionType from './actionType'

export const setChat = (user1,user2,username1,username2)=>{
    return{
        type:actionType.SET_CHAT,
        user1:user1,
        user2:user2,
        sender:username1,
        reciever:username2,
        room:user1||user2
    }
}
export const setting = ()=>{
    return{
        type:actionType.SETTING
    }
}


export const chatWith = (user1,user2,username1,username2)=>{
    return dispatch =>{
        dispatch(setting())
        dispatch(setChat(user1,user2,username1,username2))
    }
}