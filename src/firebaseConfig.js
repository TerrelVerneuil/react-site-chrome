import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjAqJTFNW9uzJENrjpg_7DuBsPD_3xEpM",
  authDomain: "react-chrome-site.firebaseapp.com",
  databaseURL: "https://react-chrome-site-default-rtdb.firebaseio.com",
  projectId: "react-chrome-site",
  storageBucket: "react-chrome-site.appspot.com",
  messagingSenderId: "220152147383",
  appId: "1:220152147383:web:c1e662e8b81bcccfab8c32",
  measurementId: "G-G80V9YNN2Q"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//firebase.initializeApp(firebaseConfig);

export {app,db,auth};
