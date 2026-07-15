// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    // ここに、コンソールでコピーした設定を貼り付ける
    apiKey: "AIzaSyCbuzIlCWIOqGu3dsQrwBe3Wf6TwdpRn70",
    authDomain: "react-ecsite-4078e.firebaseapp.com",
    projectId: "react-ecsite-4078e",
    storageBucket: "react-ecsite-4078e.firebasestorage.app",
    messagingSenderId: "158901682351",
    appId: "1:158901682351:web:f0336f5d05aef4bb3d545a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
