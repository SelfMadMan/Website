// Import the functions you need from the Firebase SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqKgXXmSlGMf8WaxiofiWAjHJum479VQ",
  authDomain: "selfmadman-49e4b.firebaseapp.com",
  projectId: "selfmadman-49e4b",
  storageBucket: "selfmadman-49e4b.appspot.com",
  messagingSenderId: "655525366710",
  appId: "1:655525366710:web:af66bf10328e6ec9100f17",
  measurementId: "G-YLWN2HKFNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const db = getFirestore(app);

// Get a reference to the Functions service
const functions = getFunctions(app);

export { db, functions };
