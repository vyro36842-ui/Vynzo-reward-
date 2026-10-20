// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// आपकी Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi38T8yNrfhdflClAWZA55DQHPlvg4iSc",
  authDomain: "vynzo-reward.firebaseapp.com",
  projectId: "vynzo-reward",
  storageBucket: "vynzo-reward.firebasestorage.app",
  messagingSenderId: "41232146055",
  appId: "1:41232146055:web:d774a8e3c4afff60022222"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

// Export Auth & DB Helper Functions
export { signInWithPopup, signOut, onAuthStateChanged, doc, getDoc, setDoc };
