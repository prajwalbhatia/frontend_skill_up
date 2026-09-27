# Stepper

## Problem and current demo

Show a sequence of steps with the current step and previous steps visually distinguished. This React demo renders three `Step` children inside `Steps`. Clicking a step updates the selected title in `App` and directly changes step styles in the DOM. From this folder, run `npm install` and `npm start`.

## Clarify before implementing

- Can users jump to any step, or only move forward and backward?
- Is the stepper navigation, a progress indicator, or both?
- Are steps controlled by a parent, and can the list change dynamically?

## State and design

`App` owns `current`; `Steps` receives `current`, `onChange`, and the `Step` children. In a more robust implementation, a stable step index or ID would be the state, while completed and upcoming status would be derived from it. Render styles and semantics from that state rather than mutating DOM nodes in a global click listener. This makes updates predictable when props or children change.

## Accessibility, tests, and trade-offs

The current clickable `div` elements need keyboard activation and focus treatment. Choose buttons for interactive steps or semantic list items for read-only progress; announce the current step with `aria-current="step"`. Check first and last steps, repeated clicks, and rerendering after a selection. A useful test would verify that selection calls `onChange` and that the visible current/completed states follow the selected step. Direct DOM styling is simple for this fixed demo but does not scale well with React's state model.
