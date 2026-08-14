import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Fast, non-blocking initial entrance fade
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setHidden(true);
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(removeTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFFDF8] text-[#2B1208] transition-opacity duration-500 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <img
          src="/Logo.jpeg"
          alt="Radhe Krishna Tapovan Logo"
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-xl object-cover border-2 border-[#D49D44] shadow-lg mb-5"
        />
        <h1 className="font-display text-lg tracking-[0.2em] text-[#2B1208] font-medium">
          RADHE KRISHNA TAPOVAN
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#A9691C] mt-1">
          ॥ Radhe Radhe · Hare Krishna ॥
        </p>
      </div>
    </div>
  );
}
