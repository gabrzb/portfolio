import { useEffect, useRef, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

type InitialLoaderProps = {
  minDuration?: number;
  exitDelay?: number;
  waitForAnimationEnd?: boolean;
  removeOnEnd?: boolean;
  onReady?: () => void;
  load?: () => Promise<unknown>;
};

const waitForWindowLoad = () =>
  new Promise<void>((resolve) => {
    if (document.readyState === "complete") {
      resolve();
      return;
    }
    window.addEventListener("load", () => resolve(), { once: true });
  });

const waitForFonts = () => document.fonts?.ready ?? Promise.resolve();

export default function InitialLoader({
  minDuration = 2000,
  exitDelay = 800,
  waitForAnimationEnd = true,
  removeOnEnd = true,
  onReady,
  load,
}: InitialLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const loadRef = useRef(load);

  useEffect(() => {
    loadRef.current = load;
  }, [load]);

  useEffect(() => {
    let isActive = true;

    (async () => {
      try {
        const extraLoad = loadRef.current;
        const tasks: Promise<unknown>[] = [waitForWindowLoad(), waitForFonts()];
        if (extraLoad) tasks.push(extraLoad());
        await Promise.all(tasks);
      } finally {
        if (isActive) setIsLoading(false);
      }
    })();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <LoadingOverlay
      isLoading={isLoading}
      minDuration={minDuration}
      exitDelay={exitDelay}
      waitForAnimationEnd={waitForAnimationEnd}
      removeOnEnd={removeOnEnd}
      onHidden={onReady}
    />
  );
}
