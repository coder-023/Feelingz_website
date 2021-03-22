import React from "react";
import Button from "./Button";
import "../css/LoginBody.css";
const LoginBody = () =>{
    return(<div className="loginbody">
        <p>Login yourself</p>
        Username:<input type="text" name="username" className="inputfield" placeholder="Enter your username"></input><br/>
        Password:<input type="password" name="password" className="inputfield" placeholder="Enter your password"></input><br/>
        
       <Button className="button" value={"Login"}/>
    </div>)
}

export default LoginBody;