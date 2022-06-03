const User = require('../models/User.model');

module.exports.userController = {
  addUser: async (req, res) => {
    try {
      const createUser = await User.create({
        name: req.body.name,
      });
      res.json(createUser);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  getUsers: async (req, res) => {
    try {
      const getUsers = await User.find();
      res.json(getUsers);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  getUserById: async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
      res.json(userById);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  changeUser: async (req, res) => {
    try {
      const userChanged = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(userChanged);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndRemove(req.params.id);
      res.json(deleteUser);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },
  addIntoCart: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $push: { cart: req.body.cart },
      });
      res.json('Product added successfully');
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },
  removeFromCart: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { cart: req.body.cart },
      });
      res.json('Product has been removed from cart');
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },
};
