// import firebase from 'firebase/app';
// import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJ4mBacioN96pa59C59LgACY-E1ZhHiuY",
    authDomain: "vuecrud-e5dd1.firebaseapp.com",
    projectId: "vuecrud-e5dd1",
    storageBucket: "vuecrud-e5dd1.appspot.com",
    messagingSenderId: "766638321664",
    appId: "1:766638321664:web:3f70ffaeade2f03e3b28e5",
    measurementId: "G-6PR67S7PMS"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();