// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNwbXJ-3zdEZzkAZcC0Ylm9OohSluseQQ",
  authDomain: "cclproject-46a5f.firebaseapp.com",
  projectId: "cclproject-46a5f",
  storageBucket: "cclproject-46a5f.appspot.com",
  messagingSenderId: "898010806316",
  appId: "1:898010806316:web:a1bcc76c64779765f3b989",
  measurementId: "G-Q78B42PSWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export {app,db ,auth};
