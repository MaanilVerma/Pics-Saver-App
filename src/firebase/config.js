import  firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
  apiKey: "AIzaSyBy3eonSkeptbtzQSaPELxMSMsHMCqt_ME",
  authDomain: "picssaver-12ce9.firebaseapp.com",
  projectId: "picssaver-12ce9",
  storageBucket: "picssaver-12ce9.appspot.com",
  messagingSenderId: "518351395469",
  appId: "1:518351395469:web:441daaca7e0ece5b33a0c4"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };