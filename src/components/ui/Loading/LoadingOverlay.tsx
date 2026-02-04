import { useEffect, useRef, useState } from "react";
import "./loadingOverlay.css";

type LoadingOverlayProps = {
  isLoading: boolean;
  minDuration?: number;
  exitDelay?: number;
  removeOnEnd?: boolean;
  waitForAnimationEnd?: boolean;
  className?: string;
  onHidden?: () => void;
};

export default function LoadingOverlay({
  isLoading,
  minDuration = 0,
  exitDelay = 0,
  removeOnEnd = true,
  waitForAnimationEnd = true,
  className = "",
  onHidden,
}: LoadingOverlayProps) {
  const [isHidden, setIsHidden] = useState(!isLoading);
  const [isRemoved, setIsRemoved] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const loadingBarRef = useRef<HTMLDivElement | null>(null);
  const didCompleteRef = useRef(false);
  const delayTimerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const animationDoneRef = useRef(false);
  const pendingHideRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const loadingBar = loadingBarRef.current;
    if (!loadingBar) return undefined;

    const onAnimationEnd = () => {
      animationDoneRef.current = true;
      if (pendingHideRef.current) {
        const pending = pendingHideRef.current;
        pendingHideRef.current = null;
        pending();
      }
    };

    loadingBar.addEventListener("animationend", onAnimationEnd, {
      once: true,
    });

    return () => {
      loadingBar.removeEventListener("animationend", onAnimationEnd);
    };
  }, []);

  useEffect(() => {
    const loadingBar = loadingBarRef.current;
    if (delayTimerRef.current) {
      window.clearTimeout(delayTimerRef.current);
      delayTimerRef.current = null;
    }
    pendingHideRef.current = null;

    if (isLoading) {
      didCompleteRef.current = false;
      animationDoneRef.current = false;
      startTimeRef.current = performance.now();

      const resetFrame = window.requestAnimationFrame(() => {
        setIsRemoved(false);
        setIsHidden(false);
      });

      return () => {
        window.cancelAnimationFrame(resetFrame);
      };
    }

    const elapsed = startTimeRef.current
      ? performance.now() - startTimeRef.current
      : 0;
    const remainingMin = Math.max(0, minDuration - elapsed);
    const totalDelay = Math.max(0, exitDelay) + remainingMin;

    let delayDone = totalDelay === 0;
    let animationDone =
      !waitForAnimationEnd || !loadingBar || animationDoneRef.current;

    const tryHide = () => {
      if (!delayDone || !animationDone) return;
      setIsHidden(true);
    };

    if (totalDelay > 0) {
      delayTimerRef.current = window.setTimeout(() => {
        delayDone = true;
        tryHide();
      }, totalDelay);
    }

    if (!animationDone && waitForAnimationEnd) {
      pendingHideRef.current = () => {
        animationDone = true;
        tryHide();
      };
    }

    tryHide();

    return () => {
      if (delayTimerRef.current) {
        window.clearTimeout(delayTimerRef.current);
        delayTimerRef.current = null;
      }
      pendingHideRef.current = null;
    };
  }, [isLoading, minDuration, exitDelay, waitForAnimationEnd]);

  useEffect(() => {
    if (!isHidden || isLoading) return undefined;
    if (!removeOnEnd) {
      if (didCompleteRef.current) return undefined;
      didCompleteRef.current = true;
      if (typeof onHidden === "function") onHidden();
      return undefined;
    }

    const overlay = overlayRef.current;
    if (!overlay) return undefined;

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== overlay) return;
      if (didCompleteRef.current) return;
      didCompleteRef.current = true;
      setIsRemoved(true);
      if (typeof onHidden === "function") onHidden();
    };

    overlay.addEventListener("transitionend", onTransitionEnd);

    return () => {
      overlay.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [isHidden, isLoading, removeOnEnd, onHidden]);

  if (isRemoved && !isLoading) return null;

  const overlayClassName = [
    "loading-overlay",
    isHidden ? "is-hidden" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={overlayRef}
      className={overlayClassName}
    >
      <div id="loader">
        <div id="title" className="flex">
          <span className="loading-text">LOADING...</span>
          <span className="loading-number">%</span>
        </div>
        <div id="loading-bar-border">
          <div ref={loadingBarRef} className="loading-bar" />
        </div>
        <div id="warning">
          <div className="exclamation">!</div>
          <span>CAUTION, Do not turn off.</span>
          <div id="line-cascates" />
        </div>
      </div>
    </div>
  );
}
