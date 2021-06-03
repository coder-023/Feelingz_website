//This page will be shown after logging in!
import React,{useState,useContext,useEffect} from 'react'
import UserContext from "../Context/UserContext";
import Posts from './Posts';
import PostSection from './PostSection';


//TODO: create state named posts,usePosts
//TODO: create 2 useeffects one before loading 2nd after updating local storage
//TODO: create function addPosts() to add post instorage async ly


 const HomePage = () => {
     const context=useContext(UserContext);//This was done for fetching the email from the context and displaying Hello to the email
     const [postsarray,setPostsarray]= useState([]);
     useEffect(()=>{
       const localposts = localStorage.getItem("postobject");
       if(localposts)
       {
         setPostsarray(JSON.parse(localposts));//if localposts present,load it on screen
       }
    },[]);

    const addPosts = async post => {
      setPostsarray([...postsarray,post]);
    }
    useEffect(() =>{
    localStorage.setItem("postobject",JSON.stringify(postsarray))
    },[postsarray]);
 
    return (
        <div>
          <PostSection addPosts={addPosts}/>
          <Posts postsarray={postsarray}  />
        </div>
    )
}
export default HomePage;
