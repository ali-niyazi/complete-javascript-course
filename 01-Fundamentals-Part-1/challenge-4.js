/*
==================================================
CODING CHALLENGE #4
==================================================
Course: The Complete JavaScript Course by Jonas Schmedtmann

Concepts Focus: The Conditional (Ternary) Operator and Expression-based Logic.

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

✨ YOUR TASKS:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
   this. It's not allowed to use an if/else statement 😅 
2. Print a string to the console containing the bill value, the tip, and the final value
   (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

 TEST DATA: 
- Test for bill values: 275, 40, and 430
==================================================
*/

// --- TEST CASE 1: Bill = 275 ---
const bill1 = 275;
const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
console.log(
  `The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`,
);

// --- TEST CASE 2: Bill = 40 ---
const bill2 = 40;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
console.log(
  `The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`,
);

// --- TEST CASE 3: Bill = 430 ---
const bill3 = 430;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;
console.log(
  `The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`,
);
