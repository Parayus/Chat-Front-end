import React,{Component} from 'react';
import Layout from './component/layout/layout'
import Signup from './container/auth/signup/signup';
import Login from './container/auth/login/login';
import Friend from './container/friend/friend';
import Logout from './container/auth/logout/logout';
import Chaty from './container/chat/chat'
import  {Switch,Route,Redirect} from 'react-router-dom';
import * as actionType from './store/actions/index'
import {connect} from 'react-redux'

class App extends Component{

  componentDidMount(){
    console.log(this.props.isAuthentiacted)
    
    this.props.autoLogout()

  }
  render(){
    let x = 'parayus';
    let route = (

      <Switch>
        <Route path='/' exact component = {Login}></Route>
        <Route path='/chat' exact component = {Friend}></Route>
        <Route path='/logout' exact component = {Logout}></Route>
        <Redirect to ='/'></Redirect>
      </Switch>


    )
    if (this.props.isAuthentiacted===null){
      route = (
      <Switch>
      <Route path='/' exact component = {Login}></Route>
      <Route path='/signup' exact component = {Signup}></Route>
      <Redirect to ='/' component = {Login}></Redirect>
      </Switch>)
    }
    let page= null
    if (this.props.isAuthentiacted!=null){
      page = <Redirect to = '/chat'></Redirect>
    }
  return(
    <div>
      <Layout>
      {route}
      {page}
      </Layout>
    </div>
  )
}
}
const mapStatetoprops = (state)=>{
  return{
  isAuthentiacted:state.auth.access_token
}
}
const dispatchStatetoProps = (dispatch)=>{
  return{
    autoLogout: ()=>dispatch(actionType.authCheckState())
  }
}

export default connect(mapStatetoprops,dispatchStatetoProps)(App);
