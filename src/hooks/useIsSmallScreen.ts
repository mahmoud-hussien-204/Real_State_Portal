"use client";
import {useSyncExternalStore} from "react";

const subscribeWindowSize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getWindowSize = () => window.innerWidth <= 1280;

// Server snapshot - assume large screen on server
const getServerSnapshot = () => false;

const useIsSmallScreen = () => {
  const isSmallScreen = useSyncExternalStore(
    subscribeWindowSize,
    getWindowSize,
    getServerSnapshot // This is what was missing!
  );
  return isSmallScreen;
};

export default useIsSmallScreen;
