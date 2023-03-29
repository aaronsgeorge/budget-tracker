// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVovSUUoOBGck8SNeFW2oB-c7QTrnzxK4",
  authDomain: "ccl-project-5580b.firebaseapp.com",
  projectId: "ccl-project-5580b",
  storageBucket: "ccl-project-5580b.appspot.com",
  messagingSenderId: "507739579217",
  appId: "1:507739579217:web:abf667576745a1f97de970",
  measurementId: "G-NXTF88V2ZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};