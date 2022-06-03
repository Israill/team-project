const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");
const router = Router();

router.get("/review", reviewController.getReviews);
router.post("/review", reviewController.postReviews);
router.delete("review", reviewController.deleteReviews);

module.exports = router;