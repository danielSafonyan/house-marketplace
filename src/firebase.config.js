// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLVnUMD6C6w9Om5rzxKuMnOdBsVNWtYTs",
  authDomain: "house-marketplace-app-reactive.firebaseapp.com",
  projectId: "house-marketplace-app-reactive",
  storageBucket: "house-marketplace-app-reactive.appspot.com",
  messagingSenderId: "147710214021",
  appId: "1:147710214021:web:c3467b7d5715dbceec0eec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()