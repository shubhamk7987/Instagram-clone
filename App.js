import React , {useEffect,useState} from 'react';
import "./App.css";
import Post from "./Posts.js";
import  { db} from "./Firebase.js";
import { Button } from '@material-ui/core';
import ImageUpload from "./ImageUpload";

function App() {

  const [posts, setPosts] =useState([
    /*{
      username: "cleverShubham : ",
      caption: "wow this is nice",
      imageUrl: ""
    },
    {
      username: "cleverShubham : ",
      caption: "wow this is nice",
      imageUrl: ""
    },
    {
      username: "cleverShubham : ",
      caption: "wow this is nice",
      imageUrl: ""
    }

    */
  ]);
 
//useEffect -> Runs a piece of code on a specific condition
useEffect(()=>{
  //this is where the code runs
  db.collection('posts').orderBy("timestamp","asc").onSnapshot(snapshot=>{

    //every time a new post is added , this code is fired
   setPosts(snapshot.docs.map(doc=>{
    return  doc.data();                 //({ id: doc.id,  post: doc.data() })
    }));
  
  });

},[]);



  return (
    <div className="app">
  
    

     <div className="app_header"><h1>instagram</h1>


     </div>
    
    
    <div className="app_headerImage" >
      <Button>Sign Up</Button>
    <h1>lets build insta clone</h1>
    </div>


   {
     posts.map(post => (              // if we add and id as (post,id) and <Post key={id}> it will re render a new post eveytime it refreshes or fires this 
     <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/> 
     ))
   }
  

    

  <ImageUpload   />

    </div>

  
  );
}

export default App;
