/*
==================================================
- CODING CHALLENGE #1
==================================================
Course: The Complete JavaScript Course by Jonas Schmedtmann

Mark and John are trying to compare their BMI (Body Mass Index).
Formula: BMI = mass / height ** 2

- YOUR TASKS:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula.
3. Create a Boolean variable 'markHigherBMI' containing true/false.
==================================================
*/

// - TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Calculating BMIs
const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn ** 2);

// Comparing BMIs
const markHigherBMI = bmiMark > bmiJohn;

console.log("--- Data 1 ---");
console.log("Mark's BMI:", bmiMark);
console.log("John's BMI:", bmiJohn);
console.log("Is Mark's BMI higher than John's?", markHigherBMI);


// -- TEST DATA 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculating BMIs
const bmiMark2 = massMark2 / (heightMark2 ** 2);
const bmiJohn2 = massJohn2 / (heightJohn2 ** 2);

// Comparing BMIs
const markHigherBMI2 = bmiMark2 > bmiJohn2;

console.log("\n--- Data 2 ---");
console.log("Mark's BMI:", bmiMark2);
console.log("John's BMI:", bmiJohn2);
console.log("Is Mark's BMI higher than John's?", markHigherBMI2);
