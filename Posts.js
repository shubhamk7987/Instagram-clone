import React from 'react';
import "./Posts.css";
import Avatar from "@material-ui/core/Avatar";

function Posts({username, caption, imageUrl}) {
    return (

        <div classname="post">
         
         <div className="post_header">
         <Avatar className="post_avatar"
     alt="shubham" src="./../public/logo.png"/>
        <h3>{username}</h3>
         </div>
    
    
        
        <img className="post_image" src={imageUrl}  alt="shubham.png" />


        <h4 className="post_text"><strong>{username}</strong>{caption}</h4>
        {/* username * caption */}
        
        </div>
    )
}

export default Posts;
