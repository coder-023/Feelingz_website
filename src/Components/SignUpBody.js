import React,{useState,useContext} from "react";
import Button from "./Button";
import "../css/SignUpBody.css";

import firebase from "firebase/app";
import UserContext from "../Context/UserContext";
import {Redirect} from "react-router-dom";
import {toast} from "react-toastify";








const SignUpBody = () =>{

    const context=useContext(UserContext);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(
            res =>{
                console.log(res);
                context.setUser({email:res.user.email ,uid:res.user.uid});
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
        handleSignUp();
    }
if(context.user?.uid){
        return <Redirect to="/"></Redirect>
    }



    return(
    <div className="signupbody">
        <p>Sign Up !</p>   
        <table className="table">

        <tr>
            <td>Name:</td>
            <td><input type="text" name="firstname" className="inputfield" placeholder="Enter your name"></input></td>
       </tr>
       <tr> 
           <td>Date Of Birth:</td>
           <td><input type="date" name="dob" className="inputfield" placeholder="Enter your dateof birth"></input></td>
        </tr>
        <tr>
        <td>Username:</td>
           <td> <input onChange={e => setEmail(e.target.value)} type="text" name="username" className="inputfield" placeholder="Enter your username"></input></td>
            </tr>
        <tr >
        <td >Password:</td>
        <td><input onChange={e => setPassword(e.target.value)} type="password" name="password" className="inputfield" placeholder="Enter your password"></input></td>
        </tr>
        </table>
       <Button onClick={handleFormSubmit} className="button" value={"Sign Up"}/>
    </div>)
}

export default SignUpBody;