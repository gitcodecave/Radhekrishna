import React from "react";

export function SacredParticles({ className = "" }: { particleCount?: number; className?: string }) {
  // Minimal ambient layer without floating AI dots clutter
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${className}`}
    >
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-crimson/5 blur-3xl" />
    </div>
  );
}
