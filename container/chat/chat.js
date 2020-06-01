import React,{Component} from 'react'
import socketIOClient from "socket.io-client";
import Button from '../../component/UI/Button/Button';
import {connect} from 'react-redux';
import classes from './chat.module.css';

const ENDPOINT = "http://127.0.0.1:5002";
const socket = socketIOClient(ENDPOINT);

const connecti = ()=>{
    console.log('connect')
    socket.on('connect', () => {
        console.log(socket.connected,socket.id); // true
      });
}

class Chat extends Component{
    state = {
        sentmessage :[],
        recievedmessage:[],
        data_new:null,
        new_send:null,
        value:''
    }
    componentWillMount(){
        console.log('component will mount')
        connecti()
        this.create_room()
        this.join_room()
        this.recieve()
        socket.on('connect', (data) => {
            console.log(socket.connected,socket.id,'parayus',data); // true
          });
    }
    
    recieve = ()=>{socket.on("message", data => {
        console.log(data)
       let x = this.state.recievedmessage.concat(data.sender+': '+data.message)
        this.setState({recievedmessage:x,
        data_new:data}) 
    })
      }
      
    send = ()=>{
        console.log(this.state.new_send)
        let data = {
            'message':this.state.value,
            'room':this.props.room,
            'sender':this.props.sender
        }
        console.log(data)
        socket.send(data)
    }
    create_room = ()=>{
       let data = {
            'user1':this.props.user1,
            'user2':this.props.user2,
        }
        socket.emit('create',data)
    }
    join_room = ()=>{
        let data = {
            'user1':this.props.user1,
            'user2':this.props.user2,
            'room':this.props.room
        }
        socket.send('join',data)
    }
    submit = (event)=>{
        event.preventDefault()
        console.log(this.state.value)
       let  x = this.state.sentmessage.concat(this.state.value)
        this.setState({sentmessage:x,new_send:this.state.value})
        this.send()
    }
    inpuchangeHandler= (event) =>{
        this.setState({value:event.target.value})
    }
    
    render(){
       let input = (<input type = 'text'onChange = {(event)=>this.inpuchangeHandler(event)}></input>)

        let recieved = this.state.recievedmessage.map(value=>
        <p>{Date()}:{value}</p>)
        return(
            <div>
            <div className = {classes.Chat}>
                <h3>Chat Message</h3>
                {recieved}
            </div>
            <div>
                <form onSubmit = {this.submit}>
                {input}
                <Button btnType ='Success' >Send</Button>
                </form>
               
            </div></div>
        )
    }


}
const mapStateToProps = state =>{
    return{
    user1:state.chat.user1,
    user2:state.chat.user2,
    sender:state.chat.sender,
    reciever:state.chat.reciever,
    room:state.chat.room,}
}


export default connect(mapStateToProps)(Chat)