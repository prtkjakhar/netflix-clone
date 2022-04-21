import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB1Skw7ZZkufPNydKC4spGt1c14X-Fdu84",
  authDomain: "netflix-clone-87b50.firebaseapp.com",
  projectId: "netflix-clone-87b50",
  storageBucket: "netflix-clone-87b50.appspot.com",
  messagingSenderId: "343155117772",
  appId: "1:343155117772:web:124cf72c4774b0e0da7c69",
  measurementId: "G-H0YFJJTTVW"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;