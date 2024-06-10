// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVIPzcyEae4SoKC3jz0aHXyc2Bgs72I_c",
  authDomain: "devops-project20.firebaseapp.com",
  projectId: "devops-project20",
  storageBucket: "devops-project20.appspot.com",
  messagingSenderId: "875498302212",
  appId: "1:875498302212:web:e124d9274c5c9df98cbe51",
  measurementId: "G-4QBXN1FSTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
