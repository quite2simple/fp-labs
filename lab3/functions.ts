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

export interface CreditedUser extends HasCredits {
    id: number;
    username: string;
}

/**
 * Sorts an array of objects by the 'credits' property in ascending or descending order.
 *
 * @param {T[]} arr - The array of objects to sort.
 * @param {boolean} asc - If true, the array is sorted in ascending order (smallest credits first).
 *                         If false, the array is sorted in descending order (largest credits first).
 * @returns {T[]} The sorted array.
 */
export const sortByCredits = <T extends HasCredits>(arr: T[], asc: boolean): T[] => {
    return arr.sort((a, b) => (asc ? a.credits - b.credits : b.credits - a.credits));
}

/**
 * Wraps a function and logs its calls, including arguments and return value.
 * 
 * @template T - The type of the function to be wrapped.
 * @param {T} fn - The function to be logged.
 * @returns {T} A new function that logs its calls and then delegates to the original function.
 */
export const loggedFunctionCall = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T): T => {
    return ((...args: Parameters<T>): ReturnType<T> => {
        console.log(`Calling function ${fn.name} with arguments:`, args);
        const result = fn(...args);
        console.log(`Function ${fn.name} returned:`, result);
        return result;
    }) as T;
}
