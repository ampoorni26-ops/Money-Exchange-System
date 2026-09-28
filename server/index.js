require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Import Route Files
const authRoutes = require("./routes/authRoutes");
const offerRoutes = require("./routes/offerRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.error("❌ Database Connection Error:", err);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/offers", offerRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});