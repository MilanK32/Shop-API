const Item = require("../models/Item");
const Category = require("../models/Category");

const create_item = (req, res) => {
  const item = new Item({
    name: req.body.itemName,
    category: req.body.categoryId,
    quantity: req.body.quantity,
  });
  item
    .save()
    .then((result) => {
      res.json("Item created");
    })
    .catch((err) => console.log(err));
};

const get_items = (req, res) => {
  Item.find()
    .populate("category")
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      console.log(err);
    });
};

const update_item = (req, res) => {
  const id = req.params.id;
  const name = req.body.itemName;
  const category = req.body.categoryId;
  const quantity = req.body.quantity;

  Item.findById(id)
    .then((item) => {
      item.name = name;
      item.category = category;
      item.quantity = quantity;
      return item.save();
    })
    .then((result) => {
      res.json("Item updated");
    })
    .catch((err) => console.log(err));
};

const delete_item = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndRemove(id)
    .then(() => {
      res.json("Item deleted");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_item,
  get_items,
  update_item,
  delete_item,
};
