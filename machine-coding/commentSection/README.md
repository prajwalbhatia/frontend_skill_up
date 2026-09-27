# Nested comment section

## Problem and current demo

Display comments and replies as a nested conversation. This browser demo accepts a top-level comment and a reply through generated input controls, stores comments in an in-memory flat array with parent IDs, rebuilds a nested representation, and rerenders the thread. The UI contains placeholders for edit and delete controls, but those actions are not implemented. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- How deep may replies go, and how should they be ordered?
- Are edits, deletion, persistence, and pagination required?
- What should happen to replies if their parent is deleted?
- Can empty or duplicate comments be submitted?

## State and data flow

`comments` is the source data. A comment's `parentId` determines its place in the tree; `children` can be derived from the flat list. Submitting a comment adds a record, rebuilds the nested view, and replaces the rendered section. For larger threads, index by parent ID once rather than repeatedly filtering the entire array during recursion.

## Accessibility and verification

Use real buttons for reply actions, label generated inputs, manage focus when a reply form appears, and show nesting with semantic list structure. Validate non-empty text and stable IDs. Verify top-level and nested replies, empty input, reply form opening, and a rerender that preserves the intended hierarchy. Treat editing and deletion as follow-up requirements until implemented.
