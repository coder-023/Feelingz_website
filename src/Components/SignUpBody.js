import React from "react";
import Button from "./Button";
import "../css/SignUpBody.css";
const SignUpBody = () =>{
    return(<div className="signupbody">
        <p>Sign Up !</p>   
        <table className="table">

        <tr>
            <td>Name:</td>
            <td><input type="text" name="firstname" className="inputfield" placeholder="Enter your name"></input></td>
       </tr>
       <tr> 
           <td>Date Of Birth:</td>
           <td><input type="date" name="password" className="inputfield" placeholder="Enter your dateof birth"></input></td>
        </tr>
        <tr>
        <td>Username:</td>
           <td> <input type="text" name="username" className="inputfield" placeholder="Enter your username"></input></td>
            </tr>
        <tr >
        <td >Password:</td>
        <td><input type="password" name="password" className="inputfield" placeholder="Enter your password"></input></td>
        </tr>
        </table>
       <Button className="button" value={"Sign Up"}/>
    </div>)
}

export default SignUpBody;