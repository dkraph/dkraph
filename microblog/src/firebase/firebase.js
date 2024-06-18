import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDy-lu5-oXVrETc5_AGsXu_JkghJ6RGy9c",
  authDomain: "microblog-4bfea.firebaseapp.com",
  projectId: "microblog-4bfea",
  storageBucket: "microblog-4bfea.appspot.com",
  messagingSenderId: "621833235104",
  appId: "1:621833235104:web:5023a4ab5509b95bf837c5",
  measurementId: "G-CC9RQLW57V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
