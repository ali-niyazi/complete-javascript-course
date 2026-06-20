# Project 03: Pig Game Architecture

> "Designing a multi-player turn-based game engine in Vanilla JavaScript using synchronized array-based state tracking and dynamic visual layouts."

## Core Technical Concepts Applied

### 1. Complex State Data Structures
* Array-Based State Management: Instead of managing multiple unlinked variables for different players, scores are stored within a structured array (`scores = [0, 0]`), where the index perfectly matches the binary representation of the active player (`activePlayer = 0` or `1`).
* Boolean Game Gates: A dedicated state variable (`playing`) acts as a global structural gate, instantly short-circuiting execution across all event handlers once an end-game state condition is reached.

### 2. Algorithmic Active Player Toggling
* Dynamic State Switching: Toggling turns is executed algorithmically using ternary operations to mutate the active player state variable (`activePlayer = activePlayer === 0 ? 1 : 0`).
* Batch View Synchronization: The visual switch is achieved by utilizing the `.toggle()` method of the ClassList API on the container elements, moving the active visual styling seamlessly between components without manual state checking.

### 3. Initialization Mechanics
* Centralized State Configuration: An encapsulation function (`init`) is declared to establish the application's clean state baseline. This single function handles both internal memory array purging and total DOM view re-synchronization on application boot and game resets.
