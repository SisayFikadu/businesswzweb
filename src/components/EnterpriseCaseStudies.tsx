import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Check, AlertCircle, ArrowRight } from "lucide-react";

interface EnterpriseCaseStudiesProps {
  language: "en" | "am" | "om";
}

function AnimatedCounter({ target, suffix = "", duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span className="font-mono text-3xl sm:text-4xl font-black text-amber-500 tracking-tight glow-text-gold">{count}{suffix}</span>;
}

export default function EnterpriseCaseStudies({ language }: EnterpriseCaseStudiesProps) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const copy = {
    en: {
      title: "Our Handcrafted Web Projects",
      subtitle: "Beautiful Websites Built for Real Addis Ababa Businesses",
      intro: "Browse through actual websites we have built. We replace slow, outdated templates with super-fast, modern client pages that help you get noticed, receive customer calls, and double your sales.",
      lblBefore: "The Challenge (Before)",
      lblAfter: "What We Designed & Delivered",
      statusLive: "ACTIVE & SUCCESSFUL",
      viewProject: "Start Your Project Like This",
      featuresTitle: "Project Benefits:",
      statProjCount: "Previous Projects Delivered",
      statSpeedIndex: "Google Pagespeed Average",
      statConversion: "Average Lead Generation Jump"
    },
    am: {
      title: "ለደንበኞቻችን የሰራናቸው ምርጥ ዌብሳይቶች",
      subtitle: "በአዲስ አበባ ለሚገኙ የንግድ ድርጅቶች የተሰሩ ፈጣን ድረ-ገጾች",
      intro: "ለአገር ውስጥ የተለያዩ ቢዝነሶች የሰራናቸውን ውብ ዌብሳይቶች ይመልከቱ። ደንበኞች በቀላሉ እንዲያገኟቸው፣ እንዲደውሉላቸው እና ሽያጭ እንዲጨምሩ አድርገን አዘጋጅተናቸዋል።",
      lblBefore: "የንግዱ ችግር (ከዚህ በፊት)",
      lblAfter: "እኛ የሰራንላቸው ዘመናዊ መፍትሄ (ከዌብሳይቱ በኋላ)",
      statusLive: "በስራ ላይ ያለ (ስኬታማ)",
      viewProject: "የእርስዎንም ቢዝነስ በዚህ መልኩ ያስጀምሩ",
      featuresTitle: "የተመዘገቡ ውጤቶች፡",
      statProjCount: "የተጠናቀቁ ዘመናዊ ድረ-ገጾች",
      statSpeedIndex: "አማካይ የሞባይል ስፒድ ኢንዴክስ",
      statConversion: "አማካይ የሽያጭ ደንበኞች ዕድገት"
    },
    om: {
      title: "Weebsaaytoota Miidhagoo Nuti Hojjenne",
      subtitle: "Daldaltoota Finfinneef Kan Hojjenne",
      intro: "Weebsaaytoota daldaltoota biyya keessaaf qopheessine asitti ilaali. Gurgurtaa kee dachaan dabaluuf saayitiin kun si gargaara.",
      lblBefore: "Rakkoo jiru (Dura)",
      lblAfter: "Furmaata Nuti Hojjenne (Amma)",
      statusLive: "AMMA NI HOJJETA",
      viewProject: "Daldala keetif weebsaayitii haaraa hojjedhu",
      featuresTitle: "Milkiilee Hojii Keenyaa:",
      statProjCount: "Pirojektoota Milkiin Hojjetan",
      statSpeedIndex: "Saffisa Geessituu Google",
      statConversion: "Dabala Gurgurtaa fi Maamiltoota"
    }
  };

  const t = copy[language];

  // Specific high fidelity human project descriptions with real client appeal
  const projects = [
    {
      id: "safari",
      title: "Safari Ethiopia Tour & Travel",
      type: "Tourism & Travel Agency",
      before: language === "am" ? "የውጭ ሀገር ጎብኚዎች የጉብኝት ማስታወሻዎችን ለማየት እና ለመመዝገብ የሚጠቀሙበት ዌብሳይት በጣም የቆየ እና በስልክ የማይሰራ ስለነበር ደንበኞችን ያጡ ነበር።" : language === "om" ? "Imaltonni biyya alaa filannoowwan doonii fi tursiimoo argachuuf weebsaayitiin jiru baay'ee harkisaa waan tureef maamiltoonni badeera." : "Foreign travelers couldn't load tour itineraries on mobile phones due to heavy legacy frameworks, resulting in booking drops from international clients.",
      after: language === "am" ? "በአንድ ሰከንድ ውስጥ የሚከፈት፣ አስደናቂ ምስሎችና ፈጣን ጥሪ ማድረግያ ያለው ዌብሳይት ሰራን። ደንበኞች ከየትኛውም ሀገር ሆነው የጉብኝት ቀጠሮ በጥቂት ጠቅታዎች መያዝ ይችላሉ።" : language === "om" ? "Saffisa bilbilaa ol'aanaa qabuun weebsaayitii tursiimoo ammanaa ijaarree jira. Imaltonni addunyaa hundi salphaatti beellama qabatu." : "A stunning, super-lightweight platform with beautiful interactive trip itineraries and responsive custom inquiry forms, fully optimized for fast Google indexing.",
      metricVal1: "99/100",
      metricLbl1: language === "am" ? "የሞባይል ስፒድ" : "MOBILE PAGESPEED SCORE",
      metricVal2: "+140%",
      metricLbl2: language === "am" ? "የደንበኞች ጥሪ ዕድገት" : "DIRECT BOOKING LEADS",
      metricVal3: "11 Days",
      metricLbl3: language === "am" ? "የተሰራበት ቀናት" : "DELIVERY TIME",
      color: "from-amber-500 to-yellow-500"
    },
    {
      id: "mekiya",
      title: "Mekiya Fresh Organics",
      type: "Fresh Produce Wholesale",
      before: language === "am" ? "የእቃዎች ሽያጭ እና ካታሎግ በስልክ እና በቴሌግራም ብቻ ይሰራጭ ስለነበር ደንበኞች በቅርቡ የመጡትን ምርቶች ጥራትና ዋጋ ለማወቅ ይቸገሩ ነበር።" : language === "om" ? "Kuusaan meeshaa fi gurgurtaan waraqaa irra qofa waan tureef herregni dhuunfaa baay'ee badaa ture." : "Organic farm produce distributor communicating price matrices manually over Telegram, resulting in client ordering delays and stock waste.",
      after: language === "am" ? "በደመና (Cloud) ላይ የሚሰራ የዕለት ተዕለት አዳዲስ ምርቶችን በምስል የሚያሳይ ካታሎግ ዌብሳይት ከክፍያ ጋር ተጣጥሞ ተሰራ። ደንበኞች በቀላሉ ማዘዝ ይችላሉ።" : language === "om" ? "Weebsaayitii cloud herrega sekondii 60n hojjetu uumne. Kutaan hundi bilbilaan kuusaa meeshaa ni hordofa." : "A high-speed real-time cloud inventory catalog showing daily fresh collections. Includes instant CBE and Telebirr QR scan instructions.",
      metricVal1: "Instant",
      metricLbl1: language === "am" ? "የዋጋ ለውጥ ማሳወቂያ" : "CATALOG LOAD TIME",
      metricVal2: "+85%",
      metricLbl2: language === "am" ? "አዳዲስ ደንበኞች" : "REVENUE THROUGHPUT",
      metricVal3: "Zero Error",
      metricLbl3: language === "am" ? "የሰህተት መጠን" : "DISCREPANCY RATIO",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: "bole-suites",
      title: "Bole Guest Suites",
      type: "Boutique Hospitality & Lodging",
      before: language === "am" ? "ደንበኞች ክፍሎችን በኢሜይል ወይንም በስልክ ብቻ ያስይዙ ነበር፤ ይህም ክፍሎች ሳይያዙ ባዶ እንዲሆኑ እና የስርዓት መደራረብ እንዲከሰት ያደርግ ነበር።" : language === "om" ? "Odeeffannoo kireessa keessummootaa harka-waraqaan hordofuun rakkoolee hedduu uumaa ture." : "Addis luxury rental suites relying fully on manual booking charts, leading to scheduling discrepancies and double-booking errors during peak seasons.",
      after: language === "am" ? "ፎቶዎችን በጥራት የሚያሳይ፣ ደንበኞች በቀጥታ ካሉበት ቦታ ሆነው ክፍል እንዲመርጡ እና ያለምንም መስተጓጎል ቦታ መያዝ የሚችሉበት ዘመናዊ የሆቴል ዌብሳይት።" : language === "om" ? "Keessummoota addunyaa hundaaf weebsaayitii beellama qabachuu agarsiisan fooyyeessine." : "An immersive booking engine showcasing high-fidelity suit layouts, direct contact modules, and automated availability calendars.",
      metricVal1: "Direct Reserv.",
      metricLbl1: language === "am" ? "የቦታ ማስያዣ መንገድ" : "RESERVATION ENGINE",
      metricVal2: "0% Fees",
      metricLbl2: language === "am" ? "የመካከለኛ ኮሚሽን" : "BOOKING COMMISSIONS",
      metricVal3: "+45%",
      metricLbl3: language === "am" ? "የክፍል ተያዥነት ዕድገት" : "OCCUPANCY RATE REACH",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "gullele-crafts",
      title: "Gullele Leather Crafts",
      type: "Premium Handbag & Shoes Exporter",
      before: language === "am" ? "የሀገር ውስጥ ጥራት ያላቸውን የቆዳ ቦርሳዎችና ጫማዎች ጥበብ ለአለም አቀፍ ገዢዎች ለማሳየት ደረጃውን የጠበቀና በስልክ የሚከፈት የዲዛይን ፖርትፎሊዮ አልነበራቸውም።" : language === "om" ? "Meeshaalee gogaa fi barruu miidhagaa qaban gabaa addunyaaf agarsiisuun rakkisaa dure." : "Local leather manufacturers with premium genuine products struggled to attract B2B export partnerships due to lack of an elegant international web catalog.",
      after: language === "am" ? "በአንድ ሰከንድ ውስጥ የሚከፈት፣ አስደናቂ ምስሎችና ፈጣን ጥሪ ማድረግያ ያለው ዌብሳይት ሰራን። ደንበኞች ከየትኛውም ሀገር ሆነው የጉብኝት ቀጠሮ በጥቂት ጠቅታዎች መያዝ ይችላሉ።" : language === "om" ? "Daldala meeshaalee gogaa Addunyaa hundaaf mul'isuuf weebsaayti ammayyaa ijaarree hojiitti hiine." : "An ultra-premium minimal design showcase with beautiful high-resolution fabric texture arrays and direct export inquiry channels.",
      metricVal1: "99.9% Up",
      metricLbl1: language === "am" ? "የድረገፅ ታማኝነት" : "SERVER AVAILABILITY",
      metricVal2: "+110%",
      metricLbl2: language === "am" ? "አዳዲስ ውጪ ገዢዎች" : "B2B EXPORT LEADS",
      metricVal3: "10 Days",
      metricLbl3: language === "am" ? "የተገነባበት ፍጥነት" : "LAUNCH DELIVERY TIME",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const currentProject = projects[activeIdx];

  return (
    <section id="case-studies" className="relative border-b border-zinc-900/80 bg-gradient-to-b from-[#090a0c] via-[#0d0e12] to-[#090a0c] py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-805 to-transparent animate-pulse" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-amber-500 bg-zinc-900 px-3 py-1 rounded inline-block border border-zinc-850">
              SUCCESS STORIES // SELECTED CLIENT DESIGNS
            </span>
            <h2 id="projects-showcase" className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-3 text-sm text-zinc-400 max-w-xl font-sans leading-relaxed">
              {t.intro}
            </p>
          </div>

          {/* Carousel Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition"
              title="Previous Success Story"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="font-mono text-xs text-zinc-400 px-3 py-1 bg-zinc-950 border border-zinc-900 rounded">
              <span>0{activeIdx + 1}</span> / <span>0{projects.length}</span>
            </div>

            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition"
              title="Next Success Story"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Animated Numerical Metrics Counters Section */}
        <div id="project-numerical-stats" className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 border-y border-zinc-900/60 py-8 bg-zinc-950/20 rounded-xl px-6">
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter target={23} suffix="+" />
            </div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              {t.statProjCount}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 border-t sm:border-t-0 sm:border-x border-zinc-900/60 pt-4 sm:pt-0 sm:px-8">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter target={100} suffix="%" />
            </div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              {t.statSpeedIndex}
            </span>
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1 border-t sm:border-t-0 pt-4 sm:pt-0 sm:pl-4">
            <div className="flex items-baseline gap-1">
              <AnimatedCounter target={140} suffix="%" />
            </div>
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              {t.statConversion}
            </span>
          </div>
        </div>

        {/* Carousel Slide Area */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Main Visual Side (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between rounded-2xl border border-white/[0.1] bg-white/[0.02] bg-gradient-to-br from-white/[0.05] via-transparent to-amber-500/[0.03] backdrop-blur-2xl p-6 lg:p-8 relative overflow-hidden min-h-[440px] shadow-[0_30px_75px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-500/50 hover:shadow-[0_45px_85px_rgba(0,0,0,0.7)] transition-all duration-300">
            
            {/* Ambient decorative grid aura */}
            <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-amber-500/3 blur-[80px] pointer-events-none" />

            {/* Top Row */}
            <div className="flex items-center justify-between border-b border-zinc-900/80 pb-5 mb-6 relative z-10">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-amber-500 block">
                  Project Category // {currentProject.type}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight mt-1">
                  {currentProject.title}
                </h3>
              </div>

              {/* Live badge */}
              <div className="flex items-center gap-1.5 rounded border border-emerald-900/40 bg-emerald-950/30 px-3 py-1 font-mono text-[9.5px] font-bold uppercase text-emerald-450">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.statusLive}</span>
              </div>
            </div>

            {/* Before vs After */}
            <div className="space-y-6 flex-grow flex flex-col justify-center relative z-10">
              
              {/* BEFORE */}
              <div className="rounded border border-red-950/20 bg-red-955/5 p-4 relative backdrop-blur-sm">
                <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-900/10 text-red-500">
                  <AlertCircle className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-mono text-[10px] font-bold text-red-400 uppercase tracking-widest block mb-1">
                  {t.lblBefore}
                </h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {currentProject.before}
                </p>
              </div>

              {/* AFTER */}
              <div className="rounded border border-emerald-950/20 bg-emerald-955/5 p-4 relative backdrop-blur-sm">
                <div className="absolute top-2.5 right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-900/10 text-emerald-500">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <h4 className="font-mono text-[10px] font-bold text-emerald-450 uppercase tracking-widest block mb-1">
                  {t.lblAfter}
                </h4>
                <p className="text-xs text-zinc-200 font-sans leading-relaxed font-normal">
                  {currentProject.after}
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-8 pt-5 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">
                ★ Fully Handcrafted Responsive Performance Site ★
              </span>
              
              <a
                href="#about-contact"
                className="inline-flex items-center gap-2 rounded bg-white hover:bg-amber-500 text-black font-semibold text-xs px-4 py-2 transition-all duration-155 [transform:translateZ(0)] hover:scale-[1.02]"
              >
                <span>{t.viewProject}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

          </div>

          {/* Metric Indicators Side (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-4">
            
            <div className="rounded-2xl border border-white/[0.1] bg-white/[0.02] bg-gradient-to-br from-white/[0.05] via-transparent to-amber-500/[0.03] backdrop-blur-2xl p-6 flex flex-col justify-between h-full space-y-4 shadow-[0_30px_75px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-amber-500/50 hover:shadow-[0_45px_85px_rgba(0,0,0,0.7)] transition-all duration-300 border-t-white/[0.12]">
              <span className="font-mono text-[10px] text-zinc-400 uppercase font-bold tracking-widest block border-b border-zinc-900 pb-2">
                {t.featuresTitle}
              </span>
              
              <div className="space-y-4 py-2">
                <div className="bg-black/35 backdrop-blur-sm p-4 rounded border border-zinc-900/80">
                  <span className="font-mono text-[9px] text-zinc-500 block uppercase">{currentProject.metricLbl1}</span>
                  <span className="text-lg font-bold text-emerald-400 mt-1 block">{currentProject.metricVal1}</span>
                </div>
                
                <div className="bg-black/35 backdrop-blur-sm p-4 rounded border border-zinc-900/80">
                  <span className="font-mono text-[9px] text-zinc-400 block uppercase">{currentProject.metricLbl2}</span>
                  <span className="text-lg font-bold text-amber-500 mt-1 block">{currentProject.metricVal2}</span>
                </div>
                
                <div className="bg-black/35 backdrop-blur-sm p-4 rounded border border-zinc-900/80">
                  <span className="font-mono text-[9px] text-zinc-400 block uppercase">{currentProject.metricLbl3}</span>
                  <span className="text-lg font-bold text-blue-450 mt-1 block">{currentProject.metricVal3}</span>
                </div>
              </div>

              {/* Slider Quick Tabs Menu */}
              <div className="flex items-center justify-center gap-1.5 pt-3">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all ${activeIdx === idx ? "w-6 bg-amber-500" : "w-2 bg-zinc-800 hover:bg-zinc-650"}`}
                    title={`Slide to success story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
