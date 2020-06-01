import axios from 'axios'
import *  as actionType from './actionType'

let url = 'http://localhost:5000/register'

export const signupRedirect = ()=>{
  return{
    type:actionType.SIGNUP_REDIRECT,
  }
}

export const signup = (username,email,first,last,full,pass)=>{
    let data = {
        username:username,
        email_id:email,
        first_name:first,
        last_name:last,
        full_name:full,
        password:pass
    }
  return  dispatch=>{
    axios.post(url,data).then(res=>{
      dispatch(signupRedirect())
    }).catch(err=>{})
    }
}
