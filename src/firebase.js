import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAy0nKjepqPOSclAj5cf6y0Fdcmc0GuGws",
    authDomain: "letsgoapp-b6547.firebaseapp.com",
    databaseURL: "https://letsgoapp-b6547.firebaseio.com",
    projectId: "letsgoapp-b6547",
    storageBucket: "letsgoapp-b6547.appspot.com",
    messagingSenderId: "880960541432"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const database = firebase.database();

export const storageRef=firebase.storage();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
