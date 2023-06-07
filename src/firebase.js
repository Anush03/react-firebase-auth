import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFqdBwn6GlXkuxI9Dx6Gl2OZqzRUMLD0s",
  authDomain: "react-authentication-2d8fb.firebaseapp.com",
  projectId: "react-authentication-2d8fb",
  storageBucket: "react-authentication-2d8fb.appspot.com",
  messagingSenderId: "878709441767",
  appId: "1:878709441767:web:0943c9e90df9827f488e42",
  measurementId: "G-85TZ7B4EQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
