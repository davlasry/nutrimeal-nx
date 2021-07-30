import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBbarTFnyV5G6shH9bVnDR1IHrEBuRviGU",
  authDomain: "nutrimeal-app.firebaseapp.com",
  projectId: "nutrimeal-app",
  storageBucket: "nutrimeal-app.appspot.com",
  messagingSenderId: "161907521386",
  appId: "1:161907521386:web:533d84de088eb7cb44d713",
  measurementId: "G-5GZKXR6EED",
});

export const firestore = firebase.firestore();

export default firebase;
