import { keepEvenOnly, squaredArray, arraySum, keepHasCreditsOnly, applyFuncToElements } from "./functions.js";


const numberArray = [4, 7, -2, 8, 2, 3, 9, 11, 9, 10];
const objectArray = [
    {id: 549, username: "jh442", credits: 100},
    {id: 4992, username: "boe-6", tester: true, credits: 45},
    {id: 4, username: "Arson", credits: 2},
    {id: 4, username: "Lemming"},
]
const barrier = 10;

const squaredSum = arraySum(squaredArray(keepEvenOnly(numberArray)));

const filteredObjects = applyFuncToElements((obj) => obj.credits, keepHasCreditsOnly(objectArray)).filter((c) => c > barrier);
const mean = arraySum(filteredObjects) / filteredObjects.length;


console.log(squaredSum);

console.log(filteredObjects);
console.log(mean);