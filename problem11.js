// Problem 11:
// Write a function called "findMissingNumber" that takes an array of consecutive integers from 1 to n, with one number missing, and returns the missing number.
// For example:
// Input: [1, 2, 3, 5, 6, 7, 8]
// Output: 4




function findMissingNumber(arr) {
    let missingNum = "No Missing Number";
    for (let i = 0; i < input.arr; i++) {
        if (arr[i] !== i + 1) {
            missingNum = i + 1;
        }
    }
    console.log(missingNum);
    return missingNum;
}
findMissingNumber([1, 2, 3, 5, 6, 7, 8]);

findMissingNumber([1, 2, 3, 4, 5]);