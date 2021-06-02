import React,{useState} from 'react';
import "../css/Posts.css";
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
<ListGroup className="mt-5 mb-2">
  <p align="center">POSTS</p>
{postsarray.map(post =>(
  <ListGroupItem key={post.id}>
    {post.postString}
  </ListGroupItem>
))}
</ListGroup>
    )
       
}
export default Posts;
