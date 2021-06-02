
import React,{useState,useEffect} from "react";
import { v4 } from "uuid";
import "../css/PostSection.css"
import Button from "./Button";
import Posts from "./Posts";

//TODO:action function which will be triggered on button click

const PostSection = ({addPosts}) =>{
    const [postString,setPostString] = useState("");

    const Action = e =>{
   e.preventDefault();
   if(postString === "") 
    {
        (alert("Enter string"))
        return;
    } 
       const post={
           postString,id:v4()
       };
       addPosts(post);
       setPostString("");
   
    }
    return(
        <div>
        <div class="postsection">
            Post Something!
        <div class="textarea">
    <textarea name="textarea_post" value={postString} onChange={e => setPostString(e.target.value)} placeholder="Type Something here"></textarea>
    <Button className="button1" onClick={Action} value={"Post Now"}/>

</div>

        </div>
        
        </div>
    )
}
export default PostSection;