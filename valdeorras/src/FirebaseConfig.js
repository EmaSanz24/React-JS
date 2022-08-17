// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpw--OTC_2ZKQYkJu23bd3LDsv4Rvm2K8",
  authDomain: "valdeorras-ff828.firebaseapp.com",
  projectId: "valdeorras-ff828",
  storageBucket: "valdeorras-ff828.appspot.com",
  messagingSenderId: "826674451141",
  appId: "1:826674451141:web:9ad6aea5939cb9b960d6ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
