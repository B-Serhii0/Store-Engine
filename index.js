import products from "./data/products.js";
import { isValidProduct } from "./src/validator.js";
import { totalValue, potentialProfit, groupByCategory, shortageOfGoods } from "./src/analytics.js";
import { findProductById, filterByCategory, searchProducts, sortProducts } from "./src/catalog.js";

"use strict";

console.log("=== STORE INVENTORY & ANALYTICS ENGINE STARTED ===");

try {
    products.forEach((product) => {
        isValidProduct(product);
    });
    console.log("✅ Validation passed successfully: all products are valid!\n");
} catch (error) {
    console.error("❌ Data error in products:", error.message);
}

console.log("--- 📊 WAREHOUSE ANALYTICS ---");
console.log("Total inventory value:", totalValue());
console.log("Potential profit:", potentialProfit());
console.log("Low stock products (quantity <= 2):", shortageOfGoods());

console.log("\n--- 🔍 SEARCH & CATALOG ---");
console.log("Product with ID 3:", findProductById(3));
console.log("Search results for 'keyboard':", searchProducts("keyboard"));
console.log("Products in category 'Electronics':", filterByCategory("Electronics"));

console.log("\n--- 📈 SORTING ---");
console.log("Sorted by price (ascending):", sortProducts("price-asc"));