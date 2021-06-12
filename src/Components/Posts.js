import React,{useState} from 'react';
import "../css/Posts.css";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import {ListGroup,ListGroupItem} from "reactstrap"
//TODO: just fetch the object and display using map property

const Posts= ({postsarray}) => {
  const [keyy,setKeyy] = useState([]);
 var flag=false;
 console.log(typeof(postsarray));
 



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
{postsarray.map(post =>(
  <ListGroupItem key={post.id} className="listgrpitem">
    {post.postString}
    <span><FiEdit2 className="ml-2"/>
    <BsTrashFill className="text-danger icon"/>
    </span>
  </ListGroupItem>
))}
</ListGroup>
    )
       
}
export default Posts;
