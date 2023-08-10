import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Signin=()=>{
  //create a state using hook for email and password 
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  //create a function to handle submit data using axios
  const PostData=()=>{
    //regex validation using toast
    // let user = localStorage.getItem('jwt');
    // const token = user;
    // console.log(token);
    //use axios to make a post request->/signin
      axios.post("http://localhost:5000/signin",
      {
        email,
        password
      },
      {
        headers: {
          "Content-type":"Application/json",
          "Authorization":`Bearer ${localStorage.getItem('jwt')}`}
      },
     )
    .then(response=>{
      const data=response.data;
      console.log(data);
        //storing jwt token and use data in local storage upon sucessful login
        // localStorage.setItem("jwt",data.token);
        // localStorage.setItem("user",JSON.stringify(data.user));
        alert(data.msg);
        navigate("/");//navigate to home page
    }).catch(error=>{
      console.log(error);
    })

  }
    return(
    <div className='mycard'>
      <div className='card input-field logindiv'>
        <h2>Instagram</h2>
        <input 
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      <button className="btn waves-effect waves-light #448aff blue accent-2" 
      type="submit"
       name="action"
       onClick={()=>PostData()}
       >Login
      </button>
      <h6>
        <Link to="/signup">Don't have an account?</Link>
      </h6>
      </div>
    </div>

    )
}

export default Signin;

