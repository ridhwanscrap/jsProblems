// Problem 12:
// Write a function called "getMaxProduct" that takes an array of integers as input and returns the maximum product that can be obtained by multiplying any two distinct elements from the array.
// Sample Input: [2, 3, 5, 6, 7]
// Sample Output: 42 (obtained by multiplying 6 and 7)

function getMaxProduct(arr) {
    let max1 = 0;
    let max2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2 && arr[i] < max1) {
            max2 = arr[i];
        }
    }

    let product = max1 * max2;

    console.log(product);
    return product;
}

getMaxProduct([2, 3, 5, 6, 7]);
getMaxProduct([2, 3, 5, 6, 7, 8, 9]);
getMaxProduct([2, 3, 5, 6, 7, 8, 9, 10]);

