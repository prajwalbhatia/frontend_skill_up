import { useState } from "react";
import CounterButton from "./components/CounterButton";
import type {
  CounterAction,
  CounterButtonConfig,
  CounterHistoryState,
} from "./types";

const BUTTON_CONFIG = {
  INCREMENT: {
    type: "INCREMENT",
    text: "+",
    className: "increment",
  },
  DECREMENT: {
    type: "DECREMENT",
    text: "-",
    className: "decrement",
  },
  RESET: {
    type: "RESET",
    text: "Reset",
    className: "reset",
  },
  UNDO: {
    type: "UNDO",
    text: "Undo",
    className: "undo",
  },
  REDO: {
    type: "REDO",
    text: "Redo",
    className: "redo",
  },
} as const satisfies Record<CounterAction, CounterButtonConfig>;

function Counter() {
  const [timeline, setTimeline] = useState<CounterHistoryState>({
    history: [{ type: "DEFAULT", value: 0 }],
    currentIndex: 0,
  });
  const { history, currentIndex } = timeline;
  const counter = history[currentIndex].value;

  const handleOnClick = (type: CounterAction) => {
    switch (type) {
      case "INCREMENT":
      case "DECREMENT":
      case "RESET": {
        setTimeline((previous) => {
          const currentValue = previous.history[previous.currentIndex].value;
          if (type === "DECREMENT" && currentValue === 0) return previous;

          const nextValue =
            type === "INCREMENT"
              ? currentValue + 1
              : type === "DECREMENT"
                ? currentValue - 1
                : 0;
          const nextHistory = [
            ...previous.history.slice(0, previous.currentIndex + 1),
            { type, value: nextValue },
          ];

          return {
            history: nextHistory,
            currentIndex: nextHistory.length - 1,
          };
        });
        return;
      }
      case "UNDO": {
        setTimeline((previous) =>
          previous.currentIndex > 0
            ? { ...previous, currentIndex: previous.currentIndex - 1 }
            : previous,
        );
        return;
      }
      case "REDO": {
        setTimeline((previous) =>
          previous.currentIndex < previous.history.length - 1
            ? { ...previous, currentIndex: previous.currentIndex + 1 }
            : previous,
        );
        return;
      }
    }
  };

  return (
    <div className="counter-container">
      <div className="counter-row">
        <CounterButton
          onclick={handleOnClick}
          btnConfig={BUTTON_CONFIG.DECREMENT}
          disabled={counter === 0}
        />
        <span className="counter-value">{counter}</span>
        <CounterButton
          onclick={handleOnClick}
          btnConfig={BUTTON_CONFIG.INCREMENT}
        />
      </div>

      <div className="counter-cta-row">
        <CounterButton
          btnConfig={BUTTON_CONFIG.RESET}
          onclick={handleOnClick}
        />

        <CounterButton
          btnConfig={BUTTON_CONFIG.UNDO}
          onclick={handleOnClick}
          disabled={currentIndex === 0}
        />

        <CounterButton
          btnConfig={BUTTON_CONFIG.REDO}
          onclick={handleOnClick}
          disabled={currentIndex === history.length - 1}
        />
      </div>
    </div>
  );
}

export default Counter;
