import { useState, useEffect } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: window.orientation,
    devicePixelRatio: window.devicePixelRatio,
    isMobile: window.innerWidth < 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: window.orientation,
        devicePixelRatio: window.devicePixelRatio,
        isMobile: window.innerWidth < 768,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
