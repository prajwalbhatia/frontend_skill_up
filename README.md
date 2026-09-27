# Frontend Skill Up

A practical collection of frontend engineering concepts, coding exercises, browser experiments, mini-projects, and interview preparation material. The aim is to help frontend developers learn from working examples and clear explanations, then contribute improvements others can reuse.

## Explore the repository

| Area | What you will find |
| --- | --- |
| [Machine coding](machine-coding/README.md) | Interactive browser and React exercises, with an approach guide and exercise index |
| [JavaScript concepts](js-concepts/) | Currying, memoization, debounce, and throttle examples |
| [Array polyfills](js-array-polyfills/) | Implementations of common array methods |
| [Promise polyfills](promises-polyfills/) | Promise combinators and a custom Promise exercise |
| [Other polyfills](random-polyfills/) | Bind and compose exercises |
| [Practice exercises](practice-session/) | JavaScript problems and a React hooks playground |

The collection uses JavaScript, browser APIs, and React. A shared React and TypeScript playground is available for new machine-coding exercises; no single framework is required for every example.

## Run an example

There is no root `package.json` or repository-wide install step. Browser examples have their own entry points; new React exercises share one playground.

- For a browser example, start a local static server from the repository root and open its `index.html`. For example, with Python installed:

  ```sh
  python3 -m http.server 8000
  ```

  Then visit `http://localhost:8000/machine-coding/autocomplete/`. A local server also supports examples that use JavaScript modules. Other static-server tools work too.
- For a new React and TypeScript exercise, use the [shared playground](machine-coding/react-playground/README.md): enter `machine-coding/react-playground`, run `npm install`, then `npm run dev`. The existing `machine-coding/stepper`, `machine-coding/folder-structure`, and `practice-session/sample-react` apps still use `npm install` and `npm start` in their own folders.
- For a standalone JavaScript snippet, read the file and use the runtime appropriate to its browser or Node APIs. The root `index.html` is a small scratch example, not a launcher for the rest of the repository.

See the [machine-coding guide](machine-coding/README.md) for exercise-specific links and the engineering approach behind them.

## Contribute

Contributions from frontend developers are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting an exercise, explanation, test, or correction. Keep material public, reusable, and understandable without personal preparation context.

## Community and license

See the [Code of Conduct](CODE_OF_CONDUCT.md). This repository is available under the [MIT License](LICENSE.txt).
