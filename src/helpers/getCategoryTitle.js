import { listCategories } from "./listCategories";

export const getCategoryTitleByValue = (value) => {
  const [category] = listCategories.filter((cat) => cat.value === value);
  return category.name;
};
