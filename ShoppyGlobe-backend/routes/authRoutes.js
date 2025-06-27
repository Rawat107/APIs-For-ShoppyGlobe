import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

// POST /auth/register - Register a new user
router.post("/register", registerUser);

// POST /auth/login - Authenticate user and return token
router.post("/login", loginUser);

export default router;
