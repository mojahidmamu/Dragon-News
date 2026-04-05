// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
//   GoogleAuthProvider, 
//   GithubAuthProvider, 
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQjyE2z_bnf-T8XCU2ahp6KsAosm5jpwQ",
  authDomain: "dragon-news-auth-f0793.firebaseapp.com",
  projectId: "dragon-news-auth-f0793",
  storageBucket: "dragon-news-auth-f0793.firebasestorage.app",
  messagingSenderId: "1083565732642",
  appId: "1:1083565732642:web:2690b142032a51bcd42b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth instance
export const auth = getAuth(app);