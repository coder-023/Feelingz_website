import React from "react";
import "../css/NavigationBar.css";

const Button = (props) =>{
    return(
    <div id="button">

            <button className={props.className}>{props.value}</button>
            </div>

    )}
export default Button;