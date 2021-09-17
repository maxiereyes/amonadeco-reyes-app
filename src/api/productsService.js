import { listCategories } from "../helpers/listCategories";

export const getProducts = async () => {
  const response = await fetch("/mockdata.json");
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch("/mockdata.json");
  const data = await response.json();
  const product = data.filter((item) => item.id === id);
  return product[0];
};

export const getProductsByCategoryId = async (idCategory) => {
  const response = await fetch("/mockdata.json");
  const data = await response.json();
  const category = listCategories.find((cat) => cat.value === idCategory);
  const products = data.filter((item) => item.category === category.id);
  return products;
};
