const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");
const router = Router();

router.get("/user/review", reviewController.getReviews);
router.post("/user/review", reviewController.postReviews);
router.delete("/admin/review", reviewController.deleteReviews);

module.exports = router;