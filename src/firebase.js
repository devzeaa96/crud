import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALzg3uMUvyPB6icTObd5i4UJy6IZrP_Zs",
    authDomain: "crud-47cdd.firebaseapp.com",
    projectId: "crud-47cdd",
    storageBucket: "crud-47cdd.appspot.com",
    messagingSenderId: "478283252885",
    appId: "1:478283252885:web:94deb644b47767dcd0c79c"
  }


export const firebaseApp = firebase.initializeApp(firebaseConfig)