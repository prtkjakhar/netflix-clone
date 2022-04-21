import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhkzMNxuD06IT6DbhNDXq1qGKhPl4RTsQ",
    authDomain: "netflix-clone-7623f.firebaseapp.com",
    projectId: "netflix-clone-7623f",
    storageBucket: "netflix-clone-7623f.appspot.com",
    messagingSenderId: "529143036680",
    appId: "1:529143036680:web:ec2bfe255f3e0d679b0abd",
    measurementId: "G-V27T19K37V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;