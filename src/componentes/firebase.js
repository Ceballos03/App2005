import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyAdpEpMWGW7-dvzBAGKXWa5ZdRlSWNE1us",
  authDomain: "app2005-1b2de.firebaseapp.com",
  projectId: "app2005-1b2de",
  storageBucket: "app2005-1b2de.appspot.com",
  messagingSenderId: "253999934787",
  appId: "1:253999934787:web:a33df51f96c046fa0a93f6",
  measurementId: "G-WLY009Z2LH"
};


const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)

//const analytics = getAnalytics(app);