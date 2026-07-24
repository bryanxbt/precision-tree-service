import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Tree removal, trimming, stump grinding, emergency storm work, and more from ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-800">
            Services
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            Professional tree care from estimate to cleanup
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Every job includes a clear scope, safe execution, and a clean
            finish. Not sure what you need?{" "}
            <Link
              href="/contact"
              className="font-semibold text-emerald-800 hover:underline"
            >
              Request a free consultation
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-8">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="grid gap-6 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:items-start"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  0{i + 1}
                </span>
                <h2 className="mt-2 text-2xl font-bold text-stone-900">
                  {service.title}
                </h2>
                <p className="mt-3 text-stone-600">{service.short}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-full bg-emerald-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Get a quote
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-2.5 rounded-xl bg-stone-50 px-4 py-3 text-sm text-stone-700"
                  >
                    <span className="font-bold text-emerald-700">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need help choosing a service?"
        subtitle="Describe the tree or the problem — we’ll recommend the safest, most cost-effective option."
      />
    </>
  );
}
