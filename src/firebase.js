import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyBO9j3QuLRxR7fD8NFZpQWKUxdEgb2v8fY",
  authDomain: "patitas-suaves-vet.firebaseapp.com",
  databaseURL: "https://patitas-suaves-vet.firebaseio.com",
  projectId: "patitas-suaves-vet",
  storageBucket: "patitas-suaves-vet.appspot.com",
  messagingSenderId: "746491018918",
  appId: "1:746491018918:web:6603fcde03e82a10607e67",
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
