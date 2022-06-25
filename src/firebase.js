import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAi8-Hpv4J7JFfjJqYJXwwOMUY-UN49uOs",
    authDomain: "mesfa-cl.firebaseapp.com",
    projectId: "mesfa-cl",
    storageBucket: "mesfa-cl.appspot.com",
    messagingSenderId: "697515705006",
    appId: "1:697515705006:web:59be5ba48861785aaa233f",
    measurementId: "G-06J90JM951"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const storage = firebase.storage(); //for storage in the databse.
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication

export { auth, provider, storage };
export default db;