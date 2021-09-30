import { getFirestore } from "../firebase/firebase";

const dbQuery = getFirestore();
const categoriesCollection = dbQuery.collection("category");

export const getCategories = async () => {
  const response = await categoriesCollection.get();
  const data = response.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
};

export const getCategoryNameById = async (id) => {
  const response = await categoriesCollection.doc(id).get();
  const data = response.data();
  return data;
};
