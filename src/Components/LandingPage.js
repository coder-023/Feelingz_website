import React from "react";
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";

const LandingPage = () =>{

    return(
        <div className="landpage">
        Welcome to my website!<br/>
        What is Feelingz?<GiThink/><br/>
        Feelingz is a website which will help people to express their feelings anonymously.
    </div>
    )
}
export default LandingPage;