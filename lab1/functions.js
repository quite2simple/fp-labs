/**
 * Pure function 
 * @param {number[]} arr 
 * @returns {number[]} a new array with only odd numbers
 */
const keepOddOnly = (arr) => {
    return arr.filter((num) => num % 2 !== 0);
}

/**
 * Pure function
 * @param {number[]} arr 
 * @returns {number[]} a new array with all numbers squared
 */
const squaredArray = (arr) => {
    return arr.map((num) => num * num);
}

/**
 * Pure function
 * @param {any[]} arr 
 * @returns {any[]} a new array with only objects with a length property
 */
const keepHasLengthOnly = (arr) => {
    return arr.filter((obj) => Object.hasOwn(obj, 'length'));
}

/**
 * Pure function
 * @param {number[]} arr 
 * @returns {number} the sum of all numbers in the array
 */
const arraySum = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
}

/**
 * Pure function
 * @param {Function} func 
 * @param {any[]} arr 
 * @returns {any[]} a new array with the function applied to each element
 */
const applyFuncToElements = (func, arr) => {
    return arr.map(func);
}