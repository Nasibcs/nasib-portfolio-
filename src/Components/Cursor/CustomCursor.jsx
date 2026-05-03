import { useEffect, useRef, useState } from "react";

const SMOOTH_RING = 0.14;
const SMOOTH_DOT = 0.28;
const MAGNET_STRENGTH = 0.4;

const INTERACTIVE_SELECTOR =
  "a[href], button, input:not([type='hidden']), textarea, select, [role='button'], [role='link'], [role='tab'], label[for], summary";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const ringInnerRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({
    targetX: 0,
    targetY: 0,
    ringX: -100,
    ringY: -100,
    dotX: -100,
    dotY: -100,
    hoverInteractive: false,
  });
  const [enabled, setEnabled] = useState(false);
  const rafId = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    function apply(enabledNow) {
      if (enabledNow && !reducedMotion.matches) {
        document.documentElement.classList.add("custom-cursor-active");
        setEnabled(true);
      } else {
        document.documentElement.classList.remove("custom-cursor-active");
        setEnabled(false);
      }
    }

    apply(mq.matches);
    const onMq = () => apply(mq.matches);
    mq.addEventListener("change", onMq);
    reducedMotion.addEventListener("change", onMq);

    return () => {
      mq.removeEventListener("change", onMq);
      reducedMotion.removeEventListener("change", onMq);
      document.documentElement.classList.remove("custom-cursor-active");
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;

    function setTarget(clientX, clientY) {
      const p = pos.current;
      const el = document.elementFromPoint(clientX, clientY);
      if (!el) {
        p.targetX = clientX;
        p.targetY = clientY;
        p.hoverInteractive = false;
        return;
      }
      if (el.closest("[data-cursor-none]")) {
        p.targetX = clientX;
        p.targetY = clientY;
        p.hoverInteractive = false;
        return;
      }

      const node = el.closest(INTERACTIVE_SELECTOR);
      if (node) {
        const r = node.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        p.targetX = clientX + (cx - clientX) * MAGNET_STRENGTH;
        p.targetY = clientY + (cy - clientY) * MAGNET_STRENGTH;
        p.hoverInteractive = true;
      } else {
        p.targetX = clientX;
        p.targetY = clientY;
        p.hoverInteractive = false;
      }
    }

    function onMove(e) {
      setTarget(e.clientX, e.clientY);
    }

    function tick() {
      const p = pos.current;
      p.ringX += (p.targetX - p.ringX) * SMOOTH_RING;
      p.ringY += (p.targetY - p.ringY) * SMOOTH_RING;
      p.dotX += (p.targetX - p.dotX) * SMOOTH_DOT;
      p.dotY += (p.targetY - p.dotY) * SMOOTH_DOT;

      const ringT = `translate3d(${p.ringX}px,${p.ringY}px,0) translate(-50%,-50%)`;
      const dotT = `translate3d(${p.dotX}px,${p.dotY}px,0) translate(-50%,-50%)`;

      if (ringRef.current) ringRef.current.style.transform = ringT;
      if (dotRef.current) dotRef.current.style.transform = dotT;

      const hov = p.hoverInteractive;
      const ringInner = ringInnerRef.current;
      const dotInner = dotRef.current?.firstElementChild;
      if (ringInner) {
        ringInner.style.width = hov ? "3.25rem" : "2.25rem";
        ringInner.style.height = hov ? "3.25rem" : "2.25rem";
        ringInner.style.backgroundColor = hov ? "rgba(204,255,0,0.14)" : "transparent";
        ringInner.style.borderColor = "#CCFF00";
        ringInner.style.mixBlendMode = hov ? "difference" : "normal";
      }
      if (dotInner instanceof HTMLElement) {
        const lime = "#CCFF00";
        const ink = "#121212";
        if (hov) {
          dotInner.style.width = "0.875rem";
          dotInner.style.height = "0.875rem";
          dotInner.style.backgroundColor = lime;
          dotInner.style.boxShadow = `0 0 0 2px ${ink}, 0 0 28px rgba(204,255,0,0.65)`;
          dotInner.style.filter = "invert(1)";
          dotInner.style.mixBlendMode = "difference";
        } else {
          dotInner.style.width = "0.4rem";
          dotInner.style.height = "0.4rem";
          dotInner.style.backgroundColor = lime;
          dotInner.style.boxShadow = "0 0 16px rgba(204,255,0,0.55)";
          dotInner.style.filter = "none";
          dotInner.style.mixBlendMode = "normal";
        }
      }

      rafId.current = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div data-cursor-none className="pointer-events-none" aria-hidden>
      <div
        ref={ringRef}
        className="fixed left-0 top-0 z-[10000]"
        style={{ transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)" }}
      >
        <div
          ref={ringInnerRef}
          className="rounded-full border-2 transition-[width,height] duration-150 ease-out"
          style={{
            width: "2.25rem",
            height: "2.25rem",
            borderColor: "#CCFF00",
            backgroundColor: "transparent",
          }}
        />
      </div>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[10001]"
        style={{ transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)" }}
      >
        <div
          className="rounded-full"
          style={{
            width: "0.4rem",
            height: "0.4rem",
            backgroundColor: "#CCFF00",
            boxShadow: "0 0 16px rgba(204,255,0,0.55)",
          }}
        />
      </div>
    </div>
  );
}
