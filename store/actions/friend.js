import * as actionType from './actionType';
import axios from 'axios';

let token = localStorage.getItem('access_token');
let yourConfig = {
    headers: {
       Authorization: "Bearer " + token
    }
 }
let url = 'http://127.0.0.1:5000/friends'


export const listStart = ()=>{
    console.log(token)
    return{
        type:actionType.LIST_START
    }
}

export const listFetched = ()=>{
    return{
        type:actionType.LIST_FETCHED
    }
}

export const friends = (friend)=>{
    return{
        type:actionType.FRIEND_LIST,
        friend : friend
    }
}

export const pendingRequests = (pendingRequest)=>{
    return{
        type:actionType.PENDING_REQUESTS,
        pendingRequest : pendingRequest
    }
}

export const requestsendfreinds = ()=>{
    return dsipatch=>{
        axios.get(url,yourConfig).then(res=>{
            console.log(res)
            dsipatch(listStart())
            dsipatch(friends(res.data.friends))
            dsipatch(pendingRequests(res.data.pending))
            dsipatch(listFetched())
        })
    }
}