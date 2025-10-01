
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDqVSpv32NNDQD_AgxoaB_imG2cxjknoHU",
    authDomain: "prepwise-1234.firebaseapp.com",
    projectId: "prepwise-1234",
    storageBucket: "prepwise-1234.firebasestorage.app",
    messagingSenderId: "132061847559",
    appId: "1:132061847559:web:31740907687fe825c88aa2",
    measurementId: "G-CWKHJBYT7V"
};

const app = !getApps.length ?   initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);