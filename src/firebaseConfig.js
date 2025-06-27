// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTpAI0U7yi-Bc5in1UsY7hVUhR-CyHXrQ",
  authDomain: "elangual.firebaseapp.com",
  projectId: "elangual",
  storageBucket: "elangual.appspot.com",
  messagingSenderId: "982699196092",
  appId: "1:982699196092:web:627cc99867c9e2d7691ab9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
