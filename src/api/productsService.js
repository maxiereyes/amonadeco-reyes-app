export const getProducts = async () => {
  const response = await fetch("/mockdata.json");
  const data = await response.json();
  return data;
};
