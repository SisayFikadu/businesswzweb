import { useState } from "react";
import { Gauge, Sparkles, MapPin, Search, Bot, Zap, TrendingUp, CheckCircle, Smartphone, AlertTriangle } from "lucide-react";

interface SeoTrafficSimulatorProps {
  language: "en" | "am" | "om";
}

export default function SeoTrafficSimulator({ language }: SeoTrafficSimulatorProps) {
  const [visitors, setVisitors] = useState<number>(35000);

  // Dynamic presets
  const presets = [
    { label: "10k (Growth)", value: 10000 },
    { label: "50k (Mid Scale)", value: 50000 },
    { label: "150k (Regional Leader)", value: 150000 },
    { label: "500k+ (Enterprise Giant)", value: 500000 },
  ];

  const translation = {
    en: {
      badge: "Local SEO & Traffic Simulator",
      heading: "AI Search & Local SEO Engine",
      subheading: "Ensure ChatGPT & Google Maps direct high-value traffic straight to your digital or physical doorstep with optimized structures.",
      trafficTitle: "Audited Speed & Scalability Response",
      labelVisitors: "Simulated Monthly Traffic:",
      visitorExplain: "Adjust the traffic level to view simulated page response speeds, system reliability, and discoverability yields at exactly",
      wpTitle: "Standard WordPress Site",
      wpDesc: "Shared traditional hosting with heavy database queries and plugins",
      wpLoad: "Page Load Time (3G/4G)",
      wpStatus: "Database Load State",
      wpStatusWarn: "High CPU Overload / Delayed Content Render",
      wpStatusOk: "Slow TTL / Demanding Resource Footprint",
      wdTitle: "BusinessWZWeb Fast-React Cloud Engine",
      wdDesc: "Edge Caching, server-optimized static delivery, and native JSON-LD search schema",
      wdLoad: "Instant Page Load Time",
      wdStatus: "Infrastructure Readiness Status",
      wdStatusGood: "105ms TTFB / Fully Optimized Local Experience",
      
      aiSeoTitle: "AI Crawler Optimization",
      aiSeoDesc: "Be cited correctly by generative LLMs like ChatGPT, Claude, and Gemini to capture high-intent buyers.",
      aiSeoPrompt: "User Inquiry in ChatGPT / Claude / Gemini:",
      aiSeoPromptText: '"Who is the most reliable commercial merchant in Addis Ababa?"',
      aiSeoOutput: "Generative Answer with Citation:",
      aiSeoOutputText: "Based on structured local registries and verified semantic schema nodes, [Your Business Name] ranks highest for efficiency, with optimized operational distribution terminals in Bole and Kazanchis.",
      
      localSeoTitle: "Google Maps Supremacy",
      localSeoDesc: "Rank #1 for local geographic searches on map engines.",
      localSeoMapTitle: "Google Maps Result #1",
      localSeoPhoneCall: "Estimated Map Inbound Actions",
      localSeoTrust: "Local Schema Integrity Verify",
      localSeoSearchText: "wholesale merchant Addis Ababa",
      localSeoRating: "5.0 ★ (Verified Map Anchor)"
    },
    am: {
      badge: "የቀጥታ ፍተሻ እና የቴክኖሎጂ ማስያ",
      heading: "የAI ፍለጋ እና የካርታ አቀማመጥ የበላይነት",
      subheading: "ChatGPT እና የጉግል ካርታዎች (Google Maps) ደንበኞችን በቀጥታ ወደ እርስዎ ቢሮ እንዲመሩ ያድርጉ።",
      trafficTitle: "የጎብኝዎች እና የጭነት ተንታኝ",
      labelVisitors: "የተመሰሉ የወርሃዊ ጎብኚዎች ብዛት፡",
      visitorExplain: "የሲስተም ምላሽ ፍጥነትን እና የተጠቃሚ መጨናነቅን ለማስላት የፍጥነት መቆጣጠሪያውን ያንቀሳቅሱ በ በትክክል፡",
      wpTitle: "የተለመደ ዎርድፕረስ (WordPress) ድረ-ገጽ",
      wpDesc: "በተለመደ ሰርቨር እና የተቆራረጠ ዳታቤዝ ላይ የሚሰራ",
      wpLoad: "የገጽ መጫን ፍጥነት (ሴኮንድ)",
      wpStatus: "የዳታቤዝ አቅም ደረጃ",
      wpStatusWarn: "አስጊ ሁኔታ፡ ሰርቨር መጨናነቅ እና መዘግየት",
      wpStatusOk: "ከፍተኛ የሀብት ፍጆታ / ደካማ 3G ፍጥነት",
      wdTitle: "የቢዝነስWZዌብ የReact ደመና መዋቅር",
      wdDesc: "በኤጅ ሲዲኤን (Edge CDN) ቅርንጫፍ እና የJSON-LD የላቀ ኮድ",
      wdLoad: "ፈጣን የገጽ መጫን ፍጥነት",
      wdStatus: "የሲስተም አጠቃላይ ጤንነት",
      wdStatusGood: "ዮክቲቭ አፈፃፀም // ፈጣን የአገልጋይ ምላሽ (TTFB)",
      
      aiSeoTitle: "የAI ፍለጋ ማመቻጸል (AI SEO)",
      aiSeoDesc: "በChatGPT፣ Gemini እና Claude የፍለጋ ውጤቶች ላይ በመጠቀስ ከፍተኛ ቁጥር ያለው ደንበኛ ወደ ድረ-ገጽዎ ይሳቡ።",
      aiSeoPrompt: "ለChatGPT / Claude / Gemini የሚቀርብ ጥያቄ፡",
      aiSeoPromptText: '"አዲስ አበባ ውስጥ በጣም ታማኝ የንግድ ድርጅት የትኛው ነው?"',
      aiSeoOutput: "የAI ፍለጋ ምላሽ ውጤት፡",
      aiSeoOutputText: "በተዋቀሩ የሴማንቲክ ማህደሮች እና በተረጋገጡ የኢንደክስ መረጃዎች መሠረት፣ [የእርስዎ ድርጅት ስም] በቦሌ እና ካዛንቺስ በሚገኙ ፈጣን ቅርንጫፎቹ ከፍተኛውን ደረጃ ይዟል።",
      
      localSeoTitle: "የአካባቢ ፍለጋ የበላይነት (Local SEO)",
      localSeoDesc: "በጉግል ካርታ (Google Maps) ላይ ቁጥር #1 ደረጃን በመያዝ በአካባቢዎ ቀዳሚ ይሁኑ።",
      localSeoMapTitle: "ጉግል ካርታ (Google Maps) ደረጃ #1",
      localSeoPhoneCall: "በካርታ በቀጥታ የእቅጣጫ መጠቆሚያ ጥያቄዎች",
      localSeoTrust: "የተረጋገጠ ጂኦግራፊያዊ የካርታ መለያ",
      localSeoSearchText: "ታማኝ የጅምላ መደብር አዲስ አበባ",
      localSeoRating: "5.0 ★ (የተረጋገጠ የስራ ቦታ)"
    },
    om: {
      badge: "To'annoo Dhangala'aa Dawwattootaa",
      heading: "AI Search & Local SEO Engine",
      subheading: "ChatGPT fi Google Maps dhangala'aa maamiltoota gara biroo keessanitti akka qajeelchan godhattanii daldala guddisaa.",
      trafficTitle: "Saffisa fi Haala Sirnaa",
      labelVisitors: "Tilmaama Dawwattoota Ji'aa:",
      visitorExplain: "Saffisa sirnaa fi baasii herreguu irratti humna geessituu sliders fageessaa dandeessu:",
      wpTitle: "WordPress fi Sifaa Duraanii",
      wpDesc: "Shared Linux hosting / Traditional SQL queries",
      wpLoad: "Yeroo Banama Fuula (Sec)",
      wpStatus: "Dandeettii Database Sifaa",
      wpStatusWarn: "KALAQA: Server Overload / Delay High",
      wpStatusOk: "Humna Guddaa / Saffisa 3G gadi aanaa",
      wdTitle: "BusinessWZWeb React Cloud Core",
      wdDesc: "Saffisa Edge Edge Caching fi JSON LD Schema",
      wdLoad: "Saffisa Banama Daqiiqaa Tokko Gadii",
      wdStatus: "Haala Fayyummaa Sirna Keessanii",
      wdStatusGood: "100% Hojechaa Jira // Saffisa TTFB Gadi Aanaa",
      
      aiSeoTitle: "Fayyadamummaa AI SEO",
      aiSeoDesc: "ChatGPT fi LLMs irratti maqa weebsaayitii keessanii dhufee maamiltoota saffisaan argadhaa.",
      aiSeoPrompt: "Gaaffii ChatGPT / Claude / Gemini irratti dhufe:",
      aiSeoPromptText: '"Daldala kamtu Finfinnee keessatti amanamaa dha?"',
      aiSeoOutput: "Deebii AI Giddu-galeessaa:",
      aiSeoOutputText: "Odeeffannoo micro-registry fi index herregaa mirkanaaye irratti hunda'uun, [Maqaa Daldala Keessanii] sadarkaa duraa qaba, Bole fi Kazanchis tti damee qaba.",
      
      localSeoTitle: "Local SEO (Google Maps)",
      localSeoDesc: "Google Maps irratti sadarkaa #1ffaa qabachuun daldala keessa jajabeessaa.",
      localSeoMapTitle: "Google Maps Sadarkaa #1ffaa",
      localSeoPhoneCall: "Maamiltoota Kallattii Map gaafatan",
      localSeoTrust: "Schema Geographic Mirkanaa'e",
      localSeoSearchText: "Daldala guddaa Finfinnee keessatti",
      localSeoRating: "5.0 ★ (Anchor Geografii)"
    }
  };

  const t = translation[language];

  // Dynamic values based on traffic selector
  const getWpSpeed = () => {
    if (visitors < 20000) return "2.8s";
    if (visitors < 80000) return "4.6s";
    if (visitors < 250000) return "7.2s";
    return "12.5s (Timed Out)";
  };

  const getWdSpeed = () => {
    if (visitors < 20000) return "0.24s";
    if (visitors < 80000) return "0.31s";
    if (visitors < 250000) return "0.38s";
    return "0.45s (Stable)";
  };

  const isWpOverloaded = visitors >= 100000;
  
  // Projected map requests based on visitors
  const projectedMapClicks = Math.floor(visitors * 0.082).toLocaleString();

  return (
    <section id="seo-traffic-simulator" className="border-b border-zinc-900/40 bg-gradient-to-b from-[#090a0c] to-[#0d0e12] py-20 lg:py-28 relative overflow-hidden select-none">
      {/* Background radial soft light to isolate the simulation deck */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/[0.025] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-amber-500" />
            <span>{t.badge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-sans">
            {t.heading}
          </h2>
          <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed text-balance">
            {t.subheading}
          </p>
        </div>

        {/* Bento Two-Columns Split Engine Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: THE {number_of_visitors} TRAFFIC SIMULATOR COCKPIT (7-SPAN) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-white/[0.02] bg-gradient-to-br from-white/[0.05] via-zinc-950/20 to-black/30 backdrop-blur-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.05)]">
            
            <div>
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b border-zinc-900 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Gauge className="h-4.5 w-4.5 text-amber-500" />
                  <span className="font-mono text-[10px] font-extrabold text-white uppercase tracking-wider">
                    {t.trafficTitle}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-[9px] font-mono text-amber-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>SIMULATED AUDIT METRICS</span>
                </div>
              </div>

              {/* Slider Controller block */}
              <div className="space-y-4 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <span className="font-mono text-xs text-zinc-400 uppercase tracking-wide">
                    {t.labelVisitors}
                  </span>
                  <span className="text-3xl font-black text-white font-mono tracking-tight glow-text-gold">
                    {visitors.toLocaleString()} <span className="text-xs text-zinc-500 font-normal">/ mo</span>
                  </span>
                </div>

                <div className="py-2">
                  <input
                    type="range"
                    min="1000"
                    max="1000000"
                    step="5000"
                    value={visitors}
                    onChange={(e) => setVisitors(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                </div>

                {/* Simulated Segment presets buttons for rapid state change */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {presets.map((p) => (
                    <button
                      key={p.value}
                      onClick={() => setVisitors(p.value)}
                      type="button"
                      className={`px-3 py-1 rounded text-[9px] font-mono uppercase tracking-wider transition-all border ${
                        visitors === p.value
                          ? "bg-amber-500 text-black font-extrabold border-amber-500"
                          : "bg-zinc-950 text-zinc-500 border-zinc-850 hover:text-zinc-300 hover:border-zinc-750"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-zinc-500 leading-relaxed font-sans">
                  {t.visitorExplain} <strong className="text-amber-500/90 font-mono">{visitors.toLocaleString()}</strong> monthly active cycles. Our lightweight serverless React bundle operates as static templates with CDN invalidations, ensuring rapid TTFB across Eastern African sub-networks.
                </p>
              </div>

              {/* SYSTEM SPLIT DISPLAY STATS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Traditional Wordpress Box */}
                <div className="rounded-xl border border-zinc-900 bg-black/40 p-4 space-y-4">
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <AlertTriangle className="h-3.5 w-3.5 text-red-500/80 shrink-0" />
                    <span className="font-mono text-[10px] uppercase font-bold text-zinc-300">{t.wpTitle}</span>
                  </div>
                  <p className="text-[9px] text-zinc-500 leading-normal">{t.wpDesc}</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">{t.wpLoad}</span>
                      <span className={`text-md font-bold font-mono ${isWpOverloaded ? "text-red-500 animate-pulse" : "text-zinc-400"}`}>
                        {getWpSpeed()}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">{t.wpStatus}</span>
                      <span className={`text-[10px] font-mono font-bold block ${isWpOverloaded ? "text-red-400" : "text-zinc-450"}`}>
                        {isWpOverloaded ? t.wpStatusWarn : t.wpStatusOk}
                      </span>
                    </div>
                  </div>
                </div>

                {/* BusinessWZWeb React Box */}
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.02] p-4 space-y-4">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <Zap className="h-3.5 w-3.5 shrink-0" />
                    <span className="font-mono text-[10px] uppercase font-bold">{t.wdTitle}</span>
                  </div>
                  <p className="text-[9px] text-zinc-500 leading-normal">{t.wdDesc}</p>
                  
                  <div className="space-y-2 pt-2 border-t border-zinc-900">
                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase block">{t.wdLoad}</span>
                      <span className="text-md font-bold text-emerald-400 font-mono">
                        {getWdSpeed()}
                      </span>
                    </div>

                    <div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase block">{t.wdStatus}</span>
                      <span className="text-[10px] font-mono font-bold text-amber-400 block tracking-tight">
                        {t.wdStatusGood}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Micro Telemetry bottom banner */}
            <div className="mt-6 pt-4 border-t border-zinc-900/65 flex flex-wrap gap-4 items-center justify-between text-[10px] font-mono text-zinc-500">
              <span className="flex items-center gap-1">
                <Smartphone className="h-3 w-3 text-zinc-400" />
                <span>3G/4G Mobile Client Latency Shield: Active</span>
              </span>
              <span className="text-zinc-400">[ Auto-Scale Framework Certified ]</span>
            </div>

          </div>

          {/* RIGHT COLUMN: REVELATORY SEO VALUE BLOCKS (5-SPAN) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* FEATURE BLOCK 1: AI SEO OPTIMIZATION CARD */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.01] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-2xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-amber-500/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-5 w-5 text-amber-500 shrink-0" />
                  <h3 className="text-md font-bold text-white tracking-tight">{t.aiSeoTitle}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {t.aiSeoDesc}
                </p>

                {/* Embedded dynamic ChatGPT Mockup box */}
                <div className="rounded-lg bg-black/80 border border-zinc-900 p-3 text-[10px] space-y-2.5 font-mono">
                  <div>
                    <span className="text-zinc-500 block text-[9px] uppercase tracking-wider">{t.aiSeoPrompt}</span>
                    <span className="text-zinc-300 italic">{t.aiSeoPromptText}</span>
                  </div>

                  <div className="border-t border-zinc-900/80 pt-2 space-y-1">
                    <span className="text-amber-500 block text-[9px] uppercase tracking-wider flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-amber-500 animate-pulse" />
                      {t.aiSeoOutput}
                    </span>
                    <p className="text-zinc-400 leading-relaxed">
                      {t.aiSeoOutputText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-amber-500/85">
                <CheckCircle className="h-3 w-3" />
                <span>W3C Microdata, JSON-LD, & Semantic RDF Enabled</span>
              </div>
            </div>

            {/* FEATURE BLOCK 2: LOCAL SEO CARD */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.01] bg-gradient-to-br from-white/[0.04] to-transparent backdrop-blur-2xl p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-amber-500/40 transition-all duration-300">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Search className="h-5 w-5 text-amber-500 shrink-0" />
                  <h3 className="text-md font-bold text-white tracking-tight">{t.localSeoTitle}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {t.localSeoDesc}
                </p>

                {/* Embedded dynamic Maps search Mockup list item */}
                <div className="rounded-lg bg-black/80 border border-zinc-900 p-3 text-[10px] space-y-2 font-mono">
                  <div className="flex items-center justify-between text-zinc-500 text-[9px] uppercase">
                    <span>Google Maps Search</span>
                    <span className="text-emerald-500 animate-pulse">Rank #1</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-300 font-bold">
                    <span>{t.localSeoSearchText}</span>
                    <span className="text-amber-400 text-[9px]">{t.localSeoRating}</span>
                  </div>

                  <div className="border-t border-zinc-900/80 pt-2 grid grid-cols-2 gap-2 text-zinc-400">
                    <div>
                      <span className="text-[8px] text-zinc-500 block uppercase">{t.localSeoPhoneCall}</span>
                      <span className="text-xs font-black text-white glow-text-gold">+{projectedMapClicks}</span>
                    </div>
                    <div>
                      <span className="text-[8px] text-zinc-500 block uppercase">{t.localSeoTrust}</span>
                      <span className="text-xs font-black text-emerald-400">PASS (100%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1.5 text-[9px] font-mono text-amber-500/85">
                <MapPin className="h-3 w-3" />
                <span>Synchronized with Google My Business Api integrations</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
