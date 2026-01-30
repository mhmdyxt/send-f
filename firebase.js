// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAvY5mIB0tDT-Rw8VHBCf6tGod3tinTeqc",
  authDomain: "nahdi-2a776.firebaseapp.com",
  projectId: "nahdi-2a776",
  storageBucket: "nahdi-2a776.appspot.com",
  messagingSenderId: "611932522816",
  appId: "1:611932522816:web:c1eb9afc676e817cfad2a5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
