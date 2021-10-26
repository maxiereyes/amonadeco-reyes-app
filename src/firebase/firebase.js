import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY.toString(),
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN.toString(),
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID.toString(),
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET.toString(),
  messagingSenderId:
    process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID.toString(),
  appId: process.env.REACT_APP_FIREBASE_APPID.toString(),
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
