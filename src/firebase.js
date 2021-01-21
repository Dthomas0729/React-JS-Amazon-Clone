import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDKrTylwOFeb-c9dkdIik7A8Qdf5P9kYdM",
    authDomain: "clone-29a9c.firebaseapp.com",
    projectId: "clone-29a9c",
    storageBucket: "clone-29a9c.appspot.com",
    messagingSenderId: "321674363163",
    appId: "1:321674363163:web:a581877bd634113389d3be",
    measurementId: "G-L8WJ76J4EB"
})


const db = firebase.firestore();

export { db }

