import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-zZRMVM9q-W2Mcre5JUvAKtImLybJKIU",
  authDomain: "blogproject-48ea4.firebaseapp.com",
  projectId: "blogproject-48ea4",
  storageBucket: "blogproject-48ea4.appspot.com",
  messagingSenderId: "960189480687",
  appId: "1:960189480687:web:e6203d14a1b00169e9651a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();