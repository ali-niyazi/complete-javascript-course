/*
==================================================
 CODING CHALLENGE #3
==================================================
Course: The Complete JavaScript Course by Jonas Schmedtmann

Concepts Focus: Boolean Logic, Logical Operators (&&, ||), and Complex Control Flow

✨ YOUR TASKS:
1. Calculate the average score for each team (Dolphins and Koalas).
2. Compare averages to determine the winner (including draws).
3. Bonus 1: Add a minimum score requirement of 100 points for a team to win.
4. Bonus 2: Minimum score of 100 also applies to a draw. Otherwise, no one wins.
==================================================
*/

// ================================================
//  TEST DATA 1: Basic Comparison (No Minimum Score Rule)
// ================================================
const scoreDolphins1 = (96 + 108 + 89) / 3;
const scoreKoalas1 = (88 + 91 + 110) / 3;

console.log('--- TEST DATA 1 ---');
console.log(`Dolphins Average: ${scoreDolphins1.toFixed(1)} | Koalas Average: ${scoreKoalas1.toFixed(1)}`);

if (scoreDolphins1 > scoreKoalas1) {
  console.log('Dolphins win the trophy! 🏆');
} else if (scoreKoalas1 > scoreDolphins1) {
  console.log('Koalas win the trophy! 🏆');
} else {
  console.log('It is a draw! Both win the trophy! 🏆');
}

// ================================================
//  TEST DATA BONUS 1: Implementing Minimum 100 Points Rule
// ================================================
const scoreDolphinsBonus1 = (97 + 112 + 101) / 3;
const scoreKoalasBonus1 = (109 + 95 + 123) / 3;

console.log('\n--- BONUS DATA 1 ---');
console.log(`Dolphins Average: ${scoreDolphinsBonus1.toFixed(1)} | Koalas Average: ${scoreKoalasBonus1.toFixed(1)}`);

if (scoreDolphinsBonus1 > scoreKoalasBonus1 && scoreDolphinsBonus1 >= 100) {
  console.log('Dolphins win the trophy! 🏆');
} else if (scoreKoalasBonus1 > scoreDolphinsBonus1 && scoreKoalasBonus1 >= 100) {
  console.log('Koalas win the trophy! 🏆');
} else if (scoreDolphinsBonus1 === scoreKoalasBonus1 && scoreDolphinsBonus1 >= 100) {
  console.log('Both win the trophy! 🏆');
} else {
  console.log('No team wins the trophy. ❌');
}

// ================================================
//  TEST DATA BONUS 2: Draw Scenario Below Minimum Score
// ================================================
const scoreDolphinsBonus2 = (97 + 112 + 101) / 3;
const scoreKoalasBonus2 = (109 + 95 + 106) / 3;

console.log('\n--- BONUS DATA 2 ---');
console.log(`Dolphins Average: ${scoreDolphinsBonus2.toFixed(1)} | Koalas Average: ${scoreKoalasBonus2.toFixed(1)}`);

// Applying the exact same logical rules to the third dataset
if (scoreDolphinsBonus2 > scoreKoalasBonus2 && scoreDolphinsBonus2 >= 100) {
  console.log('Dolphins win the trophy! 🏆');
} else if (scoreKoalasBonus2 > scoreDolphinsBonus2 && scoreKoalasBonus2 >= 100) {
  console.log('Koalas win the trophy! 🏆');
} else if (scoreDolphinsBonus2 === scoreKoalasBonus2 && scoreDolphinsBonus2 >= 100) {
  console.log('Both win the trophy! 🏆');
} else {
  console.log('No team wins the trophy. ❌');
}
