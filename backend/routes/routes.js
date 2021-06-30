const express = require("express");
const router = express.Router();
const listsController = require("../controllers/listsController");
const shopController = require("../controllers/shopsController");
const categoryController = require("../controllers/caterogiesController");

// List routes
router.get("/lists", listsController.get_lists);
router.get("/lists/:id", listsController.get_list);
router.get("/lists/:id/items", listsController.get_list_items);
router.get("/lists/:listId/items/:itemId", listsController.get_list_item);
router.post("/lists", listsController.create_list);
router.post("/lists/:id/items", listsController.create_list_item);
router.put("/lists/:id", listsController.update_list);
router.put("/lists/:listId/items/:itemId", listsController.update_list_item);
router.delete("/lists/:id", listsController.delete_list);
router.delete("/lists/:listId/items/:itemId", listsController.delete_list_item);

// Shop routes
router.get("/shops", shopController.get_shops);
router.get("/shops/:id", shopController.get_shop);
router.post("/shops", shopController.create_shop);

// Category routes
router.get("/categories", categoryController.get_categories);
router.get("/categories/:id", categoryController.get_category);
router.post("/categories", categoryController.create_category);

module.exports = router;
