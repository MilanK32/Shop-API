const Shop = require("../models/Shop");

const create_shop = (req, res) => {
  const shop = new Shop({
    name: req.body.shopName,
    address: req.body.shopAddress,
    city: req.body.shopCity,
  });

  shop
    .save()
    .then((result) => {
      res.json("Shop created");
    })
    .catch((err) => console.log(err));
};

const get_shops = (req, res) => {
  Shop.find()
    .then((shops) => {
      res.json(shops);
    })
    .catch((err) => console.log(err));
};

module.exports = {
  create_shop,
  get_shops,
};
