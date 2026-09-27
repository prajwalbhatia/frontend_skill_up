import { useEffect, type RefObject } from "react";

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    const handleOutsideClick = (event: PointerEvent) => {
      if (ref.current && event.target instanceof Node && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    window.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      window.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [ref, onOutsideClick]);
}
