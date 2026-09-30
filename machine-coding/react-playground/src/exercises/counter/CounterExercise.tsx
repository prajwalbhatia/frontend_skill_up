/**
 * We will have counter with initial value to be 0
 * we will have + and - button to inc and dec counter value
 * We will have button like reset , undo , redo
 *
 * Extra
 * we will have a table that will show the history of actions perform
 */


import Counter from "./Counter";
import './style.css';

export default function CounterExercise() {
  return (
    <section className="counter-exercise">
      <h2>Counter Exercise</h2>
      <Counter />
    </section>
  );
}
