import React,{useState,useContext,useReducer,useEffect} from 'react';
import "../css/Posts.css";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import {ListGroup,ListGroupItem} from "reactstrap"
//TODO: DONE! just fetch the object and display using map function
import PostContext from '../Context/PostContext';
import UserContext from '../Context/UserContext';
import { SET_POST,SET_LOADING, POST_TO_UPDATE } from '../Context/actions.types';
import firebase from '@firebase/app';
import { toast } from 'react-toastify';


import 'firebase/database';

const Posts = () => {
const {state,dispatch}= useContext(PostContext);//MISTAKE :used  useReducer instead of useContext
const {posts,isLoading} = state;

const context=useContext(UserContext);
console.log(context.user.email);      //test successful!
const [isUpdate, setIsUpdate] = useState(false);
//   const [keyy,setKeyy] = useState([]);alert("Hello")
//  var flag=false;alert("Hello")
const updateContact=(keyy,value)=>{
  //when button is clicked, set isupdate=true
  // console.log(keyy,value);
  dispatch({
    type:POST_TO_UPDATE,
    payload:value,
    key:keyy
  });
  console.log(state);
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
 



//  border: 1px solid #ddd;
//  margin-top: 38px;
//  background-color: #f6f6f6;
//  padding: 49px;
//  text-align: justify;
//  margin: 40px;
//  margin-bottom: 18px;
    return (
<ListGroup className="mt-5 mb-2 ">
  <h1 align="center">POSTS</h1>
  {Object.entries(posts).map(([key,value])=>(
    <ListGroupItem key={key}>
      {value.postString}
     {(value.email==context.user.email) ?(
      <span><FiEdit2 onClick={() => 
       updateContact(key,value)}className="ml-2"/>
      <BsTrashFill onClick={() => deleteContact(key)} className="text-danger icon"/>
      </span>
     ):(console.log("Lawda"))}
     

     
      
    </ListGroupItem>
  ))}
{/* {postsarray.map(post =>(
  <ListGroupItem key={post.id} className="listgrpitem">
    {post.postString}
    <span><FiEdit2 className="ml-2"/>
    <BsTrashFill className="text-danger icon"/>
    </span>
  </ListGroupItem>
))} */}
</ListGroup>
    )
       
}
export default Posts;
