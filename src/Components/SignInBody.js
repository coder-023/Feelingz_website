import React,{useContext,useState} from "react";
import Button from "./Button";
import "../css/SignInBody.css";
import firebase from "firebase/app";
import UserContext from "../Context/UserContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";


const SignInBody = () =>{
    const context=useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSignUp = () =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(res =>{
            console.log(res);
            context.setUser({email:res.user.email, uid:res.user.uid});
        })
        .catch(error =>{
            console.log(error);
            toast(error.message,{
                type:"error"
            })
        })
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        handleSignUp();
    }
    //We need to show this page based on some conditions
    if(context.user?.uid){
        return <Redirect to="/"></Redirect>
    }




    return(
    
    
    
    <div className="SignInbody">
        <p>SignIn yourself</p>
        Username:<input onChange={e => setEmail(e.target.value)} type="text" name="username" className="inputfield" placeholder="Enter your username"></input><br/>
        Password:<input onChange={e => setPassword(e.target.value)} type="password" name="password" className="inputfield" placeholder="Enter your password"></input><br/>
        
       <Button onClick={handleFormSubmit} className="button" value={"SignIn"}/>
    </div>)
}

export default SignInBody;