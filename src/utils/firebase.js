// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbLqZ2GQGFTwM4QDzJS2q4vmfQqQE_0bg",
  authDomain: "netflix-92414.firebaseapp.com",
  projectId: "netflix-92414",
  storageBucket: "netflix-92414.appspot.com",
  messagingSenderId: "890494137114",
  appId: "1:890494137114:web:a52c08d193707cf2a8b2a3",
  measurementId: "G-X6MWZX53K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();