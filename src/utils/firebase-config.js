import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; 
const firebaseConfig = {
  apiKey: "AIzaSyD7f0Pmgi5a82sa-7TWdhOGO1gN19_VQRQ",
  authDomain: "movie-library-969bd.firebaseapp.com",
  projectId: "movie-library-969bd",
  storageBucket: "movie-library-969bd.appspot.com",
  messagingSenderId: "970743614489",
  appId: "1:970743614489:web:2d62cb2e4109805260ee88",
  measurementId: "G-VVZVQLTPXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const provider = new GoogleAuthProvider();
export { firebaseAuth, provider };