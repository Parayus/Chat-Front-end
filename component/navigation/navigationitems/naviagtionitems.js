import React from "react";
import classes from "./navigationitems.module.css";
import NavigationItem from '../navigationitem/navigationitem' ;
const navigationitems = (props)=>{
    let x =(<NavigationItem activeClassName ={classes.active} link  = '/signup'>Sign Up</NavigationItem>)
    if (props.isAuth) {
     x =    (<div>
     <ul className = {classes.Navigation}>
    <NavigationItem activeClassName ={classes.active} link  = '/search'>Search Friend</NavigationItem>
    <NavigationItem activeClassName ={classes.active} link  = '/logout'>Logout</NavigationItem>
    </ul></div>)
    }
    return x
}
// boolean prop active
export default navigationitems