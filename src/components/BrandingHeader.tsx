import { Globe, Terminal, Shield, Zap } from "lucide-react";

interface BrandingHeaderProps {
  language: "en" | "am" | "om";
  setLanguage: (lang: "en" | "am" | "om") => void;
  activeSection?: string;
}

export default function BrandingHeader({ language, setLanguage, activeSection }: BrandingHeaderProps) {
  const translations = {
    en: {
      subtitle: "Full-Stack Design & Marketing Studio",
      metaHeader: "Search & Discovery Optimization Active",
      tagline: "High-Performance Digital Engineering",
      navPortfolios: "Case Studies & Work",
      navHubs: "Modernization Hubs",
      navGraph: "Conversion Science",
      navAiAgent: "FAQ & Insights",
      cta: "Start Your Project"
    },
    am: {
      subtitle: "የዲዛይን እና የማርኬቲንግ ስቱዲዮ",
      metaHeader: "የፍለጋ እና የደህንነት ማመቻቸት ገባሪ ነው",
      tagline: "ከፍተኛ አፈፃፀም ያለው የዲጂታል መሠረተ ልማት",
      navPortfolios: "ተጨባጭ ፕሮጀክቶች",
      navHubs: "ቴክኖሎጂ ማዕከላት",
      navGraph: "የሽያጭ ለውጥ መለኪያዎች",
      navAiAgent: "ጥያቄ እና መልሶች",
      cta: "ስራዎን ያስጀምሩ"
    },
    om: {
      subtitle: "Dizaayinii fi Marketing Istuudiyoo",
      metaHeader: "Optimizaashinii Maamiltootaa Active",
      tagline: "Infraastraaktshara Diijitaalaa Giddugaleessaa",
      navPortfolios: "Dhimmoota Hojii & Work",
      navHubs: "Wirtuulee Modernize",
      navGraph: "Mirkaneessa Gurgurtaa",
      navAiAgent: "FAQ & Hubannoo",
      cta: "Hojii Jalqabi"
    }
  };

  const t = translations[language];

  return (
    <header id="app-header" className="fixed top-0 left-0 right-0 z-50 w-full bg-zinc-950/30 bg-gradient-to-r from-zinc-950/40 via-amber-500/[0.02] to-zinc-950/40 backdrop-blur-md border-b border-zinc-900/40 shadow-[0_12px_40px_rgba(0,0,0,0.7)] transition-all duration-300 select-none">
      {/* High-Tech Laser Ingress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-amber-500/0 via-amber-500/25 to-amber-500/0 animate-pulse pointer-events-none" />
      
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative">
        
        {/* Subtle Tech corner brackets */}
        <div className="absolute left-4 top-0 w-2.5 h-[1px] bg-amber-500/10" />
        <div className="absolute right-4 top-0 w-2.5 h-[1px] bg-amber-500/10" />
        
        {/* Branding & Logo Details */}
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 flex items-center justify-center shrink-0">
            {/* The brand icon integrated cleanly */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="h-full w-full">
              <rect width="128" height="128" rx="28" fill="#09090b" stroke="#27272a" strokeWidth="4"/>
              <circle cx="64" cy="64" r="48" fill="none" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.15" strokeDasharray="4, 4"/>
              <defs>
                <linearGradient id="headerAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
              </defs>
              <circle cx="64" cy="64" r="32" fill="none" stroke="url(#headerAmberGrad)" strokeWidth="10" strokeLinecap="round"/>
              <line x1="38" y1="90" x2="90" y2="38" stroke="url(#headerAmberGrad)" strokeWidth="10" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-md font-black tracking-tight text-white uppercase sm:normal-case">
                business<span className="text-amber-500">wzweb</span>
              </span>
            </div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Semantic Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-3">
          <a
            href="#bi-graph"
            className={`font-sans text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-md border cursor-pointer select-none ${
              activeSection === "bi-graph"
                ? "border-amber-500/20 bg-amber-500/[0.04] text-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.06)]"
                : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/60 hover:border-zinc-800/80"
            }`}
          >
            <span className={`font-mono text-[10px] font-semibold transition-colors ${activeSection === "bi-graph" ? "text-amber-500" : "text-zinc-500 group-hover:text-zinc-300"}`}>01.</span> {t.navGraph}
          </a>
          <a
            href="#modernization-hubs"
            className={`font-sans text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-md border cursor-pointer select-none ${
              activeSection === "modernization-hubs"
                ? "border-amber-500/20 bg-amber-500/[0.04] text-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.06)]"
                : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/60 hover:border-zinc-800/80"
            }`}
          >
            <span className={`font-mono text-[10px] font-semibold transition-colors ${activeSection === "modernization-hubs" ? "text-amber-500" : "text-zinc-500 group-hover:text-zinc-300"}`}>02.</span> {t.navHubs}
          </a>
          <a
            href="#case-studies"
            className={`font-sans text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-md border cursor-pointer select-none ${
              activeSection === "case-studies"
                ? "border-amber-500/20 bg-amber-500/[0.04] text-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.06)]"
                : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/60 hover:border-zinc-800/80"
            }`}
          >
            <span className={`font-mono text-[10px] font-semibold transition-colors ${activeSection === "case-studies" ? "text-amber-500" : "text-zinc-500 group-hover:text-zinc-300"}`}>03.</span> {t.navPortfolios}
          </a>
          <a
            href="#faq"
            className={`font-sans text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-md border cursor-pointer select-none ${
              activeSection === "faq"
                ? "border-amber-500/20 bg-amber-500/[0.04] text-amber-500 shadow-[0_2px_12px_rgba(245,158,11,0.06)]"
                : "border-transparent text-zinc-400 hover:text-white hover:bg-zinc-900/60 hover:border-zinc-800/80"
            }`}
          >
            <span className={`font-mono text-[10px] font-semibold transition-colors ${activeSection === "faq" ? "text-amber-500" : "text-zinc-500 group-hover:text-zinc-300"}`}>04.</span> {t.navAiAgent}
          </a>
        </nav>

        {/* Language Switcher and Status Bar */}
        <div className="flex items-center gap-4">
          
          {/* Localization Bar */}
          <div className="flex items-center gap-1 rounded border border-zinc-800 bg-zinc-950 p-0.5">
            <button
              onClick={() => setLanguage("en")}
              className={`rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase transition-all ${
                language === "en"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("am")}
              className={`rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase transition-all ${
                language === "am"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              አማ
            </button>
            <button
              onClick={() => setLanguage("om")}
              className={`rounded-sm px-2 py-1 font-mono text-[10px] font-bold uppercase transition-all ${
                language === "om"
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              OM
            </button>
          </div>

          {/* Core Interactive Action Button */}
          <a
            href="#modernization-hubs"
            className="hidden sm:inline-flex items-center justify-center rounded bg-white px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-amber-500 transition-all duration-150"
          >
            {t.cta}
          </a>

        </div>
      </div>
    </header>
  );
}
