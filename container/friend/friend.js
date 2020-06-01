import React ,{Component} from 'react'
import Friend from '../../component/friend/friend'
import * as actionType from '../../store/actions/index'
import Spinner from '../../component/UI/spinner'
import {connect} from 'react-redux';
import Chat from '../chat/chat'

class Friends extends Component{
    componentDidMount(){
        this.props.getFriend()
        console.log('[Friend]')
        console.log(this.props.friends)

    }

    render(){
        let spinner = null
        if(this.props.loading){
            spinner = <Spinner/>
        }
        let friendly = <Friend 
        
        ></Friend>
        let chat = null
        if (this.props.chat){
            chat = (<Chat></Chat>)
        }


        return(
            <div>
                {spinner}
                {friendly}
                {chat}
            </div>)

    }


}
const mapStateToProps = (state)=>{
    return{
    loading:state.friend.loading,
    friends:state.friend.friends,
    pending:state.friend.pending_request,
    chat:state.chat.enable
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        getFriend: ()=>dispatch(actionType.requestsendfreinds()),
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Friends)