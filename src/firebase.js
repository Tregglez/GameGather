// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFpI6Trfl61T9PwXH1WTJ03ReYOTdzzo4",
  authDomain: "gamegather-b5feb.firebaseapp.com",
  projectId: "gamegather-b5feb",
  storageBucket: "gamegather-b5feb.appspot.com",
  messagingSenderId: "391678127733",
  appId: "1:391678127733:web:73faf740ea6e56c64dd23c",
  measurementId: "G-GX1BR8RR67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
