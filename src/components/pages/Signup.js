import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//make http request ,import axios
import axios  from 'axios';
const Signup=()=>{

    //define state ->useState hooks
    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    //Function to handle user Signup user data
    const PostData=()=>{
        //regex validation for email
        //use axios to make a post request to /signup route

        axios.post("http://localhost:5000/signup",{
            name,
            email,
            password
        })
        .then(response=>{
            const data=response.data;
            console.log(data);
            if(data.error){
            alert("Error")
            }else{
            console.log(response.data);
            alert(response.data.message);
            navigate("/signin");
            }
        }).catch(error=>{
            console.log(error);
        });
    }

    return(
    <div className='mycard'>
       <div className='card input-field logindiv'>
        <h2>Instagram</h2>
        <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
    
       <button className="btn waves-effect waves-light #448aff blue accent-2"
        type="submit"
        name="action"
        onClick={()=>PostData()}//calling PostData function when the button is clicked
         >Register</button>

        <h6>
            <Link to="/signin">Already having an account?</Link>
        </h6>
       </div>
    </div>
   
    )
}

export default Signup;