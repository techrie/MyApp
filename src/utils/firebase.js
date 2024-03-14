// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSKgKE2-Oyxp9yVUmLF_SfIACFDKD4690",
  authDomain: "my-app-3db36.firebaseapp.com",
  projectId: "my-app-3db36",
  storageBucket: "my-app-3db36.appspot.com",
  messagingSenderId: "690770179464",
  appId: "1:690770179464:web:6618b560d57e29192f763d",
  measurementId: "G-3HMWNQYPL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);