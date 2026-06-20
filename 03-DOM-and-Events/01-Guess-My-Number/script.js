"use strict";

/*
==================================================
1. STATE VARIABLES (Application Data)
==================================================
*/
// The hidden random number between 1 and 20
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// Single Source of Truth for scoring
let score = 20;
let highScore = 0;

/*
==================================================
2. DOM ELEMENT CACHING (Optimization)
==================================================
*/
const btnCheck = document.querySelector(".check");
const btnAgain = document.querySelector(".again");
const message = document.querySelector(".message");
const setScore = document.querySelector(".score");
const setHighScore = document.querySelector(".highscore");

/*
==================================================
3. HELPER FUNCTIONS (DRY Principle)
==================================================
*/
// Encapsulates message updates to prevent repetitive DOM queries
const showMessage = function (txt) {
  message.textContent = txt;
};

/*
==================================================
4. EVENT LISTENERS & GAME LOGIC
==================================================
*/

// --- CHECK BUTTON LOGIC ---
btnCheck.addEventListener("click", function () {
  const myGuess = Number(document.querySelector(".guess").value);

  // Scenario 1: No input provided
  if (!myGuess) {
    showMessage("⛔️ No number!");

    // Scenario 2: Player wins
  } else if (myGuess === randomNumber) {
    showMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;

    // UI Visual Changes for win state
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // Highscore persistence logic
    if (score > highScore) {
      highScore = score;
      setHighScore.textContent = highScore;
    }

    // Scenario 3: Guess is wrong (Refactored logic)
  } else if (myGuess !== randomNumber) {
    if (score > 1) {
      // Ternary operator for high/low messages
      showMessage(myGuess > randomNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      setScore.textContent = score;
    } else {
      // Scenario 4: Player loses
      showMessage("💥 You lost the game!");
      setScore.textContent = 0;
      // UI Visual Changes for lose state
      document.querySelector("body").style.backgroundColor = "#bd1010";
    }
  }
});

// --- RESET BUTTON LOGIC (Play Again) ---
btnAgain.addEventListener("click", function () {
  // 1. Reset State Variables
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // 2. Reset DOM Text Contents
  setScore.textContent = score;
  showMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  // 3. Reset CSS Styles
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
