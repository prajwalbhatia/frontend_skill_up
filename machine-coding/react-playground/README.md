# React machine-coding playground

This is the shared React and TypeScript runtime for new machine-coding exercises. Install dependencies once here instead of creating a separate app for every question. Browser/DOM exercises elsewhere in `machine-coding/` keep their own standalone HTML and JavaScript entry points.

## Run

From this folder:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`). Run `npm run build` to check TypeScript and the production build.

## Add an exercise

Put each React exercise in its own folder under `src/exercises/`. Add it to the `exercises` list in `src/App.tsx` to give it a navigation link; keep exercise behavior and any feature-specific data in that exercise's files. `src/main.tsx` and the Vite/TypeScript configuration are shared and should not need copying for each question.

The [autocomplete exercise](src/exercises/autocomplete/README.md) opens by default. Use the navigation to switch between autocomplete, counter, and product cache, or open an exercise directly with its hash (`#autocomplete`, `#counter`, or `#product-cache`). The existing `stepper/` and `folder-structure/` projects predate this playground and keep their current standalone setup.
