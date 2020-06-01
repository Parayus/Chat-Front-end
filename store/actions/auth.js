import * as actionType from './actionType';
import axios from 'axios';


let token = localStorage.getItem('access_token');
let yourConfig = {
    headers: {
       Authorization: "Bearer " + token
    }
 }
export const authStart = ()=>{
    return{
        type:actionType.AUTH_START
    }
}

export const authSuccess = (access_token,refresh_token,username,user_id)=>{
    return{
        type:actionType.AUTH_SUCCESS,
        access_token:access_token,
        refresh_token: refresh_token,
        username:username,
        user_id:user_id
    }
}

export const authFail = (error)=>{
    return{
        type:actionType.AUTH_FAIL,
        error:error
    }
}

export const logout= () =>{
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('username')
    localStorage.removeItem('userid')
    return{
        actionType:actionType.AUTH_LOGOUT
    }
}

export const auth_logout = ()=>{
    return dispatch =>{
        let url = 'http://127.0.0.1:5000/logout'
        axios.post(url,yourConfig).then(res=>{
            dispatch(logout())
        })
    }
}

export const checkAuthTimeout=(expiresin)=>{
    return dsipatch =>{
        setTimeout(() => {
            dsipatch(logout())
        }, expiresin*1000);
    }
}

export const auth =(email,password)=>{
    return dsipatch =>{
        dsipatch(authStart())
        const authData = {
            email_id:email,
            password:password
        }
        let url = 'http://127.0.0.1:5000/login'
        axios.post(url,authData).then(res=>{
            // const expirationDate = new Date(new Date().getTime()+res.data.expiresIn*1000)
            console.log(res)
            localStorage.setItem('access_token',res.data.access_token)
            localStorage.setItem('refersh_token',res.data.refresh_token)
            localStorage.setItem('username',res.data.username)
            localStorage.setItem('userid',res.data.user_id)
            dsipatch(authSuccess(res.data.access_token,res.data.refresh_token,res.data.username,res.data.user_id))
            // dispatch(checkAuthTimeout(res.data.expiresIn))
        }).catch(err=>{
            dsipatch(authFail(err.data.message))
        })
    }
}

export const authRedirect = (path)=>{
    return{
        actionType:actionType.AUTH_REDIRECT,
        path:path
    }
}

export const authCheckState= ()=>{ 
    return dispatch=>{
        const access_token = localStorage.getItem('access_token')
        const refresh_token = localStorage.getItem('refresh_token')
        const username = localStorage.getItem('username')
        const user_id = localStorage.getItem('userid')
        if(!access_token){
            return dispatch(auth_logout())
        }else{
            return dispatch(authSuccess(access_token,refresh_token,username,user_id))
        }
        }
        // }else{
        //     const expirationDate = new Date(localStorage.getItem('expirationDate'))
        //     if(expirationDate<new Date()){
        //         dispatch(logout())
        //     }else{
        //         const userId = localStorage.getItem('userId')
        //         dispatch(authSuccess(token,userId))
        //         dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
        //     }
        }