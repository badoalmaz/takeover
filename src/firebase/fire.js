import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyCJZoJi3URBr775Yppv2BEwqTJkdfIAa88",
  authDomain: "final-hackathon-a7665.firebaseapp.com",
  projectId: "final-hackathon-a7665",
  storageBucket: "final-hackathon-a7665.appspot.com",
  messagingSenderId: "1090688797392",
  appId: "1:1090688797392:web:80adda9f06892aaf62ecd5",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
