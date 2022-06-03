const mongoose = require("mongoose");
const brandSсhema = mongoose.Schema({
title: String
});

const Brand = mongoose.model("Brand", brandSсhema);
module.exports = Brand;