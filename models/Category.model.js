const mongoose = require("mongoose");
const categorySсhema = mongoose.Schema({
title: String
});

const Category = mongoose.model("Category", categorySсhema);
module.exports = Category;