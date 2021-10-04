import { getFirestore } from "../firebase/firebase";

const dbQuery = getFirestore();
const productsCollection = dbQuery.collection("products");

export const getProducts = async () => {
  const response = await productsCollection.get();
  const data = response.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
};

export const getProductById = async (id) => {
  const response = await productsCollection.doc(id).get();
  const data = {
    ...response.data(),
    id: response.id,
  };
  return data;
};

export const getProductsByCategoryId = async (idCategory) => {
  const response = await productsCollection
    .where("category", "==", idCategory)
    .get();
  const data = response.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return data;
};
