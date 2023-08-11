import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CreatePost=()=>{
//create 3 states for title,body,image upload
const[title,setTitle]=useState("");
const[body,setBody]=useState("");
const[image,setImage]=useState(null);
const[url,setUrl]=useState("");
//React router hook for navigation

const navigate=useNavigate();

//Effect hook to perform actions after url,body and title 
useEffect(()=>{
  //check if an image url is available
  if(url){
    //make a post request to create a new post
    axios.post("http://localhost:5000/createpost",{
      title,
      body,
      pic:url
    },{
      //set the header for request
      headers:{
        'Content-Type':"application/json", 
        'Authorization':'Bearer '+localStorage.getItem('jwt')
      }
    })
    .then(response=>{
      const data=response.data;
      console.log(data);
      //check if error
      if(data.error){
        console.log("Something went wrong");
      }else{
        //if successful login,navigate to home page
        navigate("/");
      }
    }).catch(error=>{
      console.error(error);
    });
  }
},[url,body,title,navigate]);

//Function to upload image to cloudinary and set the url state
const postDetails=async()=>{
  //create a Form Data object to hold image data and upload presets
  const data=new FormData();
  //file type along with 
  data.append("file",image);
  //set the upload preset
  data.append('upload_preset','mernapp');
  //Set the cloud name
  data.append('cloud_name','testapp2023');

  //We are going to make a request
  try {
    //make a post request to cloudinary API to upload the image
    const response=await axios.post("https://api.cloudinary.com/v1_1/testapp2023/image/upload",data);
    //retrieve thr url or secure_url of the uploaded images from the resp
    const imageUrl=response.data.secure_url;
    //set the url state with uploaded image url
    setUrl(imageUrl);
    
  } catch (error) {
    console.error(error);
  }
}

    return(
       <div className="card input-filed postcontainer">
        <input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <input
        type="text"
        placeholder="Add your content Here."
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
    <div className="file-field input-field">
      <div className="btn #3d5afe indigo accent-3">
        <span>Upload</span>
        <input type="file" 
        onChange={(e)=>setImage(e.target.files[0])}
        />
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
    {/* //display the uploaded image if the url is available  */}
    {url && (
      <img
       src={url}
       alt="Uploaded"
       style={{
        width:"100%",
        maxHeight:"300px",
        objectFit:'cover'
       }}
      />
    )}
    <button
     class="btn waves-effect waves-light #3d5afe indigo accent-3" 
    type="submit"
    name="action"
    onClick={postDetails}
    >Submit Post
    </button>
    
 </div>
    );
};

export default CreatePost;



