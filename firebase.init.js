// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBljNYdDqLFYaX9oIIAPHnEEI8-YcS1xG4",
  authDomain: "my-application-40e3b.firebaseapp.com",
  projectId: "my-application-40e3b",
  storageBucket: "my-application-40e3b.firebasestorage.app",
  messagingSenderId: "652993151581",
  appId: "1:652993151581:web:7315428f3c2a2dba5283b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);