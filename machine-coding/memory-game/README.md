# Memory sequence game

## Problem and current demo

Show a sequence of highlighted boxes for a player to repeat. This browser demo generates boxes, flashes a sequence, compares clicks in order, advances the level on a win, and stores a high score in `localStorage`. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- May a box appear twice in a row? Can a player click while the sequence is playing?
- Does a mistake restart the level or the game?
- What does the high score measure: correct clicks, longest sequence, or level?
- Should the sequence speed change with difficulty?

## State and approach

The sequence and current click position drive the game. The code also tracks level, score, high score, and whether play is active. A clearer state machine would separate ready, showing sequence, accepting input, won, and lost; the highlighted box is temporary presentation state. Persist only the agreed high-score measure, and keep game state in memory.

## Accessibility and verification

The boxes currently rely on color and pointer clicks. Use buttons, visible focus, keyboard input, and a non-color cue for the sequence. Check sequence generation, correct and incorrect order, level transition, restart, and storage restoration. Control randomness and timers in automated tests so the game can be checked deterministically.
