import React from "react";
import {IconContext} from "react-icons"
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";

const LandingPage = () =>{

    return(
        <div className="landpage">
        <h1>Welcome to my website!</h1>
        
        <IconContext.Provider value={{className:"thinkicon"}}>
        <span>
        <GiThink /><b>What is website about?</b><GiThink />
        </span>
        </IconContext.Provider>
        <br/>
        <b><p className="intro">Feelingz is a website which will help people to express their feelings anonymously.
        <br/><br/> Your identity is kept completely anonymous here! You just need to login and pour out all feelings which are troubling you!
        <br/><br/>
        बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जित: |<br/>
अनात्मनस्तु शत्रुत्वे वर्ते तात्मैव शत्रुवत् || 6||
        <br/><br/>
        <b>Translation:</b> For those who have conquered the mind, it is their friend. For those who have failed to do so,
         the mind works like an enemy.
        </p></b>
        <br/><br/><br/>
        <br/><br/><br/>
        <br/>
    </div>
    )
}
export default LandingPage;