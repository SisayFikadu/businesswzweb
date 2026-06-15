import { useEffect } from "react";

/**
 * Technical SEO Local Schema Matrix
 * Targets: Addis Ababa sub-cities and commercial districts in English, Amharic, and Afaan Oromoo.
 */
export default function LocalSchemaJsonLd() {
  useEffect(() => {
    // Generate multi-lingual JSON-LD Schema
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ProfessionalService",
          "@id": "https://businesswzweb.vercel.app/#service",
          "name": "BusinessWZWeb",
          "alternateName": [
            "Weebsaayitii nama hojjetu",
            "ዌብሳይት ድቭሎፕመንት",
            "Ethiopia Elite Web Architecture"
          ],
          "description": "Enterprise cloud web design, Telebirr integration, and high-performance React architectures for commercial districts across Addis Ababa.",
          "url": "https://businesswzweb.vercel.app",
          "telephone": "+251922326819",
          "priceRange": "$$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bole Road, Around Bulbula & Goro Commercial Terminal",
            "addressLocality": "Addis Ababa",
            "addressRegion": "Sheger",
            "addressCountry": "ET"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "9.0100",
            "longitude": "38.7600"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "08:30",
            "closes": "18:00"
          },
          "sameAs": [
            "https://github.com/businesswzweb"
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://businesswzweb.vercel.app/#website",
          "url": "https://businesswzweb.vercel.app",
          "name": "BusinessWZWeb",
          "description": "Localized cloud database architecture & web development in Ethiopia. Specialized in sub-city modernization and financial POS reconciliation.",
          "language": ["en", "am", "om"],
          "publisher": {
            "@id": "https://businesswzweb.vercel.app/#service"
          }
        }
      ]
    };

    // Inject JSON-LD script tag safely into the document body
    const scriptId = "businesswzweb-seo-jsonld";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.id = scriptId;
      scriptElement.type = "application/ld+json";
      document.head.appendChild(scriptElement);
    }
    scriptElement.text = JSON.stringify(schema);

    return () => {
      // Cleanup script element on unmount
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return null; // Side-effect only component for SEO integration
}
