export type Option = {
  id: string;
  label: string;
};

export type SearchState =
  | { kind: "idle" }
  | { kind: "debouncing" }
  | { kind: "loading" }
  | { kind: "success"; options: Option[] }
  | { kind: "error" };

export type AutoCompleteProps = {
  fetchOptions: (query: string, signal: AbortSignal) => Promise<Option[]>;
  selectedOption: Option | null;
  onSelectionChange: (option: Option | null) => void;
  label: string;
  placeholder?: string;
};

export type SuggestionListProps = {
  state: SearchState;
  listboxId: string;
  label: string;
  onSelect: (option: Option) => void;
  highlightedIndex: number;
  statusMessage: string;
};

export type SuggestionItemProps = {
  item: Option;
  onSelect: (option: Option) => void;
  isHighlighted: boolean;
  id: string;
};
