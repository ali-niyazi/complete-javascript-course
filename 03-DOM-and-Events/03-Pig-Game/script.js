"use strict";

/*
==================================================
1. DOM ELEMENT CACHING (UI Presentation Layer)
==================================================
*/
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");

// Utilizing getElementById for explicit ID selections (Performance optimization)
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

/*
==================================================
2. APPLICATION STATE VARIABLES (Memory Layer)
==================================================
*/
let scores, currentScore, activePlayer, playing;

/*
==================================================
3. HELPER & STATE MUTATION FUNCTIONS
==================================================
*/

// Initializes or resets the entire application state to baseline conditions
const init = function () {
  // Memory State Reset
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // UI Presentation Reset
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // CSS Class Architecture Reset
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// Invoking initialization on script load
init();

// Algorithmic switch logic for turn-based gameplay
const switchPlayer = function () {
  // Clear active UI current score before switching
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Binary state toggle (0 to 1, or 1 to 0)
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Synchronize visual panels simultaneously using class toggles
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

/*
==================================================
4. EVENT LISTENERS & GAME FLOW LOGIC
==================================================
*/

// --- DICE ROLLING LOGIC ---
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generate programmatic random dice value [1 - 6]
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Synchronize UI image source dynamically based on state
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // 3. Evaluate game rules for rolled conditional value
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// --- SCORE HOLDING LOGIC ---
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Accumulate current round score into active player's global state array
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Evaluate win condition threshold (Score >= 100)
    if (scores[activePlayer] >= 100) {
      // Game termination state routine
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// --- NEW GAME RESET LOGIC ---
btnNew.addEventListener("click", init);
