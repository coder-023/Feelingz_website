import React,{useContext,useState} from "react";
import Button from "./Button";
import "../css/SignInBody.css";
import firebase from "firebase/app";
import PostContext from "../Context/PostContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";

import { SET_USER } from "../Context/actions.types";


const SignInBody = () =>{
    // alert("SIGNINBODY");
    // console.log(context);
    //TODO: Remove user context
    
    const {state,dispatch}=useContext(PostContext);
    const {user}=state;
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSignIn = () =>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(res =>{
            
            
            dispatch({
                type:SET_USER,
                payload:{
                    email:res.user.email, 
                    uid:res.user.uid,
                }

            });
            
        })
        .catch(error =>{
            console.log(error);
            toast(error.message,{
                type:"error"
            })
        })
        toast("Signed in Successfully!",{type:"success"});
    }

    const handleFormSubmit = e =>{
        e.preventDefault();
        if((email==='')||(password===''))
        {
           
            alert("Please enter the missing details..");
            return;
        }
        handleSignIn();
    }
    //We need to show this page based on some conditions
    
    if(user.email){
        
        return <Redirect to="/"></Redirect>
    }




    return(
    
    
    
    <div className="SignInbody">
        <p><h1>Sign In </h1></p>
        <table className="table">
            <tr>
                <td><b>Username:</b></td>
                <td><input onChange={e => setEmail(e.target.value)} type="text" name="username" className="inputfield" placeholder="Enter your username"></input><br/></td>
            </tr>
            <tr>
                <td><b>Password:</b></td>
                <td> <input onChange={e => setPassword(e.target.value)} type="password" name="password" className="inputfield" placeholder="Enter your password"></input></td>
            </tr>
      <tr>
     
      <td colSpan="2"> <Button onClick={handleFormSubmit} className="signinbutton" value={"Sign In"}/></td>
      
      </tr>
      
        </table>
    </div>)
}

export default SignInBody;