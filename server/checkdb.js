require("dotenv").config();
const mongoose = require("mongoose");

async function run() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ Connected to:", mongoose.connection.name);
  console.log("📍 Host:", mongoose.connection.host);

  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("📂 Collections in this database:");
  collections.forEach((c) => console.log(" -", c.name));

  const User = require("./models/User");
  const users = await User.find();
  console.log("👤 Users found:", users.length);
  console.log(users);

  await mongoose.disconnect();
}

run();