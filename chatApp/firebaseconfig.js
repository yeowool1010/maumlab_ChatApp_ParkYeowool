// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDbNdY3t9tN9MnniiDAmibw9oF7Q0OwU",
  authDomain: "maumlab-chatapp-parkyeowool.firebaseapp.com",
  projectId: "maumlab-chatapp-parkyeowool",
  storageBucket: "maumlab-chatapp-parkyeowool.appspot.com",
  messagingSenderId: "158470836955",
  appId: "1:158470836955:web:36ac62e873f48ecc4932fe",
  measurementId: "G-232QT20K4T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
