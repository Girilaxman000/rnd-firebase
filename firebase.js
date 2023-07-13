import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1YKrtY7KMI1jlsRurUx1g4-scWiownLQ",
  authDomain: "lending-tree-loan-month-3.firebaseapp.com",
  projectId: "lending-tree-loan-month-3",
  storageBucket: "lending-tree-loan-month-3.appspot.com",
  messagingSenderId: "962060411269",
  appId: "1:962060411269:web:8e9108ab86136d8cd0e4ec",
};

// Initialize Firebase
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
