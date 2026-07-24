import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { serviceAreas, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Tree service areas served by ${site.name}: ${serviceAreas.map((a) => a.name).join(", ")}.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
            Service areas
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Tree service near you
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            We proudly serve {site.serviceArea}. Update these towns to match
            where you actually work — local pages help neighbors find you on
            Google.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}/`}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-stone-900">{area.name}</h2>
              <p className="mt-2 text-sm text-stone-600">{area.blurb}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-emerald-800">
                Tree service in {area.name} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CTABanner
        title="Not sure if we cover your area?"
        subtitle="Send a quick message with your city — if we can help, we will say so."
      />
    </>
  );
}
