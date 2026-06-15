import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

interface ClientHubProps {
  language: "en" | "am" | "om";
}

export default function ClientHub({ language }: ClientHubProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessType: "",
    needs: "new-website",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const text = {
    en: {
      aboutTitle: "Who We Are & What We Do",
      aboutSub: "Transitioning Addis Ababa Merchants from Local Limitations to Global Visibility",
      aboutDesc1: "We are a dedicated team of local software builders and designers who believe that every business in Ethiopia deserves a fully functional, high-speed website. We don't just write code; we design reliable business engines.",
      aboutDesc2: "Whether you run a wholesale shop in Merkato, an organic retail food kiosk in Bole Bulbula, or a logistics fleet bridging the Djibouti corridor, we build the exact custom platform you need to stop losing sales, track inventory, and receive payments seamlessly.",
      corePillarsTitle: "Every Website We Build Includes:",
      pillar1Name: "Fast Mobile Experience",
      pillar1Desc: "Optimized for local 3G/4G network speeds to ensure your clients open pages in less than a second.",
      pillar2Name: "Digital Payments Built-In",
      pillar2Desc: "Instant Telebirr, CBE Birr, and mobile banking QR codes directly linked to invoice generators.",
      pillar3Name: "Google Search Optimization",
      pillar3Desc: "Proper local listings and SEO templates so your clients find you when search terms are typed.",
      pillar4Name: "Super Easy Management",
      pillar4Desc: "A clean phone-compatible back office. You don't need to be good with computers to update prices or stock.",
      
      contactTitle: "Get a Free Website Consultation",
      contactSub: "Tell us about your business, and our team will call you back with a custom plan and budget estimate.",
      placeholderName: "Your Full Name (e.g., Almaz Abebe)",
      placeholderPhone: "Phone Number (e.g., +251 9...)",
      placeholderType: "Business Type (e.g., Cafe, Boutique, Importer)",
      needLabel: "What do you need?",
      needOpt1: "I need a brand new business web site",
      needOpt2: "I want to improve my existing website",
      needOpt3: "I need automated cash reconciliation or stock tracking",
      placeholderMsg: "What are your goals or questions? (Write in Amharic, Oromiffa or English)",
      submitButton: "Send Consultation Request",
      successTitle: "Thank you! We will call you soon.",
      successSub: "Our local web consultant will call your phone number within 4 business hours to discuss your plan.",
      
      officeHeader: "Come Visit Our Office",
      officeDetails: "Bole Road, Near Bulbula Terminal & Goro Axis, Addis Ababa, Ethiopia",
      phoneLabel: "Call Our Direct Line",
      phoneVal: "+251 922 32 68 19",
      emailLabel: "Business Inquiry Email",
      emailVal: "nafyad@businesswzweb.com"
    },
    am: {
      aboutTitle: "ስለ እኛ እና የምንሰራቸው ስራዎች",
      aboutSub: "የአገር ውስጥ ነጋዴዎችን ከመገደብ ወደ ሰፊ የገበያ አማራጭ ማሸጋገር",
      aboutDesc1: "እኛ በኢትዮጵያ ውስጥ የሚገኝ ማንኛውም የንግድ ድርጅት ፈጣን እና ደህንነቱ የተጠበቀ ዌብሳይት ሊኖረው ይገባል ብለን የምናምን የቴክኖሎጂ አበልጻጊዎች ነን። እኛ ዌብሳይት ብቻ አንሰራም፤ የንግድዎን እድገት የሚያረጋግጥ ስርዓት እንዘረጋለን።",
      aboutDesc2: "በመርካቶ የጅምላ መሸጫ ሱቅ ቢኖርዎት፣ በቦሌ ቡልቡላ የችርቻሮ መደብር፣ ወይም በሀገር አቋራጭ የተሰማራ የትራንስፖርት ድርጅት፤ ሽያጭ እንዳያመልጥዎ፣ እቃዎችን ለመቆጣጠር እና ክፍያዎችን በቀላሉ ለመቀበል የሚያስችል የተበጀ ዌብሳይት እንሰራለን።",
      corePillarsTitle: "እያንዳንዱ የምንሰራው ዌብሳይት የሚከተሉትን ያካትታል፡",
      pillar1Name: "በስልክ ላይ ፈጣን መሆን",
      pillar1Desc: "ድረ-ገጾች በኢትዮጵያ የኔትወርክ ፍጥነት በሰከንዶች ውስጥ እንዲከፈቱ ተደርገው የተሰሩ ናቸው።",
      pillar2Name: "የክፍያ ስርዓት ውህደት",
      pillar2Desc: "የቴሌብር (Telebirr)፣ የሲቢኢ ብር (CBE Birr) እና የሞባይል ባንኪንግ ክፍያዎች በቀጥታ የተገናኙ ናቸው።",
      pillar3Name: "ጎግል ፍለጋ ማመቻቸት (SEO)",
      pillar3Desc: "ደንበኞችዎ በጎግል ላይ ሲፈልጉ ድርጅትዎን ወዲያውኑ እንዲያገኙ የሚያስችል የስራ አቀማመጥ።",
      pillar4Name: "በጣም ቀላል የአጠቃቀም ሰሌዳ",
      pillar4Desc: "ከስልክዎ ሆነው በቀላሉ ዋጋዎችን እና ምርቶችን ለመለወጥ የሚረዱ ቀላል ዘዴዎች።",
      
      contactTitle: "የነፃ ዌብሳይት ማማከር ያግኙ",
      contactSub: "ስለ ንግድዎ ዝርዝር መረጃ ይንገሩን፣ በስልክ ደውለን ተስማሚ የስራ እቅድ እና ዋጋ እናቀርብልዎታለን።",
      placeholderName: "ሙሉ ስምዎ (ለምሳሌ፡ አልማዝ አበበ)",
      placeholderPhone: "የስልክ ቁጥርዎ (ለምሳሌ፡ +251 9...)",
      placeholderType: "የንግዱ አይነት (ለምሳሌ፡ ካፌ፣ ቡቲክ፣ አስመጪ)",
      needLabel: "ምን አይነት ድጋፍ ይፈልጋሉ?",
      needOpt1: "አዲስ የንግድ ማስተዋወቂያ ዌብሳይት እፈልጋለሁ",
      needOpt2: "የነበረኝን ዌብሳይት ማሻሻል እፈልጋለሁ",
      needOpt3: "የሽያጭና የክምችት መቆጣጠሪያ ስርዓት እፈልጋለሁ",
      placeholderMsg: "ስለ ንግድዎ ማወቅ የምንፈልገውን ዝርዝር ነገር እዚህ ይጻፉልን...",
      submitButton: "ምክክር ለመጀመር ላክ",
      successTitle: "እናመሰግናለን! በቅርቡ እንደውልልዎታለን።",
      successSub: "የዌብሳይት ባለሙያችን ጥያቄዎን ተመልክቶ በ 4 የሥራ ሰዓታት ውስጥ በስልክዎ ያነጋግርዎታል።",
      
      officeHeader: "ቢሮአችን መጥተው ይጎብኙን",
      officeDetails: "ቦሌ መንገድ፣ ከቡልቡላ ተርሚናል እና ከጎሮ አውራ ጎዳና አጠገብ、አዲስ አበባ、ኢትዮጵያ",
      phoneLabel: "በቀጥታ ይደውሉልን",
      phoneVal: "+251 922 32 68 19",
      emailLabel: "የኢሜይል አድራሻችን",
      emailVal: "nafyad@businesswzweb.com"
    },
    om: {
      aboutTitle: "Eenyu Nu'i fi Hojii Keenya",
      aboutSub: "Daldaltoota Finfinnee Daangaa Naannoo irraa gara Bal'ina Diijitaalaatti Ceesisuu",
      aboutDesc1: "Nuti namoota weebsaayitiin daldala hundaaf Finfinnee keessatti jabaa fi saffisaa ta'ee qophaayuuf hojjennu dha. Hojii daldala keetii kan saffisiisu engine uumna.",
      aboutDesc2: "Merkatoo keessatti daldala gurguddaa qabaadhu, Bolee Bulbulaa keessatti kuusaa meeshalee qabaadhu, ykn daldala geejjibaa Djibouti qabaadhu; meeshaa hordofuuf, fi kaffaltii Telebirr simachuuf koodii sirnaa ni toopenna.",
      corePillarsTitle: "Weebsaayitiin Nuti Hojjennu Hundi Kan Qabu:",
      pillar1Name: "Saffisa Bilbilaa Ol'aanaa",
      pillar1Desc: "Saffisa networkii biyya keessaaf akka danda'uuf daqiiqaa tokko gadiitti saayitiin banama.",
      pillar2Name: "Kaffaltii Banama Qabu",
      pillar2Desc: "Qunnamtii Telebirr fi CBE Birr sirna herrega bilbilaa waliin battalatti hidhameera.",
      pillar3Name: "Google Search (SEO)",
      pillar3Desc: "Maamiltoonni kee search yoo godhan daldala kee dura akka argatan sirna ammayyeessuu.",
      pillar4Name: "To'annoo Bilbilaa Salphaa",
      pillar4Desc: "Kompiutara gurguddaa malee bilbila keetiin gatii fi kuusaa meeshaa sirreessuuf dandeessa.",
      
      contactTitle: "Bilisaan Nu Waliin Mari'adhu",
      contactSub: "Waa'ee daldala keETII nuuf ibsi, bilbilaan siif deebisnee karoora daldala keef ta'u siif qopheessina.",
      placeholderName: "Maqaa Keessan Guutuu (Fkn. Almaz Abebe)",
      placeholderPhone: "Lakkofsa Bilbilaa (Fkn. +251 9...)",
      placeholderType: "Gosa Daldalaa (Fkn. Buutii, Kafee, Meeshaa Alaa)",
      needLabel: "Gosa gargaarsaa kam barbaaddu?",
      needOpt1: "Weebsaayitii haaraa daldalaa naaf barbaachisa",
      needOpt2: "Weebsaayitii koo duraanii fooyyessuun barbaada",
      needOpt3: "Sirna kaffaltii fi kuusaa meeshaa walitti hidhuun fedha",
      placeholderMsg: "Gorsa dabalataa yoo qabaattan asitti barreessaa...",
      submitButton: "Odeeffannoo Ergi",
      successTitle: "Galatoomaa! Gara dhiyootti siif bilbilla.",
      successSub: "Injiinarri keenya karoora kee qoratee sa'aatii 4 keessatti sii bilbila.",
      
      officeHeader: "Biroo Keenya Kottaa",
      officeDetails: "Bole Road, Bulbula Terminal cinaa, Addis Ababa, Ethiopia",
      phoneLabel: "Lakkofsa Bilbilaa",
      phoneVal: "+251 922 32 68 19",
      emailLabel: "I-meelii",
      emailVal: "nafyad@businesswzweb.com"
    }
  };

  const t = text[language];

  return (
    <section id="about-contact" className="relative border-b border-zinc-900/80 bg-gradient-to-b from-[#090a0c] via-[#0d0e12] to-[#090a0c] py-20 lg:py-28 overflow-hidden">
      {/* Absolute Ambient Soft aura background lights */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-amber-500/[0.01] rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-amber-500/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* About & Mission Deck */}
        <div className="grid gap-12 lg:grid-cols-12 mb-20 items-stretch">
          
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-amber-500">
                WHAT WE BUILD FOR YOU
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {t.aboutTitle}
              </h2>
              <p className="mt-2 font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                {t.aboutSub}
              </p>
              
              <div className="mt-6 space-y-4 text-sm text-zinc-400 leading-relaxed font-sans">
                <p>{t.aboutDesc1}</p>
                <p>{t.aboutDesc2}</p>
              </div>
            </div>

            {/* Address Cards & Easy Direct Information */}
            <div className="grid gap-4 sm:grid-cols-2 pt-6 border-t border-zinc-900/80">
              <div className="bg-zinc-900/25 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95)] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-2 text-amber-500 mb-2.5">
                  <MapPin className="h-4.5 w-4.5 animate-pulse" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                    {t.officeHeader}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  {t.officeDetails}
                </p>
              </div>

              <div className="bg-zinc-900/25 backdrop-blur-md p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.95)] flex flex-col justify-between hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    <Phone className="h-4.5 w-4.5" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-zinc-300">
                      {t.phoneLabel}
                    </span>
                  </div>
                  <a href={`tel:${t.phoneVal}`} className="text-md font-bold text-white tracking-tight hover:text-amber-500 font-mono transition">
                    {t.phoneVal}
                  </a>
                </div>
                <div className="mt-3">
                  <span className="font-mono text-[10px] text-zinc-500 block">{t.emailLabel}</span>
                  <a href={`mailto:${t.emailVal}`} className="text-xs text-zinc-400 hover:text-white font-sans transition">
                    {t.emailVal}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List & High Quality Details */}
          <div className="lg:col-span-6 bg-zinc-900/65 bg-gradient-to-br from-zinc-900/85 via-zinc-900/65 to-amber-950/20 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(245,158,11,0.15)] hover:border-amber-500/50 hover:shadow-[0_45px_80px_rgba(0,0,0,0.98),_0_0_20px_rgba(245,158,11,0.02)] transition-all duration-300">
            <div>
              <h3 className="text-md font-bold text-white mb-6 border-b border-zinc-900/80 pb-3 font-sans">
                {t.corePillarsTitle}
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="rounded bg-zinc-900/60 p-2 text-amber-500 shrink-0 border border-zinc-800">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.pillar1Name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{t.pillar1Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded bg-zinc-900/60 p-2 text-amber-500 shrink-0 border border-zinc-800">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.pillar2Name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{t.pillar2Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded bg-zinc-900/60 p-2 text-amber-500 shrink-0 border border-zinc-800">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.pillar3Name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{t.pillar3Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="rounded bg-zinc-900/60 p-2 text-amber-500 shrink-0 border border-zinc-800">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.pillar4Name}</h4>
                    <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{t.pillar4Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-zinc-900/80 pt-5 text-center sm:text-left text-[11px] text-zinc-500 font-mono">
              ★ NO WORDPRESS. ONLY FAST CLOUD REACT CODE FOR MAX SECURED SITES ★
            </div>
          </div>

        </div>

        {/* Contact Submission Node */}
        <div className="max-w-4xl mx-auto rounded-2xl card-elevated-3d p-6 lg:p-10">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black text-white tracking-tight">
              {t.contactTitle}
            </h3>
            <p className="text-xs text-zinc-400 mt-2">
              {t.contactSub}
            </p>
          </div>

          {submitted ? (
            <div className="rounded border border-emerald-500/20 bg-emerald-500/5 p-8 text-center space-y-3">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h4 className="text-md font-bold text-white">{t.successTitle}</h4>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">{t.successSub}</p>
              
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-[10px] text-zinc-500 underline uppercase tracking-wider hover:text-white"
                >
                  [ Send another request ]
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-3">
                
                {/* Name */}
                <div className="space-y-1">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.placeholderName}
                    className="w-full rounded border border-zinc-750 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500/80 focus:border-amber-500/60 focus:bg-zinc-900 transition-all focus:outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t.placeholderPhone}
                    className="w-full rounded border border-zinc-750 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500/80 focus:border-amber-500/60 focus:bg-zinc-900 transition-all focus:outline-none"
                  />
                </div>

                {/* Biz type */}
                <div className="space-y-1">
                  <input
                    type="text"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    placeholder={t.placeholderType}
                    className="w-full rounded border border-zinc-750 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500/80 focus:border-amber-500/60 focus:bg-zinc-900 transition-all focus:outline-none"
                  />
                </div>

              </div>

              {/* Requirement Preference dropdown */}
              <div className="space-y-1">
                <label className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest block mb-1">
                  {t.needLabel}
                </label>
                <select
                  value={formData.needs}
                  onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                  className="w-full rounded border border-zinc-750 bg-zinc-950 px-3 py-2 text-xs text-zinc-300 focus:border-amber-500/60 focus:bg-zinc-900 transition-all focus:outline-none"
                >
                  <option value="new-website">{t.needOpt1}</option>
                  <option value="optimize">{t.needOpt2}</option>
                  <option value="inventory-pos">{t.needOpt3}</option>
                </select>
              </div>

              {/* Message Details */}
              <div className="space-y-1">
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.placeholderMsg}
                  className="w-full rounded border border-zinc-750 bg-zinc-950 px-3 py-2 text-xs text-white placeholder-zinc-500/80 focus:border-amber-500/60 focus:bg-zinc-900 transition-all focus:outline-none"
                />
              </div>

              {/* Submit trigger button */}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded bg-white hover:bg-amber-500 text-black font-bold text-xs px-6 py-3 transition-all duration-150"
                >
                  <span>{t.submitButton}</span>
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
