// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBBplImBBMUyn2uc_M_FjDyCr2WLf4plYo",
  authDomain: "clone-3e3e4.firebaseapp.com",
  projectId: "clone-3e3e4",
  storageBucket: "clone-3e3e4.appspot.com",
  messagingSenderId: "1072631340149",
  appId: "1:1072631340149:web:71ddbd9949ac93fd5e6c3c",
  measurementId: "G-7S0QBLB88X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export { db, auth};