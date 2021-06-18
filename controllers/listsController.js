const List = require("../models/List");

const create_list = (req, res) => {
  const list = new List({
    name: req.body.listName,
    items: req.body.listItems,
    shop: req.body.listShop,
  });

  list
    .save()
    .then((result) => {
      res.json("List created");
    })
    .catch((err) => console.log(err));
};

const get_lists = (req, res) => {
  List.find()
    .populate("items shop")
    .then((lists) => {
      res.json(lists);
    })
    .catch((err) => console.log(err));
};

const get_list = (req, res) => {
  const id = req.params.id;

  List.findById(id)
    .then((list) => {
      res.json(list);
    })
    .catch((err) => console.log(err));
};

const update_list = (req, res) => {
  const id = req.params.id;
  const name = req.body.listName;
  const items = req.body.listItems;
  const shop = req.body.listShop;

  List.findById(id)
    .then((list) => {
      list.name = name;
      list.items = items;
      list.shop = shop;
      return list.save();
    })
    .then((result) => {
      res.json("List updated");
    })
    .catch((err) => console.log(err));
};

const delete_list = (req, res) => {
  const id = req.params.id;

  List.findByIdAndRemove(id)
    .then(() => {
      res.json("List deleted");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_list,
  get_lists,
  get_list,
  update_list,
  delete_list,
};
