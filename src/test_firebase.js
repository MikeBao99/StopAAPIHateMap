import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyBemDIlrE372iPiIakJ1aQOo3CZ2mg_7ww",
    authDomain: "aapi-firebase.firebaseapp.com",
    databaseURL: "https://aapi-firebase-default-rtdb.firebaseio.com",
    projectId: "aapi-firebase",
    storageBucket: "aapi-firebase.appspot.com",
    messagingSenderId: "544925739023",
    appId: "1:544925739023:web:bfce8c68c23dd6143f9b7a"
  };
  // Initialize Firebase
firebase.initializeApp(config);
export default firebase;