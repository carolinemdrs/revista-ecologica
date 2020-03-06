import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//import * as functions from 'firebase-functions';


const firebaseConfig = {
    apiKey: "AIzaSyBLKkkA9q1Q2cDhonvO7sik5QIaznApQCw",
    authDomain: "universo-natural-app.firebaseapp.com",
    databaseURL: "https://universo-natural-app.firebaseio.com",
    projectId: "universo-natural-app",
    storageBucket: "universo-natural-app.appspot.com",
    messagingSenderId: "771331353637",
    appId: "1:771331353637:web:a0378caf9d60d87f20e3cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
