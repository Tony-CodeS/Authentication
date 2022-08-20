import React from 'react'
import Typewriter from "typewriter-effect"
import "./login.css"


function Home() {
  return (
    <div className='typewriter'>
        <Typewriter
        onInit={(typewriter) =>{
          typewriter.typeString("WElCOME!!!")
          // .callFunction(()=>{
          //   alert('sugar ')
          // })
          .pauseFor(2000)
          .deleteAll()
          .typeString("This is a React-Authentication Bioler-Plate for the Validation of forms for Web or Mobile Application..")
          .start();
        }} 
        />
    </div>
  )
}

export default Home