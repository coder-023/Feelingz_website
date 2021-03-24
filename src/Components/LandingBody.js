import React,{useContext} from "react";
import UserContext from "../Context/UserContext";
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";
import HomePage from "./HomePage";
const LandingBody = () =>{
    const context = useContext(UserContext);
    


    {
        if(context.user?.email)
        {
            return(
                <HomePage/>
            )
        }
        else{
            return(
                <div className="landpage">
            Welcome to my website!<br/>
            What is Feelingz?<GiThink/><br/>
            Feelingz is a website which will help people to express their feelings anonymously.
        </div>
            )
        }
    }
        
    
}
export default LandingBody;