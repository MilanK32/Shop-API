const express = require("express");
const router = express.Router();
const listsController = require("../controllers/listsController");
const itemController = require("../controllers/itemsController");
const shopController = require("../controllers/shopsController");
const categoryController = require("../controllers/caterogiesController");

// List routes
router.get("/lists", listsController.get_lists);
router.get("/lists/:id", listsController.get_list);
router.post("/lists", listsController.create_list);
router.put("/lists/:id", listsController.update_list);
router.delete("/lists/:id", listsController.delete_list);

// Item routes
router.get("/items", itemController.get_items);
router.get("/items/:id", itemController.get_item);
router.post("/items", itemController.create_item);
router.put("/items/:id", itemController.update_item);
router.delete("/items/:id", itemController.delete_item);

// Shop routes
router.get("/shops", shopController.get_shops);
router.get("/shops/:id", shopController.get_shop);
router.post("/shops", shopController.create_shop);

// Category routes
router.get("/categories", categoryController.get_categories);
router.get("/categories/:id", categoryController.get_category);
router.post("/categories", categoryController.create_category);

module.exports = router;
