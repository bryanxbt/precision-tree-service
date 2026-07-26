import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTABanner } from "@/components/CTABanner";
import { QuoteForm } from "@/components/QuoteForm";
import { services, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.seo,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 4);

  return (
    <>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-gold-dark">
            <Link href="/services" className="hover:underline">
              Services
            </Link>{" "}
            / {service.title}
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-bold tracking-tight text-stone-900">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">{service.seo}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-bold text-stone-900 transition hover:bg-brand-gold-light"
            >
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-brand-gold"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-stone-900">
              What&apos;s included
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.details.map((d) => (
                <li
                  key={d}
                  className="flex gap-2.5 rounded-xl bg-white px-4 py-3 text-sm text-stone-700 shadow-sm border border-stone-200"
                >
                  <span className="font-bold text-brand-gold-dark">✓</span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="font-semibold text-stone-900">
                Serving {site.serviceArea}
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                {service.short} Free estimates available for most residential
                jobs.
              </p>
            </div>
            {others.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-stone-900">
                  Related services
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}/`}
                        className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm text-stone-700 hover:border-brand-gold hover:text-brand-gold-dark"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <QuoteForm />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
