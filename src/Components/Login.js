import React, { Fragment } from "react";
import Footer from "./Footer";
import LoginBody from "./LoginBody";
import NavigationBar from "./NavigationBar";

const Login = () =>{
return(
    <Fragment>
    <NavigationBar/>
     <LoginBody/>
    <Footer/>
    </Fragment>
)
};

export default Login;