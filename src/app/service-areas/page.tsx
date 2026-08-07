import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas | Central Indiana",
  description: `Tree service in Greenwood, Indiana and nearby cities: ${serviceAreas.map((a) => a.name).join(", ")}. Based in ${site.headquarters}.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            Service areas · Indiana
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Tree service in Central Indiana
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            {site.name} is based in <strong>Greenwood, Indiana</strong>, with a
            partner in Kokomo — so we take jobs along that corridor and nearby
            towns. If you are close but not listed, still reach out.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}/`}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-brand-gold hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-bold text-stone-900">
                  {area.name}, Indiana
                </h2>
                {"homeBase" in area && area.homeBase ? (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-brand-gold-dark">
                    Home base
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-stone-600">{area.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand-gold-dark">
                Tree service in {area.name}, IN →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure if we cover your area?"
        subtitle="Send a quick message with your Indiana city — if we can help, we will say so."
      />
    </>
  );
}
