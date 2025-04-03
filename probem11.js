// Problem 11:
// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4

function findMissingNumber(arr) {
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) {
            return i;
        }
    }
    return "No missing number";
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 7, 8]));
console.log(findMissingNumber([1, 2, 3, 4, 5])); 