// import firebase from "firebase/app"
import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBFNExCKIvGNKZ04J8wV932RVk6wpnNyig",
  authDomain: "anthony-s-authentication.firebaseapp.com",
  projectId: "anthony-s-authentication",
  storageBucket: "anthony-s-authentication.appspot.com",
  messagingSenderId: "464196638531",
  appId: "1:464196638531:web:3c05b027a3354a00d601f6",
  measurementId: "G-R6Y7RPTD59"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  export default app;