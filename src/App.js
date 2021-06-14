import React, { useEffect,useReducer,useState } from "react";
import './css/App.css';

//react router
import {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";

//toast
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


//firebase
import FirebaseConfig from './Config/FirebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"

//ContextAPI STUFF
import reducer from "./Context/reducer";
import UserContext from "./Context/UserContext";
import PostContext from "./Context/PostContext";
import { SET_POST,SET_LOADING } from "./Context/actions.types";

import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import LandingBody from './Components/LandingBody';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';
import HomePage from "./Components/HomePage";

//TODO: create useeffect for calling objects from the database
//initializing Firebase at root page
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig);
}

//first state to be provided in react reducer
const initialState={
  posts:[],
  post:{},
  postToUpdate:null,
  postToUpdateKey:null,
  isLoading:false
};
function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [user,setUser] = useState(null);
  const [postString,setPostString] = useState("");
  const getPosts = async () => {
    setPostString('');
    dispatch({
      type:SET_LOADING,
      payload:true
    });

    const postsRef= await firebase.database().ref("/posts");
    postsRef.on("value",snapshot => {
      dispatch({
        type:SET_POST,
        payload:snapshot.val()
      });
      dispatch({
        type:SET_LOADING,
        payload:false
      });
    });
    
    

  };//till here we declared a function which will call the firebase db and fetch a object.The fetched object is then set in dispatch
useEffect(()=>{
  getPosts();
  
},[]);


  return (
    <UserContext.Provider value={{user,setUser}}>
  <Router>
    <PostContext.Provider value={{state,dispatch}}>
  <ToastContainer/>
    <NavigationBar/>
     <Switch>
       <Route exact path='/' component={LandingBody}/>
       <Route exact path='/signin' component={SignIn}/>
       <Route exact path='/signup' component={SignUp}/> 
       <Route exact path='*' component={NotFound}/> 
     </Switch>
     </PostContext.Provider>
    </Router> 
    
    <Footer/>
     </UserContext.Provider>   

    
  );
}

export default App;
