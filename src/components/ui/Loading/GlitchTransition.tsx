import { useEffect, useRef } from "react";
import "./glitchTransition.css";

type GlitchTransitionProps = {
  active: boolean;
  onComplete?: () => void;
  totalFrames?: number;
  frameMs?: number;
};

const NUM_SLICES = 18;

export default function GlitchTransition({
  active,
  onComplete,
  totalFrames = 32,
  frameMs = 30,
}: GlitchTransitionProps) {
  const safeTotalFrames = Math.max(
    1,
    Number.isFinite(totalFrames) ? Math.trunc(totalFrames) : 32,
  );
  const safeFrameMs = Math.max(
    1,
    Number.isFinite(frameMs) ? Math.trunc(frameMs) : 30,
  );

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const timeoutIdsRef = useRef<number[]>([]);

  useEffect(() => {
    if (!active) return undefined;

    if (overlayRef.current) {
      overlayRef.current.classList.remove("is-hidden");
    }

    frameRef.current = 0;

    const schedule = (callback: () => void, ms: number) => {
      const id = window.setTimeout(callback, ms);
      timeoutIdsRef.current.push(id);
    };

    const finish = () => {
      slicesRef.current.forEach((slice) => {
        if (!slice) return;
        slice.style.background = "#000";
        slice.style.transform = "none";
        slice.style.opacity = "1";
      });

      if (overlayRef.current) {
        overlayRef.current.classList.add("is-hidden");
      }

      schedule(() => {
        if (typeof onComplete === "function") onComplete();
      }, 360);
    };

    const tick = () => {
      frameRef.current += 1;
      const frame = frameRef.current;
      const intensity = frame / safeTotalFrames;

      slicesRef.current.forEach((slice) => {
        if (!slice) return;

        const random = Math.random();
        if (random < 0.5 * intensity) {
          const shade = Math.floor(180 + Math.random() * 75);
          slice.style.background = `rgb(${shade}, ${shade}, ${shade})`;
          slice.style.transform = `translateX(${(Math.random() - 0.5) * 28 * intensity}px)`;
          slice.style.opacity = (0.3 + Math.random() * 0.7).toString();
        } else {
          slice.style.background = "#000";
          slice.style.transform = `translateX(${(Math.random() - 0.5) * 6 * intensity}px)`;
          slice.style.opacity = "1";
        }
      });

      if (frame < safeTotalFrames) {
        schedule(() => {
          rafRef.current = window.requestAnimationFrame(tick);
        }, safeFrameMs);
        return;
      }

      schedule(finish, 120);
    };

    tick();

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      timeoutIdsRef.current.forEach((id) => window.clearTimeout(id));
      timeoutIdsRef.current = [];
    };
  }, [active, onComplete, safeFrameMs, safeTotalFrames]);

  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="glitch-transition"
      aria-hidden="true"
    >
      {Array.from({ length: NUM_SLICES }, (_, index) => {
        const height = 100 / NUM_SLICES;
        return (
          <div
            key={index}
            className="glitch-transition__slice"
            style={{ top: `${index * height}vh`, height: `${height}vh` }}
            ref={(element) => {
              slicesRef.current[index] = element;
            }}
          />
        );
      })}
    </div>
  );
}
