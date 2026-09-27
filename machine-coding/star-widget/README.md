# Star widget

## Problem and current demo

Let a user preview and select a rating. This browser demo creates five star icons, fills them on hover, restores the selected value on pointer exit, and reports a click through a callback. It uses a remote Font Awesome stylesheet for the icons. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- Is zero a valid rating? Can a selection be cleared?
- Is the value controlled by a parent, and can the number of stars vary?
- Should hover preview be announced or only the committed selection?

## State and approach

The selected value is stored in `active`; the temporary preview comes from the hovered star. The visual fill can be derived from preview when present, otherwise from the selected value. The callback separates selection from the display of the chosen number. Use a stable numeric rating value and keep event targets outside the stars from changing selection.

## Accessibility and verification

The current icons are pointer-only. A group of radio inputs or buttons would provide keyboard access, labels such as “3 of 5 stars,” and visible focus. Verify hovering, leaving, choosing a value, and clicking the container outside a star. Tests should check the committed value and callback rather than icon classes alone.
