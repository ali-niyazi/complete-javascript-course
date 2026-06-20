# Project 01: Guess My Number Game

> "Transitioning from theoretical scripting to active interface manipulation by managing single-player game states and user input validation."

## Core Technical Concepts Applied

### 1. Element Selection and Data Type Casting
* Form Input Evaluation: Retreiving data from user input fields (HTMLInputElement) via the `.value` property always yields a string data type.
* Explicit Type Conversion: Before performing mathematical comparisons or logical checks against the game's secret number, values are explicitly cast using the `Number()` function to prevent unexpected bugs caused by implicit type coercion.

### 2. State Isolation and Reset Mechanics
* State Variable Initialization: The application establishes mutable state variables (`score` and `secretNumber`) in the JavaScript engine runtime memory.
* Decoupled Reset Logic: The game restoration feature ("Again" button) resets the internal memory state variables first, and then synchronizes the DOM presentation layer manually, avoiding full page reloads to optimize performance.

### 3. Code Refactoring and Cognitive Complexity Reduction
* DRY Principle Enforcement: Repetitive DOM mutations, such as updating text notifications across multiple game conditions, are encapsulated into clean, reusable arrow functions or function expressions (e.g., `displayMessage`).
* Algorithmic Optimization: Complex nested conditions are refactored into streamlined structures using ternary operators to maintain highly readable code.
