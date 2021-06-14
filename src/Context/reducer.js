import { POST_TO_UPDATE,
     SET_LOADING,
      SET_POST } from "./actions.types";

export default (state,action) =>{
    switch (action.type) {
        case SET_POST:
            console.log(action.payload);  //working                  //this case will be in use when the data will be fetched from the firebase
            return action.payload ==null ?  //payload is a collection of key,value pair.It will be responsible for carrying the info to and fro
            {...state,posts:[]} :          //if payload is null that means there was no data before.So initialize 
            {...state,posts:action.payload}; //else if post is present in payload,
            
        case SET_LOADING:                 //this case will be useful to show the loading icon
            return { ...state, isLoading: action.payload };    
        case POST_TO_UPDATE: 
        console.log(action.payload) ;         //this case will be triggered when we want to update certain post.It will return the state, postString (that is to be updated) and the key of that postString
            return{
                ...state,
                postToUpdate:action.payload,
                postToUpdateKey:action.key
            };
     
            default:
            return state;
    }
}
