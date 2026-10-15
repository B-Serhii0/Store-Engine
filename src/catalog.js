import products from "../data/products.js";
"use strict"

function findProductById(id) {
    const result = products.find((product) => product.id === id)
    return result
}

function filterByCategory(catName) {
    const result = products.filter((product) => product.category === catName)
    return result
}

function searchProducts(nameProduct) {
    const query = nameProduct.toLowerCase()
    const result = products.filter((product) => product.name.toLowerCase().includes(query))
    return result
}

function sortProducts(sort) {
    if (sort === "price-asc") {
        return products.toSorted((a, b) => a.price - b.price)
    }
    else {
        return products.toSorted((a, b) => b.price - a.price)
    }
}

export { findProductById, filterByCategory, searchProducts, sortProducts }