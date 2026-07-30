/** Client-side conversion helpers (safe no-ops when pixels are absent). */

export function trackLeadConversion() {
  if (typeof window === "undefined") return;

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };

  if (typeof w.gtag === "function") {
    w.gtag("event", "generate_lead", {
      event_category: "engagement",
      event_label: "quote_form",
    });
  }
  if (typeof w.fbq === "function") {
    w.fbq("track", "Lead");
  }
}
