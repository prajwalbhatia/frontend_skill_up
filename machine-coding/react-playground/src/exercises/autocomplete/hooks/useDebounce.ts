import { useEffect, useState } from "react";

export function useDebounce<T>(input: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(input);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(input);
    }, delay);

    return () => clearTimeout(timerId);
  }, [input , delay]);

  return debouncedValue;
}
