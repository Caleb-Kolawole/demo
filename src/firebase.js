// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5qJn5vPMSGStjnyhgqTD7atNdlAJOi2c",
  authDomain: "kayglo-citadel.firebaseapp.com",
  projectId: "kayglo-citadel",
  storageBucket: "kayglo-citadel.appspot.com",
  messagingSenderId: "414463716473",
  appId: "1:414463716473:web:b0c0207fa48a88315fb8a8",
  measurementId: "G-Y96Q1MMMPM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);