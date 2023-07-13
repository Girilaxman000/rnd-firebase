import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCFce0AxZK3mizMEOXg7jay_4YcFwW_MY",
  authDomain: "rnd-6b1c5.firebaseapp.com",
  projectId: "rnd-6b1c5",
  storageBucket: "rnd-6b1c5.appspot.com",
  messagingSenderId: "181621900909",
  appId: "1:181621900909:web:6a86cc24da451051fde164",
};

// Initialize Firebase
let app;
if (!getApps().length) {
  // Note the parentheses after getApps
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // Retrieve the existing app if it already exists
}

export const db = getFirestore(app);
