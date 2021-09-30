import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVCSEQjDGRlOkxhzwDI-DsfWyzMVOTqp0",
  authDomain: "amonadeco-e7bd0.firebaseapp.com",
  projectId: "amonadeco-e7bd0",
  storageBucket: "amonadeco-e7bd0.appspot.com",
  messagingSenderId: "322645325105",
  appId: "1:322645325105:web:a1833d3c5bdbb993842c10",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
