# Autocomplete

## Problem and current demo

Build a search field that suggests matching fruit names and lets a user select one. This browser demo filters a local array by prefix, debounces input for 500 ms, simulates a 500 ms asynchronous response, highlights matching text, and displays a fallback row when no items match. Click a result to put it in the input. Run it with a local static server and open [index.html](index.html).

## Clarify before implementing

- Are options local or fetched from an API? This determines the request and error states.
- Should matching use prefixes or any substring, and is it case-sensitive?
- What should an empty query show? Should a no-results row be selectable?
- Must users navigate and select with the keyboard?

## State and data flow

The input holds the query; the suggestion container holds rendered results and visibility. `utils.js` filters `data.js` and returns a delayed promise. The input handler waits through a debounce, requests suggestions, then replaces the result DOM. Click delegation reads a result's `data-key` and updates the input. Matching results can be derived from the query and source data rather than stored twice.

## Engineering follow-ups

Responses can arrive out of order, and the current demo does not reject stale results. For a real API, track a request identity or cancel the previous request; add loading and error states. Render option text as text rather than interpolated HTML when data may be untrusted. Use a listbox/combobox pattern with focus handling, arrow-key movement, Enter selection, Escape dismissal, and an announced result count. Keep the empty-state row non-selectable.

## Verify behavior

Try a matching prefix, mixed case, an unmatched query, rapid typing, clearing the field, and selecting a result. A future automated test should cover delayed responses arriving in the wrong order and keyboard interaction. The reusable patterns are debouncing, derived results, and asynchronous race handling.
