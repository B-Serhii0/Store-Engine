import products from "../data/products.js";
"use strict"

function totalValue() {
    const result = products.reduce((acc, val) => acc + (val.price * val.quantity), 0)
    return result
}

function potentialProfit() {
    const result = products.reduce((acc, val) => acc + ((val.price - val.costPrice) * val.quantity), 0)
    return result
}

function groupByCategory() {
    const result = products.reduce((acc, product) => {
        if (acc[product.category] === undefined) {
            acc[product.category] = []
        }
        acc[product.category].push(product)
        return acc
    }, {})
    return result
}

function shortageOfGoods() {
    const result = products.filter((product) => product.quantity <= 2)
    return result
}

export { totalValue, potentialProfit, groupByCategory, shortageOfGoods }