import React from 'react';
import classes from './toolbar.module.css';
import NavigationItems from '../navigationitems/naviagtionitems';


const toolBar = (props)=>(
<header className = {classes.ToolBar}>
    <nav className= {classes.DesktopOnly}>
        <NavigationItems isAuth = {props.isAuth}></NavigationItems>
    </nav>

</header>
);

export default toolBar