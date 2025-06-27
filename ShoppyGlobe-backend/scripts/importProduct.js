import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js"; 

dotenv.config();

// Connect to MongoDB
try {
  await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
  });
  console.log("Connected to MongoDB");

} catch (err) {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
}

try {
  // Fetch data from DummyJSON
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  let importedCount = 0;

  for (const item of products) {
    const exists = await Product.findOne({ name: item.title });

    if (!exists) {
      await Product.create({
        name: item.title.trim(),
        price: item.price,
        description: item.description || "",
        stock: item.stock > 0 ? item.stock : 10,
        thumbnail: item.thumbnail || "https://via.placeholder.com/150?text=No+Image",
      });

      console.log(`Imported: ${item.title}`);
      importedCount++;
    }
  }

  console.log(
    importedCount === 0
      ? "All products already imported."
      : `Imported ${importedCount} new products.`
  );
  process.exit()
} catch (err) {
  console.error("Error importing:", err.message);
  process.exit(1);
}
