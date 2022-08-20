import React, { Component } from 'react'
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './login';
import Home from './Home';
import Profile from './Profile';
import ForgotPassword from './forgotPassword';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faFontAwesome } from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter, Routes, Route} from "react-router-dom"
library.add(fas,faFontAwesome)




class App extends Component {
  render() {
    return (
   <BrowserRouter>
   <Navbar/> 
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/Home" element ={<Home/>}/>
    <Route path="/Signup" element ={<Signup/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/forgotPassword" element ={<ForgotPassword/>}/>
    <Route path="/Profile" element ={<Profile/>}/>
   </Routes>
   </BrowserRouter>
    )
  }
}

export default App;