import { data } from "../data/menu.js";

// GET all categories
export const getMenu = (req, res) => {
  res.json(data);
};

// GET single category
export const getCategory = (req, res) => {
  const { category } = req.params;

  const result = data.find(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  if (!result) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(result);
};

// GET single dish
export const getDish = (req, res) => {
  const { name } = req.params;

  let foundDish = null;

  data.forEach((cat) => {
    const dish = cat.menu.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    if (dish) foundDish = dish;
  });

  if (!foundDish) {
    return res.status(404).json({ message: "Dish not found" });
  }

  res.json(foundDish);
};