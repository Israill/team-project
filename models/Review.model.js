const mongoose = require("mongoose");
const reviewSсhema = mongoose.Schema({
product: {
  ref: "Products",
  type: mongoose.SchemaTypes.ObjectId
},
user: {
  ref: "User",
  type: mongoose.SchemaTypes.ObjectId
},
text: String
});

const Review = mongoose.model("Review", reviewSсhema);
module.exports = Review;