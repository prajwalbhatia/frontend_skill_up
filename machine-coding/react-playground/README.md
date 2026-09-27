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

Put each React exercise in its own folder under `src/exercises/`. Use `src/App.tsx` only to mount the exercise you want to view; keep exercise behavior and any feature-specific data in that exercise's files. `src/main.tsx` and the Vite/TypeScript configuration are shared and should not need copying for each question.

The [autocomplete exercise](src/exercises/autocomplete/README.md) is mounted in `src/App.tsx`. The existing `stepper/` and `folder-structure/` projects predate this playground and keep their current standalone setup.
