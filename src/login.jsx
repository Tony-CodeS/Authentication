import { Fragment, useState } from "react"
import React from 'react'
import "./login.css"
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "./FirebaseConfig"


function Login() {
  const[email, setEmail] = useState('')
  const[password, setpassword] = useState('')
  const [Loggin, setLoggin] =useState(false)



const auth = getAuth(app);


  const login =()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      alert('sucessfull signed in')
      setLoggin(true)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      alert(errorCode)
    });

 
  }


  return Loggin? <Navigate to ="/Profile"/>:  ( 
<Fragment>
<div id="log-in">

<div id="login-div">
<input type = "email"
 placeholder=" Email" 

 onChange = {(e) => setEmail(e.target.value)}/>
 
 <input type = "password" 
 placeholder=" Password"
 onChange = {(e) => setpassword(e.target.value)}/><br/>
 <button type="submit" id='submit' onClick={login}> log-in</button>
</div>

 <Link to="/forgotPassword" id="a">ForgotPassword?</Link>
    </div>
</Fragment>
  )
}

export default Login