import React,{useState} from 'react';
import "../css/Posts.css";
//TODO: just fetch the object and display using map property
const Posts= ({postsarray}) => {
  const [keyy,setKeyy] = useState([]);
 var flag=false;
 console.log(typeof(postsarray));
 



    return (
        <div className="posts">
            
 {//TODO: refer to Tania Rascia tutorial to improve local storage          
  }
 

 <ul id="myposts">
   {
   
     postsarray.map((id)=>{
       console.log("entry");
       var list=document.getElementById("myposts");
       //  alert(child.item)
       //  alert(list)
       //  if(list!==null){
         //   list.removeChild(child);
         //  }
         
         var x=document.createElement("li");
         var att=document.createAttribute("key");
         // console.log(id.postString)
         att.value=id.id;
         x.setAttributeNode(att);
         // console.log(x)
         // var lis = x.getElementsByClassName("posts")
         // console.log(lis);
         // console.log(x)
         // x.appendChild(t);
         
         
         
         
         var t=document.createTextNode(id.postString);
         console.log(t)
         x.appendChild(t);
         var child=document.getElementsByTagName("li");
         console.log(child);
         if(child.length==0)
         {
          document.getElementById("myposts").appendChild(x);
         }
        console.log(child[0].attributes.key)
         for(let i=0;i<child.length;i++)
         {
           console.log(child[i]);
           document.getElementById("myposts").appendChild(x);
         }
         
        //  for(let i=0;i<child.length;i++)
        //  {
        //    if(child[i].contains(x)){
        //      flag=true;
        //    }
        //  }
         
      //    if(flag==false)

      //  {console.log(flag);
      //  }
       
       
       
      
     
      //
    
       
       
      }
      ) 
    }
 </ul>

 
   
  {/* {
    
    postsarray.forEach((postString) => {
      
    
//  console.log("helloconstant");

var x=document.createElement("li").id;
alert(postString.postString)
 var t=document.createTextNode(postString[0]);
//  console.log(visited.length)
//  if(visited.length===0)
//  {console.log("hello1 len0");
//  document.getElementById("myposts").appendChild(x)
//  setVisited(t);
// }
// else{
  //   console.log("hello2");
  //   // if(!visited.includes(postString.postString)){
    //     console.log("hello3");
    //     x.appendChild(t);
    //     setVisited(t);
    //     document.getElementById("myposts").appendChild(x)
    //     console.log(visited);
    //   // }
    // }
    
    x.appendChild(t);
  console.log(document.getElementById("myposts").appendChild(x));
}
)

} */}


    
   

        </div>
    )
}
export default Posts;
