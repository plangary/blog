import firebase from "firebase/app";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCewle6Qd5HHNhjpxphtogEmsvIPKvY5aw",
    authDomain: "blog-44312.firebaseapp.com",
    databaseURL: "https://blog-44312-default-rtdb.firebaseio.com",
    projectId: "blog-44312",
    storageBucket: "blog-44312.appspot.com",
    messagingSenderId: "586514697932",
    appId: "1:586514697932:web:b525583e2d0fe60d9bfc69",
    measurementId: "G-NQ1K0TBHFE"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default firebase;