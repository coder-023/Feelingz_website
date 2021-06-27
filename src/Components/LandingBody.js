import React,{useContext} from "react";

import "../css/LandingBody.css";

import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import PostContext from "../Context/PostContext";
const LandingBody = () =>{
    
    const {state}=useContext(PostContext);
    const {user}=state;
    //TODO: Remove user context

    
        
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
export default LandingBody;