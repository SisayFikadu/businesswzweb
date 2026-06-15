import { useRef, useState, useEffect } from "react";
import { Handshake, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Share2 } from "lucide-react";

interface LocalPartnersProps {
  language: "en" | "am" | "om";
}

export default function LocalPartners({ language }: LocalPartnersProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const t = {
    en: {
      badge: "TRUSTED ECOSYSTEM INTEGRATIONS",
      heading: "Ecosystem Partners & Integrated Systems",
      subheading: "We build native bridges with Ethiopia's leading payment, logistical, and commercial infrastructure providers for seamless regional operations.",
      techBadge: "API Active",
      verifyBtn: "Verify API Integration",
      scrolledSuccess: "Ecosystem verification completed - Connection secure.",
      partners: [
        {
          name: "Chapa Payment Gateway",
          type: "FINTECH AGGREGATOR",
          desc: "Direct native API integration for global cards, Telebirr, CBE Birr, and mobile money with instant checkout confirmation systems.",
          metric: "Instant Settlement Ready",
          trustScale: "Verified Gold Integration"
        },
        {
          name: "Addis Chamber of Commerce",
          type: "COMMERCIAL COOPERATION",
          desc: "Allying with corporate directories and micro-data standards so your business lists reliably across national business databases.",
          metric: "W3C Schema Compliant",
          trustScale: "Local Registry Aligned"
        },
        {
          name: "Telebirr Partner Portal",
          type: "MOBILE WALLET LEAD",
          desc: "Optimized serverless USSD triggers, direct pay buttons, and automatic server-to-server webhook feedback loops.",
          metric: "0.4s Webhook Response",
          trustScale: "Carrier-Grade Ready"
        },
        {
          name: "CBE Birr Enterprise",
          type: "BANKING CONNECTOR",
          desc: "Secure merchant banking endpoint integrations enabling real-time wholesale invoice settlement and tracking.",
          metric: "Fully Automated Ledgers",
          trustScale: "Core Bank Aligned"
        },
        {
          name: "Sheger Logistics Network",
          type: "LOGISTICS & DELIVERY API",
          desc: "Automated geocoded delivery rate lookups and live route trackers hooked into Bole, Kazanchis, and Arada hubs.",
          metric: "Real-time Dispatch Ready",
          trustScale: "Geospatial Verified"
        },
        {
          name: "Ethio Telecom Core Services",
          type: "INFRASTRUCTURE PROVIDER",
          desc: "Leveraging SMS gateways for prompt user OTP verifications, verification codes, and client acquisition triggers.",
          metric: "99.9% SMS Delivery Rate",
          trustScale: "Certified Merchant Route"
        }
      ]
    },
    am: {
      badge: "የቴክኖሎጂ እና የክፍያ አጋሮች",
      heading: "አብረናቸው የምንሰራቸው አገር-በቀል ተቋማት",
      subheading: "የእርስዎ ድረ-ገጽ ወይም ሶፍትዌር ከኢትዮጵያ ቀዳሚ የክፍያ፣ የባንክ እና የሎጅስቲክስ መዋቅሮች ጋር በቀጥታ እንዲገናኝ እናደርጋለን።",
      techBadge: "API ዝግጁ",
      verifyBtn: "የውህደት አቅም ፈትሽ",
      scrolledSuccess: "የአጋሮች የቴክኖሎጂ ስራዎች በተሳካ ሁኔታ ተረጋግጠዋል።",
      partners: [
        {
          name: "ቻፓ የክፍያ መተግበሪያ (Chapa)",
          type: "የክፍያ ቴክኖሎጂ አቅራቢ",
          desc: "ቴሌብር፣ ሲቢኢ ብር፣ ሞባይል ባንኪንግ እና ዓለም አቀፍ ካርዶችን በቀጥታ በገጻችሁ ላይ በፍጥነት የሚያስተሳስር አስተማማኝ ስርዓት።",
          metric: "ፈጣን የገንዘብ ዝውውር",
          trustScale: "የተረጋገጠ ወርቃማ ውህደት"
        },
        {
          name: "የአዲስ አበባ ንግድ ምክር ቤት",
          type: "የንግድ አጋርነት",
          desc: "የድርጅትዎ መረጃ በአገር አቀፍ የንግድ ማውጫዎች እና የጉግል ፍለጋ ማህደሮች ላይ በቀዳሚነት እንዲሰፍር የሚያግዝ ስልታዊ ስራ።",
          metric: "የW3C መስፈርት የጠበቀ",
          trustScale: "ከተረጋገጡ ዝርዝሮች ጋር"
        },
        {
          name: "የቴሌብር አጋርነት ሥርዓት",
          type: "የሞባይል ክፍያ",
          desc: "ድርጅትዎ የቴሌብር ክፍያዎችን በቀጥታ በድር ጣቢያዎ ላይ በUSSD እና በዌብሁክ (webhook) ምላሽ ሰጪ እንዲቀበል ማድረግ።",
          metric: "0.4 ሴኮንድ የዌብሁክ ምላሽ",
          trustScale: "ከፍተኛ ደህንነት ያለው"
        },
        {
          name: "የኢትዮጵያ ንግድ ባንክ (CBE Birr)",
          type: "ባንኪንግ ውህደት",
          desc: "የጅምላ ሽያጭ ሂሳቦችን እና የክፍያ ማረጋገጫዎችን በቀጥታ ከዋናው የባንክ ሥርዓት ጋር የሚያጣጣሙ የዲጂታል በሮች ማስገባት።",
          metric: "ሙሉ በሙሉ አውቶማቲክ",
          trustScale: "ከባንክ ደህንነት ጋር የተሳሰረ"
        },
        {
          name: "የሸገር ሎጅስቲክስ አውታረ መረብ",
          type: "የቀጥታ ስርጭት መከታተያ",
          desc: "በቦሌ፣ ካዛንቺስ እና ፒያሳ አካባቢዎች ለሚገኙ ደንበኞችዎ የእቃ ማድረሻ ዋጋዎችን እና አድራሻዎችን በራስ-ሰር የሚያሰላ መተግበሪያ።",
          metric: "ቀጥታ የትዕዛዝ መከታተያ",
          trustScale: "ጂኦ-የተረጋገጠ አድራሻ"
        },
        {
          name: "የኢትዮ ቴሌኮም ዋና አገልግሎቶች",
          type: "የመገናኛ አጋርነት",
          desc: "የኤስኤምኤስ (SMS) መልክቶችን እና የኦቲፒ (OTP) የይለፍ ቃላትን በፍጥነት ወደ ደንበኞችዎ ስልክ ለመላክ የስልክ መስመሮችን ማዋሃድ።",
          metric: "99.9% የመልዕክት መድረስ ፍጥነት",
          trustScale: "ቀዳሚ የደህንነት መስመር"
        }
      ]
    },
    om: {
      badge: "WALTA'IINSA TEKNOOLOJII",
      heading: "Ecosystem Partners & Integrated Systems",
      subheading: "Nuti kaffaltii fi loojistikii gurguddoo biyya keessaa waliin sirna weebsaayitii keessan kallattiin walitti hidhna.",
      techBadge: "API Active",
      verifyBtn: "Ecosystem Mirkaneessi",
      scrolledSuccess: "Mirkaneessi ecosystem milkiin xumurameera.",
      partners: [
        {
          name: "Chapa Payment Gateway",
          type: "FINTECH AGGREGATOR",
          desc: "Kaffaltii Telebirr, CBE Birr fi kaardii biyya alaa kallattiin weebsaayitii keessan irratti maamiltootaaf dhiheessuuf gargaara.",
          metric: "Saffisa Guddaa",
          trustScale: "Integration Verified Gold"
        },
        {
          name: "Addis Chamber of Commerce",
          type: "COMMERCIAL COOPERATION",
          desc: "Odeeffannoo daldala keessanii weebsaayitii gurguddoo fi search engine irratti akka salphaatti akka argamu taasisuu.",
          metric: "Mirkanaa'aa W3C Schema",
          trustScale: "Registry Aligned Local"
        },
        {
          name: "Telebirr Partner Portal",
          type: "MOBILE WALLET LEAD",
          desc: "Kaffaltii Telebirr fi USSD sirna salphaa fi amansiisaa ta'een weebsaayitii irratti fudhachuu dandeessu.",
          metric: "0.4s Webhook Response",
          trustScale: "Carrier-Grade Ready"
        },
        {
          name: "CBE Birr Enterprise",
          type: "BANKING CONNECTOR",
          desc: "Kaffaltii Baanki Daldala Itiyoophiyaa (CBE Birr) kallattiin lakkoofsa herregaa daldala keessaniif galii gochuuf gargaara.",
          metric: "Fully Automated Ledgers",
          trustScale: "Core Bank Aligned"
        },
        {
          name: "Sheger Logistics Network",
          type: "LOGISTICS & DELIVERY API",
          desc: "Odeeffannoo dhiheessii fi ergaa meezotaa naannoo Bole, Kazanchis fi Piassa tti saffisaan herreguu.",
          metric: "Real-time Dispatch Ready",
          trustScale: "Geospatial Verified"
        },
        {
          name: "Ethio Telecom Core Services",
          type: "INFRASTRUCTURE PROVIDER",
          desc: "Ergaa gabaabaa (SMS) fi OTP bilbila maamiltootaa irratti saffisaan erguuf sirna mijeessuu.",
          metric: "99.9% SMS Delivery Rate",
          trustScale: "Certified Merchant Route"
        }
      ]
    }
  };

  const current = t[language];
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Smooth auto scrolling loop with precise accumulation to prevent standard display round-off freezing
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    const scrollSpeed = 0.7; // ultra smooth, slow motion
    let accumulatedScroll = el.scrollLeft;

    // Initialize accumulator to current scroll
    accumulatedScroll = el.scrollLeft;

    const step = () => {
      if (!el) return;

      const maxScroll = el.scrollWidth / 2;

      if (!isHovered) {
        accumulatedScroll += scrollSpeed;
        
        // Endless seamless carousel snapping
        if (accumulatedScroll >= maxScroll) {
          accumulatedScroll -= maxScroll;
        }

        el.scrollLeft = Math.floor(accumulatedScroll);
      } else {
        // Track the user manual dragging / hovering handoff
        accumulatedScroll = el.scrollLeft;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovered, current.partners.length]);

  const handleVerify = () => {
    setSuccessMsg(current.scrolledSuccess);
    setTimeout(() => {
      setSuccessMsg(null);
    }, 4000);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      setIsHovered(true); // pause and allow hand-off
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 1.5 : clientWidth / 1.5;
      
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Automatically resume standard movement after 2 seconds
      setTimeout(() => {
        setIsHovered(false);
      }, 2500);
    }
  };

  // We double the partners list to achieve seamless infinite horizontal rolling.
  const displayPartners = [...current.partners, ...current.partners];

  return (
    <section id="local-partners" className="border-b border-zinc-900/40 bg-gradient-to-b from-[#0d0e12] to-[#0e1013] py-20 lg:py-28 relative overflow-hidden select-none">
      {/* Background ambient accents to match the warm charcoal mood */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/[0.012] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-emerald-500/[0.008] rounded-full blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
              <Handshake className="h-3.5 w-3.5" />
              <span>{current.badge}</span>
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl font-sans">
              {current.heading}
            </h2>
            <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed">
              {current.subheading}
            </p>
          </div>

          {/* Navigation & Action Elements */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              type="button"
              className="rounded-lg border p-2.5 transition-all outline-none bg-zinc-900 border-zinc-800 text-white hover:border-amber-500/45 hover:text-amber-400 cursor-pointer"
              aria-label="Previous Slide"
              id="partner-prev-btn"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              type="button"
              className="rounded-lg border p-2.5 transition-all outline-none bg-zinc-900 border-zinc-800 text-white hover:border-amber-500/45 hover:text-amber-400 cursor-pointer"
              aria-label="Next Slide"
              id="partner-next-btn"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
          className="flex overflow-x-auto gap-6 pb-8 scrollbar-none touch-pan-x"
          style={{ scrollbarWidth: "none" }}
        >
          {displayPartners.map((partner, idx) => {
            const uniqueKey = `${partner.name}-${idx}`;
            return (
              <div
                key={uniqueKey}
                className="flex-shrink-0 w-[290px] md:w-[350px] rounded-xl border border-zinc-850 bg-zinc-900/40 bg-gradient-to-b from-zinc-900/80 to-zinc-950/60 backdrop-blur-lg p-6 hover:border-amber-500/25 hover:shadow-[0_22px_44px_rgba(0,0,0,0.92)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Partner Header */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[9px] font-black text-zinc-500 uppercase tracking-widest block py-0.5 px-2 bg-zinc-950 rounded border border-zinc-900 animate-pulse">
                      {partner.type}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-mono text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                      {current.techBadge}
                    </span>
                  </div>

                  <h3 className="text-md font-black text-white tracking-tight group-hover:text-amber-400 transition-colors duration-300 font-sans">
                    {partner.name}
                  </h3>
                  
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                    {partner.desc}
                  </p>
                </div>

                {/* Technical indicators at the bottom of the card */}
                <div className="mt-6 pt-4 border-t border-zinc-900/60 space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-500 font-sans">Active SLA:</span>
                    <span className="font-mono font-bold text-zinc-300">{partner.metric}</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-500 font-sans">Security Standard:</span>
                    <span className="font-mono font-bold text-amber-500/90 flex items-center gap-1">
                      <ShieldCheck className="h-3 w-3 text-emerald-500" />
                      {partner.trustScale}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Verification Simulator */}
        <div className="mt-8 rounded-xl border border-zinc-900 bg-zinc-955/40 backdrop-blur-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-white font-bold font-sans">Certified Integration Quality Core</p>
              <p className="text-[10px] text-zinc-500 font-sans">All payments and data structures comply with regional banking codes and W3C data crawlers.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            {successMsg && (
              <span className="text-[10px] font-mono text-emerald-400 animate-fade-in">
                {successMsg}
              </span>
            )}
            <button
              onClick={handleVerify}
              type="button"
              className="rounded border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500 hover:text-black hover:border-amber-500 transition-all text-amber-500 font-mono text-[10px] px-4 py-2 uppercase tracking-wider font-bold"
              id="verify-ecosystem-btn"
            >
              {current.verifyBtn}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
