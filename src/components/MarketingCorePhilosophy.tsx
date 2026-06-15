import { useState } from "react";
import { Lightbulb, Target, TrendingUp, Sparkles, CheckCircle } from "lucide-react";

interface MarketingCorePhilosophyProps {
  language: "en" | "am" | "om";
}

export default function MarketingCorePhilosophy({ language }: MarketingCorePhilosophyProps) {
  const [copied, setCopied] = useState(false);

  const t = {
    en: {
      sectionBadge: "PHILOSOPHY & VALUE DESIGN",
      heading: "Design Powered by Sales & Marketing Psychology",
      subheading: "A beautiful interface is draft work unless it is architected to convert anonymous traffic into brand champions. We bridge complex aesthetics with SaaS unit economics.",
      
      // The Core Hero Quote the user requested
      mainQuote: "“It's nice to have a designer that understands marketing and sales — especially in the SaaS world.”",
      quoteAuthor: "Client Feedback on Enterprise SaaS Alignment",
      
      card1Title: "Conversion-First Funnels",
      card1Desc: "Every layout, button placement, and visual rhythm is engineered directly around the micro-commitments that guide users to sign up, purchase, or make a call.",
      
      card2Title: "SaaS Product Led Growth",
      card2Desc: "We design onboarding experiences and clean vector illustrations that make complex software instantly understandable, boosting user activation and reducing subscription churn.",
      
      card3Title: "High-Volume Lead Ingestion",
      card3Desc: "Form optimization, dynamic feedback steps, and local payment integration modules (Telebirr/CBE) built directly into your landing pages for maximum sales volume.",
      
      interactiveLabel: "Why is marketing-aligned design rare?",
      interactiveA: "Most agencies build either pretty templates that don't convert, or ugly engineering tools that scare customers away. We build elegant interfaces that act as 24/7 digital sales forces."
    },
    am: {
      sectionBadge: "የእሴት እና የግብይት ፍልስፍና",
      heading: "በሽያጭ እና ግብይት ሳይኮሎጂ የተጎላበተ ዲዛይን",
      subheading: "አንድ ድረ-ገጽ የቱንም ያህል ውብ ቢሆን፣ መደበኛ ተጠቃሚዎችን ወደ ታማኝ ደንበኝነት እንዲቀይር ካልተደረገ በስተቀር ትርጉም አይኖረውም። ዲዛይንን ከሳይንሳዊ ግብይት ጋር እናጣምራለን።",
      
      mainQuote: "“በተለይ በSaaS (ሶፍትዌር እንደ አገልግሎት) ዓለም ውስጥ ግብይትን (marketing) እና ሽያጭን (sales) የሚረዳ ዲዛይነር ማግኘት ትልቅ ዕድል ነው::”",
      quoteAuthor: "በSaaS እና ግብይት ውህደት ላይ የተሰጠ የደንበኛ ምስክርነት",
      
      card1Title: "ለሽያጭ የተበጁ ገጾች",
      card1Desc: "እያንዳንዱ አቀማመጥ፣ የአዝራሮች መገኛ እና ዲዛይን ደንበኞች በቀላሉ ምርትዎን እንዲገዙ ወይም በቀጥታ እንዲደውሉ የተነደፈ ነው።",
      
      card2Title: "ምርት-መር እድገት (SaaS PLG)",
      card2Desc: "ደንበኞች ሶፍትዌርዎን በቀላሉ ተረድተው በፍጥነት እንዲጠቀሙበት የሚያግዙ ዲዛይኖችን በመፍጠር የደንበኞችን ምዝገባ እና ታማኝነት እናሳድጋለን።",
      
      card3Title: "ቀጣይነት ያለው የደንበኛ ፍሰት",
      card3Desc: "የደንበኛ መረጃ መሰብሰቢያ ቅጾችን እና የአገር ውስጥ ክፍያዎችን (ቴሌብር/ሲቢኢ) በቀጥታ በገጻችሁ ላይ በማካተት የሽያጭ መጠንዎን እናሳድጋለን።",
      
      interactiveLabel: "በግብይት የታገዘ ድንቅ ዲዛይን ለምን አስፈለገ?",
      interactiveA: "አብዛኛዎቹ ዲዛይነሮች ደንበኛ የማይስቡ ዌብሳይቶችን ይሰራሉ፣ ወይም ደግሞ ደንበኛ የሚያባርሩ ውስብስብ ገጾችን ያዘጋጃሉ። እኛ ግን ለ24 ሰዓት የሚሰራ ንቁ የሽያጭ ሰራዊት እንገነባለን።"
    },
    om: {
      sectionBadge: "FILOSOFII & DIZAAYINII VALUE",
      heading: "Dizaayinii Karoora Gurgurtaa fi Marketing Qabu",
      subheading: "Fayyadamni weebsaayitii miidhagaan dhangala'aa maamiltoota dhuufan gara bittootaatti yoo hin jijjiirre dandeettii dhabe qaba. Nuti dizaayinii daldala ammayyaaf hojjennu qabna.",
      
      mainQuote: "“Keessattuu addunyaa SaaS keessatti, dizaayinii dandeettii daldalaa fi gurgurtaa (marketing & sales) qabu qabaachuun faayidaa guddaa qaba.”",
      quoteAuthor: "Yaada Maamiltoota SaaS Enterprise irraa dhufe",
      
      card1Title: "Kalaqa Gurgurtaa Duraa",
      card1Desc: "Toorri weebsaayitii fi iddoon button hundi akka maamilli salphaatti beellama qabatu ykn gurgurtaa xumuruuf tooramee hojjetama.",
      
      card2Title: "SaaS Product-Led Growth (PLG)",
      card2Desc: "Daldala haaraa namoonni akka salphaatti hubatan gochuuf fakkii fi dizaayinii mijeessuun dandeettii sirna gurgurtaa fi subscription daballa.",
      
      card3Title: "Ingeestion Maamiltoota Ol'aanaa",
      card3Desc: "Foomii fi kaffaltii biyya keessaa (Telebirr/CBE) sirna weebsaayitii keessatti mijeessuun maamiltoota lakkoofsa hedduu fiduuf gargaara.",
      
      interactiveLabel: "Dizaayiniin gurgurtaa waliin tokko ta'e maaliif barbaachise?",
      interactiveA: "Dhaabbileen baay'een dizaayinii miidhagaa maamila hin finne hojjetu, ykn sirna rakkisaa maamila fageessu uumu. Nuti garuu dizaayinii daldala keessaaf humna ta'u uumna."
    }
  };

  const current = t[language];

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(current.mainQuote);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="marketing-sales-philosophy" className="border-b border-zinc-900/40 bg-gradient-to-b from-[#090a0c] to-[#0d0e12] py-20 lg:py-28 relative overflow-hidden select-none">
      {/* Dynamic background lights that shift based on hover state */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.015] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-amber-500/[0.01] rounded-full blur-[90px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-500">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            <span>{current.sectionBadge}</span>
          </div>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl font-sans">
            {current.heading}
          </h2>
          <p className="mt-4 text-sm text-zinc-400 font-sans leading-relaxed">
            {current.subheading}
          </p>
        </div>

        {/* High-Impact Hero Testimonial/Philosophy Block */}
        <div className="mb-16 rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 md:p-12 relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.96),inset_0_1px_1px_rgba(245,158,11,0.12)]">
          {/* Accent decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/[0.03] rounded-bl-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="font-mono text-[9px] text-amber-500 font-bold tracking-widest uppercase block">
              THE HYBRID POSITIONING MAXIM
            </span>
            
            {/* Elegant Display Quote */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug font-sans text-balance select-text">
              {current.mainQuote}
            </h3>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-zinc-900 max-w-md mx-auto">
              <div>
                <span className="text-xs font-bold text-zinc-300 block">{current.quoteAuthor}</span>
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">[ HIGH-CONVERSION STANDARD ]</span>
              </div>
              <button
                onClick={handleCopyQuote}
                type="button"
                className="rounded border border-zinc-800 bg-black/60 hover:bg-zinc-900 text-zinc-400 hover:text-white font-mono text-[9px] px-3 py-1.5 transition-all uppercase"
              >
                {copied ? "[ COPIED QUOTE ]" : "[ COPY QUOTE ]"}
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Bento Triad Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Conversion-First */}
          <div className="rounded-xl border border-zinc-850 bg-zinc-905/30 hover:bg-zinc-900/40 p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.92)] transition-all duration-300 group">
            <div className="space-y-4">
              <div className="rounded-lg bg-zinc-900/80 p-3 w-11 h-11 flex items-center justify-center text-amber-500 border border-zinc-800 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Target className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-all duration-300">
                {current.card1Title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {current.card1Desc}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-2 text-[9px] font-mono text-zinc-500">
              <CheckCircle className="h-3 w-3 text-amber-500" />
              <span>Conversion Funnel Optimization</span>
            </div>
          </div>

          {/* Card 2: SaaS Product Led Growth */}
          <div className="rounded-xl border border-zinc-850 bg-zinc-905/30 hover:bg-zinc-900/40 p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.92)] transition-all duration-300 group">
            <div className="space-y-4">
              <div className="rounded-lg bg-zinc-900/80 p-3 w-11 h-11 flex items-center justify-center text-amber-500 border border-zinc-800 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-all duration-300">
                {current.card2Title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {current.card2Desc}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-2 text-[9px] font-mono text-zinc-500">
              <CheckCircle className="h-3 w-3 text-amber-500" />
              <span>SaaS UI Activation Engineering</span>
            </div>
          </div>

          {/* Card 3: Lead Ingestion */}
          <div className="rounded-xl border border-zinc-850 bg-zinc-905/30 hover:bg-zinc-900/40 p-6 md:p-8 flex flex-col justify-between hover:border-amber-500/30 hover:shadow-[0_20px_45px_rgba(0,0,0,0.92)] transition-all duration-300 group">
            <div className="space-y-4">
              <div className="rounded-lg bg-zinc-900/80 p-3 w-11 h-11 flex items-center justify-center text-amber-500 border border-zinc-800 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-400 transition-all duration-300">
                {current.card3Title}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                {current.card3Desc}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-zinc-900/60 flex items-center gap-2 text-[9px] font-mono text-zinc-500">
              <CheckCircle className="h-3 w-3 text-amber-500" />
              <span>Interactive Revenue Engines</span>
            </div>
          </div>

        </div>

        {/* Horizontal Micro Explainer Card */}
        <div className="mt-8 rounded-xl border border-zinc-900 bg-black/60 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest shrink-0">
            [ {current.interactiveLabel} ]
          </span>
          <p className="text-zinc-400 font-sans leading-relaxed text-right sm:text-left">
            {current.interactiveA}
          </p>
        </div>

      </div>
    </section>
  );
}
