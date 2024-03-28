// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAukPvHo3G4lnRtkTjTqF5nlIc6hVGaB3c",
    authDomain: "askaro-9ad82.firebaseapp.com",
    projectId: "askaro-9ad82",
    storageBucket: "askaro-9ad82.appspot.com",
    messagingSenderId: "735397066387",
    appId: "1:735397066387:web:0d0d053e7b991becc07f66",
    measurementId: "G-399DGSM9K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);

export { auth, provider };