// Problem 1:
// Write a function `calculateStrikeRate` that takes in two parameters - the runs scored by a batsman and the total number of balls they faced. The function should return the batsman's strike rate, which is calculated as the number of runs scored per 100 balls faced.
// For example, if the batsman scored 45 runs off 30 balls, their strike rate would be calculated as follows:
// (45 / 30) * 100 = 150
// The function should round the strike rate to two decimal places.
// Example Input/Output:
// - calculateStrikeRate(45, 30) should return 150.00
// - calculateStrikeRate(100, 60) should return 166.67
// - calculateStrikeRate(25, 40) should return 62.50

function calculateStrikeRate (runs, balls) {

    if (balls === 0) {
        return 0;
    }

    let strikeRate = ((runs / balls) * 100).toFixed(2);
    return strikeRate;
}

console.log(calculateStrikeRate(45,30));
console.log(calculateStrikeRate(100,60));
console.log(calculateStrikeRate(25,40));