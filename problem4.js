// Write a function isPalindrome that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.
// Example Input/Output:
// isPalindrome("racecar") should return true
// isPalindrome("hello") should return false
// isPalindrome("rotator") should return true
// isPalindrome("peep") should return true

function isPalindrome(val) {
    let reverseEl = "";

    for (let i = val.length - 1; i >= 0; i--) {
        reverseEl += val[i];
    }

    console.log(val === reverseEl);
    
}

isPalindrome("racecar");