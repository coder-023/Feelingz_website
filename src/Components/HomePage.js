//This page will be shown after logging in!
import React from 'react'

import Posts from './Posts';
import PostSection from './PostSection';


//TODO: create state named posts,usePosts
//TODO: create 2 useeffects one before loading 2nd after updating local storage
//TODO: create function addPosts() to add post instorage async ly
//***************************************************************************** */
//TODO: Create a use effect for fetching posts from firebase
//TODO: SET Loading graphics here
//********************************************************************************* */
 const HomePage = () => {
   
 
    return (
        <div className="homepage">
          <PostSection/>
          <Posts/>
        </div>
    )
}
export default HomePage;
