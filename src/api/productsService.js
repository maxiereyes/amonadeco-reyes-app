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

export const updateProductStock = async (
  id,
  variantSize,
  variantColor,
  newCount
) => {
  const response = await productsCollection.doc(id).get();
  const data = await response.data();
  const variantEditStock = data.variants.map((variant) => {
    if (variant.size === variantSize && variant.color === variantColor) {
      return {
        ...variant,
        stock: variant.stock - newCount,
      };
    }

    return {
      ...variant,
    };
  });
  return await productsCollection.doc(id).update({
    variants: variantEditStock,
  });
};
