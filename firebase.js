import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPcCEoMy4oOH8_otMuTlUAhzGhEHFDyCs",
  authDomain: "lendingthree-c92c5.firebaseapp.com",
  projectId: "lendingthree-c92c5",
  storageBucket: "lendingthree-c92c5.appspot.com",
  messagingSenderId: "321361256593",
  appId: "1:321361256593:web:9cf521cc235b6ddbd3df30",
};

// Initialize Firebase
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
