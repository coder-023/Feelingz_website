import React,{useContext} from "react";
import {Link} from "react-router-dom";
import {GiFlowers} from "react-icons/gi";
import "../css/NavigationBar.css";
import Button from "./Button";
import { toast } from "react-toastify";
import PostContext from "../Context/PostContext";
import { UNSET_USER } from "../Context/actions.types";


const NavigationBar = () =>{
    const {state,dispatch}=useContext(PostContext);
    const {user,postToUpdate}=state;
    console.log(user);
    var HandleSignOut=()=>{
        console.log("OUT");
        console.log(state);
        if(postToUpdate!==null)
        {
            postToUpdate
        }
        dispatch({
            type:UNSET_USER,
            

        });
        
        toast("Signed out Successfully!",{type:"success"});
    }
    return(
        <div className="header">
            <Link to="/" >
            <div id="title">
                <GiFlowers id="icon"/>Feelingz</div>
                </Link>
               {/*if context.user.email is present display Logout button else SignIn and SignOut */}
            {
                
            (user.email) ? (
                <Link to="/">
                    <Button className="signoutbtn" onClick={
                        HandleSignOut
                    } value="Sign Out"/>
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