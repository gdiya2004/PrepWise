
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuDZ9BwNhRLtd0_9SHTYFQg9r4xer0c6Y",
  authDomain: "prepwise-3d713.firebaseapp.com",
  projectId: "prepwise-3d713",
  storageBucket: "prepwise-3d713.firebasestorage.app",
  messagingSenderId: "973388882333",
  appId: "1:973388882333:web:4677a9a9316570f5f2cf74",
  measurementId: "G-VDL2YJKLP9"
};


const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);