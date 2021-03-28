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
            <div id="title">
                <GiFlowers id="icon"/>Feelingz</div>
               {/*if context.user.email is present display Logout button else SignIn and SignOut */}
            {
            (context.user?.email) ? (
                <Link to="/">
                    <Button onClick={() => {context.setUser(null)}} value="Sign Out"/>
                </Link>
                    
                ):(                 
                
                <>
                <Link to="/signin">
                <Button value="SignIn"/>
                </Link>
                <Link to="/signup">
                <Button value="Sign Up"/>
                </Link>
                </>
                ) 
            }
            
            
            
            
        </div>
        
    )
}
export default NavigationBar;