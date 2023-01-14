import { useEffect } from "react";


export default function useOnClickOutside(ref, callback) {
  useEffect(() => {
    const handleClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      callback(e);
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [ref, callback])
}