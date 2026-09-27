# Progress bar queue

## Problem and current demo

Queue progress animations with controls to run, stop, replay, and clear them. The browser demo increments a queue counter on each Run click. One interval advances a bar by 20% each second; when it finishes, the next queued run starts. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- Does Stop pause the current item or cancel it? Does Clear remove pending work too?
- Should several bars be visible, or should one bar represent the queue?
- What should happen if Replay is pressed with an empty queue?

## State and approach

`btnCount` represents pending work, `progressVal` the active bar, and `interval` the timer handle. The display is derived from those values. A clearer state machine would distinguish idle, running, and paused; schedule only one interval; and clean it up when the queue is cleared or the view disappears. Avoid starting a second interval on repeated controls.

## Accessibility and verification

Use a semantic progress element or `role="progressbar"` with current, minimum, and maximum values, and announce queue changes without flooding assistive technology. Check several Run clicks, Stop and Replay midway, Clear while running, and completion of the last item. Timer-controlled tests should verify queue order and cleanup rather than internal function names.
