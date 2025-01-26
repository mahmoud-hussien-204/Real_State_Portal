import {useSyncExternalStore} from "react";

const subscribeWindowSize = (callback: () => void) => {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
};

const getWindowSize = () => window.innerWidth <= 1280;

const useIsSmallScreen = () => {
  const isSmallScreen = useSyncExternalStore(subscribeWindowSize, getWindowSize);
  return isSmallScreen;
};

export default useIsSmallScreen;
