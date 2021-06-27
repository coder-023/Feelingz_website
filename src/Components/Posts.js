import React,{useContext} from 'react';
import "../css/Posts.css";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import {ListGroup,ListGroupItem} from "reactstrap"
//TODO: DONE! just fetch the object and display using map function
import PostContext from '../Context/PostContext';

import { SET_POST,SET_LOADING, POST_TO_UPDATE } from '../Context/actions.types';
import firebase from '@firebase/app';
import { toast } from 'react-toastify';


import 'firebase/database';
import { IconContext } from 'react-icons';

const Posts = () => {
const {state,dispatch}= useContext(PostContext);//MISTAKE :used  useReducer instead of useContext
const {posts,isLoading,user} = state;


      //test successful!


const updateContact=(keyy,value)=>{
  //when button is clicked, set isupdate=true
 
  dispatch({
    type:POST_TO_UPDATE,
    payload:value,
    key:keyy
  });
  
}
 const deleteContact = (key)=>{
   try {
     
   
   firebase
   .database()
   .ref(`/posts/${key}`)
   .remove()
   .then(() =>{
     toast("Deleted Successfully",{type:"success"});
   })
   
  } catch (error) {
     console.log(error);
  }
}
 




    return (
<ListGroup className="mt-5 mb-2 ">
  <h1 align="center">POSTS</h1>
  {Object.entries(posts).map(([key,value])=>(
    <ListGroupItem key={key}>
      {value.postString}
     {(value.email===user.email) ?(
      <span><IconContext.Provider value={{className:"editicon"}}>
        <FiEdit2 onClick={() => 
       updateContact(key,value)}className="ml-2"/>
      <BsTrashFill onClick={() => deleteContact(key)} className="text-danger icon"/>
      </IconContext.Provider>
      </span>
     ):(console.log('h'))}
     

     
      
    </ListGroupItem>
  ))}

</ListGroup>
    )
       
}
export default Posts;
