import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyASnuuZFeRhtMO_LADe4vBOepbVy4sX3ZU",
    authDomain: "netflix-clone-55849.firebaseapp.com",
    projectId: "netflix-clone-55849",
    storageBucket: "netflix-clone-55849.appspot.com",
    messagingSenderId: "414691477492",
    appId: "1:414691477492:web:966fd99b470799b1cb9ba1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;