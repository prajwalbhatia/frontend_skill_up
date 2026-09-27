# Autocomplete (React and TypeScript)

## Problem

Build a reusable, single-select autocomplete. The user types a query, sees suggestions from an asynchronous source, and chooses one with a pointer or keyboard. This exercise uses a user search API as the example; the component itself accepts `fetchOptions(query, signal)` and works with any `{ id, label }` options.

## Clarify before coding

Questions that change the design:

- Is the data local or fetched? What is the minimum query length and debounce delay?
- Is free text allowed, or must the value be one of the returned options?
- Who needs the selected ID? Should a selection be cleared when the text changes?
- What should appear while waiting, when there are no matches, and when a request fails?
- Which keyboard actions and outside-click behavior are required?
- Can requests finish out of order? Does the fetch function honor cancellation?

For this version: search starts at two non-whitespace characters after 300 ms; selection is single; the parent owns the selected option; and the dropdown supports Arrow Up/Down, Enter, Escape, and outside clicks.

## Decide state ownership

| Value | Owner | Reason |
| --- | --- | --- |
| Selected option | Calling feature | It needs the ID for its own action |
| Query | Autocomplete | It changes as the user types |
| Search status and results | Autocomplete | They follow the current request |
| Dropdown visibility and highlighted index | Autocomplete | They are local interaction state |

The displayed text comes from the selected option when one exists, otherwise from the query. Whether a search can run, whether the popup is shown, and the active option are derived from the values above. The search status uses mutually exclusive idle, debouncing, loading, success, and error cases so an error cannot also appear as “no results.”

## Build it in interview-sized steps

1. Render a labeled input and a list using a small fixed set of options.
2. Add query changes, the two-character rule, click selection, and the callback to the parent.
3. Add Arrow Up/Down, Enter, Escape, and outside-click behavior. Decide what happens at the ends of the list and when it is empty.
4. Replace fixed options with the injected fetch function. Debounce query changes and show waiting, loading, empty, and error states.
5. Cancel the previous request on a new query or unmount. Also ignore responses that no longer belong to the latest query: cancellation may not stop every fetch implementation from resolving.
6. Check input labeling, focus, listbox/option roles, `aria-controls`, `aria-activedescendant`, and status announcements.

The [feature example](AutoCompleteExercise.tsx) adapts the user API response to `{ id, label }` and owns the chosen user. [AutoComplete.tsx](AutoComplete.tsx) owns the reusable interaction. The demo trusts the example API's response shape; validating uncertain external data would be a separate production concern.

## Quick manual check

Try one character, exactly two characters, fast typing, no matches, an API failure, selecting by click and keyboard, clearing or editing a selection, Escape, and clicking outside. To reason about async correctness, imagine request B finishing before request A: only B should change the visible results or status.

## Run

From `machine-coding/react-playground/`, run `npm install` and `npm run dev`. `src/App.tsx` mounts this exercise. Use `npm run build` for a TypeScript and build check.
