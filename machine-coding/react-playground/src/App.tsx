import AutoCompleteExercise from "./exercises/autocomplete/AutoCompleteExercise";
import CounterExercise from "./exercises/counter/CounterExercise";
import ProductCacheExercise from "./exercises/product-cache/ProductCacheExercise";

export default function App() {
  return (
    <main>
      <h1>React machine-coding playground</h1>
      <AutoCompleteExercise />
      <CounterExercise />
      <ProductCacheExercise />
    </main>
  );
}
