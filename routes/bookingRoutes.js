const express = require("express");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");
const { bookActivity, getMyBookings } = require("../controllers/bookingController");

router.post("/", protect, bookActivity);
router.get("/", protect, getMyBookings);
module.exports = router;
