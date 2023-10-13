import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const fb = initializeApp(firebaseConfig);
console.log(fb, "fireBase")
export const authService = getAuth();
export const login = signInWithEmailAndPassword;
export const googleLogIn = signInWithRedirect;
export const signIn = createUserWithEmailAndPassword;
export const provider = new GoogleAuthProvider();
export const popUp = signInWithPopup;
export const redirectResult = getRedirectResult;
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');