import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../App';
const Signin=()=>{
  const {state,dispatch}=useContext(UserContext);
  //create a state using hook for email and password 
  const navigate=useNavigate();
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");

  //create a function to handle submit data using axios
  const PostData=()=>{

            //add validation check for name,email and password 
            if(!email||!password){
              toast.error("Please fill in all fields..");
              return;
          }
  
    //regex validation using toast
       // Email validation regex
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    
  // Password validation regex: Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;


  //validate email format using regex 
  if(!email.match(emailRegex)){
    //add error with toast
    toast.error("Invalid Email format",{
      position:toast.POSITION.TOP_RIGHT,
    });
    return;
  }

  if(!password.match(passwordRegex)){
    toast.error("Invalid password Format",{
      position:toast.POSITION.TOP_RIGHT,
    });
    return;
  }

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
        localStorage.setItem("jwt",data.token);
        localStorage.setItem("user",JSON.stringify(data.user));
        dispatch({type:"USER",payload:data.user});
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
      <ToastContainer/>
    </div>
    )
}

export default Signin;