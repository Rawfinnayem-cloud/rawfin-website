// firebase-config.js
// Shared Firebase setup used by both index.html (public site) and admin.html (admin panel)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHTUhdpGrcw1dHGMBgglytRXp0i_B3mZo",
  authDomain: "rawfin-2000.firebaseapp.com",
  projectId: "rawfin-2000",
  storageBucket: "rawfin-2000.firebasestorage.app",
  messagingSenderId: "890667692643",
  appId: "1:890667692643:web:317c49b00bd62c147bfe56",
  measurementId: "G-X93K24WZN2"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
