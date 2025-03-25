// Problem 3:
// Write a function called `reverseString` that takes a string as input and returns the reverse of that string. Your function should not use the built-in `reverse()` method.
// Example Input/Output:
// - reverseString('hello') should return 'olleh'
// - reverseString('racecar') should return 'racecar'
// - reverseString('12345') should return '54321'


function reverseString(val) {
    let reverseEl = "";

    for (let i = val.length - 1; i >= 0; i--) {
        reverseEl += val[i];
    }

    console.log(reverseEl);
    return reverseEl;
}

reverseString('hello');
reverseString('racecar');
reverseString('12345');
