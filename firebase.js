import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFDHO2NOVd2hNZTvgbVTBvfgXnvC7u8Q0",
  authDomain: "namraj-a5567.firebaseapp.com",
  projectId: "namraj-a5567",
  storageBucket: "namraj-a5567.appspot.com",
  messagingSenderId: "1057513344963",
  appId: "1:1057513344963:web:a50a52d7f5dfa0ca983776",
};

// Initialize Firebase
let app;
if (!getApps.length) {
  app = initializeApp(firebaseConfig);
}

export const db = getFirestore(app);
