const Products = require('../models/Products.model');

module.exports.productsController = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find({});
      res.json(products);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  getCategoryProducts: async (req, res) => {
    try {
      const catProds = await Products.findById({ category: req.params.id });
      res.json(catProds);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  getBrandProducts: async (req, res) => {
    try {
      const brandProds = await Products.findById({ brand: req.params.id });
      res.json(brandProds);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  addProduct: async (req, res) => {
    try {
      const prods = await Products.create({
        brand: req.body.brand,
        category: req.body.category,
        title: req.body.title,
        price: req.body.price,
      });
      res.json(prods);
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  patchProduct: async (req, res) => {
    try {
      await Products.findByIdAndUpdate(req.params.id, { body: req.params.body });
      res.json('Product changed');
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Products.findByIdAndRemove(req.params.id);
      res.json('Product has been removed');
    } catch (err) {
      res.json({ error: err.toString() });
    }
  },
};
