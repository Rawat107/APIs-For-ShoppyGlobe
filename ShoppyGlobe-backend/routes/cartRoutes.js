import express from "express";
import { addToCart, updateCartItem, removeFromCart } from "../controllers/cartController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Protect all cart routes with JWT auth middleware
router.use(verifyToken);

// POST /cart - Add item to cart
router.post("/", addToCart);

// PUT /cart/:id - Update quantity
router.put("/:id", updateCartItem);

// DELETE /cart/:id - Remove item from cart
router.delete("/:id", removeFromCart);

export default router;
