// Generate OTP

const r = Math.random();

//console.log(r);  //output-> 0.66887546797666
//10000 se multiply karenge jisse 0 se upar number mile
// but 3 digit ka bhi number mil sakta hai isliye 9000 + 1000 kar diya

const otp = Math.round(r * 9000 + 1000);

console.log(otp);
//output-> 3467, 7535, 7544, 7435





// The Math.round() function in JavaScript is used to round a number to the nearest integer.
var number = 3.7;
var roundedNumber = Math.round(number);
console.log(roundedNumber); // Output: 4