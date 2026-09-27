# Folder structure

## Problem and current demo

Render a nested file tree similar to a file explorer. This React demo loads sample data, expands folders, and offers controls to add files or folders, rename nodes, and delete nodes. From this folder, run `npm install` and `npm start`.

## Clarify before implementing

- Can the root be renamed or deleted? Can folders be empty?
- Are duplicate sibling names allowed? Should changes persist?
- What should Escape, Enter, and blur do while editing?
- Is keyboard tree navigation required, or is a simpler nested list enough?

## Component and state model

`App` owns the tree data and passes operations to the recursive `FolderStructure` component. Each rendered node owns local expansion and input visibility. `useTraverseTree` contains recursive insert, delete, and rename operations. The selected node's children and indentation are derived from the tree; they need no separate state. Stable node IDs matter because names may change or repeat.

## Engineering follow-ups

The current insert helper mutates a matching folder before returning the tree. Prefer immutable updates so React can reliably detect changes. Validate empty and duplicate names, define behavior for deleting the root, and use stable IDs as React keys. The clickable folder label needs a keyboard-accessible control with visible focus. If this becomes a full tree widget, implement the expected tree keyboard model and ARIA relationships deliberately rather than adding roles alone.

## Verify behavior

Expand several levels; add a nested file and folder; rename and delete a nested node; try empty input and repeated names. Tests should assert the resulting tree data and rendered behavior, including cancellation and keyboard use. The central reusable pattern is recursive rendering with a single owner for hierarchical data.
