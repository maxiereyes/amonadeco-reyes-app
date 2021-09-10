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
