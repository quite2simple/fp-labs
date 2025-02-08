import { keepEvenOnly, squaredArray, arraySum, keepHasLengthOnly, applyFuncToElements } from "./functions.js";


const numberArray = [4, 7, -2, 8, 2, 3, 9, 11, 9, 10];
const objectArray = [11, 2, 5, "43", 18, true, 6, {a: 5, b: "hello"}, 80, 15, NaN, 12, -4, 10];
const barrier = 10;

const squaredSum = arraySum(squaredArray(keepEvenOnly(numberArray)));

const filteredObjects = objectArray.filter((n) => typeof n === "number" && n > barrier);
const mean = arraySum(filteredObjects) / filteredObjects.length;


console.log(squaredSum);

console.log(filteredObjects);
console.log(mean);