const Category = require("../models/Category");

const create_category = (req, res) => {
  const category = new Category({
    name: req.body.categoryName,
    description: req.body.categoryDescription,
  });

  category
    .save()
    .then((result) => {
      res.json("category created");
    })
    .catch((err) => console.log(err));
};

const get_categories = (req, res) => {
  Category.find()
    .then((category) => {
      res.json(category);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_category,
  get_categories,
};
