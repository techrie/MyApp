// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBE92Ua8xKFkmqsNNhQ4f1ROnHYg8GrpFo",
  authDomain: "myapp-d61d2.firebaseapp.com",
  projectId: "myapp-d61d2",
  storageBucket: "myapp-d61d2.appspot.com",
  messagingSenderId: "334840020016",
  appId: "1:334840020016:web:5e584afb9774e51db401f5",
  measurementId: "G-ETG8PL4FD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);