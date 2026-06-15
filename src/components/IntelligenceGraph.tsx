import { useState } from "react";
import { AlertCircle, CheckCircle2, TrendingUp, HelpCircle, ArrowRight, ShieldAlert, Zap, Layers, RefreshCw } from "lucide-react";

interface IntelligenceGraphProps {
  language: "en" | "am" | "om";
}

export default function IntelligenceGraph({ language }: IntelligenceGraphProps) {
  const [activeSystem, setActiveSystem] = useState<"analog" | "automated">("automated");

  const industryCopy = {
    en: {
      title: "Tactical Business Intelligence",
      subtitle: "The Future Contrast: Legacy Paper Stagnation vs. Autonomous Digital Modernization",
      intro: "Local enterprise operations are facing an existential crossroad. In the fast-paced modern economy, relying on legacy procedures creates massive blind spots in cash reconciliation and stock security.",
      analogTitle: "Businesses Without Websites (Analog Stagnation)",
      analogDesc: "Merchants relying on paper logs, physical receipts, and separate offline files suffer from immediate cash reconciliation errors, critical inventory leaks, and absolute scale limits. Operating in isolation means missing the massive market shift, as the real power of online presence remains untapped.",
      autoTitle: "Businesses With Websites (Automated Expansion)",
      autoDesc: "Deploying highly optimized, server-side code backed by highly responsive PostgreSQL architecture enables absolute operational visibility. Businesses with websites capture instant customer insights, unify multiple regional hubs, perform programmatic Telebirr API balance reconciliations, and scale operations indefinitely.",
      metric1: "Operational Fidelity (Real-time Audit Trace)",
      metric2: "Transaction Leakage & Error Rate",
      metric3: "Daily Customer Ingress Boundaries",
      metric4: "Regional Synchronization Delta",
      keywordsBlock: "Digital World // The Power of Online Presence // Web Developers Near Me",
      stagnationCopy: "Analog Stagnation: Blind spots, inventory loss, 12-hour delayed physical summaries, and manual reconciliation.",
      expansionCopy: "Automated Expansion: Real-time Supabase cloud sync, Telebirr integration, end-to-end data safety, and zero leakage."
    },
    am: {
      title: "የንግድ መረጃ ትንተና",
      subtitle: "የወደፊት ንፅፅር፡ የወረቀት ላይ መዘግየት ከፈጣን ዲጂታል ዘመናዊነት ጋር",
      intro: "የአገር ውስጥ ንግዶች ህልውና ወሳኝ ምዕራፍ ላይ ደርሷል። በአሁኑ ፈጣን የኢኮኖሚ እንቅስቃሴ፣ የድሮውን አሰራር መከተል የሂሳብ ማስታረቅ ስህተቶችንና የእቃዎች መጥፋትን ያስከትላል።",
      analogTitle: "ዌብሳይት የሌላቸው የንግድ ድርጅቶች (የድሮው አሰራር)",
      analogDesc: "በወረቀት መዝገቦች ላይ የሚመሰረቱ ነጋዴዎች ለሂሳብ ስህተቶች፣ ለዕቃ መፍሰስ እና ለአገልግሎት አቅርቦት ገደብ የተጋለጡ ናቸው። ከዲጂታል ዓለም ተገልለው በመስራታቸው ትክክለኛውን የዌብሳይት መኖር ኃይል ሳይጠቀሙ ይቀራሉ።",
      autoTitle: "ዌብሳይት ያላቸው የንግድ ድርጅቶች (ራስ-ሰር እድገት)",
      autoDesc: "በከፍተኛ ደረጃ ተሻሽለው የተገነቡና በPostgreSQL የተደገፉ የReact ዌብሳይቶችን መዘርጋት ሙሉ የእንቅስቃሴ ታይነትን ይሰጣል። ዌብሳይት ያላቸው ንግዶች የደንበኞችን ፍላጎት በጥምረት በመረዳት፣ Telebirr እና ባንክ API በማቀናጀት ስራቸውን በከፍተኛ ደረጃ ያሳድጋሉ።",
      metric1: "የአሰራር አስተማማኝነት (የቀጥታ ክትትል)",
      metric2: "የሂሳብ ስህተትና የገንዘብ መፍሰስ",
      metric3: "የዕለታዊ ደንበኞች መቀበል ገደብ",
      metric4: "የቅርንጫፎች ማመሳሰያ ጊዜ",
      keywordsBlock: "ዲጂታል ዓለም // የዌብሳይት ጥቅሞች // በኢትዮጵያ የሚገኙ የዌብሳይት ባለሙያዎች",
      stagnationCopy: "የድሮው አሰራር፡ የመረጃ መደበቅ፣ የዕቃዎች መጥፋት፣ የ12 ሰዓታት የሂሳብ መዘግየት እና በእጅ የሚሰራ ስራ።",
      expansionCopy: "ራስ-ሰር እድገት፡ የቀጥታ ደመና (Cloud Sync) ምልልስ፣ የቴሌብር ውህደት፣ ሙሉ የመረጃ ደህንነት ዋስትና።"
    },
    om: {
      title: "Giraafii B.I. Taktikaalaa",
      subtitle: "Garaagarummaa Gara Fuulduraa: Adeemsa Waraqaa Durii fi Diijitaalessuun Waliigalaa",
      intro: "Sochiin daldalaa naannoo murtoo dhalootaa irra jira. Adeemsa waraqaa durii irratti hirkachuun maallaqa to'achuu fi baduun meeshaa irratti gufuu fida.",
      analogTitle: "Dhaabbilee Weebsaayitiin Malee (Hojii Durii)",
      analogDesc: "Daldaltoonni waraqaadhaan fayyadaman dogoggora herregaa dhuunfaa, baduun meeshalee kuusaa, fi daangaa hojii jabaadhaaf saaxilamu. Humna weebsaayitiin daldalaa qabu garmalee dhabu.",
      autoTitle: "Dhaabbilee Weebsaayitii Qaban (Saffisaan Bal'achuu)",
      autoDesc: "Weebsaayitiilee koodii saffisaa React + PostgreSQL fayyadamanii hojjetaman sochiilee hundaa fidan to'achuu danda'u. Daldaltoonni weebsaayitii qaban Telebirr API waliin daqiiqaa keessatti herrega sirreessu.",
      metric1: "Amanamtummaa Hojii (To'annoo Yeroo Qabatamaa)",
      metric2: "Dogoggora fi Dhangala'aa Herregaa",
      metric3: "Daangaa Simannaa Maamiltoota Guyyaa",
      metric4: "Yeroo Walitti Synco Furuu",
      keywordsBlock: "Addunyaa Diijitaalaa // Humna Weebsaayitiin Qabu // Weebsaayitii Hojjetu",
      stagnationCopy: "Saphana Durii: Mul'ata dhabuu, baduun kuusaa meeshaa, herrega harkaa fi dogoggora bay'ee.",
      expansionCopy: "Bal'achuu Saffisaa: Walitti fuzummaa cloud Supabase, dhimma Telebirr, fi dhangala'aa herregaa bada qorachuu."
    }
  };

  const c = industryCopy[language];

  // System Stats mapping
  const analogStats = [
    { label: c.metric1, value: "14%", color: "bg-red-500", pct: 14 },
    { label: c.metric2, value: "32% Log Loss", color: "bg-red-500", pct: 32, invert: true },
    { label: c.metric3, value: "Capped at 150/day", color: "bg-zinc-600", pct: 15 },
    { label: c.metric4, value: "24h - 48h Delayed", color: "bg-red-500", pct: 85, invert: true },
  ];

  const automatedStats = [
    { label: c.metric1, value: "99.98% Audited", color: "bg-emerald-500", pct: 99.98 },
    { label: c.metric2, value: "0.00% Zero-Loss", color: "bg-emerald-500", pct: 0 },
    { label: c.metric3, value: "Unlimited Autoscaling", color: "bg-amber-500", pct: 100 },
    { label: c.metric4, value: "2.8 Milliseconds Sync", color: "bg-emerald-500", pct: 0.1 },
  ];

  const processFlow = {
    analog: [
      { step: "01", title: language === "am" ? "የወረቀት መዝገብ አያያዝ" : language === "om" ? "Harka-Waraqaa Hordofuu" : "Manual Ink ledgers", desc: language === "am" ? "የሽያጭ ማስታወሻዎች እና ደረሰኞች በእጅ ይጻፋሉ" : language === "om" ? "Koodii fi herregni hundi gubbaatti barraaya" : "Sales transactions & invoices handwritten at checkout spikes" },
      { step: "02", title: language === "am" ? "የሂሳብ ማመሳሰል መዘግየት" : language === "om" ? "Cufama Herregaa Boodatti Hafe" : "End-of-day tally delay", desc: language === "am" ? "ማታ ማታ ሂሳብ ለመዝጋት እስከ ሦስት ሰዓት ይፈጃል" : language === "om" ? "Garaagarummaa herrega dhuunfaa qorachuun yeroo fudhata" : "Reconciliation with physical cash box takes hours and leaks variance" },
      { step: "03", title: language === "am" ? "የተለየ የመጋዘን ቁጥጥር" : language === "om" ? "Argama Meeshaa Of-Danda'u" : "Siloed stock tracking", desc: language === "am" ? "የእቃዎች እጥረት የሚታወቀው እቃው ሙሉ በሙሉ ሲያልቅ ብቻ ነው" : language === "om" ? "Oduun kuusaa meeshaa yeroo baay'ee fagaata" : "Depletions are reported verbally, resulting in stockouts during trading" },
    ],
    automated: [
      { step: "01", title: language === "am" ? "የቀጥታ ጠርዝ ምዝገባ (Edge)" : language === "om" ? "Galmeessa Saffisa Edge" : "Sub-second ledger check", desc: language === "am" ? "እያንዳንዱ ሽያጭ ወዲያውኑ በደመና ላይ ይመዘገባል" : language === "om" ? "Hojiiwwan hundi sekondii keessatti gubbaa seenu" : "Transactions registered immediately with zero ledger discrepancies" },
      { step: "02", title: language === "am" ? "የቴሌብር እና ባንክ ውህደት" : language === "om" ? "Dimshaasha Telebirr API" : "Real-time Telebirr/CBE sync", desc: language === "am" ? "የክፍያ መረጃዎች ያለሰው ንክኪ በቀጥታ ይጣጣማሉ" : language === "om" ? "API dhangala'aa herregaa battalatti mirkaneessa" : "Programmatic payment reconciliations auto-matched instantly" },
      { step: "03", title: language === "am" ? "የተቀናጀ የቅርንጫፍ ቁጥጥር" : language === "om" ? "Kuusaa Walitti Hidha" : "Unified multi-branch pulse", desc: language === "am" ? "የድርጅቱ ባለቤት ከየትኛውም ቦታ ሆኖ የቀጥታ ዘገባዎችን ያያል" : language === "om" ? "To'annoo argama meeshaa bakka hundaa dafanii fidu" : "Central dashboard coordinates regional nodes with dynamic routing" }
    ]
  };

  return (
    <section id="bi-graph" className="relative border-b border-zinc-900/80 bg-gradient-to-b from-[#090a0c] via-[#0d0e12] to-[#090a0c] py-20 lg:py-28 overflow-hidden">
      {/* Subtle Ambient Soft Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-1.5 rounded border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-[10px] tracking-widest text-zinc-400 uppercase">
            <span>{c.title}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:max-w-4xl lg:mx-auto">
            {c.subtitle}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 animate-fade-in">
            {c.intro}
          </p>
        </div>

        {/* Dynamic System Comparator Widgets */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          
          {/* Comparative Dashboard Interface with premium glassmorphism & soft dynamic aura (Cols 1 to 7) */}
          <div className="lg:col-span-7 rounded-2xl card-elevated-3d p-6 lg:p-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900 pb-5 mb-6">
              <div>
                <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Operational Architecture Contrast
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-500">
                    {activeSystem === "analog" ? "Legacy physical structures" : "Next-generation edge pipelines"}
                  </span>
                </div>
              </div>

              {/* Selector Tabs */}
              <div className="inline-flex rounded border border-zinc-800 bg-zinc-950 p-1 font-mono">
                <button
                  onClick={() => setActiveSystem("analog")}
                  className={`flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-bold transition-all ${
                    activeSystem === "analog"
                      ? "bg-zinc-900 text-red-400 shadow-[0_4px_12px_rgba(239,68,68,0.05)]"
                      : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  <AlertCircle className="h-3 w-3" />
                  Analog
                </button>
                <button
                  onClick={() => setActiveSystem("automated")}
                  className={`flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs font-bold transition-all ${
                    activeSystem === "automated"
                      ? "bg-zinc-900 text-emerald-400 shadow-[0_4px_12px_rgba(16,185,129,0.05)]"
                      : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                  Automated
                </button>
              </div>
            </div>

            {/* Simulated Live Visual Matrix */}
            <div className="space-y-6">
              {(activeSystem === "analog" ? analogStats : automatedStats).map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-350 flex items-center gap-2">
                      <span className="font-mono text-[9px] text-zinc-600">0{idx + 1}.</span>
                      {item.label}
                    </span>
                    <span className={`font-mono text-xs font-bold ${activeSystem === 'analog' ? 'text-red-400' : 'text-emerald-400'}`}>
                      {item.value}
                    </span>
                  </div>
                  
                  {/* Styled Bar Gauge */}
                  <div className="h-1.5 w-full rounded-full bg-zinc-900/60 overflow-hidden border border-zinc-950/20">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        activeSystem === "analog" ? "bg-red-600" : "bg-emerald-500"
                      }`}
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Static Multi-Step Ledger Tracking Block with frosted glass */}
            <div className="mt-8 rounded-lg border border-amber-500/15 bg-gradient-to-r from-zinc-950/60 to-amber-950/15 backdrop-blur-md p-5 shadow-[inset_0_1px_5px_rgba(245,158,11,0.08)]">
              <span className="font-mono text-[9px] text-zinc-500 tracking-wider uppercase block mb-4 animate-pulse">
                Operational flow blueprint
              </span>
              
              <div className="space-y-4">
                {processFlow[activeSystem].map((stage, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="font-mono text-xs text-amber-500/85 font-semibold">{stage.step}.</span>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-tight">{stage.title}</h4>
                      <p className="text-[11px] text-zinc-400 leading-normal mt-0.5">{stage.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Detailed Editorial Architecture Copy (Cols 8 to 12) */}
          <div className="space-y-6 lg:col-span-5 lg:pl-4">
            
            {/* Real SEO rich contextual statements wrapping keywords natively */}
            <article className="border-l-2 border-amber-500/30 pl-6 space-y-4">
              <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-amber-500">
                Linguistic Deep-Dive Contrast
              </span>
              
              <div className="space-y-4 text-xs leading-relaxed text-zinc-400">
                <p>
                  To survive in an increasingly interconnected <strong className="text-zinc-300 font-semibold">digital world</strong>, the transition from physical stagnation to automated scalability is critical. Local enterprises rely on a combination of legacy, paper-based operations that suffer from catastrophic visibility caps.
                </p>
                <p>
                  <span className="text-white font-medium">Businesses without websites</span> typically run blindly, unable to secure precise ledger reconciliation. In stark contrast, <span className="text-white font-medium">businesses with websites</span> leverage the undisputed <strong className="text-zinc-200 font-semibold">power of online presence</strong> to track every local unit delivery, aggregate operational analytics across sub-city terminals, and prevent inventory leaks.
                </p>
              </div>
            </article>

            {/* Direct comparative analysis bullet cards with subtle transparent blur */}
            <div className="space-y-4 bg-white/[0.02] bg-gradient-to-br from-white/[0.05] via-transparent to-amber-500/[0.03] backdrop-blur-2xl p-6 rounded-2xl border border-white/[0.1] shadow-[0_22px_55px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 animate-fade-in">
              <h4 className="font-mono text-[11px] font-bold tracking-widest uppercase text-zinc-400">
                System Capabilities Summary
              </h4>

              <div className="flex gap-3 items-start">
                <div className="font-mono text-xs text-red-500/80 mt-1">▲</div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-300">Analog Disadvantages</h5>
                  <p className="text-[11px] text-zinc-500 mt-1">{c.stagnationCopy}</p>
                </div>
              </div>

              <div className="flex gap-3 items-start border-t border-zinc-900 pt-3">
                <div className="font-mono text-xs text-emerald-500 mt-1">▼</div>
                <div>
                  <h5 className="text-xs font-bold text-zinc-300">Automated Advantage</h5>
                  <p className="text-[11px] text-zinc-500 mt-1">{c.expansionCopy}</p>
                </div>
              </div>
            </div>

            {/* Secondary Keyword indexing layer */}
            <div className="rounded-lg border border-dashed border-zinc-800/60 p-4 bg-zinc-950/20 backdrop-blur-sm">
              <p className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">
                ORGANIC SEARCH FOCUS:
              </p>
              <p className="mt-1 font-mono text-[10px] text-amber-400/80">
                {c.keywordsBlock}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
