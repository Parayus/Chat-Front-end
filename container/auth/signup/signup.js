import React,{Component} from 'react';
import {connect} from 'react-redux';
import Input from '../../../component/UI/Input/Input';
import classes from './signup.module.css';
import * as actionType from '../../../store/actions/index'
import { Redirect } from 'react-router-dom';
import Button from '../../../component/UI/Button/Button'

class SignUp extends Component{
    state = {
        signupForm:{
            email_id: {
                elementType:'input',
                elementConfig:{
                    type :'email',
                    placeholder:'Mail Address'
                },
                value:'',
            validation:{
                required:true,
                isEmail:false
            },
        valid:false,
        touched:false
    },
    username: {
        elementType:'input',
        elementConfig:{
            type :'text',
            placeholder:'Username'
        },
        value:'',
    validation:{
        required:true,
        isEmail:false
    },
valid:false,
touched:false
},
first_name: {
    elementType:'input',
    elementConfig:{
        type :'text',
        placeholder:'First Name'
    },
    value:'',
validation:{
    required:true,
    isEmail:false
},
valid:false,
touched:false
},
last_name: {
    elementType:'input',
    elementConfig:{
        type :'text',
        placeholder:'Last Name'
    },
    value:'',
validation:{
    required:true,
    isEmail:false
},
valid:false,
touched:false
},
full_name: {
    elementType:'input',
    elementConfig:{
        type :'text',
        placeholder:'Full Name'
    },
    value:'',
validation:{
    required:true,
    isEmail:false
},
valid:false,
touched:false
},
password: {
    elementType:'input',
    elementConfig:{
        type :'password',
        placeholder:'Password'
    },
    value:'',
validation:{
    required:true,
    minLength:7
},
valid:false,
touched:false
}
       },
loading:false
}


componentDidMount(){
    
}

checkValidity(value,rules){
    let isValid = false
    if (rules.required){
        isValid = value.trim()!=='';
    }
    return isValid
}

inputChangedHandler =(event,controlName)=>{
    const updatedControl = {
        ...this.state.controls,
        [controlName]:{
            ...this.state.signupForm[controlName],
            value:event.target.value,
            valid :this.checkValidity(event.target.value,this.state.signupForm[controlName].validation),
            touched:true
        }
    }
    this.setState({signupForm:updatedControl})
}
onSubmitHandler = (event)=>{
    event.preventDefault();
    this.props.signup(this.state.signupForm.username.value,this.state.signupForm.email.value,this.state.signupForm.first_name.value,
        this.state.signupForm.last_name.value,this.state.signupForm.full_name.value,this.state.signupForm.password.value)
    this.state.loading = true
    
}
    render(){
        const formElementArray = []
        for (let key in this.state.signupForm){
            formElementArray.push({
                id:key,
                config:this.state.signupForm[key]
            })
        }
        let form = formElementArray.map(formElement=>(
            <Input
            key = {formElement.id}
            elementType = {formElement.config.elementType}
            elementConfig = {formElement.config.elementConfig}
            value = {formElement.config.value}
            inValid = {formElement.config.valid}
            shouldValidate = {formElement.config.validation}
            touched = {formElement.config.touched}
            changed = {(event)=>this.inputChangedHandler(event,formElement.id)}
            />
        ))
        let auth = null
        if(this.state.loading){
            auth = <Redirect to={this.props.signupRedirect}></Redirect>}
        

        return(
            <div className = {classes.Auth}>
                {auth}
                <form onSubmit ={this.onSubmitHandler}>
                    {form}
                    <Button btnType ='Success' >SignUp</Button>
                </form>
                </div>
        )
    }
}
const mapStateToProps = state=>{
    return{
        signupRedirect:state.signup.path
    }
}
const mapDispatchToprops = dispatch =>{
    return{
        signup:(username,email,first,last,full,pass)=>dispatch(actionType.signup(username,email,first,last,full,pass)),
        pathRedirect: ()=> dispatch(actionType.signupRedirect())
        }
}
// export default SignUp
export default connect(mapStateToProps,mapDispatchToprops)(SignUp);