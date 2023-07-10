import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdKBRkeYOrpNyda5IfggHjX8Nm1lNUsFE",
  authDomain: "react-native-foodapp-2452d.firebaseapp.com",
  projectId: "react-native-foodapp-2452d",
  storageBucket: "react-native-foodapp-2452d.appspot.com",
  messagingSenderId: "226712531015",
  appId: "1:226712531015:web:3ece673e10513575624162",
  measurementId: "G-YWFQJF0V82",
};

// Initialize Firebase
export const firebaseApp  = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)