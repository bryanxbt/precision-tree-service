import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/CTABanner";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tree Services",
  description: `Tree removal, trimming, stump grinding, emergency storm work, residential & commercial care from ${site.name}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">
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
              className="font-semibold text-blue-800 hover:underline"
            >
              Request a free consultation
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <article
              key={service.slug}
              id={service.slug}
              className="flex flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                0{i + 1}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-stone-900">
                <Link
                  href={`/services/${service.slug}/`}
                  className="hover:text-blue-800"
                >
                  {service.title}
                </Link>
              </h2>
              <p className="mt-3 text-stone-600">{service.short}</p>
              <ul className="mt-5 grid flex-1 gap-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-2 text-sm text-stone-700"
                  >
                    <span className="font-bold text-blue-700">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/services/${service.slug}/`}
                  className="text-sm font-semibold text-blue-800 hover:underline"
                >
                  Learn more →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Get a quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTABanner
        title="Need help choosing a service?"
        subtitle="Describe the tree or the problem — we will recommend the safest, most cost-effective option."
      />
    </>
  );
}
