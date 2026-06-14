# Section 01: JavaScript Fundamentals – Part 1

> "I believe in continuous learning and diving deep into the core of technologies. True engineering isn't just about making things work; it's about understanding exactly how and why they work under the hood."

## Technical Summary & Comprehensive Notes
My complete, structured notes covering the 16 core concepts of JavaScript Fundamentals. Designed to be educational, readable, and highly technical.

### 1. A Brief Introduction to JavaScript
JavaScript is a High-level, Object-oriented, and Multi-paradigm programming language. 
* High-level: The developer doesn't need to manually manage complex hardware resources (like memory); the language handles it through abstractions.
* The Web Trinity: In web development, if HTML is the Noun (content) and CSS is the Adjective (presentation), JS is the Verb (dynamic action). It allows us to build full Web Applications. Thanks to Node.js, JS runs on the backend too. Frameworks like React, Angular, and Vue are entirely built on it.

### 2. Linking a JavaScript File
Writing JS inside HTML <script> tags (Inline Script) is a bad practice as it mixes logic with the presentation layer. The standard approach is linking an external file (e.g., script.js) at the end of the <body> tag. When using external files, we must explicitly use console.log() to see outputs in the browser console.
>  Deep Dive (Optional / Good to Know): Placing the <script> tag at the end of the <body> prevents Render-blocking. It allows the Browser Parser to construct the DOM fully before executing JS, significantly improving performance.

### 3. Values and Variables
A Value is the smallest unit of data (e.g., the number 23). To reuse values, we store them in Variables—think of them as boxes with labels. Variables follow the camelCase naming convention, cannot start with numbers, and must not use reserved words (like new or function). Names should always be descriptive.
>  Deep Dive (Optional / Good to Know): In high-level languages, a variable is essentially a Pointer/Reference to a physical address in the system's RAM (Stack for primitives, Heap for objects).

### 4. Data Types
Every value is either an Object or a Primitive. There are 7 primitives: Number, String, Boolean, Undefined, Null, Symbol, and BigInt. JavaScript uses Dynamic Typing, meaning values have types, not variables. We can reassign a variable to a different type effortlessly.
>  Deep Dive (Optional / Good to Know): typeof null returning 'object' is an unpatched bug from the first JS engine (which used 32-bit units where the 000 type tag meant Object, and null was all zeros).

### 5. let, const and var
Use let for variables that will change (mutate/reassign) later. Use const for immutable values that should never change. Best Practice: Always default to const to prevent bugs, and only use let when strictly necessary. Avoid the legacy var entirely.
>  Deep Dive (Optional / Good to Know): let and const have Block Scope (Lexical Environment), while var has Function Scope, meaning var can leak out of if or for blocks and cause complex bugs.

### 6. Basic Operators
Operators transform or combine values. We have Arithmetic (+, -, *, /), Assignment (=, +=, ++), and Comparison (>, <, >=) operators. Interestingly, the + operator not only adds numbers but also concatenates strings. Comparison operators always yield a Boolean (true/false).
>  Deep Dive (Optional / Good to Know): The + operator is overloaded. If the engine sees a string on either side, it triggers Type Coercion and concatenates them instead of adding mathematically.

