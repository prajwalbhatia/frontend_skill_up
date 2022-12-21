import { useEffect, useState, useRef } from 'react';

export function useIdle(delay) {
  const [isIdle, setIsIdle] = useState(false);

  let timeoutId = useRef();

  useEffect(() => {
    setUp();

    return () => {
      cleanUp();
    }
  } , [])

  const startTimer = () => {
    timeoutId.current = setTimeout(goInactive, delay);
  }

  const resetTimer = () => {
    clearTimeout(timeoutId.current);
    goActive();
  }

  const goInactive = () => {
    setIsIdle(true);
  }

  const goActive = () => {
    setIsIdle(false);

    startTimer();
  }

  const setUp = () => {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("DOMMouseScroll", resetTimer, false);
    document.addEventListener("mousewheel", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    document.addEventListener("MSPointerMove", resetTimer, false);
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousemove", resetTimer, false);

    //edge case
    //if tab is changed or is out of focus
    window.addEventListener("blur", startTimer, false);
    window.addEventListener("focus", resetTimer, false);
  }

  const cleanUp = () => {
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousedown", resetTimer);
    document.removeEventListener("keypress", resetTimer);
    document.removeEventListener("DOMMouseScroll", resetTimer);
    document.removeEventListener("mousewheel", resetTimer);
    document.removeEventListener("touchmove", resetTimer);
    document.removeEventListener("MSPointerMove", resetTimer);
    document.removeEventListener("mousemove", resetTimer);
    document.removeEventListener("mousemove", resetTimer);

    //edge case
    //if tab is changed or is out of focus
    window.removeEventListener("blur", startTimer, false);
    window.removeEventListener("focus", resetTimer, false);

    clearTimeout(timeoutId.current);
  }


  return isIdle;

}