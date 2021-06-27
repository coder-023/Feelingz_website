import React,{useState,useContext} from "react";
import Button from "./Button";
import "../css/SignUpBody.css";

import firebase from "firebase/app";
import PostContext from "../Context/PostContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";
import { SET_USER } from "../Context/actions.types";







const SignUpBody = () =>{
    const {state,dispatch}=useContext(PostContext);
    const {user}=state;
    // const context=useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

//TODO: Remove user context
    const handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(
            res =>{
                console.log(res);
                
                dispatch({
                    type:SET_USER,
                    payload:{
                        email:res.user.email, 
                        uid:res.user.uid,
                    }
    
                });
            }
        )
        .catch(error =>{
            console.log(error);
            toast(error.message,{
                type:"error"
            })
        })
    }
    const handleFormSubmit = e =>{
        e.preventDefault();
        if((email==='')||(password===''))
        {
           
            alert("Please enter the missing details..");
            return;
        }
        handleSignUp();
    }
if(user.email){
        return <Redirect to="/"></Redirect>
    }



    return(
    <div className="signupbody">
        <h1>Sign Up !</h1>   
        <table className="table">

       
        <tr>
        <td><b>Username:</b></td>
           <td> <input onChange={e => setEmail(e.target.value)} type="text" name="username" className="inputfield" placeholder="Enter your username"></input></td>
            </tr>
        <tr>
        <td><b>Password:</b></td>
        <td><input onChange={e => setPassword(e.target.value)} type="password" name="password" className="inputfield" placeholder="Enter your password"></input></td>
        </tr>
        <tr>
            <td colSpan="2"><Button onClick={handleFormSubmit} className="button" value={"Sign Up"}/></td>
        </tr>
        </table>
       
    </div>)
}

export default SignUpBody;