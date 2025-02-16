/**
 * Pure function 
 * @param {number[]} arr 
 * @returns {number[]} a new array with only even numbers
 */
export const keepEvenOnly = (arr) => {
    return arr.filter((num) => num % 2 === 0);
}

/**
 * Pure function
 * @param {number[]} arr 
 * @returns {number[]} a new array with all numbers squared
 */
export const squaredArray = (arr) => {
    return arr.map((num) => num * num);
}

/**
 * Pure function
 * @param {any[]} arr 
 * @returns {any[]} a new array with only objects with a 'credits' property
 */
export const keepHasCreditsOnly = (arr) => {
    return arr.filter((obj) => Object.hasOwn(obj, 'credits'));
}

/**
 * Pure function
 * @param {number[]} arr 
 * @returns {number} the sum of all numbers in the array
 */
export const arraySum = (arr) => {
    return arr.reduce((acc, num) => acc + num, 0);
}

/**
 * Pure function
 * @param {Function} func 
 * @param {any[]} arr 
 * @returns {any[]} a new array with the function applied to each element
 */
export const applyFuncToElements = (func, arr) => {
    return arr.map(func);
}