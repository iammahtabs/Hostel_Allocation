import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAdQt4o5a1A5KqLgJ4z_N3iDU0tOdBndNQ",
    authDomain: "react-hostel-allocation.firebaseapp.com",
    projectId: "react-hostel-allocation",
    storageBucket: "react-hostel-allocation.appspot.com",
    messagingSenderId: "21617846288",
    appId: "1:21617846288:web:6b46c565e1b2be182c0295",
    measurementId: "G-PLFDJFLM5Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;