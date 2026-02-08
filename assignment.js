function newPrice(currentPrice, discount) {
    let discountedAmount = 0;
    let finalPrice = 0;

    if (currentPrice > 0 && discount >= 0 && discount <= 100) {
        
        discountedAmount = (currentPrice * discount) / 100;
        
        finalPrice = currentPrice - discountedAmount;

        console.log("After discount: " + finalPrice);
        return finalPrice;
    } else {
        console.log("Invalid price or discount");
        return null;
    }
}


// newPrice(1500,20);
// newPrice(2000,15);
// newPrice(1200, 7);
// newPrice("1000",10);
// newPrice(2000, 17.17);
// newPrice(500,"5")



// problem 2

/*function signature/sample */
function validOtp(otp) {
          if(typeof otp !== String){
            return "invalid";
          }
          if(otp.length ===8 && otp.startsWith("ph-")){
            return true;
          }
          else{
            return false;
          }
}

// console.log(validOtp("ph-10985"));  
// console.log(validOtp("ph-1234"));   
// console.log(validOtp("abc-12345"));  
// console.log(validOtp(["ph-10985"])); 
// console.log(validOtp(12345678));


// problem 3

/*function signature/sample */
function finalScore(omr) {
    if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
        return "Invalid";
    }

    const { right, wrong, skip } = omr;

    if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number" || (right + wrong + skip !== 100)) {
        return "Invalid";
    }

    let totalScore = right - (wrong * 0.5);

    return totalScore;
}

// console.log(finalScore({ right: 67, wrong: 23, skip: 10 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore({ right: 67, wrong: 23, skip: 10 })); 
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore({ right: 80, wrong: 25, skip: 0 }));
// console.log(finalScore("!@#"));

// Problem 4

function gonoVote(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let i = 0; i < votes.length; i++) {
        if (votes[i] === "ha") {
            haCount++;
        } else if (votes[i] === "na") {
            naCount++;
        }
    }

    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}

// console.log(gonoVote(["ha", "na", "ha", "na"])); // "equal"
// console.log(gonoVote(["ha", "na", "na"]));       // false
// console.log(gonoVote(["ha", "ha", "ha", "na"])); // true

// problem 5

function analyzeText(str) {
    if (typeof str !== "string" || str.trim().length === 0) {
        return "Invalid";
    }

    let tokenCount = str.split(" ").join("").length;

    let words = str.split(" ");
    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return {
        longwords: longest,
        token: tokenCount
    };
}

// console.log(analyzeText("I am a little honest person")); 
// console.log(analyzeText("Hello world")); 
// console.log(analyzeText(12345)); 
// console.log(analyzeText(" "));