// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzIpXvkHXZqDfJyqKxF24_yx0MYtCjRZs",
  authDomain: "csvtodb-e521e.firebaseapp.com",
  projectId: "csvtodb-e521e",
  storageBucket: "csvtodb-e521e.appspot.com",
  messagingSenderId: "140209282972",
  appId: "1:140209282972:web:29e9eed3f729569feeb259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;