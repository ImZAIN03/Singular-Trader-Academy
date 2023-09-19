/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeQaVA2lhEDckWE2NNCaFqvAkY0ZNUsYk",
  authDomain: "trader-app-c8238.firebaseapp.com",
  projectId: "trader-app-c8238",
  storageBucket: "trader-app-c8238.appspot.com",
  messagingSenderId: "826130660364",
  appId: "1:826130660364:web:526929112b8ba992ef4229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
