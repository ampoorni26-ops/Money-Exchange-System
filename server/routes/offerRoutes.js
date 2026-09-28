const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { createOffer, getOffers, acceptOffer } = require("../controllers/offerController");

router.post("/", auth, createOffer);
router.get("/", getOffers);
router.put("/:id/accept", auth, acceptOffer);

module.exports = router;