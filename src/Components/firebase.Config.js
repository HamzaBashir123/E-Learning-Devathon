import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  orderBy,
  
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoMMHxZnQz2B4uCZy_JleFgqOppT4DEBE",
  authDomain: "devathon-smit-e4815.firebaseapp.com",
  projectId: "devathon-smit-e4815",
  storageBucket: "devathon-smit-e4815.appspot.com",
  messagingSenderId: "29097299378",
  appId: "1:29097299378:web:4d258004cf10ea721068ab"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getAuth,
  createUserWithEmailAndPassword,
  query,
  where,
  getDocs,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteDoc,
  updateDoc,
  serverTimestamp,
  orderBy,
  
  
};
