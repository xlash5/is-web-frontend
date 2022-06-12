import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCl3pb2edigZKcDA_qoksBaZTl7qq7CVWw",
    authDomain: "is-web-ca.firebaseapp.com",
    projectId: "is-web-ca",
    storageBucket: "is-web-ca.appspot.com",
    messagingSenderId: "684464898727",
    appId: "1:684464898727:web:17e848811f914e49a31182"
};

export const firebaseApp = initializeApp(firebaseConfig);