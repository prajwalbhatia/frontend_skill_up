# Machine coding

Machine coding is practice in making frontend engineering decisions, not memorizing finished implementations. Start with a small correct behavior, explain the state and data flow, then address the interactions and edge cases that matter. These existing examples include both browser/DOM code and React code; their READMEs describe what the demos currently do and useful directions for improving them.

## How to approach a problem

1. Clarify the requirements and constraints.
2. Identify important empty, boundary, and failure cases.
3. Choose component or DOM responsibilities.
4. Model the minimum state; derive values when possible.
5. Define how user actions and external data update the UI.
6. Build the simplest correct version.
7. Handle asynchronous work, including stale results, if applicable.
8. Check keyboard use, focus, semantics, and screen-reader behavior.
9. Consider performance only where scale or measurements call for it.
10. Test behavior and explain trade-offs and possible extensions.

Ask clarifying questions before coding: Who owns the data? What must work with a keyboard? Is information local or fetched? What should happen on invalid input or failure? The answers change the design and the tests.

## Exercise index

Categories describe the main learning pattern. Browser/DOM is also a useful lens across most exercises, so an exercise may fit more than one category. The current folders remain in place to keep entry points stable.

| Category | Existing exercises | Patterns |
| --- | --- | --- |
| UI primitives | [Stepper](stepper/README.md) (React), [Progress bar](progress-bar/README.md), [Star widget](star-widget/README.md) | State, events, component APIs, feedback, accessibility |
| Interactive components | [Folder structure](folder-structure/README.md) (React), [Comment section](commentSection/README.md), [Memory game](memory-game/README.md) | Recursive data, interaction state, event handling |
| Async and data-driven UI | [Autocomplete](autocomplete/Readme.md) | Debounce, delayed results, result selection, stale-response questions |
| Data layout and performance | [Day calendar](day-calender/README.md) | Time layout, overlap handling, rendering from data |
| Browser and DOM APIs | [Chess board](chess-board/README.md), [Countdown timer](counterTimer/README.md); also the browser examples above | DOM construction, event delegation, timers, storage |

There are no dedicated debugging, requirement-change, mock-interview, or large-application exercise folders yet. Add them when there is substantive material to put in them.

## Run the exercises

For a browser exercise, serve the repository root with a local static server, for example `python3 -m http.server 8000`, then open `http://localhost:8000/machine-coding/<folder>/`. Replace `<folder>` with an existing folder name from the index. Serving over HTTP is useful for the autocomplete ES modules.

The two React exercises have separate existing Create React App projects. In either `stepper/` or `folder-structure/`, run `npm install` and `npm start`. Their dependencies are not installed from the repository root.

The current examples are JavaScript. A future React and TypeScript exercise can introduce a small shared playground if several exercises need it. Existing standalone browser exercises do not need a React wrapper to teach DOM behavior.

## Writing an exercise README

Describe the problem and the behavior the submitted code actually provides. Include useful requirement questions, key state and derived values, data flow, edge cases, accessibility, testing strategy, and trade-offs where relevant. Put unimplemented ideas under follow-ups or known limitations rather than presenting them as finished features. Keep the explanation focused on decisions a frontend engineer can reuse.
