// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

const heights2 = [167, 190, 120, 165, 137];

let min = heights2[0]


for (i = 1; i <= heights2.length; i++) {
    if (heights2[i] < min) {
        min = heights2[i];
    }
}
console.log(min);

// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const heights3 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
let smallName = heights3[0];

for (i = 1; i <= heights3.length; i++) {
    if (heights3[i] < smallName) {
        smallName = heights3[i];
    }
}
console.log(smallName);