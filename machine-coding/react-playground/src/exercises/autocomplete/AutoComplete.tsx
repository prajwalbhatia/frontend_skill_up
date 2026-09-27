import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import type { AutoCompleteProps, Option, SearchState } from "./types";
import SuggestionList from "./components/SuggestionList";
import { useDebounce } from "./hooks/useDebounce";
import { useOutsideClick } from "./hooks/useOutsideClick";

export default function AutoComplete({
  fetchOptions,
  selectedOption,
  onSelectionChange,
  label,
  placeholder,
}: AutoCompleteProps) {
  const [query, setQuery] = useState("");
  const [searchState, setSearchState] = useState<SearchState>({ kind: "idle" });
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const requestVersionRef = useRef(0);
  const inputId = useId();
  const listboxId = useId();
  const debouncedQuery = useDebounce(query, 300);

  const canSearch = selectedOption === null && query.trim().length >= 2;
  const showPopup = isOpen && canSearch;
  const options = searchState.kind === "success" ? searchState.options : [];
  const activeOptionId =
    showPopup && highlightedIndex >= 0 && highlightedIndex < options.length
      ? `${listboxId}-option-${encodeURIComponent(options[highlightedIndex].id)}`
      : undefined;

  const close = useCallback(() => {
    setIsOpen(false);
    setHighlightedIndex(-1);
  }, []);

  useOutsideClick(wrapperRef, close);

  // A parent may set or replace the selection without using this input.
  useEffect(() => {
    if (selectedOption !== null) {
      requestVersionRef.current += 1;
      setQuery("");
      setSearchState({ kind: "idle" });
      close();
    }
  }, [selectedOption, close]);

  useEffect(() => {
    if (!canSearch || debouncedQuery !== query) return;

    const controller = new AbortController();
    const requestVersion = ++requestVersionRef.current;
    setSearchState({ kind: "loading" });
    setHighlightedIndex(-1);

    const isCurrent = () =>
      !controller.signal.aborted && requestVersionRef.current === requestVersion;

    void (async () => {
      try {
        const nextOptions = await fetchOptions(query.trim(), controller.signal);
        if (isCurrent()) {
          setSearchState({ kind: "success", options: nextOptions });
          setHighlightedIndex(-1);
        }
      } catch (error) {
        if (!isCurrent()) return;
        if (error instanceof Error && error.name === "AbortError") {
          setSearchState({ kind: "idle" });
          close();
        } else {
          setSearchState({ kind: "error" });
          setHighlightedIndex(-1);
        }
      }
    })();

    return () => {
      controller.abort();
      requestVersionRef.current += 1;
    };
  }, [canSearch, close, debouncedQuery, fetchOptions, query]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextQuery = event.target.value;
    requestVersionRef.current += 1;
    onSelectionChange(null);
    setQuery(nextQuery);
    setHighlightedIndex(-1);

    if (nextQuery.trim().length >= 2) {
      setSearchState({ kind: "debouncing" });
      setIsOpen(true);
    } else {
      setSearchState({ kind: "idle" });
      setIsOpen(false);
    }
  };

  const handleSelect = (option: Option) => {
    requestVersionRef.current += 1;
    onSelectionChange(option);
    setQuery("");
    setSearchState({ kind: "idle" });
    close();
    inputRef.current?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape" && showPopup) {
      event.preventDefault();
      close();
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      if (!canSearch) return;
      event.preventDefault();

      if (!showPopup) {
        setIsOpen(true);
        setHighlightedIndex(
          options.length === 0 ? -1 : event.key === "ArrowDown" ? 0 : options.length - 1,
        );
        return;
      }

      if (options.length === 0) return;
      setHighlightedIndex((index) =>
        event.key === "ArrowDown"
          ? (index + 1) % options.length
          : index <= 0
            ? options.length - 1
            : index - 1,
      );
      return;
    }

    if (
      event.key === "Enter" &&
      showPopup &&
      highlightedIndex >= 0 &&
      highlightedIndex < options.length
    ) {
      event.preventDefault();
      handleSelect(options[highlightedIndex]);
    }
  };

  const statusMessage = (() => {
    if (searchState.kind === "debouncing") return "Waiting to search…";
    if (searchState.kind === "loading") return "Loading suggestions…";
    if (searchState.kind === "error") return "Search failed. Please try again.";
    if (searchState.kind === "success") {
      return options.length === 0
        ? "No results found."
        : `${options.length} results available. Use the arrow keys to choose one.`;
    }
    return "";
  })();

  return (
    <div className="autocomplete" ref={wrapperRef}>
      <label htmlFor={inputId}>{label}</label>
      <input
        ref={inputRef}
        id={inputId}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showPopup}
        aria-controls={showPopup ? listboxId : undefined}
        aria-activedescendant={activeOptionId}
        autoComplete="off"
        placeholder={placeholder}
        value={selectedOption?.label ?? query}
        onChange={handleChange}
        onFocus={() => {
          if (canSearch) setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />
      <div className="autocomplete-announcement" role="status" aria-live="polite">
        {showPopup ? statusMessage : ""}
      </div>
      {showPopup && (
        <SuggestionList
          state={searchState}
          listboxId={listboxId}
          label={label}
          onSelect={handleSelect}
          highlightedIndex={highlightedIndex}
          statusMessage={statusMessage}
        />
      )}
    </div>
  );
}
