var firebaseConfig = {
    apiKey: "AIzaSyApHL9aZ-bc33QAm7mQhkCJaUy4Xc0sUGo",
    authDomain: "two-113bb.firebaseapp.com",
    projectId: "two-113bb",
    storageBucket: "two-113bb.appspot.com",
    messagingSenderId: "900729976495",
    appId: "1:900729976495:web:5422775089be8186d6c65a",
    measurementId: "G-59BJ2QYWEH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();