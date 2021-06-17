const express = require("express");
const router = express.Router();
const listsController = require("../controllers/listsController");
const itemController = require("../controllers/itemsController");
const shopController = require("../controllers/shopsController");
const categoryController = require("../controllers/caterogiesController");

// List routes
router.get("/lists", listsController.get_lists);
router.post("/create-list", listsController.create_list);
router.put("/list/:id/update", listsController.update_list);
router.delete("/list/:id/delete", listsController.delete_list);

// Item routes
router.get("/items", itemController.get_items);
router.post("/create-item", itemController.create_item);
router.put("/item/:id/update", itemController.update_item);
router.delete("/item/:id/delete", itemController.delete_item);

// Shop routes
router.get("/shops", shopController.get_shops);
router.post("/create-shop", shopController.create_shop);

// Category routes
router.get("/categories", categoryController.get_categories);
router.post("/create-category", categoryController.create_category);

module.exports = router;
