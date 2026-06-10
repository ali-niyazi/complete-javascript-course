/*
==================================================
- CODING CHALLENGE #2
==================================================
Course: The Complete JavaScript Course by Jonas Schmedtmann

Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
==================================================
*/

// Task 1
// --- DATA 1 ---
// Note: bmiMark and bmiJohn are already calculated from Challenge #1

if (bmiMark > bmiJohn) {
  console.log("Mark's BMI is higher than John's!");
} else if (bmiJohn > bmiMark) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Mark's BMI = John's BMI");
}
// --- DATA 2 ---
if (bmiMark2 > bmiJohn2) {
  console.log("Mark's BMI is higher than John's!");
} else if (bmiJohn2 > bmiMark2) {
  console.log("John's BMI is higher than Mark's!");
} else {
  console.log("Mark's BMI = John's BMI");
}

// Task 2
// --- DATA 1 ---
if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else if (bmiJohn > bmiMark) {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
} else {
  console.log(`Mark's BMI (${bmiMark}) = John's BMI (${bmiJohn})`);
}
// --- DATA 2 ---
if (bmiMark2 > bmiJohn2) {
  console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})!`);
} else if (bmiJohn2 > bmiMark2) {
  console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`);
} else {
  console.log(`Mark's BMI (${bmiMark2}) = John's BMI (${bmiJohn2})`);
}
