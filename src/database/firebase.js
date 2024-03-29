import firebase from "firebase";
import 'firebase/auth';
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBO9j3QuLRxR7fD8NFZpQWKUxdEgb2v8fY",
  authDomain: "patitas-suaves-vet.firebaseapp.com",
  databaseURL: "https://patitas-suaves-vet.firebaseio.com",
  projectId: "patitas-suaves-vet",
  storageBucket: "patitas-suaves-vet.appspot.com",
  messagingSenderId: "746491018918",
  appId: "1:746491018918:web:6603fcde03e82a10607e67",
};
// Inicializar Firebase
const fire = firebase.initializeApp(config);

const storage = firebase.storage();
const db = firebase.firestore();
const auth = fire.auth();

export { storage, db, auth, firebase as default };
