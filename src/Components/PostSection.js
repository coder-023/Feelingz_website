//TODO: useEffect for setting the value in textarea if isupdate=true
import React,{useState,useEffect,useContext} from "react";
import { v4 } from "uuid";
import "../css/PostSection.css"
import Button from "./Button";

import firebase from "firebase/app"
//context stuff

import PostContext from "../Context/PostContext";
import {POST_TO_UPDATE, UPDATE_POST} from "../Context/actions.types"

import { toast } from "react-toastify";

//TODO:action function which will be triggered on button click

const PostSection = () =>{
    const [postString,setPostString] = useState("");
     //remove this
    
 
    const {state,dispatch}=useContext(PostContext);
    const {postToUpdate,postToUpdateKey,user,isUpdate}=state;
    useEffect(()=>{
        if(postToUpdate)
        {
             //function to bring focuss on top will come here
             window.scrollTo(0,0);
            // alert("use effect triggered!");
            setPostString(postToUpdate.postString);
            console.log(postToUpdate,postToUpdateKey);
            dispatch({
                type:UPDATE_POST,
                update:true,
            });
            
        }
    },[postToUpdate]);
    const email=user.email;

    //setting post to firebase DB
  const addPost = async () => {
    try {
        firebase
        .database()
        .ref("posts/" + v4())
        .set({
            postString,
            email
            
        });
        console.log(state);
        toast("Added Successfully!",{type:"success"});
    } catch (err) {
        console.log(err);
    }
  };
  //Update 
  const updatePost = async () => {

console.log(postToUpdateKey);   
    try {
        firebase
        .database()
        .ref(`/posts/${postToUpdateKey}`) 
        .set({
            postString,
            email
        });
        console.log(state);
        toast("Updated Successfully!",{type:"success"});
    } catch (err) {
        console.log(err);
        toast("Error",{type:"error"});
    }
  };
//function which will decide whether we have to update or add post
const handleSubmit = e =>{
    e.preventDefault();
    if(postString==="")
    {
        if(isUpdate===true)
        {
            alert("Please don't leave the update field blank");
             //isupdate
            dispatch({
                type:UPDATE_POST,
                update:false,
            });
            return;
        }
        else{
            alert("Enter something!");
            return;
        }
    }
    isUpdate ? updatePost() : addPost();
    setPostString('');
    
    
    dispatch({
        type:UPDATE_POST,
        update:false,
    });

    dispatch({
        type:POST_TO_UPDATE,
        payload:null,
        key:null
    });
}






    return(
        <div>
        <div class="postsection">
           <h1> What's in your mind!</h1>
        <div class="textarea">
            
    <textarea name="textarea_post" value={postString} onChange={e => setPostString(e.target.value)} placeholder="Type Something here"></textarea>
    <Button className="button1" onClick={handleSubmit} value={"Post Now"}/>
    
</div>

        </div>
        
        </div>
    )
}
export default PostSection;