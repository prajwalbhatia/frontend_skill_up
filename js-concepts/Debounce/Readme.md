## What is Debouncing?

Debouncing is a technique used to improve the performance of a feature by controlling the frequency of function calls. It delays the execution of a function until a certain amount of time has passed since the last invocation.

## Use Case of Debouncing

A common use case for debouncing is in search boxes found in applications like Swiggy and Amazon. When a user types in a search query, debouncing ensures that the search function is not called with every keystroke, but rather after a brief pause once the user has finished typing.

### Without Debouncing:

- Typing "C" triggers the 1st call.
- Typing "h" triggers the 2nd call.
- Typing "o" triggers the 3rd call.
- Typing "w" triggers the 4th call.
- Typing "m" triggers the 5th call.
- Typing "e" triggers the 6th call.
- Typing "i" triggers the 7th call.
- Typing "n" triggers the 8th call.

### With Debouncing:

- Typing "Chowmein" triggers only one call after a pause, combining all the keystrokes.

Debouncing optimizes performance by reducing unnecessary function calls and improving user experience.
