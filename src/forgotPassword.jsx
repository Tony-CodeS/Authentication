import React, { Fragment, useState } from 'react'
import "./login.css"
import { Navigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "./FirebaseConfig"

function ForgotPassword() {
    const[email, setEmail] = useState('')
    const [Loggin, setLoggin] = useState(false)
  

    const auth = getAuth(app);

    const handleFormSubmit =(e)=>{
      e.preventDefault();
     
      sendPasswordResetEmail(auth, email)
      .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    // ..
    alert(errorCode)
  });
setLoggin(true)
   
    }



  return Loggin? 
  <Navigate to="/login"/>: (
    <Fragment>
    <div id='log-in'>
    <div>
    <input type= "email" placeholder="@email.com"
    onChange = {e => setEmail(e.target.value)}/>

        <button onClick={handleFormSubmit}>Resent</button>
    </div>
    </div>
    </Fragment>
  )
}

export default ForgotPassword