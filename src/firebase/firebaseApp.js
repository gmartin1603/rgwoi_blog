// import firebase from "firebase"


// const firebaseConfig = {
//     apiKey: "AIzaSyBWEj0lLp71ARa-9yAH9KCNN-maIi2N-Bs",
//     authDomain: "rgwoi-fa2a9.firebaseapp.com",
//     projectId: "rgwoi-fa2a9",
//     storageBucket: "rgwoi-fa2a9.appspot.com",
//     messagingSenderId: "151607843320",
//     appId: "1:151607843320:web:24ef3f816892b82c8ede0d",
//     measurementId: "G-JLC18J30XP"
//   };

// firebase.initializeApp(firebaseConfig);

// export const db = firebase.firestore();
// export const auth = firebase.auth();

// Initialize Cloud Firestore through Firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
        apiKey: "AIzaSyBWEj0lLp71ARa-9yAH9KCNN-maIi2N-Bs",
        authDomain: "rgwoi-fa2a9.firebaseapp.com",
        projectId: "rgwoi-fa2a9",
        storageBucket: "rgwoi-fa2a9.appspot.com",
        messagingSenderId: "151607843320",
        appId: "1:151607843320:web:24ef3f816892b82c8ede0d",
        measurementId: "G-JLC18J30XP"
      });

export const db = getFirestore();