"use strict";
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// --- Data Set ---
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", 
      "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"
    ],
    [
      "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", 
      "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
======================================================================
CODING CHALLENGE #1 - SOLUTION IMPLEMENTATION
======================================================================
*/

// 1. Array Destructuring to separate team player rosters
const [players1, players2] = game.players;

// 2. Rest Pattern utilization to isolate goalkeeper from field players
const [gk, ...fieldPlayers] = players1;

// 3. Spread Operator utilization to merge both squad arrays into a single list
const allPlayers = [...players1, ...players2];

// 4. Expanding an existing roster with substitution parameters using Spread
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5. Object Destructuring combined with explicit variable property renaming (aliasing)
const { team1, x: draw, team2 } = game.odds;

// 6. Variadic Function execution using Rest Parameters to collect arbitrary arguments
const printGoals = function (...players) {
  // Unpacking the gathered array into log parameters to fulfill printing requirements
  console.log("Scorers:", ...players);
  console.log(`${players.length} goals were scored in total.`);
};

// Test executions for Task 6
printGoals("Pavard", "Martinez", "Alaba");
printGoals(...game.scored); // Spreading array data back into standard parameters

// 7. Logical Short-Circuit Evaluation (&&) used to circumvent conditional Control Blocks
team1 < team2 && console.log("Team 1 is more likely to win based on algorithmic odds.");
team1 > team2 && console.log("Team 2 is more likely to win based on algorithmic odds.");
