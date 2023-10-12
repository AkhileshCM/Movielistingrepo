// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeIgNDlgKQzW9Uv43VDaJZ2rO8O5R4orA",
  authDomain: "ecommerce-clone-1e4ff.firebaseapp.com",
  projectId: "ecommerce-clone-1e4ff",
  storageBucket: "ecommerce-clone-1e4ff.appspot.com",
  messagingSenderId: "289813927782",
  appId: "1:289813927782:web:c7b67f6dd0d40838f9daa7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);