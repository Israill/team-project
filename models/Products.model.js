const mongoose = require("mongoose");
const productsSсhema = mongoose.Schema({
brand: {
  ref: "Brand",
  type: mongoose.SchemaTypes.ObjectId
},
category: {
  ref: "Category",
  type: mongoose.SchemaTypes.ObjectId
},
title: String,
price: Number
});

const Products = mongoose.model("Products", productsSсhema);
module.exports = Products;