import * as actionTypes from './actionType';
import axios from 'axios';


let token = localStorage.getItem('access_token');
let yourConfig = {
    headers: {
       Authorization: "Bearer " + token
    }
 }
let url = 'http://127.0.0.1:5000/';
export const requestUnderProcess = ()=>{
    return{
        actionType:actionTypes.REQUEST_UNDER_PROCESS
    }

} 
export const requestaccepted = ()=>{
    return{
        actionType:actionTypes.ACCEPT_REQUEST
    }

} 
export const requestdecline = ()=>{
    return{
        actionType:actionTypes.DECLINCE_REQUEST
    }
} 
export const requestsend = ()=>{
    return{
        actionType:actionTypes.SEND_REQUEST
    }
} 
export const requestFail = (error)=>{
    return{
        actionType:actionTypes.REQUEST_UNDER_PROCESS,
        error:error
    }
} 

export const declineRequest = (id)=>{
    let x  = url+id
    return dispatch =>{
        axios.delete(x,yourConfig).then().catch(err=>{
            // dispatch(requestFail(err.message))
        })
    }
}

export const acceptRequest = (id)=>{
    return dispatch =>{
        axios.put(url+id,yourConfig).then().catch(err=>{
            // dispatch(requestFail(err.message))
        })
    }
}
export const sendRequest = (id)=>{
    return dispatch =>{
        axios.post(url+id,yourConfig).then().catch(err=>{
            // dispatch(requestFail(err.message))
        })
    }
}