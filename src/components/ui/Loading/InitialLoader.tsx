import { useEffect, useRef, useState } from "react";
import LoadingOverlay from "./LoadingOverlay";

type InitialLoaderProps = {
  minDuration?: number;
  exitDelay?: number;
  waitForAnimationEnd?: boolean;
  removeOnEnd?: boolean;
  onExitStart?: () => void;
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
  onExitStart,
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
        // Aguarda recursos críticos (window/fontes) e, se existir, a carga assíncrona do app.
        const tasks: Promise<unknown>[] = [waitForWindowLoad(), waitForFonts()];
        if (extraLoad) tasks.push(extraLoad());
        await Promise.all(tasks);
      } finally {
        if (isActive) setIsLoading(false);
      }
    })();

    return () => {
      // Evita setState após desmontagem se alguma promise resolver tardiamente.
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
      onExitStart={onExitStart}
      onHidden={onReady}
    />
  );
}
