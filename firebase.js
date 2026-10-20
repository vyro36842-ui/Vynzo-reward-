// Import necessary Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi38T8yNrfhdflClAWZA55DQHPlvg4iSc",
  authDomain: "vynzo-reward.firebaseapp.com",
  projectId: "vynzo-reward",
  storageBucket: "vynzo-reward.firebasestorage.app",
  messagingSenderId: "41232146055",
  appId: "1:41232146055:web:d774a8e3c4afff60022222"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services for Vynzo Reward
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
