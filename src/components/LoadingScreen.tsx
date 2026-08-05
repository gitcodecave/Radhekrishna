import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
  minDurationMs?: number;
}

export function LoadingScreen({ onComplete, minDurationMs = 1500 }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 10);
      });
    }, minDurationMs / 8);

    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setHidden(true);
        if (onComplete) onComplete();
      }, 700); // match transition duration
      return () => clearTimeout(removeTimer);
    }, minDurationMs);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [minDurationMs, onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-shadow text-ivory transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Sacred Ambient Glow */}
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full opacity-40 blur-3xl anim-shimmer"
        style={{ background: "radial-gradient(circle, #e3c477 0%, #830202 50%, transparent 75%)" }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-sm">
        {/* Pulsing Sacred Logo Frame */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-gold via-saffron to-gold opacity-75 blur-md animate-pulse" />
          <img
            src="/Logo.jpeg"
            alt="Yugala Radhe Krishna Tapovan Logo"
            className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover border-2 border-gold/80 shadow-sacred"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-display text-xl sm:text-2xl tracking-[0.25em] text-gold-light font-light">
          YUGALA
        </h1>
        <p className="font-serif italic text-sm text-ivory/80 tracking-widest mt-1">
          Radhe Krishna Tapovan
        </p>

        {/* Sacred Mantra Subtext */}
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-saffron/90 font-medium">
          ॥ Radhe Radhe · Hare Krishna ॥
        </p>

        {/* Sacred Progress Line */}
        <div className="mt-8 w-48 h-1 bg-gold/20 rounded-full overflow-hidden border border-gold/30 relative">
          <div
            className="h-full bg-gradient-to-r from-crimson via-saffron to-gold transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Loading status text */}
        <div className="mt-3 font-serif text-xs italic text-ivory/60">
          Awakening Divine Sanctuary...
        </div>
      </div>
    </div>
  );
}
