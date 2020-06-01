import React,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './layout.module.css';
import ToolBar from '../navigation/toolbar/toolbar';

class Layout extends Component{

    render(){

        return (
            <div>
                <ToolBar isAuth ={this.props.isAuthenticated}></ToolBar>
                {this.props.children}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
    isAuthenticated:state.auth.access_token!=null
}
}
export default connect(mapStateToProps)(Layout)