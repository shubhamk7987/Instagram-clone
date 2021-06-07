import React, {useState} from 'react'
import {Button} from "@material-ui/core"
import { storage, db } from './Firebase';
import firebase from "firebase";
import "./ImageUpload.css";

function ImageUpload() {
    
    const [image,setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e)=>{
    if(e.target.files[0])
        setImage(e.target.files[0]);
        
        
    };
    
    const handleUpload = () =>{
        const uploadTask= storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            (snapshot) =>{
                //progress bar function ...  only visuals
                 const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(progress);
            },
            (error)=>{
                console.log(error);
                alert(error.messege);
            },
            ()=>{
                //complete function...  getting link
                storage.ref("images").child(image.name).getDownloadURL().then((url =>{
                    //post image inside db
                    db.collection("posts")
                    .add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                    
                        
                    });

                    setProgress(0);
                    setCaption("");
                    setImage(null);

                }))
            
            }

        ) 
    }
    

    return (
        <div>
              {/*Caption Inpput */}
    {/*Post button */}
    {/* file picker */}

  <div className="progress_bar" >   
    <progress className="progress_bar_child" value={progress} max="100" />
        <input type="text" placeholder="enter a caption" 
        onChange={event=>setCaption(event.target.value)}  value={caption}/>

    <input type="file" onChange={handleChange}/>
    <Button onClick ={handleUpload}>
        Upload
    </Button>
    </div>
        </div>
        
    )
}

export default ImageUpload
