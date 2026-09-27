import type { SuggestionItemProps } from "../types";

export default function SuggestionItem({
  item,
  onSelect,
  isHighlighted,
  id,
}: SuggestionItemProps) {
  return (
    <li
      id={id}
      role="option"
      aria-selected={isHighlighted}
      className={isHighlighted ? "suggestion-item highlighted" : "suggestion-item"}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => onSelect(item)}
    >
      {item.label}
    </li>
  );
}
