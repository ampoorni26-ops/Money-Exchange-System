const ExchangeOffer = require("../models/ExchangeOffer");

// ======================================================
// POST /api/offers
// Create a new remittance / exchange request
// ======================================================
const createOffer = async (req, res) => {
  try {
    const {
      fromCurrency,
      toCurrency,
      amount,
      rate,
      recipientName,
      recipientCountry,
    } = req.body;

    // Check required fields
    if (
      !fromCurrency ||
      !toCurrency ||
      !amount ||
      !recipientName ||
      !recipientCountry
    ) {
      return res.status(400).json({
        message:
          "Please provide fromCurrency, toCurrency, amount, recipientName, and recipientCountry.",
      });
    }

    // Check same currency
    if (
      fromCurrency.toUpperCase() === toCurrency.toUpperCase()
    ) {
      return res.status(400).json({
        message: "From and To currency cannot be the same.",
      });
    }

    // Check amount
    if (amount <= 0) {
      return res.status(400).json({
        message: "Amount must be greater than 0.",
      });
    }

    // Create offer
    const offer = new ExchangeOffer({
      user: req.userId,
      fromCurrency: fromCurrency.toUpperCase(),
      toCurrency: toCurrency.toUpperCase(),
      amount: Number(amount),
      rate: rate || null,
      recipientName: recipientName.trim(),
      recipientCountry: recipientCountry.trim(),
      status: "pending",
    });

    await offer.save();

    res.status(201).json({
      message: "Exchange request created successfully!",
      offer,
    });

  } catch (err) {
    console.error("Create Offer Error:", err);

    res.status(500).json({
      message: "Server error while creating offer.",
    });
  }
};


// ======================================================
// GET /api/offers
// Get all pending exchange requests
// ======================================================
const getOffers = async (req, res) => {
  try {
    const offers = await ExchangeOffer.find({
      status: "pending",
    })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.json(offers);

  } catch (err) {
    console.error("Get Offers Error:", err);

    res.status(500).json({
      message: "Server error while fetching offers.",
    });
  }
};


// ======================================================
// PUT /api/offers/:id/accept
// Accept another user's exchange request
// ======================================================
const acceptOffer = async (req, res) => {
  try {
    const offer = await ExchangeOffer.findById(req.params.id);

    // Check whether offer exists
    if (!offer) {
      return res.status(404).json({
        message: "Offer not found.",
      });
    }

    // Check whether offer is still available
    if (offer.status !== "pending") {
      return res.status(400).json({
        message: "This offer is no longer available.",
      });
    }

    // User cannot accept their own request
    if (offer.user.toString() === req.userId) {
      return res.status(400).json({
        message: "You cannot accept your own offer.",
      });
    }

    // --------------------------------------------------
    // Update only the status
    // This also avoids validation problems with older
    // offers that were created before recipient fields
    // were added.
    // --------------------------------------------------
    const updatedOffer = await ExchangeOffer.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          status: "accepted",
        },
      },
      {
        new: true,
      }
    );

    res.json({
      message: "Offer accepted successfully!",
      offer: updatedOffer,
    });

  } catch (err) {
    console.error("Accept Offer Error:", err);

    res.status(500).json({
      message: "Server error while accepting offer.",
    });
  }
};


// ======================================================
// EXPORT CONTROLLERS
// ======================================================
module.exports = {
  createOffer,
  getOffers,
  acceptOffer,
};