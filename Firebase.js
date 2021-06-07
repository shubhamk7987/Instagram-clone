import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAJW0-1kubZRHAvaWOZgZDSkI-rBPWqx1A",
  authDomain: "create-react-app-d6c94.firebaseapp.com",
  databaseURL: "https://create-react-app-d6c94.firebaseio.com",
  projectId: "create-react-app-d6c94",
  storageBucket: "create-react-app-d6c94.appspot.com",
  messagingSenderId: "521764851028",
  appId: "1:521764851028:web:883c199967bef418b3ccc1",
  measurementId: "G-952S6MG8F5"
});

//export default app
const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();

export {db, auth, storage};


