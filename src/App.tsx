import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Code2, Heart, ExternalLink, Cpu, Activity, Zap, Sliders, Settings, Database, Network, Coins } from "lucide-react";
import LocalSchemaJsonLd from "./components/LocalSchemaJsonLd";
import BrandingHeader from "./components/BrandingHeader";
import IntelligenceGraph from "./components/IntelligenceGraph";
import SubCityHubGrid from "./components/SubCityHubGrid";
import EnterpriseCaseStudies from "./components/EnterpriseCaseStudies";
import AiAgentMetaLayer from "./components/AiAgentMetaLayer";
import SlickTextMarquee from "./components/SlickTextMarquee";
import ClientHub from "./components/ClientHub";
import SeoTrafficSimulator from "./components/SeoTrafficSimulator";
import MarketingCorePhilosophy from "./components/MarketingCorePhilosophy";
import LocalPartners from "./components/LocalPartners";

export default function App() {
  const [language, setLanguage] = useState<"en" | "am" | "om">("en");
  const [techStats, setTechStats] = useState({
    speedIndex: 100,
    ttfb: 0.02,
    edgeNodes: 12
  });

  // Pait-inspired Background Poly-controller parameters
  const [bgSpeed, setBgSpeed] = useState<"paused" | "slow" | "normal" | "kinetic">("normal");
  const [bgScale, setBgScale] = useState<number>(1.0);
  const [bgAuraIntensity, setBgAuraIntensity] = useState<number>(1.0);
  const [showGrid, setShowGrid] = useState<boolean>(true);

  // Pait-inspired Web Cost & Ingest Architect Calculator parameters
  const [pagesCount, setPagesCount] = useState<number>(12);
  const [visitsEstimate, setVisitsEstimate] = useState<number>(25000);
  const [dbTier, setDbTier] = useState<"telemetry" | "standard" | "firestore-vector">("standard");
  const [isAiAgentEnabled, setIsAiAgentEnabled] = useState<boolean>(true);
  const [isDistributedCdn, setIsDistributedCdn] = useState<boolean>(true);

  // Dynamic budget estimation formulas for Eastern Africa
  const getSimulatedBudget = () => {
    let base = 35000; // Base layout and localized schema routing in Birr (ETB)
    base += pagesCount * 2800; // High-performance hybrid pages scale
    base += Math.floor(visitsEstimate / 1000) * 140; // CDN edge cache bandwidth multiplier
    
    if (dbTier === "standard") {
      base += 18000;
    } else if (dbTier === "firestore-vector") {
      base += 44000;
    }
    
    if (isAiAgentEnabled) base += 8500;
    if (isDistributedCdn) base += 14000;
    
    return base.toLocaleString();
  };

  const getSimulatedSpeedFactor = () => {
    let rating = 100;
    if (pagesCount > 25) rating -= 2;
    if (visitsEstimate > 150000) rating -= 3;
    if (dbTier === "standard") rating -= 1;
    if (!isDistributedCdn) rating -= 6;
    return Math.max(91, rating);
  };

  const getSimulatedLatencyFactor = () => {
    let latency = 0.012;
    if (dbTier === "standard") latency += 0.075;
    if (dbTier === "firestore-vector") latency += 0.028;
    if (!isDistributedCdn) latency += 0.115;
    if (visitsEstimate > 200000) latency += 0.015;
    return latency.toFixed(3);
  };

  // Emulate very slight performance fluctuations on server response tracking
  useEffect(() => {
    const timer = setInterval(() => {
      setTechStats(prev => {
        const speedOffset = Math.random() > 0.9 ? (Math.random() > 0.5 ? 99 : 100) : prev.speedIndex;
        const ttfbOffset = parseFloat((0.01 + Math.random() * 0.015).toFixed(3));
        return {
          speedIndex: speedOffset,
          ttfb: ttfbOffset,
          edgeNodes: 12
        };
      });
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const [activeSection, setActiveSection] = useState<string>("");
  const [activeBgIndex, setActiveBgIndex] = useState<number>(0);

  // Periodic automatic slow and unnoticed background image transitions (every 8.5 seconds)
  useEffect(() => {
    const totalImages = 4;
    const interval = setInterval(() => {
      setActiveBgIndex((prev) => (prev + 1) % totalImages);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = ["bi-graph", "modernization-hubs", "case-studies", "faq"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // focus on middle area of the viewport
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const copy = {
    en: {
      heroHeading: "High-Performance Next-Gen Web Solutions & Systems for Ethiopia's Elite Enterprises",
      heroSub: "We build elite custom-coded React applications, secure Telebirr integration pipelines, and optimized cloud databases crafted specifically for the local internet ecosystem of Addis Ababa.",
      ctaPrimary: "Request Free Consultation", // Updated to client focus
      ctaSecondary: "View Client Successes",
      telemetryTitle: "TECHNICAL PERFORMANCE METRIC INDEX",
      stat1: "Page Speed Rating",
      stat2: "Time to First Byte (TTFB)",
      stat3: "Distributed CDN Edges",
      footerDesc: "Engineering high-speed, conversion-optimized digital products for businesses in Ethiopia. Fully optimized for instant user load times and real-world discoverability.",
      calcHeading: "Enterprise Web Estimator & Strategy Planner",
      calcDesc: "Simulate scale and design requirements (sub-page count, anticipated search traffic loads, and localized payment rails). Generate instant projected deployment parameters, speed index, and latency predictions.",
      calcLabelPages: "Sub-page Count Range:",
      calcLabelVisits: "Anticipated Monthly Web Traffic:",
      calcLabelDb: "Database Infrastructure Tier:",
      calcDb1: "Fast Edge Static Rendering with CDN Cache",
      calcDb2: "Relational Storage Core (PostgreSQL Engine)",
      calcDb3: "Unified Firestore Real-time Sync + Vector Search",
      calcAddons: "Premium Architecture Integrations",
      calcAddonCrawl: "AI-Discovery Ready Metadata Optimization (JSON-LD)",
      calcAddonEdge: "Multi-Zone CDN Asset Delivery (Bole, Kazanchis, Piassa)",
      calcBudget: "Projected Development Investment (ETB)",
      calcEstSpeed: "Projected Mobile Load Score",
      calcEstDocs: "AI Search Discoverability Score",
      polyControls: "AMBIENT CANVAS PARAMETERS",
      polySpeed: "Geometric Movement Speed:",
      polyScale: "Fluid Canvas Scale Ratio:",
      polyGrid: "Drafting Dot-Mesh Layer Grid"
    },
    am: {
      heroHeading: "የላቀ ጥራት ያላቸው የReact ድረ-ገጾችን እና የቴሌብር ሲስተሞችን ለኢትዮጵያ ታላላቅ ድርጅቶች እንገነባለን",
      heroSub: "ድርጅትዎን ወደ ቀጣዩ ምዕራፍ ለማሻገር እጅግ ፈጣን ድረ-ገጾችን፣ ደህንነቱ የተጠበቀ የቴሌብር እና የባንክ ክፍያ ውህደቶችን፣ እንዲሁም ለአገር ውስጥ የኢንተርኔት ፍጥነት ምቹ የሆኑ የዳታቤዝ አወቃቀሮችን እንዘረጋለን።",
      ctaPrimary: "የነፃ ምክክር ያግኙ",
      ctaSecondary: "የስራዎቻችን ዝርዝር",
      telemetryTitle: "ዋና የቴክኖሎጂ አፈፃፀም መለኪያዎች",
      stat1: "የገጽ መጫን ስፒድ",
      stat2: "የመረጃ ምላሽ ፍጥነት (TTFB)",
      stat3: "የደመና ቅርንጫፎች",
      footerDesc: "በኢትዮጵያ ውስጥ ለሚገኙ የንግድ ድርጅቶች ከፍተኛ አፈፃፀም ያላቸውን ዲጂታል መሠረተ ልማቶች እንዘረጋለን። ከዘመናዊ የAI ሮቦቶችና ፍለጋ ሞተሮች ጋር ሙሉ በሙሉ የተናበበ።",
      calcHeading: "የቀጥታ ስራዎች በጀትና የቴክኖሎጂ ማስያ",
      calcDesc: "የድረ-ገጽዎን የገጾች ብዛት፣ የወርሃዊ የጎብኝዎች ብዛት፣ የዳታቤዝ አይነት እና የፍጥነት መስፈርቶች እዚህ በማቀናጀት አጠቃላይ በጀቱን፣ የጭነት ፍጥነቱን እና ምላሽ ሰጪነቱን በቅጽበት ይመልከቱ።",
      calcLabelPages: "የድረ-ገጽ ጠቅላላ ገጾች ብዛት፡",
      calcLabelVisits: "የወር ተመልካቾች ግምት፡",
      calcLabelDb: "የዳታቤዝ ቴክኖሎጂ ምርጫ፡",
      calcDb1: "ፈጣን የኤጅ ካሽ (Edge Cache) ብቻ",
      calcDb2: "የተደራጀ ሪሌሽናል ዳታቤዝ (PostgreSQL)",
      calcDb3: "Firestore Sync እና ኒውራል ኢንዴክስ ቬክተር",
      calcAddons: "የላቁ የፍጥነትና የአፈፃፀም አማራጮች",
      calcAddonCrawl: "የAI ፍለጋ መሳሳቢያ ኦፕቲማይዜሽን (JSON-LD)",
      calcAddonEdge: "የቅርንጫፍ መረብ ዝርጋታ (ቃሊቲ፣ ቦሌ፣ ካዛንቺስ CDN)",
      calcBudget: "የተገመተ ጠቅላላ የስራ በጀት (ETB)",
      calcEstSpeed: "የዌብሳይት የጭነት ፍጥነት ግምት",
      calcEstDocs: "የAI ሮቦቶች ተዓማኒነት ደረጃ",
      polyControls: "የጀርባ ገጽታ ሁኔታ ማስተካከያ",
      polySpeed: "የአኒሜሽን አሽከርካሪ ፍጥነት፡",
      polyScale: "የሳጥኖች መጠን መቶኛ፡",
      polyGrid: "የቴክኒካል መስመር ፍርግርግ መደራረብ"
    },
    om: {
      heroHeading: "React Saffisa Guddaa fi Telebirr Ammayyaatiin Daldala Keessan Finfinneetti Ni Guddisna",
      heroSub: "Dhaabbilee daldalaafi pirojektoota adda addaaf weebsaayitii saffisa qabu, sirna kaffaltii Telebirr amansiisaa ta'een walqunnamsiisuun sirna ammayyaa ni ijaarra.",
      ctaPrimary: "Bilisaan Nu Mari'adhu",
      ctaSecondary: "Hojiiwwan Keenya",
      telemetryTitle: "SAFFISA KOOIDII CORE",
      stat1: "Saffisa Banama Geessituu",
      stat2: "Yeroo Deebii Jalqabaa (TTFB)",
      stat3: "Damee Cloud Dabalataa",
      footerDesc: "Infraastraaktshara weebsaayitii saffisa guddaa qabu daldaltoota biyya keessaaf qopheessuu. Sirna AI Agent fi search engine hundaaf kan walitti qabame.",
      calcHeading: "Dhangala'aa Baasii fi Teeknoolojii Interaktiivii",
      calcDesc: "Hamma fuulotaa, dhangala'aa daawwattoota fi gosa database gochuun baasii jilaa sirna keessanii, saffisa banamuu fi bilisummaa AI herregga argadhaa.",
      calcLabelPages: "Baay'ina Fuula Weeb:",
      calcLabelVisits: "Tilmaama Daawwattoota Ji'aa:",
      calcLabelDb: "Filannoo Teeknoolojii Database:",
      calcDb1: "Edge Cache (Saffisa Olaanaa)",
      calcDb2: "Relational Database Distributed (PostgreSQL)",
      calcDb3: "Firestore Sync fi Ingest Neural Vector Scan",
      calcAddons: "Dabalata Saffisa fi Ingestion Olaanaa",
      calcAddonCrawl: "Optimize AI Agent Search (JSON-LD)",
      calcAddonEdge: "Damee Cloud CDN Ingest (Bole, Kazanchis, Arada)",
      calcBudget: "Tilmaama Baasii Waggaa (ETB)",
      calcEstSpeed: "Groot Saffisa Banama Weebsaayiti",
      calcEstDocs: "AI Agent Search Trust Score",
      polyControls: "Parametara Background Motion",
      polySpeed: "Saffisa Deemumsa Geometrii:",
      polyScale: "Hamma Saanduqoota Geometrii Ratio:",
      polyGrid: "Sirna Grid Lines Overlay"
    }
  };

  const c = copy[language];

  return (
    <div className="min-h-screen bg-[#07080a] text-zinc-100 flex flex-col font-sans selection:bg-amber-500/35 selection:text-white scroll-smooth relative overflow-x-hidden">
      {/* Injects localized SEO JSON-LD schema natively */}
      <LocalSchemaJsonLd />

      {/* Textured Background and Dispersed Layers: Noise, Dual-Grid Lines, and Holographic light stream */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-overlay opacity-[0.25] noise-overlay" />
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.3] grid-lines-dual" />
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden holo-scan-line" />

      {/* Immersive Glassmorphic Background Blur Orbs across the full height of the page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[3%] left-[12%] w-[450px] h-[450px] rounded-full bg-amber-500/[0.07] blur-[120px] animate-pulse" />
        <div className="absolute top-[18%] right-[8%] w-[550px] h-[550px] rounded-full bg-indigo-500/[0.08] blur-[140px] animate-pulse" style={{ animationDuration: "16s" }} />
        <div className="absolute top-[32%] left-[5%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.05] blur-[150px] animate-pulse" style={{ animationDuration: "20s" }} />
        <div className="absolute top-[48%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/[0.09] blur-[130px] animate-pulse" style={{ animationDuration: "14s" }} />
        <div className="absolute top-[65%] left-[15%] w-[550px] h-[550px] rounded-full bg-amber-500/[0.06] blur-[140px] animate-pulse" style={{ animationDuration: "18s" }} />
        <div className="absolute top-[78%] right-[6%] w-[600px] h-[600px] rounded-full bg-rose-500/[0.05] blur-[150px] animate-pulse" style={{ animationDuration: "22s" }} />
        <div className="absolute top-[92%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.08] blur-[130px] animate-pulse" style={{ animationDuration: "15s" }} />
      </div>

      {/* Extremely Smooth & Unnoticed Dynamic Background Image Crossfader starting from top of window */}
      <div className="absolute top-0 left-0 right-0 h-[850px] lg:h-[1100px] overflow-hidden pointer-events-none z-0">
        {[
          "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
        ].map((url, index) => {
          const isActive = activeBgIndex === index;
          return (
            <div
              key={url}
              style={{
                backgroundImage: `url('${url}')`,
                opacity: isActive ? 0.05 * bgAuraIntensity : 0,
                transform: isActive ? "scale(1.04) translate(1px, 1px)" : "scale(1.0) translate(0px, 0px)",
              }}
              className="absolute inset-0 bg-cover bg-center transition-all duration-[4000ms] ease-in-out mix-blend-screen"
            />
          );
        })}
        {/* Soft dark radial vignette mask prioritizing typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090a0c]/20 via-transparent to-[#090a0c]" />
      </div>

      {/* Corporate Branding Nav Segment */}
      <BrandingHeader language={language} setLanguage={setLanguage} activeSection={activeSection} />

      {/* Main Structural Layout Wrapper */}
      <main id="main-content" className="flex-grow">
        
        {/* Core Elite Hero Segment */}
        <section id="hero-segment" className="relative pt-20 pb-16 lg:pt-32 lg:pb-32 border-b border-zinc-900 overflow-hidden select-none bg-transparent">

          {/* Subtle Ambient Radial Glow */}
          <div 
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none transition-all duration-500"
            style={{ opacity: 0.05 * bgAuraIntensity }}
          />
          
          {/* Animated Creative Polygonal Glassmorphic Boxes Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {showGrid && (
              <div className="absolute inset-0 grid-dots opacity-15 pointer-events-none transition-opacity duration-300" />
            )}

            {/* Local CSS Keyframes for slow, smooth, complex multi-axis angular displacement */}
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes float-angular-1 {
                0% { transform: translate(0px, 0px) rotate(15deg) scale(1); }
                33% { transform: translate(40px, -30px) rotate(135deg) scale(1.05); }
                66% { transform: translate(-20px, 20px) rotate(255deg) scale(0.95); }
                100% { transform: translate(0px, 0px) rotate(375deg) scale(1); }
              }
              @keyframes float-angular-2 {
                0% { transform: translate(0px, 0px) rotate(45deg) scale(1); }
                50% { transform: translate(-50px, 45px) rotate(-135deg) scale(1.1); }
                100% { transform: translate(0px, 0px) rotate(-315deg) scale(1); }
              }
              @keyframes float-angular-3 {
                0% { transform: translate(0px, 0px) rotate(0deg) scale(0.9); }
                33% { transform: translate(30px, 40px) rotate(120deg) scale(1.03); }
                66% { transform: translate(-40px, -20px) rotate(240deg) scale(0.85); }
                100% { transform: translate(0px, 0px) rotate(360deg) scale(0.9); }
              }
              @keyframes float-angular-4 {
                0% { transform: translate(0px, 0px) rotate(90deg) scale(1); }
                50% { transform: translate(35px, -45px) rotate(270deg) scale(0.95); }
                100% { transform: translate(0px, 0px) rotate(450deg) scale(1); }
              }
            `}} />

            {/* Polygon 1: Isometric 3D Cuboid - Large Top Left */}
            <div 
              className="absolute -top-12 left-[8%] w-60 h-60 opacity-25 sm:opacity-40 blur-[0.5px] backdrop-blur-[6px] rounded-3xl transition-transform duration-500"
              style={{ 
                animationName: bgSpeed === "paused" ? "none" : "float-angular-1",
                animationDuration: `${bgSpeed === "slow" ? 95 : bgSpeed === "kinetic" ? 18 : 50}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationPlayState: bgSpeed === "paused" ? "paused" : "running",
                transform: `scale(${bgScale})`
              }}
            >
              <svg viewBox="0 0 120 120" className="w-full h-full text-amber-500/15" filter="drop-shadow(0 0 15px rgba(245,158,11,0.06))">
                {/* Face A */}
                <polygon points="60,10 110,38 110,92 60,65" fill="rgba(245,158,11,0.04)" stroke="currentColor" strokeWidth="0.75" />
                {/* Face B */}
                <polygon points="60,10 10,38 10,92 60,65" fill="rgba(245,158,11,0.02)" stroke="currentColor" strokeWidth="0.75" />
                {/* Face C */}
                <polygon points="60,65 110,92 60,118 10,92" fill="rgba(245,158,11,0.05)" stroke="currentColor" strokeWidth="0.75" />
                {/* Outer premium accent line */}
                <line x1="60" y1="10" x2="60" y2="118" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                <circle cx="60" cy="65" r="2.5" className="fill-amber-400" />
              </svg>
            </div>

            {/* Polygon 2: Futuristic Octahedron Mesh - Middle Right */}
            <div 
              className="absolute top-[25%] -right-12 w-72 h-72 opacity-30 sm:opacity-45 blur-[0.5px] backdrop-blur-[8px] rounded-3xl transition-transform duration-500"
              style={{ 
                animationName: bgSpeed === "paused" ? "none" : "float-angular-2",
                animationDuration: `${bgSpeed === "slow" ? 120 : bgSpeed === "kinetic" ? 22 : 65}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationPlayState: bgSpeed === "paused" ? "paused" : "running",
                transform: `scale(${bgScale * 1.15})`
              }}
            >
              <svg viewBox="0 0 120 120" className="w-full h-full text-amber-500/10" filter="drop-shadow(0 0 20px rgba(245,158,11,0.04))">
                {/* Outer Pentagon Mesh */}
                <polygon points="60,5 115,45 94,110 26,110 5,45" fill="rgba(245,158,11,0.02)" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 1" />
                {/* Inner Star connections */}
                <polygon points="60,5 94,110 5,45" fill="rgba(245,158,11,0.01)" stroke="currentColor" strokeWidth="0.5" />
                <polygon points="115,45 26,110 60,5" fill="rgba(245,158,11,0.03)" stroke="currentColor" strokeWidth="0.5" />
                {/* Sparkle focal points */}
                <circle cx="60" cy="5" r="2" className="fill-amber-400" />
                <circle cx="115" cy="45" r="2" className="fill-amber-300" />
                <circle cx="94" cy="110" r="2" className="fill-amber-400" />
                <circle cx="26" cy="110" r="2" className="fill-amber-300" />
                <circle cx="5" cy="45" r="2" className="fill-amber-400" />
              </svg>
            </div>

            {/* Polygon 3: Decahedron / Angular Crystal Star - Bottom Left */}
            <div 
              className="absolute bottom-6 left-[4%] w-52 h-52 opacity-25 sm:opacity-35 blur-[0.5px] backdrop-blur-[5px] rounded-full transition-transform duration-500"
              style={{ 
                animationName: bgSpeed === "paused" ? "none" : "float-angular-3",
                animationDuration: `${bgSpeed === "slow" ? 110 : bgSpeed === "kinetic" ? 20 : 60}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationPlayState: bgSpeed === "paused" ? "paused" : "running",
                transform: `scale(${bgScale * 0.9})`
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500/15" filter="drop-shadow(0 0 10px rgba(245,158,11,0.04))">
                <polygon points="50,5 95,50 50,95 5,50" fill="rgba(245,158,11,0.02)" stroke="currentColor" strokeWidth="1" />
                <polygon points="50,20 80,50 50,80 20,50" fill="rgba(245,158,11,0.04)" stroke="currentColor" strokeWidth="0.75" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="0.5" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="2" className="fill-amber-500 animate-pulse" />
              </svg>
            </div>

            {/* Polygon 4: Precision Triangle Prism - Upper Center/Right */}
            <div 
              className="absolute top-6 right-[22%] w-44 h-44 opacity-20 sm:opacity-30 blur-[0.5px] backdrop-blur-[6px] rounded-2xl transition-transform duration-500"
              style={{ 
                animationName: bgSpeed === "paused" ? "none" : "float-angular-4",
                animationDuration: `${bgSpeed === "slow" ? 140 : bgSpeed === "kinetic" ? 25 : 80}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationPlayState: bgSpeed === "paused" ? "paused" : "running",
                transform: `scale(${bgScale * 0.95})`
              }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500/20" filter="drop-shadow(0 0 12px rgba(245,158,11,0.05))">
                <polygon points="50,15 90,85 10,85" fill="rgba(245,158,11,0.01)" stroke="currentColor" strokeWidth="1" />
                <polygon points="50,15 50,85 10,85" fill="rgba(245,158,11,0.03)" stroke="currentColor" strokeWidth="0.75" />
                <circle cx="50" cy="15" r="2" className="fill-amber-400" />
                <circle cx="90" cy="85" r="2" className="fill-amber-400" />
                <circle cx="10" cy="85" r="2" className="fill-amber-300" />
              </svg>
            </div>
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            {/* Super Elite Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 p-2 pr-4 text-xs">
              <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-mono font-black text-black">
                STABLE RELEASE
              </span>
              <span className="font-mono text-[10px] text-zinc-400 tracking-wider">
                businesswzweb.vercel.app // DEPLOY_SUCCESS
              </span>
            </div>

            {/* Display Headings */}
            <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl mx-auto leading-none text-balance font-sans">
              {c.heroHeading}
            </h1>

            {/* Subtitles */}
            <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed text-pretty">
              {c.heroSub}
            </p>

            {/* Interactive Call to Actions */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#about-contact"
                className="rounded-lg bg-amber-500 hover:bg-amber-400 px-6 py-3.5 text-xs sm:text-sm font-bold text-black transition-all flex items-center gap-2 shadow-lg shadow-amber-500/10"
              >
                <span>{c.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="#case-studies"
                className="rounded-lg border border-zinc-850 hover:border-zinc-700 bg-zinc-950 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white transition-all"
              >
                {c.ctaSecondary}
              </a>
            </div>

            {/* High-Fidelity Infrastructure Telemetry Indicators */}
            <div className="mt-16 border-t border-zinc-900/60 pt-12">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 font-extrabold mb-6">
                ✦ {c.telemetryTitle} ✦
              </h3>
              
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 max-w-3xl mx-auto">
                <div className="bg-white/[0.02] bg-gradient-to-br from-white/[0.06] via-transparent to-amber-500/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.1] p-5 shadow-[0_22px_45px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.05)] transition-all duration-300">
                  <span className="font-mono text-[9px] text-zinc-400 block uppercase tracking-wider">{c.stat1}</span>
                  <span className="text-2xl font-black text-white mt-1.5 block font-mono glow-text-gold">
                    {techStats.speedIndex}/100
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono mt-1 block">Perfect Core Web Vitals</span>
                </div>

                <div className="bg-white/[0.02] bg-gradient-to-br from-white/[0.06] via-transparent to-amber-500/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.1] p-5 shadow-[0_22px_45px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.05)] transition-all duration-300">
                  <span className="font-mono text-[9px] text-zinc-400 block uppercase tracking-wider">{c.stat2}</span>
                  <span className="text-2xl font-black text-white mt-1.5 block font-mono glow-text-gold">
                    {techStats.ttfb}s
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono mt-1 block">Edge Ingestion Stream</span>
                </div>

                <div className="bg-white/[0.02] bg-gradient-to-br from-white/[0.06] via-transparent to-amber-500/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.1] p-5 shadow-[0_22px_45px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-[0_25px_50px_rgba(0,0,0,0.7),0_0_20px_rgba(245,158,11,0.05)] transition-all duration-300">
                  <span className="font-mono text-[9px] text-zinc-400 block uppercase tracking-wider">{c.stat3}</span>
                  <span className="text-2xl font-black text-white mt-1.5 block font-mono glow-text-gold">
                    {techStats.edgeNodes} Region Edge
                  </span>
                  <span className="text-[10px] text-blue-400 font-mono mt-1 block">Arada, Bole, Kazanchis CDN</span>
                </div>
              </div>
            </div>

            {/* Pait Digital Interactive Double Deck Bento */}
            <div className="mt-12 select-none border-t border-zinc-900/40 pt-12 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left">
                
                {/* Deck 1: Geometry Control Panel */}
                <div className="lg:col-span-4 rounded-2xl card-elevated-3d p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-zinc-850 pb-3 mb-6">
                      <Settings className="h-4 w-4 text-amber-500 shrink-0" />
                      <h4 className="font-mono text-[10px] font-bold text-white uppercase tracking-widest">{c.polyControls}</h4>
                    </div>

                    <div className="space-y-6">
                      {/* Control 1: Kinetic speed */}
                      <div>
                        <span className="font-mono text-[10px] text-zinc-400 block mb-2 uppercase tracking-wide">
                          {c.polySpeed} <span className="text-amber-400 font-bold">{bgSpeed.toUpperCase()}</span>
                        </span>
                        <div className="grid grid-cols-4 gap-2">
                          {(["paused", "slow", "normal", "kinetic"] as const).map((mode) => (
                            <button
                              key={mode}
                              onClick={() => setBgSpeed(mode)}
                              type="button"
                              className={`rounded py-1 font-mono text-[9px] uppercase border transition-all ${
                                bgSpeed === mode 
                                  ? "border-amber-500 bg-amber-500/10 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.15)]" 
                                  : "border-zinc-800 bg-zinc-950 text-zinc-500 hover:text-zinc-350 hover:border-zinc-750"
                              }`}
                            >
                              {mode}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Control 2: Scale Ratio */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide">
                            {c.polyScale}
                          </span>
                          <span className="font-mono text-[10px] text-amber-500 font-black">{bgScale.toFixed(2)}x</span>
                        </div>
                        <input
                          type="range"
                          min="0.75"
                          max="1.35"
                          step="0.05"
                          value={bgScale}
                          onChange={(e) => setBgScale(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                      </div>

                      {/* Control 3: Aura opacity */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wide">
                            Ambient Heatwave Intensity:
                          </span>
                          <span className="font-mono text-[10px] text-amber-500 font-black">
                            {Math.floor(bgAuraIntensity * 100)}%
                          </span>
                        </div>
                        <input
                          type="range"
                          min="0.2"
                          max="2.5"
                          step="0.1"
                          value={bgAuraIntensity}
                          onChange={(e) => setBgAuraIntensity(parseFloat(e.target.value))}
                          className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-amber-500"
                        />
                      </div>

                      {/* Control 4: Toggle dot matrix layers */}
                      <button
                        onClick={() => setShowGrid(!showGrid)}
                        type="button"
                        className={`w-full flex items-center justify-between rounded border p-2.5 font-mono text-[10px] uppercase transition-all ${
                          showGrid
                            ? "border-amber-500/35 bg-amber-500/5 text-amber-400"
                            : "border-zinc-800 bg-zinc-950 text-zinc-500"
                        }`}
                      >
                        <span>{c.polyGrid}</span>
                        <span className={`h-1.5 w-1.5 rounded-full ${showGrid ? "bg-amber-400 animate-pulse" : "bg-zinc-800"}`} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-zinc-900/50 pt-4 flex items-center gap-2 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping shrink-0" />
                    <span>Background State: Responsive</span>
                  </div>
                </div>

                {/* Deck 2: Cost Estimator */}
                <div className="lg:col-span-8 rounded-2xl card-elevated-3d p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 border-b border-zinc-850 pb-3 mb-6">
                      <Sliders className="h-4 w-4 text-amber-500 shrink-0" />
                      <h4 className="font-extrabold text-sm text-white uppercase tracking-tight font-sans">{c.calcHeading}</h4>
                    </div>

                    <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
                      {c.calcDesc}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                      
                      {/* Left Side: Sliders */}
                      <div className="space-y-6">
                        {/* Slider 1: Pages */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{c.calcLabelPages}</span>
                            <span className="font-mono text-xs text-white font-bold">{pagesCount} Sub-pages</span>
                          </div>
                          <input
                            type="range"
                            min="2"
                            max="50"
                            step="1"
                            value={pagesCount}
                            onChange={(e) => setPagesCount(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-amber-500"
                          />
                        </div>

                        {/* Slider 2: Visits */}
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{c.calcLabelVisits}</span>
                            <span className="font-mono text-xs text-white font-bold">{(visitsEstimate/1000).toFixed(0)}k/mo visits</span>
                          </div>
                          <input
                            type="range"
                            min="5000"
                            max="250000"
                            step="5000"
                            value={visitsEstimate}
                            onChange={(e) => setVisitsEstimate(parseInt(e.target.value))}
                            className="w-full h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer accent-amber-500"
                          />
                        </div>

                        {/* Database tier */}
                        <div>
                          <span className="font-mono text-[10px] text-zinc-400 block mb-2 uppercase tracking-wide">
                            {c.calcLabelDb}
                          </span>
                          <div className="space-y-2">
                            {([
                              { key: "telemetry", label: c.calcDb1 },
                              { key: "standard", label: c.calcDb2 },
                              { key: "firestore-vector", label: c.calcDb3 }
                            ] as const).map((db) => (
                              <button
                                key={db.key}
                                onClick={() => setDbTier(db.key)}
                                type="button"
                                className={`w-full text-left rounded p-2 border font-mono text-[10px] transition-all flex items-center justify-between ${
                                  dbTier === db.key 
                                    ? "border-amber-500/50 bg-amber-500/10 text-amber-400" 
                                    : "border-zinc-850 bg-zinc-950/70 text-zinc-500 hover:text-zinc-350 hover:bg-zinc-900"
                                }`}
                              >
                                <span className={dbTier === db.key ? "text-amber-300 font-bold" : ""}>
                                  {db.label}
                                </span>
                                <Database className={`h-3.5 w-3.5 shrink-0 ${dbTier === db.key ? "text-amber-500" : "text-zinc-700"}`} />
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Toggles & Results */}
                      <div className="space-y-6">
                        <div>
                          <span className="font-mono text-[10px] text-zinc-400 block mb-2 uppercase tracking-wide">{c.calcAddons}</span>
                          <div className="space-y-3">
                            {/* Toggle 1: crawlers */}
                            <button
                              onClick={() => setIsAiAgentEnabled(!isAiAgentEnabled)}
                              type="button"
                              className={`w-full flex items-center justify-between rounded border p-2.5 text-left transition-all ${
                                isAiAgentEnabled
                                  ? "border-amber-500/35 bg-amber-500/5 text-amber-400"
                                  : "border-zinc-850 bg-zinc-950/70 text-zinc-500"
                              }`}
                            >
                              <span className="font-mono text-[9px] uppercase leading-none">{c.calcAddonCrawl}</span>
                              <span className={`h-2.5 w-5 rounded-full transition-colors duration-200 relative shrink-0 ${isAiAgentEnabled ? "bg-amber-500" : "bg-zinc-850"}`}>
                                <span className={`absolute top-0.5 w-1.5 h-1.5 rounded-full bg-white transition-all transform duration-200 ${isAiAgentEnabled ? "left-3" : "left-0.5"}`} />
                              </span>
                            </button>

                            {/* Toggle 2: speed cdn */}
                            <button
                              onClick={() => setIsDistributedCdn(!isDistributedCdn)}
                              type="button"
                              className={`w-full flex items-center justify-between rounded border p-2.5 text-left transition-all ${
                                isDistributedCdn
                                  ? "border-amber-500/35 bg-amber-500/5 text-amber-400"
                                  : "border-zinc-850 bg-zinc-950/70 text-zinc-500"
                              }`}
                            >
                              <span className="font-mono text-[9px] uppercase leading-none">{c.calcAddonEdge}</span>
                              <span className={`h-2.5 w-5 rounded-full transition-colors duration-200 relative shrink-0 ${isDistributedCdn ? "bg-amber-500" : "bg-zinc-850"}`}>
                                <span className={`absolute top-0.5 w-1.5 h-1.5 rounded-full bg-white transition-all transform duration-200 ${isDistributedCdn ? "left-3" : "left-0.5"}`} />
                              </span>
                            </button>
                          </div>
                        </div>

                        {/* Micro telemetry response outputs */}
                        <div className="rounded-xl border border-zinc-850 bg-zinc-950/80 p-4 space-y-3.5 shadow-inner">
                          {/* Speed factor */}
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{c.calcEstSpeed}</span>
                            <span className="font-mono font-black text-white glow-text-gold">{getSimulatedSpeedFactor()}/100</span>
                          </div>

                          {/* Latency prediction */}
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">Predicted Core TTFB</span>
                            <span className="font-mono font-black text-emerald-400">{getSimulatedLatencyFactor()} seconds</span>
                          </div>

                          {/* AI doc rating */}
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">{c.calcEstDocs}</span>
                            <span className="font-mono font-bold text-blue-450">{isAiAgentEnabled ? "PASS (100%)" : "BASIC (40%)"}</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Pricing Output Panel */}
                  <div className="mt-8 border-t border-zinc-900 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <span className="font-mono text-[9px] text-zinc-500 block uppercase tracking-wider">
                        {c.calcBudget}
                      </span>
                      <span className="text-2xl font-black text-white tracking-tight glow-text-gold">
                        ETB {getSimulatedBudget()} <span className="text-xs text-zinc-500 font-normal">/ year</span>
                      </span>
                    </div>

                    <a
                      href="#about-contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider px-5 py-3 transition-colors shadow-lg shadow-amber-500/10"
                    >
                      <span>Lock-in Architecture Proposal</span>
                      <ArrowRight className="h-4.5 w-4.5 shrink-0" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Thin scroll-linked horizontal marquee of 'BUSINESSWEB WEB DEVELOPMENT' */}
        <SlickTextMarquee />

        {/* Interactive AI SEO, Local SEO & high traffic scale simulator */}
        <SeoTrafficSimulator language={language} />

        {/* Section 1: The Tactical Business Intelligence Graph */}
        <IntelligenceGraph language={language} />

        {/* Section 2: The Multi-Branch Sub-City Hub Grid */}
        <SubCityHubGrid language={language} />

        {/* Section 3: NDA-Protected Enterprise Case Studies Carousel */}
        <EnterpriseCaseStudies language={language} />

        {/* Local Ecosystem & Trusted Partner Integrations Scrollbar */}
        <LocalPartners language={language} />

        {/* Marketing Core Philosophy & Sales Psychology Alignment Accent */}
        <MarketingCorePhilosophy language={language} />

        {/* Section 4: Human-Centered Client Mission, Map & Free Quote Application Form */}
        <ClientHub language={language} />

        {/* Section 5: AI Scraper & Agent Meta-Layer FAQs */}
        <AiAgentMetaLayer language={language} />

      </main>

      {/* Unified Minimalism Editorial Footer */}
      <footer id="app-footer" className="border-t border-zinc-900/40 bg-[#060708] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            
            {/* Left branding */}
            <div className="max-w-sm space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-amber-500" />
                <span className="font-mono text-md font-bold text-white tracking-widest">
                  BUSINESS<span className="text-amber-500">WZ</span>WEB
                </span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {c.footerDesc}
              </p>
            </div>

            {/* Center directories links */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-wider">
                  DEPLOY REGIONS
                </h4>
                <ul className="space-y-1.5 font-mono text-[10px] text-zinc-500">
                  <li>Bole Sub-City</li>
                  <li>Arada Commercial</li>
                  <li>Yeka - Ayat Axis</li>
                  <li>Bulbula Terminal</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-mono text-[10px] uppercase text-zinc-400 font-bold tracking-wider">
                  COMPLIANCE VECTORS
                </h4>
                <ul className="space-y-1.5 font-mono text-[10px] text-zinc-500">
                  <li className="flex items-center gap-1">
                    <span>Telebirr Secure SSL</span>
                    <ExternalLink className="h-2.5 w-2.5" />
                  </li>
                  <li>W3C Semantic Schema</li>
                  <li>Postgres Row Level Security</li>
                  <li>AI Crawler Allowed</li>
                </ul>
              </div>
            </div>

          </div>

          {/* Social trademarks and copyright credits */}
          <div className="mt-12 border-t border-zinc-900/60 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[10px] text-zinc-600">
            <p className="flex items-center gap-1.5">
              <span>© {new Date().getFullYear()} BusinessWZWeb. Built with</span>
              <Heart className="h-3 w-3 text-red-500 fill-current" />
              <span>for Digital Ethiopia.</span>
            </p>
            <p className="tracking-widest uppercase">
              COORDINATES // SHEGER_ADDIS_ET
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
