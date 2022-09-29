// src/firebase/FirebaseInit.js

import fb from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseApp = fb.initializeApp({
    apiKey: "AIzaSyASwz4-SrICaRUi0plQ_ns9YUy_hX-JYHE",
    authDomain: "insta-clone-a3513.firebaseapp.com",
    projectId: "insta-clone-a3513",
    storageBucket: "insta-clone-a3513.appspot.com",
    messagingSenderId: "797925200894",
    appId: "1:797925200894:web:3197c8b64ad9a3d402e6af"
  
  
});

const db = firebaseApp.firestore();
const auth = fb.auth();
const storage = fb.storage();

export { db, auth, storage, fb };