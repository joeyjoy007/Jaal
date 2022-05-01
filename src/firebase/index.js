// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCntyQeOqYeO8lHqgQiEgWKPb97vzkzJjk",
  authDomain: "jaal-42789.firebaseapp.com",
  projectId: "jaal-42789",
  storageBucket: "jaal-42789.appspot.com",
  messagingSenderId: "296176861861",
  appId: "1:296176861861:web:37eceee367ecddd0dc034c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
