import React, { Fragment, useState } from 'react'
import { Navigate } from 'react-router-dom'
import "./Signup.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./FirebaseConfig"



function Hookcounterthree() {
const[FirstName, setFirstName] = useState('')
const[LastName, setLastName] = useState('')
const[email, setEmail] = useState('')
const[password, setpassword] = useState('')
const[confirmPassword, setconfirmPassword] = useState('')
// const[error, setError] = useState('')
const [loggin, setLoggin] = useState(false)

const authName =()=>{
  if(FirstName !== "" && LastName !== ''){
    setLoggin(true)
  }
  else{
    setLoggin(false)
    alert('Please fill In Your FirstName and Your LastName')
  }
}




const authpassword =()=>{
if(password===confirmPassword){
  setLoggin(true)
}
else{
  alert('Your Passwords do not match')
}
}

const auth = getAuth(app);

const signup =()=>{

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
        const user = userCredential.user;
      console.log(user)
      // alert("successfully created")
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // ..
      alert(errorCode)
    });
     authpassword()
     authName()
  }
  






  return  loggin?
  <Navigate to="/login"/>:(
 <Fragment>
   <div id='main-container'>
    <div id='icon-div'>
    <h1 id='sign'>SIGN UP</h1>
    <FontAwesomeIcon icon="fa-solid fa-circle-user" id='person' />
    </div>
    <div id='form-div'>
      <div>

    
      <input type="text" placeholder=" First-name"  onChange ={e => setFirstName( e.target.value)}/>
      <input type = "text" placeholder=" Last-name" onChange = {e => setLastName(e.target.value)}/>
      <input type= "email" placeholder="@email.com"  onChange = {(e) => setEmail(e.target.value)}/>
      <input type = "password" placeholder="Password"  onChange = {(e)=> setpassword(e.target.value)}/>
      <input type = "password" placeholder="Confirm-Password" onChange = {e => setconfirmPassword(e.target.value)}/> 
       
       <div> <button  type="submit" id='submit' onClick={signup}> sign up</button></div>
      </div>
      <p>Already have an account?</p>   <Link to="/login" id='aa'>log-in</Link>
    </div>
   </div>
 </Fragment>
  )
}

export default Hookcounterthree;