import React,{Component} from 'react';
import classes from './friend.module.css';
import Button from '../../component/UI/Button/Button'
import {connect} from 'react-redux';
import Input from '../UI/Input/Input'
import * as actionType from '../../store/actions/index'

class Friend extends Component{
    // const friend = [];
    // for (let friendName in props.friends ){
    //     friend.push({
    //         name:friendName,
    //         user_id:props.friend[friendName].user_id
    //     })
    // }
 
componentDidMount(){
    console.log(this.props.friend)
}
    
    render(){
 
    let friendOutput = <p><strong>No, friends yet are u only make some</strong></p>
    if (this.props.friends != null){
    friendOutput = this.props.friends.map(igKey=>{
    return(
    <div>
    <span 
    style = {{textTransform:'capitalize',
            display:'inline-block',
        margin:'0 8px',
    // border:'1px solid #ccc',
padding:'5px'}}
    key = {igKey.id}> Username: {igKey.username} </span>
    <Button btnType ='Success' clicked = {this.props.chatwith(this.props.userid,igKey.id,'You',igKey.username)} 
     >Chat</Button>
    <Button btnType ='Danger' clicked= {this.props.declineRequest(igKey.id)}>Unfriend</Button>
    </div>
    )})
    }

    let pendingOutput = (<p><strong>Pending Request not Available</strong></p>)
    if (this.props.pending_request != null){
    pendingOutput = this.props.pending_request.map(igKey=>{
    return(
    <div>
    <span 
    style = {{textTransform:'capitalize',
            display:'inline-block',
        margin:'0 8px',
    // border:'1px solid #ccc',
padding:'5px'}}
    key = {igKey.id}> Username: {igKey.username} </span>
    <Button btnType ='Success' clicked = {this.props.acceptRequest(igKey.id)}>Accept</Button>
    <Button btnType ='Danger' clicked= {this.props.declineRequest(igKey.id)}>Decline</Button>
    </div>
    )})
    }

    let Recievedmessages = <p>No Recieved Messages yet</p>
    if (this.props.recievedMessage){
        Recievedmessages = this.props.recievedMessage.map(igKey=>{
            return(
            <div>
            <span 
            style = {{textTransform:'capitalize',
                    display:'inline-block',
                margin:'0 8px',
            // border:'1px solid #ccc',
        padding:'5px'}}>  {igKey} </span>
            </div>
            )})
    }
    let SentMessage = <p>Send some Messages</p>
    if (this.props.sentMessage){
        SentMessage = this.props.sentMessage.map(igKey=>{
            return(
            <div>
            <span 
            style = {{textTransform:'capitalize',
                    display:'inline-block',
                margin:'0 8px',
            // border:'1px solid #ccc',
        padding:'5px'}}>  {igKey} </span>
            </div>
            )})
    }

    
    return(
        <div>
            
    <div className = {classes.Pending}>
    <h3>Pending Requests</h3>
        <p>{pendingOutput}</p>

    </div>
    
    <div className = {classes.Order}>
    <h3>Friends</h3>
    <p>{friendOutput} </p>
    </div>
    
    </div>
    )
    
}}

const mapStateToProps = (state)=>{
    return{
    userid :state.auth.user_id,
    loading:state.friend.loading,
    friends:state.friend.friends,
    pending_request:state.friend.pending_request,
    }
}
const mapDispatchToProps = dispatch =>{
    return{

        declineRequest: (id)=>dispatch(actionType.declineRequest(id)),
        acceptRequest: (id)=>dispatch(actionType.acceptRequest(id)),
        chatwith :(user1,user2,username1,username2)=>dispatch(actionType.chatWith(user1,user2,username1,username2))

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friend);