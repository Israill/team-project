const Review = require("../models/Review.model");


module.exports.reviewController = {
    getReviews: async (req, res) => {
        try {
            const getRew = await Review.find()
            res.json(getRew);
        } catch (e) {
            res.json(e);
        }
    },
    postReviews: async (req, res) => {
        try {
            const postRew = await Review.create({product: req.body.product, user: req.body.user})
            res.json(postRew);
        } catch (e) {
            res.json(e);
        }
    },
    deleteReviews: async (req, res) => {
        try {
            Review.findByIdAndRemove(req.params.id);
        } catch (e) {
            res.json(e);
        }
    }
};