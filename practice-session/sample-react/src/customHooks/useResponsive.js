import { useEffect, useState } from "react";

export function useResponsive() {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    onResizeHandler();

    setUp();
    return () => {
      cleanUp();
    }
  }, [])


  const onResizeHandler = () => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 990;
    const isDesktop = window.innerWidth > 990;
    setState({ isMobile, isTablet, isDesktop });
  }


  const setUp = () => {
    window.addEventListener('resize', onResizeHandler, false);
  }

  const cleanUp = () => {
    window.removeEventListener("resize", onResizeHandler);
  }

  return state;
}