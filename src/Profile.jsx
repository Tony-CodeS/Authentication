import React from 'react'
import Typewriter from "typewriter-effect"
import "./login.css"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./FirebaseConfig"
import { useState } from 'react';
import "./profile.css"


function Profile() {
  const[useremail, setUseremail] = useState('')
  const[userId, setUserId] = useState('')

  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setUserId(uid)
      const email = user.email
      setUseremail(email)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  



  return (
  <div className='profile-div'>

<div className='profile-typewriter'>
<Typewriter
    onInit={(typewriter) =>{
      typewriter.typeString("CONGRATS")
      .pauseFor(1)
      .deleteAll()
      .changeDeleteSpeed(1)
      .typeString("YOU HAVE NOW CREATED YOUR PROFILE....")
      .start();
    }} 
    />
</div>


<div className='profile-details'>
  <span>Email:</span><h3 id='user' className='user'>{useremail}</h3>
  <span>ID:</span>
<h3 id="user">{userId}</h3>
</div>

  </div>
  )
}

export default Profile