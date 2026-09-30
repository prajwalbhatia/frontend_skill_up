export type CounterAction =
  | "INCREMENT"
  | "DECREMENT"
  | "RESET"
  | "UNDO"
  | "REDO";

export type ValueAction = Exclude<CounterAction, "UNDO" | "REDO">;

export type HistoryEntry = {
  type: ValueAction | "DEFAULT";
  value: number;
};

export type CounterHistoryState = {
  history: HistoryEntry[];
  currentIndex: number;
};

export type CounterButtonConfig = {
  type: CounterAction;
  text: string;
  className: string;
};
