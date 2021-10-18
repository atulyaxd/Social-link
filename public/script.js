// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfEM6yv-IG1hLxMM08nL6TFJSOuz9fXtQ",
  authDomain: "itsatulya-a3f60.firebaseapp.com",
  databaseURL: "https://itsatulya-a3f60-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "itsatulya-a3f60",
  storageBucket: "itsatulya-a3f60.appspot.com",
  messagingSenderId: "59002071303",
  appId: "1:59002071303:web:2536d34002ef8001f33da2",
  measurementId: "G-8EWQCGPKFN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);