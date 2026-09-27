# Countdown timer

## Problem and current demo

Enter hours, minutes, and seconds, then start a countdown. The browser demo has Start, Stop/Continue, and Reset controls and updates the inputs once a second. Open [index.html](index.html) through a local static server.

## Clarify before implementing

- What ranges and formats are valid for each field?
- Does editing while running change the countdown?
- Should pause preserve the exact remaining time after a background tab is throttled?
- What happens at zero or after Reset?

## State and approach

The inputs hold the displayed time and `countDownTimer` holds the active interval. For a robust timer, convert the input to a single remaining duration or target timestamp, then derive hours, minutes, and seconds for display. A target timestamp handles delayed interval callbacks more accurately than subtracting one each callback. Start, pause, reset, and finish should each clear or own exactly one timer.

## Accessibility and verification

Label each input and give completion a suitable status announcement. Check zero input, invalid values, minute/hour boundaries, repeated Start presses, pause/continue, and Reset while running. Timer tests can use a fake clock to verify elapsed time and interval cleanup.
