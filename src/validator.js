"use strict"

function isNumberValid(num) {
    if (typeof (num) === "number" && num >= 0) {
        return true
    }
    return false
}

function isStringValid(str) {
    if (typeof (str) === "string" && str.length > 0) {
        return true
    }
    return false
}

function isValidProduct(product) {
    if (isStringValid(product.name) === false) {
        throw new Error("You entered an invalid string (you either wrote nothing or entered a number instead of a string).")
    }
    if (isStringValid(product.category) === false) {
        throw new Error("You entered an invalid string (you either wrote nothing or entered a number instead of a string).")
    }
    if (isNumberValid(product.price) === false) {
        throw new Error("You entered an invalid number less than 0, or you entered a string.")
    }
    if (isNumberValid(product.costPrice) === false) {
        throw new Error("You entered an invalid number less than 0, or you entered a string.")
    }
    if (isNumberValid(product.quantity) === false) {
        throw new Error("You entered an invalid number less than 0, or you entered a string.")
    }
    return true
}

export { isValidProduct }