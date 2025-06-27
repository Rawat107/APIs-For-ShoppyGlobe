import Product from "../models/Product.js";

// function for GET /products
export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({
      error: "Failed to fetch products",
      details: err.message,
    });
  }
};

// function for GET /products/:id
export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id); // Look up product by ID

    //Handle not found
    if (!product) return res.status(404).json({ error: "Product not found" }); 
    res.json(product);
  } catch (err) {
    next(err); //forward error
  }
};
