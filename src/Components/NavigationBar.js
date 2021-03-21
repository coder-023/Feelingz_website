import React from "react";
import {GiFlowers} from "react-icons/gi";
import "../css/NavigationBar.css";
import Button from "./Button";
import Footer from "./Footer";
const NavigationBar = () =>{
    return(
        <div className="header">
            <div id="title">
                <GiFlowers/>Feelingz</div>
            <Button value="Login"/>
            <Button value="Sign Up"/>
            
            
        </div>
        
    )
}
export default NavigationBar;