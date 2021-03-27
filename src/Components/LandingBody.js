import React,{useContext} from "react";
import UserContext from "../Context/UserContext";
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
const LandingBody = () =>{
    const context = useContext(UserContext);
    


    {
        if(context.user?.email)  //making changes here to design the homepage!
        {
            return(
                <HomePage/>
            )
        }
        else{
            return(
               <LandingPage/>
            )
        }
    }
        
    
}
export default LandingBody;