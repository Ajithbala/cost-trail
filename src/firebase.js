import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP_joc3o18Br85U6wT6hFUZlI_SrvDe8g",
  authDomain: "cost-trail-1be67.firebaseapp.com",
  databaseURL: "https://cost-trail-1be67-default-rtdb.firebaseio.com",
  projectId: "cost-trail-1be67",
  storageBucket: "cost-trail-1be67.appspot.com",
  messagingSenderId: "686932461005",
  appId: "1:686932461005:web:954fbcd8652f0ab4753084"
};

firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database(); // Ensure database is accessed properly

export default database;

// export default firebase;