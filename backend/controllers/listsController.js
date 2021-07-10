const List = require("../models/List");

const create_list = (req, res, next) => {
  const list = new List({
    name: req.body.listName,
    shop: req.body.listShop,
  });

  list
    .save()
    .then((result) => {
      res.status(201).json("List created");
    })
    .catch((err) => console.log(err));
};

const get_lists = (req, res) => {
  const filterQuery = req.query;
  if (req.query.shop) {
    filterQuery.shop = req.query.shop;
  }
  if (req.query.items) {
    filterQuery.items = req.query.items;
  }

  List.find(filterQuery)
    .populate("shop items.category")
    .then((lists) => {
      res.status(200).json(lists);
    })
    .catch((err) => console.log(err));
};

const get_list = (req, res) => {
  const id = req.params.id;

  List.findById(id)
    .populate("shop")
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((err) => console.log(err));
};

const update_list = (req, res) => {
  const id = req.params.id;
  const name = req.body.listName;
  const shop = req.body.listShop;

  List.findById(id)
    .then((list) => {
      list.name = name;
      list.shop = shop;
      return list.save();
    })
    .then((result) => {
      res.status(200).json("List updated");
    })
    .catch((err) => console.log(err));
};

const delete_list = (req, res) => {
  const id = req.params.id;

  List.findByIdAndRemove(id)
    .then(() => {
      res.status(200).json("List deleted");
    })
    .catch((err) => console.log(err));
};

const create_list_item = (req, res) => {
  const id = req.params.id;
  const item = {
    name: req.body.itemName,
    category: req.body.itemCategory,
    quantity: req.body.itemQuantity,
  };

  List.findById(id)
    .then((list) => {
      list.items.push(item);
      return list.save();
    })
    .then((result) => {
      res.status(201).json("Item created");
    })
    .catch((err) => console.log(err));
};

const get_list_items = (req, res) => {
  const id = req.params.id;

  List.findById(id)
    .populate("items.category")
    .then((list) => {
      res.status(200).json(list.items);
    })
    .catch((err) => console.log(err));
};

const get_list_item = (req, res) => {
  const listId = req.params.listId;
  const itemId = req.params.itemId;

  List.findById(listId)
    .populate("items.category")
    .then((list) => {
      let item = list.items.id(itemId);
      res.status(200).json(item);
    })
    .catch((err) => console.log(err));
};

const update_list_item = (req, res) => {
  const listId = req.params.listId;
  const itemId = req.params.itemId;
  const name = req.body.itemName;
  const category = req.body.itemCategory;
  const quantity = req.body.itemQuantity;

  List.findById(listId)
    .then((list) => {
      let item = list.items.id(itemId);
      item.name = name;
      item.category = category;
      item.quantity = quantity;
      return list.save();
    })
    .then((result) => {
      res.status(200).json("Item updated");
    })
    .catch((err) => console.log(err));
};

const delete_list_item = (req, res) => {
  const listId = req.params.listId;
  const itemId = req.params.itemId;

  List.findById(listId)
    .then((list) => {
      const updatedListItems = list.items.filter((item) => {
        return item._id.toString() !== itemId.toString();
      });
      list.items = updatedListItems;
      return list.save();
    })
    .then((result) => {
      res.status(200).json("Item deleted");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_list,
  get_lists,
  get_list,
  update_list,
  delete_list,
  get_list_items,
  get_list_item,
  create_list_item,
  update_list_item,
  delete_list_item,
};
