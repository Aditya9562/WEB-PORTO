"use client";

export function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-transparent">
      {/* Liquid Floating Background Blobs - Simplified for maximum performance */}
      <div className="absolute top-[-10%] left-[-10%] h-[45vw] w-[45vw] rounded-full bg-[radial-gradient(circle,rgba(240,58,23,0.035)_0%,transparent_70%)] blur-[50px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-[radial-gradient(circle,rgba(240,58,23,0.025)_0%,transparent_70%)] blur-[60px] animate-blob animation-delay-2000" />
    </div>
  );
}
