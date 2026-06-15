import { useState } from "react";
import { MapPin, ArrowRightLeft, Radio, Coins, Database, ShieldCheck, Share2, Compass } from "lucide-react";

interface SubCityHubGridProps {
  language: "en" | "am" | "om";
}

export default function SubCityHubGrid({ language }: SubCityHubGridProps) {
  const [selectedHub, setSelectedHub] = useState<number>(0);

  const hubSpecs = [
    {
      id: 0,
      district: "Bole & Bulbula District",
      locality: "Bole Sub-City, Addis Ababa",
      focus: "Organic Retail & High-Velocity Inventory Pulse",
      architecture: [
        "Edge: Next.js Server-Side Incremental Static Regeneration (ISR)",
        "Database: Multi-tenant Postgres row-level security policy engine",
        "Caching: Key-value Redis replication layer for rapid load-speed",
        "Pipeline: Scheduled auto-refresh of cold-storage stock states"
      ],
      metrics: { latency: "14ms Avg Response", sync: "Real-time Edge Relay", availability: "99.99% Guaranteed" },
      amharicDetails: {
        district: "ቦሌ እና ቡልቡላ አካባቢ",
        focus: "ኦርጋኒክ ምርቶች ሽያጭና ፈጣን የእቃዎች ቁጥጥር መሠረተ ልማት",
        note: "በቦሌ ንዑስ ከተማ ለሚገኙ ከፍተኛ የሰርቪስና ምርት አቅራቢዎች የተዘጋጀ አስተማማኝ የመረጃ አውታር።"
      },
      oromooDetails: {
        district: "Bolee fi Bulbulaa",
        focus: "Daldala Reetaayilaa Meeshalee Orgaanikii",
        note: "Saffisa ol'aanaa fi to'annoo kuusaa meeshalee dhangala'aa yeroo qabatamaatti raawwatamu."
      }
    },
    {
      id: 1,
      district: "Ayat, Goro & Figa Corridor",
      locality: "Yeka & Bole Outer Limits, Addis Ababa",
      focus: "Cross-Branch Quick POS & Financial Reconciliation Relays",
      architecture: [
        "Fintech API: Dual Telebirr Payment API & Commercial Bank of Ethiopia (CBE) Birr Gateway Integration",
        "Security: Hardware security module (HSM) signing of remittance callbacks",
        "Ledger: Immutable PostgreSQL transaction tables with dual-ledger audit logs",
        "Reliability: Automatic network failure-safe offline buffer synchronization"
      ],
      metrics: { latency: "38ms Gateway Hop", sync: "Instant Transaction Callback", availability: "100% Ledger Integrity" },
      amharicDetails: {
        district: "አያት፣ ጎሮ እና ፊጋ መስመር",
        focus: "ባለብዙ-ቅርንጫፍ ፈጣን የሽያጭ መመዝገቢያ (POS) እና የቴሌብር ውህደት",
        note: "በአያት እና በጎሮ መስመር ለሚገኙ ነጋዴዎች የቴሌብርና ሲቢኢ ብር የክፍያ ስርአት በፈጣን ሰከንዶች ውስጥ ማስታረቅ።"
      },
      oromooDetails: {
        district: "Ayyaat, Gooroo fi Fiigaa Corridors",
        focus: "POS Saffisa Qaxxaamura Damee fi Wal-Simannaa Herregaa",
        note: "Qunnamtii Telebirr fi CBE Birr API dhangala'aa herrega daldalaa daqiiqaa tokko malee to'achuuf kan raawwatame."
      }
    },
    {
      id: 2,
      district: "Merkato & Kazanchis Corporate Hubs",
      locality: "Arada, Addis Ketema & Kirkos, Addis Ababa",
      focus: "Enterprise Import/Export Logistics & Multi-Tenant Supply Chain Dashboards",
      architecture: [
        "Freight Core: Distributed GraphQL endpoints handling customs tracking updates",
        "Map Module: Real-time geolocation coordinates tracing cargo freight journeys",
        "Tenant Space: Secure sub-domain isolation (tenant.businesswzweb.vercel.app)",
        "Automated PDF: Dynamic generation of import manifest bills and customs clearances"
      ],
      metrics: { latency: "62ms Freight Fetch", sync: "Cargo Progress Tracking", availability: "Enterprise Dedicated Slates" },
      amharicDetails: {
        district: "መርካቶ እና ካዛንቺስ የንግድ ማዕከል",
        focus: "የገቢ/ወጪ እቃዎች ሎጂስቲክስና የአይቲ መቆጣጠሪያ ሰሌዳ (Supply Chain Dynamic Visuals)",
        note: "ለመላው ኢትዮጵያ አስመጪና ላኪዎች የጉምሩክ ክትትልና የመጋዘን ቁጥጥር በአንድ ማዕከላዊ ሥርዓት ማጠቃለያ።"
      },
      oromooDetails: {
        district: "Merkatoo fi Kaazaanchiis Hubs",
        focus: "Logistics Import/Export fi Supply Chain Daashboordii",
        note: "Daldala gurguddoo fi geejjiba fe'iisaa biyya keessaa fi daldala alaa ammayyeessuuf sirna qoranno jabaa."
      }
    }
  ];

  const searchVectorQueries = [
    { query: "Web developers near me", purpose: "Targeting modern Addis geolocations" },
    { query: "ዌብሳይት ድቭሎፕመንት", purpose: "High-density Amharic development vector" },
    { query: "Weebsaayitii nama hojjetu", purpose: "Targeting Afaan Oromoo technical searchers" },
    { query: "Top web designers in Ethiopia", purpose: "National tier competitiveness ranking" }
  ];

  const localizationText = {
    en: {
      title: "Regional Digital Modernization Hubs",
      subtitle: "Bespoke Web Deployments Tailored for Commercial Districts in Addis Ababa",
      intro: "We configure specialized sub-city nodes with deep localized performance rules, mapping enterprise architectural needs to their specific physical district profile.",
      techHeading: "Active System Architecture",
      directoryHeading: "Semantic Directory Vectors Index Map",
      specSelectorText: "Click district to load deep architecture setup:",
      metricsHeader: "Hub Telemetry Baseline"
    },
    am: {
      title: "የክልል ዲጂታል ማዘመኛ ማዕከላት",
      subtitle: "በአዲስ አበባ ዋና ዋና የንግድ መስመሮች ላይ የተበጁ የዌብሳይት ስራዎች",
      intro: "እያንዳንድን የንግድ እንቅስቃሴ ባህሪ ከግንዛቤ በማስገባት፣ ለእያንዳንዱ ሰፈር የተለየ የስራ አፈፃፀምና ፈጣን የመረጃ ፍሰት መሠረተ ልማት እናዘጋጃለን።",
      techHeading: "የስራ አፈፃፀም መዋቅር (Architecture Spec)",
      directoryHeading: "የፍለጋ ኤንጂን መለያዎች ማውጫ",
      specSelectorText: "የስርዓቱን አወቃቀር ለማየት ዲስትሪክቱን ይጫኑ፡",
      metricsHeader: "የማዕከሉ የስራ መረጃዎች"
    },
    om: {
      title: "Wirtuulee Modernize Naannoo",
      subtitle: "Dizayinii Weebsaayitiikees Bulchiinsota Daldalaa Addis Ababaaf",
      intro: "Fariimota addaa fi daldala kee danda'u sirna koodii dhuunfaan qopheessuun dhiibbaa diijitaalaa uumna.",
      techHeading: "Faayidaa fi Koodii Sirnaa",
      directoryHeading: "Index Semantikaa Geessituu",
      specSelectorText: "Koodii sirnaa ilaaluuf ibsa gurguddaa tuqi:",
      metricsHeader: "Hojiirra Oolmaa fi Saffisa"
    }
  };

  const t = localizationText[language];

  return (
    <section id="modernization-hubs" className="relative border-b border-zinc-900/40 bg-gradient-to-b from-[#0d0e12] to-[#090a0c] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-500 flex items-center gap-1.5">
              <Compass className="h-4.5 w-4.5 text-amber-500" />
              ADDIS ABABA LOCAL REGIONS
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              {t.intro}
            </p>
          </div>
          
          <div className="rounded-lg bg-white/[0.02] backdrop-blur-xl p-4 border border-white/[0.08] text-left">
            <span className="font-mono text-[10px] uppercase text-zinc-500 block mb-1">
              {t.specSelectorText}
            </span>
            <div className="flex gap-2">
              {hubSpecs.map((hub) => (
                <button
                  key={hub.id}
                  onClick={() => setSelectedHub(hub.id)}
                  className={`px-3 py-1 text-[11px] font-mono font-medium rounded transition-all ${
                    selectedHub === hub.id
                      ? "bg-amber-500 text-black font-semibold"
                      : "bg-zinc-900 text-zinc-400 hover:text-white"
                  }`}
                >
                  Hub #0{hub.id + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {hubSpecs.map((hub) => {
            const isSelected = selectedHub === hub.id;
            
            // Resolve multilingual values
            const districtText = language === "am" ? hub.amharicDetails.district : language === "om" ? hub.oromooDetails.district : hub.district;
            const focusText = language === "am" ? hub.amharicDetails.focus : language === "om" ? hub.oromooDetails.focus : hub.focus;
            const noteText = language === "am" ? hub.amharicDetails.note : language === "om" ? hub.oromooDetails.note : "";

            return (
              <div
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "bg-white/[0.04] bg-gradient-to-br from-white/[0.08] via-transparent to-amber-500/[0.05] backdrop-blur-2xl border-white/[0.18] border-t-amber-400 shadow-[0_25px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.08),_0_0_40px_rgba(245,158,11,0.1)] -translate-y-1.5"
                    : "bg-white/[0.01] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-2xl border-white/[0.08] border-t-zinc-805 shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)] hover:bg-white/[0.03] hover:border-amber-500/35 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                }`}
              >
                {/* Visual Glow Ambient Backing */}
                <div className={`absolute -inset-y-4 -inset-x-4 bg-amber-500/2 rounded-full blur-3xl opacity-0 transition-opacity duration-500 ${
                  isSelected ? "opacity-100" : "group-hover:opacity-40"
                }`} />

                {/* Visual Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-[2.5px] transition-all duration-300 ${
                  isSelected ? "bg-amber-500 opacity-100" : "bg-zinc-800 opacity-0 group-hover:opacity-50 group-hover:bg-amber-500/40"
                }`} />

                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs font-semibold text-zinc-500">
                    Zone 0{hub.id + 1} — Addis
                  </span>
                  <div className={`rounded-full p-2 ${isSelected ? 'bg-amber-500/10 text-amber-500' : 'bg-zinc-900 text-zinc-400'}`}>
                    {hub.id === 0 ? <Radio className="h-4.5 w-4.5" /> : hub.id === 1 ? <ArrowRightLeft className="h-4.5 w-4.5" /> : <Coins className="h-4.5 w-4.5" />}
                  </div>
                </div>

                <div className="mt-5 space-y-1">
                  <h3 className="text-lg font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                    {districtText}
                  </h3>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-zinc-500">
                    <MapPin className="h-3 w-3 text-red-500/70" />
                    <span>{hub.locality}</span>
                  </div>
                </div>

                <p className="mt-4 text-xs font-medium text-zinc-400 leading-relaxed">
                  {focusText}
                </p>

                {noteText && (
                  <p className="mt-2 text-[11px] italic text-zinc-500 border-t border-zinc-900/40 pt-2">
                    {noteText}
                  </p>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-4 font-mono text-[10px] text-zinc-500">
                  <span>{hub.metrics.sync}</span>
                  <span className="text-zinc-400 font-semibold">{hub.metrics.latency}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Hub Architecture Highlight panel */}
        <div className="rounded-2xl bg-white/[0.02] bg-gradient-to-br from-white/[0.05] via-transparent to-amber-500/[0.03] backdrop-blur-2xl border border-white/[0.1] p-6 lg:p-8 shadow-[0_30px_70px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="font-mono text-[10px] font-bold text-amber-500 uppercase tracking-widest block">
                Selected Node Specifics
              </span>

              <div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  {hubSpecs[selectedHub].district}
                </h4>
                <p className="font-mono text-xs text-zinc-500 mt-1">
                  {hubSpecs[selectedHub].locality}
                </p>
              </div>

              <div className="space-y-2 border-t border-zinc-900/80 pt-4">
                <span className="font-mono text-[10px] text-zinc-500 uppercase block">
                  {t.metricsHeader}
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.02] backdrop-blur-md rounded p-3 border border-white/[0.08]">
                    <span className="font-mono text-[9px] text-zinc-500 block">DB Latency</span>
                    <span className="font-mono text-xs text-emerald-400 font-semibold">{hubSpecs[selectedHub].metrics.latency}</span>
                  </div>
                  <div className="bg-white/[0.02] backdrop-blur-md rounded p-3 border border-white/[0.08]">
                    <span className="font-mono text-[9px] text-zinc-500 block">Reliability</span>
                    <span className="font-mono text-xs text-amber-400 font-semibold">{hubSpecs[selectedHub].metrics.availability}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture List */}
            <div className="lg:col-span-8 bg-white/[0.01] backdrop-blur-md rounded-lg border border-white/[0.06] p-6 space-y-4">
              <h5 className="font-mono text-xs font-semibold text-zinc-400 flex items-center gap-2">
                <Database className="h-4 w-4 text-amber-500" />
                {t.techHeading}
              </h5>

              <ul className="space-y-3 font-mono text-xs text-zinc-400">
                {hubSpecs[selectedHub].architecture.map((item, index) => {
                  const parts = item.split(":");
                  return (
                    <li key={index} className="flex items-start gap-2.5 leading-relaxed bg-zinc-950/45 backdrop-blur-sm p-2.5 rounded border border-zinc-900/40">
                      <ShieldCheck className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        {parts[0] && <strong className="text-zinc-200 font-bold">{parts[0]}:</strong>}
                        {parts[1]}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>

        {/* Semantic Directory Vectors Index Map (Visible search keyword tags for Crawlers) */}
        <div className="mt-14 border-t border-zinc-900/80 pt-10">
          <h4 className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest text-center mb-6">
            {t.directoryHeading}
          </h4>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {searchVectorQueries.map((queryObj, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/60 bg-gradient-to-br from-zinc-900/80 to-amber-950/10 backdrop-blur-xl border border-amber-500/10 rounded-xl p-4.5 text-left hover:bg-zinc-900/85 hover:border-amber-500/40 hover:shadow-[0_16px_40px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(245,158,11,0.15),0_0_20px_rgba(245,158,11,0.04)] hover:-translate-y-1 transition-all duration-300 flex items-start gap-3"
              >
                <span className="font-mono text-xs text-amber-500/80 font-bold mt-0.5">
                  #{idx + 1}
                </span>
                <div>
                  <h5 className="font-mono text-xs font-bold text-white tracking-tight">
                    "{queryObj.query}"
                  </h5>
                  <p className="font-mono text-[10px] text-zinc-500 tracking-wide mt-1">
                    {queryObj.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
