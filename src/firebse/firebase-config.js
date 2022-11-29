import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClNl0iEqV3C_1C7DKEEkPz67kaRUgHbfQ",
  authDomain: "learn-firebase-fbd07.firebaseapp.com",
  projectId: "learn-firebase-fbd07",
  storageBucket: "learn-firebase-fbd07.appspot.com",
  messagingSenderId: "613932038895",
  appId: "1:613932038895:web:a68ade4834251c8227391a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init services
export const db = getFirestore(app);
