import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "weather-bot-36f46.firebaseapp.com",
  projectId: "weather-bot-36f46",
  storageBucket: "weather-bot-36f46.appspot.com",
  messagingSenderId: "1007503787647",
  appId: "1:1007503787647:web:7125d265ac41f606b6214a",
  measurementId: "G-8CEXYZLXB5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
