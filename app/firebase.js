// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAhuVjZppmTSrCSBjVAojgPxVeW_m5HbQ",
  authDomain: "breakyourblocks-1.firebaseapp.com",
  projectId: "breakyourblocks-1",
  storageBucket: "breakyourblocks-1.appspot.com",
  messagingSenderId: "1080025825392",
  appId: "1:1080025825392:web:3c619bd0225c35486d34b5"
};




if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export { firebase };

