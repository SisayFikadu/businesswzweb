import { useEffect, useState } from "react";

export default function SlickTextMarquee() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scale translation slightly with page scroll
      const currentScroll = window.scrollY;
      setScrollOffset(currentScroll * 0.45); // Smooth custom speed factor
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden border-y border-zinc-900 bg-zinc-950/90 py-6 select-none flex flex-col gap-4">
      {/* Absolute faint overlay lines */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Row 1: Brand & Business Names (Moving LEFT) */}
      <div 
        className="flex whitespace-nowrap transition-transform duration-75 ease"
        style={{ transform: `translateX(-${scrollOffset % 1200}px)` }}
      >
        <div className="flex gap-12 font-sans text-xl font-black tracking-[0.25em] text-white uppercase shrink-0">
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
        </div>
        
        {/* Double feed buffer for seamless continuation */}
        <div className="flex gap-12 font-sans text-xl font-black tracking-[0.25em] text-white uppercase shrink-0">
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
          <span className="text-amber-500">BUSINESSWEB WEB DEVELOPMENT</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-zinc-350">BUSINESSWZWEB</span>
          <span className="text-zinc-700 font-mono">Ø</span>
        </div>
      </div>

      {/* Subtle Row separator */}
      <div className="h-px bg-zinc-900/50 w-full" />

      {/* Row 2: Taglines & Core Tech Features (Moving RIGHT - opposite direction) */}
      <div 
        className="flex whitespace-nowrap transition-transform duration-75 ease"
        style={{ transform: `translateX(-${(1200 - (scrollOffset % 1200)) % 1200}px)` }}
      >
        <div className="flex gap-12 font-mono text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase shrink-0">
          <span>CRAFTING THE MODERN ETHIOPIAN INTERNET</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">HIGH-SPEED REACHABLE SITES</span>
          <span className="text-zinc-700">✦</span>
          <span>INTEGRATED TRANSACTIONS SYSTEM</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">AUTONOMOUS DATABASE SECURE</span>
          <span className="text-zinc-750">✦</span>
        </div>
        
        {/* Buffer 1 */}
        <div className="flex gap-12 font-mono text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase shrink-0">
          <span>CRAFTING THE MODERN ETHIOPIAN INTERNET</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">HIGH-SPEED REACHABLE SITES</span>
          <span className="text-zinc-700">✦</span>
          <span>INTEGRATED TRANSACTIONS SYSTEM</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">AUTONOMOUS DATABASE SECURE</span>
          <span className="text-zinc-750">✦</span>
        </div>

        {/* Buffer 2 to be very wide for larger desktop monitors */}
        <div className="flex gap-12 font-mono text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase shrink-0">
          <span>CRAFTING THE MODERN ETHIOPIAN INTERNET</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">HIGH-SPEED REACHABLE SITES</span>
          <span className="text-zinc-700">✦</span>
          <span>INTEGRATED TRANSACTIONS SYSTEM</span>
          <span className="text-zinc-700">✦</span>
          <span className="text-amber-500/80">AUTONOMOUS DATABASE SECURE</span>
          <span className="text-zinc-750">✦</span>
        </div>
      </div>
    </div>
  );
}
