import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7PUT3yXMj_yE1N7vEctBYWBV6th41fRQ",
    authDomain: "whats-app-clone-23e41.firebaseapp.com",
    projectId: "whats-app-clone-23e41",
    storageBucket: "whats-app-clone-23e41.appspot.com",
    messagingSenderId: "943176878373",
    appId: "1:943176878373:web:b9cf334240821fe1ea72cc",
    measurementId: "G-CBSX1TCCWD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

// const firebaseConfig = {
    // apiKey: "AIzaSyBC_klU1-Y1FU3ivhG44pSbqXLuWpGwUAU",
    // authDomain: "whats-app-clone-de09c.firebaseapp.com",
    // projectId: "whats-app-clone-de09c",
    // storageBucket: "whats-app-clone-de09c.appspot.com",
    // messagingSenderId: "223236344183",
    // appId: "1:223236344183:web:59ba48c99c446c26bfb972",
    // measurementId: "G-0JHSLBGYYJ"
//   };