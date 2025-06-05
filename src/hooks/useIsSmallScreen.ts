"use client";
import {useSyncExternalStore} from "react";

const subscribeWindowSize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getWindowSize = (screen: number) => window.innerWidth <= screen;

// Server snapshot - assume large screen on server
const getServerSnapshot = () => false;

const useIsSmallScreen = (screen = 1280) => {
  const isSmallScreen = useSyncExternalStore(
    subscribeWindowSize,
    () => getWindowSize(screen),
    getServerSnapshot // This is what was missing!
  );
  return isSmallScreen;
};

export default useIsSmallScreen;
