import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as actionTypes from '../../../store/actions/index'
class Logout extends Component{
    componentDidMount(){
        this.props.onLogout()

    }
    render(){
        return(
            <div>
                <Redirect to='/'/>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onLogout :()=>dispatch(actionTypes.auth_logout())
    }
}

export default connect(null,mapDispatchToProps)(Logout)