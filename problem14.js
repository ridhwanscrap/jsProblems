// Write a program that prints a triangle asterisk (*). The number of rows in the triangle is determined by the user's input. Each row should contain a  string where the characters are repeated in a mirrored pattern.
// For example, if the user inputs 5, the program should print:
//       *
//     ***
//    ****
//   *****
//  ******
function printTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = '*'.repeat(i);
        console.log(stars);
    }
}

// Ex
let userInput = 5;
printTriangle(userInput);

