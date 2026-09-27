# Chess board diagonal highlighting

## Problem and current demo

Create an 8×8 board with alternating squares and highlight both diagonals through a selected square. The browser demo constructs the board with DOM APIs and uses one click listener on its parent to respond to square clicks. It does not implement chess rules or pieces. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- Should the selected square itself be highlighted?
- Can board size vary? Should row and column coordinates be displayed?
- Must users move the selection with a keyboard?

## State and approach

Each square has row and column data attributes. The selected coordinates determine the highlight: squares share a diagonal when `row - column` or `row + column` matches the selected square. This relationship can be checked directly while rendering or updating the board. Event delegation avoids a listener on every square; clearing old highlights before applying new ones keeps one selection visible.

## Accessibility and verification

The current squares are `i` elements and are clickable only with a pointer. Use focusable controls or a deliberate grid keyboard model, plus labels that identify coordinates and selected state. Verify center and corner selections, both diagonal directions, and repeated selection. For a variable board, test small and even sizes as well.
