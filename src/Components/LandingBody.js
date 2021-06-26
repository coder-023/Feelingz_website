import React,{useContext} from "react";
// import UserContext from "../Context/UserContext";
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import PostContext from "../Context/PostContext";
const LandingBody = () =>{
    // const context = useContext(UserContext);
    const {state,dispatch}=useContext(PostContext);
    const {user}=state;
    //TODO: Remove user context

    {
        //console.log("Context",context);
        //alert("LANDINGBODY",context.user);
        if(user.email)  
        {
            console.log(user);
            return(
                <HomePage/>
            )
        }
        else{
            return(
               <LandingPage/> //working! 
            )
        }
    }
        
    
}
export default LandingBody;