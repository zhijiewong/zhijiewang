"use client";

import { useEffect, useRef } from "react";

export function OrbBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    function onMouseMove(e: MouseEvent) {
      el!.style.setProperty("--mouse-x", e.clientX + "px");
      el!.style.setProperty("--mouse-y", e.clientY + "px");
    }

    function onMouseLeave() {
      el!.style.setProperty("--mouse-x", "-999px");
      el!.style.setProperty("--mouse-y", "-999px");
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Layer 1: Gradient orbs */}
      <div className="orb orb-blue" />
      <div className="orb orb-purple" />
      <div className="orb orb-green" />

      {/* Layer 2: Interactive dot grid — follows mouse */}
      <div className="absolute inset-0 dot-grid" />

      {/* Layer 3: Grain noise texture */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.035]">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Layer 4: Radial spotlight — lighter center draws eye to hero */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 25%, rgba(255,255,255,0.04), transparent 70%)",
        }}
      />
    </div>
  );
}
