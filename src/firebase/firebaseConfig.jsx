// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import Firebase Auth module

const firebaseConfig = {
  apiKey: "AIzaSyBa4N4DvdurZig4x3WanAYPa4ZK_t25eyY",
  authDomain: "kanekt365-main.firebaseapp.com",
  projectId: "kanekt365-main",
  storageBucket: "kanekt365-main.appspot.com", // FIX: was "firebaseStorage.app"
  messagingSenderId: "126983871349",
  appId: "1:126983871349:web:b9ac0e74a98d08f077913c"
};

// Initialize Firebase and Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

export { auth };


