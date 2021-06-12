import React,{useContext} from "react";
import UserContext from "../Context/UserContext";
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
const LandingBody = () =>{
    const context = useContext(UserContext);
    


    {
        //console.log("Context",context);
        //alert("LANDINGBODY",context.user);
        if(context.user)  
        {
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