# Day calendar layout

## Problem and current demo

Render a one-day schedule from events with start and end times. This browser demo creates 24 hourly rows, sorts sample meetings, positions each meeting within a row, sizes it by duration, and makes a basic attempt to offset overlaps. It is a layout exercise; the events are fixed in the source and cannot be edited in the UI. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- Are events restricted to one day, and can they cross midnight?
- What is the smallest time increment? How should zero-length or invalid intervals behave?
- Should overlapping events share horizontal space, or may they overlap visually?
- Are events interactive, or is this a read-only calendar?

## Data and layout approach

Each event has a start time, end time, color, and title. Convert times to minutes from midnight before sorting, sizing, and checking overlap; numeric intervals are easier to compare than separate hour and minute strings. A full overlap layout would group intersecting events and assign columns consistently. Position and dimensions can be derived from the event data rather than saved as separate state.

## Accessibility and verification

The visual timeline also needs readable event text and a sensible reading order; a list view can complement absolute positioning. Verify events at midnight, simultaneous starts, partial and complete overlaps, adjacent non-overlapping events, and late-day boundaries. The current overlap handling is a starting point, not a complete interval-layout algorithm.
