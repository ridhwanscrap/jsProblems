//Write a function to convert temperature from Celsius to Fahrenheit.

let temp = 30;
function tempConvert(temp) {
    let b;
    b = ((temp * 1.80) + 32);
    return b;
}
console.log(tempConvert(temp)); //output 86


// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

let arr1 = [5, 6, 11, 12, 98, 5];

let arr2 = [5, 6, 11, 12, 98, 5];

function repeated(arr, target) {

    let count = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            count++;
        }
    }
    return count;
}

console.log(repeated(arr1, 5));

console.log(repeated(arr2, 25));


// Write a function to count the number of vowels in a string.


function countVowels(str) {

    let vowels = ["a", 'e', 'i', 'o', 'u'];
    return str
        .split('')
        .filter(char => vowels.includes(char))
        .length;

}

console.log(countVowels("hello")); //output 2

// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(str) {
    const words = str.split(" ");

    return words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
}

// const input = "I am learning Programming to become a programmer";
// console.log(findLongestWord(input));
//  // Output: Programming


// free drinks 
// -burgut more than 500tk: free coke 
// -else coke 30tk


let totalPrice = 650;
let drinkPrice;

if (totalPrice >= 500) {
    drinkPrice = 0;
    console.log("Drinks free");
} else {
    drinkPrice = 30;
    console.log("Drink price 30")
}

console.log(`Total bill: ${drinkPrice}`)

