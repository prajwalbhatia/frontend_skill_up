import type { SuggestionListProps } from "../types";
import SuggestionItem from "./SuggestionItem";

export default function SuggestionList({
  state,
  listboxId,
  label,
  onSelect,
  highlightedIndex,
  statusMessage,
}: SuggestionListProps) {
  return (
    <ul id={listboxId} className="suggestion-list" role="listbox" aria-label={`${label} suggestions`}>
      {state.kind === "success" && state.options.length > 0 ? (
        state.options.map((item, index) => (
          <SuggestionItem
            key={item.id}
            id={`${listboxId}-option-${encodeURIComponent(item.id)}`}
            item={item}
            onSelect={onSelect}
            isHighlighted={highlightedIndex === index}
          />
        ))
      ) : (
        <li className="status-item" role="presentation">
          {statusMessage}
        </li>
      )}
    </ul>
  );
}
