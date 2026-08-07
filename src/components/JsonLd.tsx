import { faqs, serviceAreas, site } from "@/lib/site";

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
      addressLocality: site.city,
      addressRegion: site.stateAbbr,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Greenwood, Indiana (approximate city center)
      latitude: 39.6137,
      longitude: -86.1067,
    },
    areaServed: serviceAreas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: {
        "@type": "State",
        name: site.state,
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
