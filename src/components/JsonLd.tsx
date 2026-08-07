import { faqs, serviceAreas, site } from "@/lib/site";

/**
 * Machine-readable business location for search engines.
 * Keeps NAP/geo in Indiana without changing customer-facing copy.
 */
export function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.geo.city,
      addressRegion: site.geo.stateAbbr,
      addressCountry: site.geo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: {
        "@type": "State",
        name: site.geo.state,
      },
    })),
    openingHoursSpecification: site.hoursDetailed.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.time.includes("Emergency") ? undefined : "07:00",
      closes: h.time.includes("Emergency") ? undefined : "18:00",
      description: h.time,
    })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
