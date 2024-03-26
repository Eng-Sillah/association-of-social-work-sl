// firebaseConfig.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Add this import
// import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWB4NoLOfsZjarsrevPQg7yifmT-2gGZo",
  authDomain: "slasw-93950.firebaseapp.com",
  projectId: "slasw-93950",
  storageBucket: "slasw-93950.appspot.com",
  messagingSenderId: "834577259155",
  appId: "1:834577259155:web:ba3152ef15bb5b8670cb66",
  measurementId: "G-B8QE8MVPEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const imgStorage = getStorage(app); // Initialize Firebase Storage
const txtStorage = getStorage(app)

export { imgStorage, txtStorage }; // Export Firebase Storage

