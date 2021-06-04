import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {GiFlowers} from "react-icons/gi";
import "../css/NavigationBar.css";
import Button from "./Button";
import Footer from "./Footer";

import UserContext from "../Context/UserContext";

const NavigationBar = () =>{
    const context = useContext(UserContext);
    return(
        <div className="header">
            <Link to="/" >
            <div id="title">
                <GiFlowers id="icon"/>Feelingz</div>
                </Link>
               {/*if context.user.email is present display Logout button else SignIn and SignOut */}
            {
            (context.user) ? (
                <Link to="/">
                    <Button className="signoutbtn" onClick={() => {context.setUser(null)}} value="Sign Out"/>
                </Link>
               
                ):(                 
                
                <div className="btns">
                <Link to="/signin">
                <Button className="signinbtn" value="Sign In"/>
                </Link>
                <Link to="/signup">
                <Button className="signupbtn" value="Sign Up"/>
                </Link>
                </div>
                ) 
            }
            
            
            
            
        </div>
        
    )
}
export default NavigationBar;