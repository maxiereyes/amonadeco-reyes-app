import { getFirestore } from "../firebase/firebase";
import firebase from "firebase";

const dbQuery = getFirestore();
const ordersCollection = dbQuery.collection("orders");

export const addOrder = async (order) => {
  const response = await ordersCollection.add({
    ...order,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  });
  return response.id;
};
