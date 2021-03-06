import { POST_TO_UPDATE,
     SET_LOADING,
      SET_POST, 
      SET_USER,
      UNSET_USER,
      UPDATE_POST} from "./actions.types";

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
                postToUpdateKey:action.key,
                
            };
        case SET_USER:                      //this will add user email and uuid in the state as soon as user logs in
            return{
                ...state,
                user:action.payload,
            };
        case UNSET_USER:                    //this will reset user={} immediately after user signs out
            
            return{
                ...state,user:{ },   
            }
        case UPDATE_POST:
            return{
                ...state,
                isUpdate:action.update,    //update will say whether to set true or false
            }        
        default:
            return state;
    }
}
