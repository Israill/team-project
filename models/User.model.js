const mongoose = require("mongoose");
const userSсhema = mongoose.Schema({
name: String,
Cart: [{
  ref: "Products",
  type: mongoose.SchemaTypes.ObjectId,
}]
});

const User = mongoose.model("User", userSсhema);
module.exports = User;