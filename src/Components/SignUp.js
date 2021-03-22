import React, { Fragment } from "react";
import Footer from "./Footer";
import SignUpBody from "./SignUpBody";
import NavigationBar from "./NavigationBar";

const SignUp = () =>{
return(
    <Fragment>
    <NavigationBar/>
     <SignUpBody/>
    <Footer/>
    </Fragment>
)
};

export default SignUp;