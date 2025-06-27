import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Register a new user
export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

     // Validation check
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Username, email, and password are required" });
    }


    // Check if user already exists
    const exists = await User.findOne({ $or: [{ email }, { username }]});
    if (exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create user (no hashing, as per instructions)
    await User.create({ username, email, password });

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    next(err); // Global error handler
  }
};

// Login and issue a JWT token
export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find user by email and password
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create JWT with user ID
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    next(err); // Pass to error handler
  }
};
