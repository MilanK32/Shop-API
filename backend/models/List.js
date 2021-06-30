const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itemSchema = require("../models/Item").schema;

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    items: [itemSchema],
    shop: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  },
  { timestamps: true }
);

const List = mongoose.model("List", listSchema);

module.exports = List;
