// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider , getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI2jUjrzlFxeHm7JTUsoED3N_u-4lTNvo",
  authDomain: "database-app-3fd45.firebaseapp.com",
  projectId: "database-app-3fd45",
  storageBucket: "database-app-3fd45.appspot.com",
  messagingSenderId: "824760525402",
  appId: "1:824760525402:web:ba5accbf6e4c703935ee63",
  measurementId: "G-T4YC4PH35Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//google Login / auth
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider()