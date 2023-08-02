// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf2a0I_PidOJt9K-oUpqwUpBzqGZDyYJU",
  authDomain: "react-chat-bebf9.firebaseapp.com",
  projectId: "react-chat-bebf9",
  storageBucket: "react-chat-bebf9.appspot.com",
  messagingSenderId: "107712331426",
  appId: "1:107712331426:web:ba8492c78777273c6821fb",
  measurementId: "G-LSSKCJGGMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);