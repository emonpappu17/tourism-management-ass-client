import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    // apiKey: "AIzaSyAu5JmmKhfZByWgusRMXF2prByuXjeF6E0",
    // authDomain: "tourism-management-syste-55e0b.firebaseapp.com",
    // projectId: "tourism-management-syste-55e0b",
    // storageBucket: "tourism-management-syste-55e0b.firebasestorage.app",
    // messagingSenderId: "895830012320",
    // appId: "1:895830012320:web:159f9c5f56da710602f4c5"

    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
