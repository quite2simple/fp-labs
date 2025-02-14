/**
 * Returns a new array with only the numbers from the input array that are divisible by 3.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} A new array with only the numbers that are divisible by 3.
 */
export const divisibleBy3Only = (arr: number[]): number[] => {
    return arr.filter((num) => num % 3 === 0);
}


/**
 * Joins an array of strings into a single string with dashes in between each item.
 * @param {string[]} arr - The array of strings to join.
 * @returns {string} The joined string.
 */
export const dashJoin = (arr: string[]): string => {
    return arr.join('-');
}

export interface HasCredits {
    credits: number;
}


/**
 * Sorts an array of objects by the 'credits' property in ascending or descending order.
 *
 * @param {Type[]} arr - The array of objects to sort.
 * @param {boolean} asc - If true, the array is sorted in ascending order (smallest credits first).
 *                         If false, the array is sorted in descending order (largest credits first).
 * @returns {Type[]} The sorted array.
 */
export const sortByCredits = <Type extends HasCredits>(arr: Type[], asc: boolean): Type[] => {
    return arr.sort((a, b) => (asc ? a.credits - b.credits : b.credits - a.credits));
}
