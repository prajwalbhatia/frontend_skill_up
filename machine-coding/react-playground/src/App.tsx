import { useEffect, useState } from "react";
import AutoCompleteExercise from "./exercises/autocomplete/AutoCompleteExercise";
import CounterExercise from "./exercises/counter/CounterExercise";
import ProductCacheExercise from "./exercises/product-cache/ProductCacheExercise";
import "./app.css";

const exercises = [
  { id: "autocomplete", label: "Autocomplete", component: AutoCompleteExercise },
  { id: "counter", label: "Counter", component: CounterExercise },
  { id: "product-cache", label: "Product cache", component: ProductCacheExercise },
] as const;

function getActiveExerciseId() {
  const requestedId = window.location.hash.slice(1);
  return exercises.find((exercise) => exercise.id === requestedId)?.id ?? exercises[0].id;
}

export default function App() {
  const [activeId, setActiveId] = useState(getActiveExerciseId);

  useEffect(() => {
    const syncFromUrl = () => setActiveId(getActiveExerciseId());
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, []);

  const activeExercise = exercises.find((exercise) => exercise.id === activeId) ?? exercises[0];
  const ActiveExercise = activeExercise.component;

  return (
    <main className="playground">
      <h1>React machine-coding playground</h1>
      <nav className="playground-nav" aria-label="Questions">
        {exercises.map((exercise) => (
          <a
            key={exercise.id}
            href={`#${exercise.id}`}
            aria-current={exercise.id === activeId ? "page" : undefined}
          >
            {exercise.label}
          </a>
        ))}
      </nav>
      <div className="playground-stage">
        <ActiveExercise />
      </div>
    </main>
  );
}