### 7. Strings and Template Literals
Before ES6, combining strings and variables required the tedious + operator, making spaces and quotes hard to manage. ES6 introduced Template Literals using backticks (`` ` ``). They allow us to embed variables and expressions directly using ${}, and easily create multi-line strings by just pressing Enter.
>  Deep Dive (Optional / Good to Know): The engine evaluates whatever is inside ${} as an Expression. Advanced libraries (like styled-components in React) use a related feature called Tagged Templates to parse strings customly.

### 8. Taking Decisions: if/else Statements
The if/else statement is a Control Structure that changes the execution path. The if requires a condition that evaluates to a Boolean. If true, its block executes; if false, the optional else block executes. Remember: Variables defined with let/const inside these blocks cannot be accessed outside due to Block Scope.
>  Deep Dive (Optional / Good to Know): When the V8 engine enters a new block {}, it creates a Declarative Environment Record. Variables inside are garbage-collected once the block finishes.

### 9. Type Conversion and Coercion
* Type Conversion (Manual): Explicitly converting data using functions like Number() or String(). Failing to convert a non-numeric string to a number yields NaN (Not a Number).
* Type Coercion (Automatic): JS converts types automatically behind the scenes. The + operator triggers string conversion, while -, *, and / trigger numeric conversion.
>  Deep Dive (Optional / Good to Know): Coercion relies on ECMAScript Abstract Operations (like ToNumber or ToString).

### 10. Truthy and Falsy Values
Values that aren't strictly Booleans are forced into Booleans when evaluated in logical contexts. There are exactly 5 Falsy values (0, "", undefined, null, NaN). Everything else (including empty objects/arrays) is Truthy and evaluates to true.
>  Deep Dive (Optional / Good to Know): This conversion follows the ToBoolean abstract operation, using a strict Lookup Table for maximum performance instead of deep object evaluation.

### 11. Equality Operators: == vs ===
* Strict Equality (===): Performs NO type coercion. Returns true only if both the value AND the data type are identical. (e.g., 18 === '18' is false).
* Loose Equality (==): Performs type coercion before comparing. (e.g., 18 == '18' is true).
Best Practice: Always use === to prevent unpredictable bugs.
>  Deep Dive (Optional / Good to Know): === uses the Strict Equality Comparison Algorithm, checking types first in O(1) time, making it faster and safer.

### 12. Boolean Logic & Logical Operators
* AND (&&): Returns true ONLY if all conditions are true.
* OR (||): Returns true if at least one condition is true.
* NOT (!): Inverts the Boolean value (true becomes false). It has higher precedence than && and ||.
>  Deep Dive (Optional / Good to Know): JS uses Short-Circuit Evaluation. In &&, if the first value is false, it stops evaluating immediately. In ||, if the first value is true, it stops and returns it.

### 13. The switch Statement
A cleaner alternative to chained else if blocks when comparing a single variable against discrete values. It uses Strict Equality (===). Each case must end with a break to prevent "fall-through" execution. You can group cases and provide a default block.
>  Deep Dive (Optional / Good to Know): For many cases, compilers generate a Jump Table (Dictionary), reducing lookup time complexity from O(n) to O(1).

### 14. Statements and Expressions
* Expression: A piece of code that produces a Value (e.g., 3 + 4, true && false, 1991).
* Statement: A larger piece of code that performs an Action but does not produce a value itself (e.g., if/else block, let x = 5).
This distinction is crucial because certain syntax (like ${} in Template Literals) only accepts Expressions.
>  Deep Dive (Optional / Good to Know): The Abstract Syntax Tree (AST) enforces this. This is structurally why React's JSX accepts map() or Ternary operators (Expressions) but rejects if statements.

### 15. The Conditional (Ternary) Operator
A one-line alternative to if/else. Syntax: condition ? trueValue : falseValue`. Crucially, unlike an if statement, the Ternary Operator is an Expression, meaning it returns a value. This allows us to assign it directly to a variable inside Template Literals.
>  Deep Dive (Optional / Good to Know): It's the only JS operator taking 3 operands. It encourages using const instead of let because you can declare and conditionally assign the value in one go, preventing state-mutation bugs.

### 16. JavaScript Releases: ES5, ES6, and ESNext
Created in 1995 (originally named Mocha) in just 10 days. The ECMA organization standardized it in 1997. ES6 (2015) was the biggest update, bringing modern features. JS is Backwards Compatible ("Don't break the web" - old code runs on new browsers) but NOT Forwards Compatible (old browsers don't understand new syntax). Thus, we use tools like Babel to Transpile modern code back to ES5.
>  Deep Dive (Optional / Good to Know): New features pass through a 4-stage process by the TC39 committee. Babel uses Polyfilling to simulate entirely new features (like Promises) in legacy browsers.

---

## Coding Challenges Repository
This section contains my refactored, production-ready solutions to the core logic challenges from the course:

- [x] [Challenge #1: Variables, Basic Operators, and BMI Calculation](./challenge-1.js)
- [x] [Challenge #2: Control Structures (if/else) and Template Literals](./challenge-2.js)
- [x] [Challenge #3: Boolean Logic, Logical Operators, and Averages](./challenge-3.js)
- [x] [Challenge #4: The Conditional (Ternary) Operator](./challenge-4.js)
