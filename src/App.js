import React, { useState } from "react";
import './css/App.css';

//react router
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

//toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


//firebase
import firebase from "firebase/app";
import "firebase/auth";

//Context
import UserContext from "./Context/UserContext";

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingBody from './Components/LandingBody';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import FirebaseConfig from './Config/FirebaseConfig';
import NotFound from './Components/NotFound';


//initializing Firebase at root page
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig);
}

function App() {
  const [user,setUser] = useState(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
  <Router>
  <ToastContainer/>
    <NavigationBar/>
     <Switch>
       <Route exact path='/' component={LandingBody}/>
       <Route exact path='/signin' component={SignIn}/>
       <Route exact path='/signup' component={SignUp}/> 
       <Route exact path='*' component={NotFound}/> 
     </Switch>
    
    </Router> 
    <Footer/>
     </UserContext.Provider>   

    
  );
}

export default App;
