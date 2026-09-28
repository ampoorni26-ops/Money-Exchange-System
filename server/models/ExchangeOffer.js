const mongoose = require("mongoose");

const exchangeOfferSchema = new mongoose.Schema(
  {
    // User who created the exchange request
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Currency the user currently has
    fromCurrency: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    // Currency the user needs
    toCurrency: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
    },

    // Amount the user wants to exchange
    amount: {
      type: Number,
      required: true,
      min: [1, "Amount must be greater than 0"],
    },

    // Person who will receive the money
    recipientName: {
      type: String,
      required: true,
      trim: true,
    },

    // Country where the recipient is located
    recipientCountry: {
      type: String,
      required: true,
      trim: true,
    },

    // Exchange rate
    rate: {
      type: Number,
      default: null,
    },

    // Current stage of the exchange
    status: {
      type: String,
      enum: [
        "pending",
        "matched",
        "accepted",
        "completed",
        "cancelled",
      ],
      default: "pending",
    },

    // Time when request was created
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = mongoose.model(
  "ExchangeOffer",
  exchangeOfferSchema
);