const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Logic for registering a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation check
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill in all fields." });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters." });
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered." });
    }

    // Hash the password before saving — never store plain text
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the real user to MongoDB
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    console.log("New user registered:", { name, email });

    res.status(201).json({
      message: "User registered successfully!",
      user: { name: newUser.name, email: newUser.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration." });
  }
};

// Logic for logging in
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password." });
    }

    // Find the user in MongoDB
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare typed password against the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Create a real JWT token instead of the fake one
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful!",
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during login." });
  }
};

module.exports = {
  registerUser,
  loginUser
};