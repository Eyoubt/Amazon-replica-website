// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT1cbpqg9GPM4lSM3jbptMJvgiEuq8EMw",
  authDomain: "clone-cbe34.firebaseapp.com",
  projectId: "clone-cbe34",
  storageBucket: "clone-cbe34.appspot.com",
  messagingSenderId: "192542973335",
  appId: "1:192542973335:web:4c37c75c4c860d590178d2",
  measurementId: "G-KM6136LDV4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
