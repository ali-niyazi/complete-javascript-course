# Project 02: Modal Window Component

> "Mastering efficient DOM class mutations, batch element handling, and global keyboard event stream filtering."

## Core Technical Concepts Applied

### 1. NodeList Traversal and Batch Operations
* querySelectorAll Mechanics: Selecting multiple interactive elements (such as close buttons or overlay layers) returns a static `NodeList`.
* Functional Iteration: Instead of relying on manual index tracking, standard loops or functional iterators are utilized to cleanly attach identical event listener behaviors across a collection of DOM nodes simultaneously.

### 2. ClassList API and CSS Separation
* Preventing Direct Style Mutations: Rather than altering structural CSS properties like `display = 'block'` or `display = 'none'` directly via JavaScript, layout presentation is controlled by toggling predefined utility classes (e.g., `.hidden`).
* Performance Optimization: Utilizing class list changes allows the browser layout engine to optimize style recalculations more efficiently than inline style overrides.

### 3. Global Event Stream Filtering (Keyboard Listeners)
* Document-Level Event Scoping: Keyboard events (such as `keydown`) are global in nature and must be listened for on the top-level `document` object rather than individual structural elements.
* Event Object Polymorphism: The handler callback automatically receives the browser's generated Event object (`e`). The function evaluates specific properties (`e.key === 'Escape'`) combined with DOM state checks (`classList.contains`) to trigger conditional UI closures seamlessly.
